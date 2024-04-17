import { EmailTemplate } from '../../../components/EmailTemplate';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESE);

export async function POST() {
    try {
        const data = await resend.emails.send({
            from: 'Palak <palakkumar1998@gmail.com>',
            to: ['falakkr.4783@gmail.com'],
            subject: 'Hello world',
            react: <>
            <p>Email Body</p>
            </>
        });

        return Response.json(data);
    } catch (error) {
        return Response.json({ error });
    }
}
