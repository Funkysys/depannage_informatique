import type { APIRoute } from "astro";

export const POST: APIRoute = async ({ request }) => {
  const { name, email, message, phone } = await request.json();

  // Sécurité basique : refuse si un champ est vide
  if (!name || !email || !message) {
    return new Response(JSON.stringify({ error: "Champs manquants." }), {
      status: 400,
    });
  }

  // Envoi via Resend
  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${import.meta.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "antoine@antoineinformatique.fr",
        to: "antoine@antoineinformatique.fr",
        subject: `Nouveau message de ${name}`,
        reply_to: email,
        html:
          `<p><b>Nom :</b> ${name}</p>` +
          `<p><b>Email :</b> ${email}</p>` +
          (phone ? `<p><b>Téléphone :</b> ${phone}</p>` : "") +
          `<p><b>Message :</b><br>${message}</p>`,
      }),
    });
    if (!res.ok) {
      const error = await res.text();
      return new Response(JSON.stringify({ error }), { status: 500 });
    }
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (e) {
    return new Response(JSON.stringify({ error: "Erreur serveur." }), {
      status: 500,
    });
  }
};
