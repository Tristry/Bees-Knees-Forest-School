import { MAILCHIMP_API_KEY } from '$env/static/private'


export const actions = {
  default: async ({ request }: any) => {
    try {
      const formData = await request.formData()
      const email = formData.get('email')
      let dc = 'us21'
      let url = `https://${dc}.api.mailchimp.com/3.0/lists/7c80a1c4a8`
      let headers = new Headers()
      const res = await fetch(url, {
        method: 'POST',
        headers: {
          'Authorization': `apikey ${MAILCHIMP_API_KEY}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          "members": [
            {
              "email_address": email,
              "status": "subscribed",
            }
          ],
        })
      })
      const data = await res.json()
      console.log(data)
      return {}
    } catch (err) {
      console.log("ERROR OCCDURED")
    }

  }
}