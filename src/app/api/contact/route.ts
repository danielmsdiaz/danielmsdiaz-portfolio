// import { NextResponse } from "next/server";
// import nodemailer from "nodemailer";

// // Função para enviar email (usando Nodemailer)
// async function sendEmail({ name, email, message }: { name: string; email: string; message: string }) {
//   const transporter = nodemailer.createTransport({
//     service: "Gmail", // ou outro provedor
//     auth: {
//       user: "seu-email@gmail.com",
//       pass: "sua-senha", // Use variáveis de ambiente
//     },
//   });

//   await transporter.sendMail({
//     from: email,
//     to: "seu-email@gmail.com",
//     subject: `Mensagem de ${name}`,
//     text: message,
//   });
// }

// // POST: Envia uma mensagem
// export async function POST(request: Request) {
//   try {
//     const body = await request.json();
//     const { name, email, message } = body;

//     if (!name || !email || !message) {
//       return NextResponse.json({ error: "All fields are required!" }, { status: 400 });
//     }

//     // Enviar email
//     await sendEmail({ name, email, message });

//     return NextResponse.json({ success: true, message: "Message sent successfully!" });
//   } catch (error) {
//     return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
//   }
// }
