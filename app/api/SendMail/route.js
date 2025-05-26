import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();
    const { username, email, message } = body;

    if (!username || !email || !message) {
      return new Response(
        JSON.stringify({ message: "All fields are required" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL, // Your Gmail address
        pass: process.env.EMAIL_PASSWORD, // Your app password
      },
    });

    const mailOptions = {
      from: email,
      to: `${process.env.EMAIL}, ${process.env.SECOND_EMAIL}`,
      subject: `New message from ${username}`,
      text: message,
    };

    await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({ message: "Email sent successfully!" }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error sending email:", error.message);

    return new Response(
      JSON.stringify({ message: "Failed to send email" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}