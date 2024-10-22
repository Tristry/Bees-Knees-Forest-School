import { Stripe } from "stripe";
import { STRIPE_SECRET_KEY } from "$env/static/private";
import { CLUBS } from "../../../data/clubs";

const stripe = new Stripe(STRIPE_SECRET_KEY);
export const actions = {
  default: async ({ request }: any) => {
    const formData = await request.formData();
    const school = formData.get("school");
    const day = formData.get("day");
    const club = formData.get("club");
    const children = formData.get("children");
    const success_url = formData.get("successUrl");
    const cancel_url = formData.get("errorUrl");
    console.log(CLUBS.find((c) => c.title == school.trim()));
    try {
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items: [
          {
            price_data: {
              currency: "gbp",
              product_data: {
                name: club,
              },
              unit_amount:
                CLUBS.find((c) => c.title == club.trim())!.schools.find(
                  (s) => s.name === school
                )?.price! * 100,
              tax_behavior: "exclusive",
            },
            quantity: children,
          },
        ],
        automatic_tax: {
          enabled: true,
        },
        mode: "payment",
        payment_intent_data: {
          metadata: {
            club,
            school,
            day,
            children,
          },
        },
        success_url,
        cancel_url,
      });
      return session;
    } catch (err) {
      console.log(err);
    }
  },
};
