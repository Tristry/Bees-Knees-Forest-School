import { MAILCHIMP_API_KEY } from '$env/static/private'


export const actions = {
    default: async ({ request }: any) => {
        try {
            console.log("HERE")
            const formData = await request.formData()
            let url = `https://us21.list-manage.com/contact-form/post?u=b332e3f7e0a8487342bdb97bf&form_id=617d131f5880390b8b64872ccc6ca01f`
            const contactData = {
                fields: {
                    1501: formData.get('email'),
                    1504: formData.get('fullName'),
                    1505: formData.get('phone'),
                    1503: formData.get('message')
                },
                subscribe: false
            }
            const res = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(contactData)
            })
            const data = await res.json()
            return { success: true }
        } catch (err) {
            return { success: false }
        }
    }
}
