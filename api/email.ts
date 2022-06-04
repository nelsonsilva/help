import type { VercelRequest, VercelResponse } from '@vercel/node';
import mail, { MailDataRequired } from "@sendgrid/mail";

mail.setApiKey(process.env.SENDGRID_API_KEY)

export default async function(req: VercelRequest, res: VercelResponse) {
    const { body: { requester, category, emergency, description } } = req;

    const subject = `${emergency ? 'URGENT: ' : ''}${requester} wants ${category}`
    const msg: MailDataRequired = {
        to: process.env.EMAIL_TO,
        from: process.env.EMAIL_FROM,
        subject,
        text: description,
    }

    try {
        await mail.send(msg)
        res.status(200).send(`<p>Thanks for your request ${requester}.</p><p>Nelson will come back to you asap.</p>`)
    } catch (error) {
        console.log('ERROR', error)
        res.status(400).send('<p>Oops. Something went wrong :(</p>')
    }
}
