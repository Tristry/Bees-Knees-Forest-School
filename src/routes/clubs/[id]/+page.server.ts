    import { Stripe } from 'stripe'
    import { STRIPE_SECRET_KEY } from '$env/static/private'

    const stripe = new Stripe(STRIPE_SECRET_KEY)
    export const actions = {
        default: async ({ request }: any) => {
            const formData = await request.formData()
            const school = formData.get('school')
            const day = formData.get('day')
            const children = formData.get('children')
            const success_url = formData.get('successUrl')
            const cancel_url = formData.get('errorUrl')
            try {
                const session = await stripe.checkout.sessions.create({
                    payment_method_types: ['card'],
                    line_items: [
                        {
                            price_data: {
                                currency: 'gbp',
                                product_data: {
                                    name: school,
                                },
                                unit_amount: 289 * 100,
                                tax_behavior: 'exclusive'
                            },
                            quantity: children,
                        }
                    ],
                    automatic_tax: {
                        enabled: true
                    },
                    mode: 'payment',
                    payment_intent_data: {
                        metadata: {
                            school,
                            day,
                            children,
                        }
                    },
                    success_url,
                    cancel_url
                })
                return session
            } catch (err) {
                console.log(err)
            }
        }
    }
