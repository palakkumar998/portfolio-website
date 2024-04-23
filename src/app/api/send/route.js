import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
export async function POST(request) {
    try {
        const { email, subject, message } = await request.json();
        const transporter = nodemailer.createTransport({
            host: 'smtp.ethereal.email',
            port: 587,
            auth: {
                user: 'fredrick.lockman1@ethereal.email',
                pass: 'wHyh753peu4SnQEPvn'
            }
        });
        const mailOption = {
            from: 'fredrick.lockman1@ethereal.email',
            to: ` ${email}`,
            subject: "send email",
            html: `<h3> hello falak</h3>
            <li> title: ${subject}</li>
            <li> message: ${message}</li>`
        }
        await transporter.sendMail(mailOption)

        return NextResponse.json({ message: "Email sent succesfully" }, { status: 200 })

    } catch (error) {
        return NextResponse.json({ message: "failed to send email 😒" }, { status: 500 })
    }
}