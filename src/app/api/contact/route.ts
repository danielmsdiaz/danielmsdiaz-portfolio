import { Resend } from 'resend';
import { EmailTemplate } from '@/components/EmailTemplate';

const resend = new Resend(process.env.NEXT_PUBLIC_SENDER_API_KEY);

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const {name, email, message} = body;
        
        const { data, error } = await resend.emails.send({
            from: `onboarding@resend.dev`,
            to: ['dmachadosdiaz@gmail.com'],
            subject: 'Olá, vim através do seu portifólio! :)',
            react: EmailTemplate({ firstName: name, message, email }),
        });

        if (error) {
            console.log(error);
            return Response.json({ error }, { status: 500 });
        }

        return Response.json(data);
    } catch (error) {
        return Response.json({ error }, { status: 500 });
    }
}
