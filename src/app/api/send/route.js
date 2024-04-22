import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
export async function POST(request) {
    try {
        const { subject, message } = await request.json();
        const transporter = nodemailer.createTransport({
            service: 'zoho',
            host: 'smtp.zoho.in',
            port: 465,
            secure: true,
            auth: {
                user: 'palakkumar1998@gmail.com',
                pass: process.env.NEXT_PUBLIC_PASSWORD
            }
        })
        const mailOption = {
            from: 'palakkumar1998@gmail.com',
            to: 'falak.kr4783@gmail.com',
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