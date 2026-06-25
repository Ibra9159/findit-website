export async function onRequestPost(context) {
  try {
    const { request, env } = context;

    const { email } = await request.json();
    const emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

    if (!email || !emailRegex.test(email)) {
      return Response.json(
        { error: "Valid email is required" },
        { status: 400 }
      );
    }

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Ibrahim from Findit.jo <hello@finditjo.com>",
        to: email,
        subject: "Welcome to Findit.jo",
        html: `
<div style="margin:0;padding:0;background:#f6f8fb;font-family:Arial,sans-serif;color:#111827;">
  <div style="max-width:600px;margin:0 auto;padding:28px 18px;">
    <div style="background:#ffffff;border:1px solid #e5e7eb;border-radius:18px;padding:30px;">
      <div style="font-size:24px;font-weight:800;color:#07111F;margin-bottom:22px;">
        Findit<span style="color:#007BFF;">.jo</span>
      </div>

      <h2 style="margin:0 0 14px;color:#07111F;font-size:24px;">
        Welcome to Findit.jo 👋
      </h2>

      <p style="font-size:15px;line-height:1.7;color:#374151;">
        Thank you for joining the Findit.jo waitlist.
      </p>

      <p style="font-size:15px;line-height:1.7;color:#374151;">
        I’m Ibrahim Mansour, founder of Findit.jo. We’re building a smarter way for people in Jordan to discover products based on what they need, their budget, and how they plan to use the product.
      </p>

      <p style="font-size:15px;line-height:1.7;color:#374151;">
        Since you joined early, you’ll be among the first people invited to test the beta when it becomes available.
      </p>

      <div style="margin:24px 0;">
        <a href="https://finditjo.com" style="display:inline-block;background:#07111F;color:#ffffff;text-decoration:none;font-weight:700;padding:12px 18px;border-radius:12px;">
          Visit Findit.jo
        </a>
      </div>

      <p style="font-size:15px;line-height:1.7;color:#374151;margin-bottom:0;">
        Thanks again for your support.<br><br>
        Ibrahim Mansour<br>
        Founder, Findit.jo
      </p>
    </div>

    <p style="text-align:center;color:#6b7280;font-size:12px;margin-top:16px;">
      Built in Amman, Jordan 🇯🇴 · Find smarter. Save more.
    </p>
  </div>
</div>
        `,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      return Response.json(data, { status: response.status });
    }

    return Response.json({ success: true }, { status: 200 });
  } catch (error) {
    return Response.json(
      { error: error.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function onRequestGet() {
  return Response.json(
    { error: "Method Not Allowed" },
    { status: 405 }
  );
}