import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { name, email, message } = data;

    // Basic validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: "All fields are required" }),
        { status: 400 }
      );
    }
    if (!emailRegex.test(email)) {
      return new Response(JSON.stringify({ error: "Invalid email address" }), {
        status: 400,
      });
    }

    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = process.env.SMTP_PORT;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const sender = process.env.SMTP_SENDER;

    if (!smtpHost || !smtpPort || !smtpUser || !smtpPass || !sender) {
      return new Response(
        JSON.stringify({
          error:
            "SMTP configuration is incomplete. Please set all environment variables.",
        }),
        { status: 500 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: Number(smtpPort),
      secure: Number(smtpPort) === 465, // true for 465, false for other ports
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    // Email HTML template
    const htmlContent = `
      <div style="font-family: Arial, sans-serif; line-height:1.6; color:#333; padding:20px; background-color:#f4f4f4;">
        <div style="max-width:600px; margin:0 auto; background:#fff; border-radius:8px; overflow:hidden; box-shadow:0 0 10px rgba(0,0,0,0.1);">
          <div style="background: linear-gradient(90deg, #667eea 0%, #764ba2 100%); padding:20px; color:#fff; text-align:center;">
            <h2 style="margin:0; font-size:24px;">New Contact Message</h2>
          </div>
          <div style="padding:20px;">
            <p style="margin-bottom:10px;"><strong>Name:</strong> ${name}</p>
            <p style="margin-bottom:10px;"><strong>Email:</strong> <a href="mailto:${email}" style="color:#667eea; text-decoration:none;">${email}</a></p>
            <p style="margin-bottom:10px;"><strong>Message:</strong></p>
            <p style="padding:10px; background:#f9f9f9; border-left:4px solid #667eea; border-radius:4px;">${message}</p>
            <hr style="margin:20px 0; border:none; border-top:1px solid #eee;" />
            <p style="font-size:12px; color:#888; text-align:center;">This message was sent from your website contact form.</p>
          </div>
        </div>
      </div>
    `;

    // Send email
    await transporter.sendMail({
      from: sender,
      to: sender, // you can also send to multiple recipients here
      subject: `New message from ${name}`,
      html: htmlContent,
    });

    return new Response(
      JSON.stringify({ message: "Email sent successfully" }),
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({ error: "Something went wrong. Try again later." }),
      { status: 500 }
    );
  }
}
