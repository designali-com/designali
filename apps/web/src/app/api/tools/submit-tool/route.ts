import { NextResponse } from "next/server";
import { getResend } from "@/src/lib/resend";
import SubmitToolEmail from "@/emails/submit-tool-email";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { title, email, description, link, madeBy, category } = body;

    // Validate fields
    if (!title || !email || !description || !link || !madeBy || !category) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 }
      );
    }

    const resend = getResend();
    
    // Environment variables se sender aur admin email lena
    const senderEmail = process.env.EMAIL_SENDER_ADDRESS || "hello@designali.com";
    const adminEmail = process.env.ADMIN_EMAIL || "visual.imam@gmail.com"; // Yaha apna personal/admin email daal sakte hain

    // 1. Send confirmation email to the user who submitted the tool
    const userEmailPromise = resend.emails.send({
      from: `Designali <${senderEmail}>`,
      to: [email], // User ka email jo form me bhara gaya hai
      subject: `We received your tool: ${title}`,
      react: SubmitToolEmail({
        title,
        email,
        description,
        link,
        madeBy,
        category,
        isAdminCopy: false,
      }),
    });

    // 2. Send notification email to yourself (Admin)
    const adminEmailPromise = resend.emails.send({
      from: `Designali Submissions <${senderEmail}>`,
      to: [adminEmail], // Aapka admin email
      subject: `🚀 New Tool Submission: ${title}`,
      react: SubmitToolEmail({
        title,
        email,
        description,
        link,
        madeBy,
        category,
        isAdminCopy: true,
      }),
    });

    await Promise.all([userEmailPromise, adminEmailPromise]);

    return NextResponse.json(
      { success: true, message: "Tool submitted and emails sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error submitting tool:", error);
    return NextResponse.json(
      { error: "Internal Server Error. Failed to send email." },
      { status: 500 }
    );
  }
}