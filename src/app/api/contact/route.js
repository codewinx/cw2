import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, phone, company, service, message } = body;

    // 💡 Note: Your environment variables are not accessible here.
    // Ensure this file is placed in a route handler, typically at /app/api/contact/route.js

    if (!name || !email || !phone || !message) {
      return new Response(
        JSON.stringify({ success: false, error: "Please fill all required fields." }),
        { status: 400 }
      );
    }

    // --- NodeMailer Configuration ---
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // Your Gmail (adityaraut4289@gmail.com)
        pass: process.env.EMAIL_PASS, // Your App Password (yuvr rzcr ndil ypne)
      },
    });

    const mailOptions = {
      from: `"${name}" <${process.env.EMAIL_USER}>`, // Use your EMAIL_USER for 'from' to avoid spam filters
      to: process.env.EMAIL_TO || "yourcompanyemail@gmail.com",
      replyTo: email, // Set the user's email as the reply-to address
      subject: `New Inquiry from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 20px;">
            
            <!-- Email Container -->
            <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);">

                <!-- Header (Bharat Solar Infra Branding) -->
                <div style="background-color: #ff9800; color: #ffffff; padding: 20px; text-align: center;">
                    <h1 style="margin: 0; font-size: 24px;">Bharat Solar Infra</h1>
                    <p style="margin: 5px 0 0; font-size: 14px;">New Project Inquiry</p>
                </div>

                <!-- Body Content -->
                <div style="padding: 25px;">
                    <h3 style="color: #333333; margin-top: 0; border-bottom: 2px solid #eeeeee; padding-bottom: 10px;">New Contact Form Submission Details</h3>
                    
                    <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
                        <tr><td style="padding: 8px 0; font-weight: bold; width: 30%;">Name:</td><td style="padding: 8px 0;">${name}</td></tr>
                        <tr><td style="padding: 8px 0; font-weight: bold;">Email:</td><td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #ff9800;">${email}</a></td></tr>
                        <tr><td style="padding: 8px 0; font-weight: bold;">Phone:</td><td style="padding: 8px 0;">${phone}</td></tr>
                        <tr><td style="padding: 8px 0; font-weight: bold;">Company:</td><td style="padding: 8px 0;">${company || "N/A"}</td></tr>
                        <tr><td style="padding: 8px 0; font-weight: bold;">Service:</td><td style="padding: 8px 0;">${service || "N/A"}</td></tr>
                    </table>

                    <h3 style="color: #333333; margin-top: 15px; border-bottom: 2px solid #eeeeee; padding-bottom: 10px;">Message:</h3>
                    <p style="white-space: pre-wrap; border: 1px solid #ff980033; padding: 15px; background: #fff5e6; border-radius: 4px; line-height: 1.6;">${message}</p>
                </div>
                
                <!-- Footer -->
                <div style="background-color: #e0e0e0; color: #666666; padding: 15px; text-align: center; font-size: 12px;">
                    <p style="margin: 0;">This email was automatically generated from the contact form on your website.</p>
                    <p style="margin: 5px 0 0;">Bharat Solar Infra | Latur, Maharashtra</p>
                </div>
            </div>
            
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({ success: true, message: "Email sent successfully!" }),
      { status: 200 }
    );

  } catch (error) {
    // 🛑 CRITICAL DEBUGGING LINE: Log the full error to your terminal
    console.error("NodeMailer Error (Check App Password/Auth):", error);
    
    return new Response(
      JSON.stringify({ success: false, error: "Failed to send message due to server error (check console)." }),
      { status: 500 }
    );
  }
}
