# Profile Check App

This repository contains the source code for a one‑page web application that allows users to submit a profile for manual review. The application is inspired by the structure of **teachecker.com** and uses the elegant aesthetic of **teaforwomen.com** (approximated within this environment). It is built with **Next.js 14**, **TypeScript** and **Tailwind CSS**, and is ready for deployment to services like Vercel.

## Features

- **Single‑page layout** with sections for hero, how it works, benefits, form submission and FAQ.
- **Stripe integration** for secure payments – users pay $10 per profile check.
- **Form validation** on both client and server using [Zod](https://zod.dev/).
- **CAPTCHA placeholder** – ready to integrate with reCAPTCHA or hCaptcha.
- **Email notifications** sent to the administrator and user upon successful payment (via SMTP).
- **Rate limiting** to prevent abuse.
- **Responsive design** using Tailwind and custom design tokens approximating the colour palette of teaforwomen.com.

## Getting started

1. **Install dependencies** (requires Node.js 18+ and npm):

   ```bash
   npm install
   ```

   Note: If you cannot access the npm registry, you may need to install dependencies manually or use a package mirror.

2. **Configure environment variables**:

   Copy `.env.example` to `.env` and fill in the required values:

   - `STRIPE_SECRET_KEY` – your Stripe secret key.
   - `STRIPE_WEBHOOK_SECRET` – the signing secret for your Stripe webhook.
   - `NEXT_PUBLIC_STRIPE_PRICE_ID` – the ID of a Stripe Price set to $10.
   - `NEXT_PUBLIC_STRIPE_SUCCESS_URL` / `NEXT_PUBLIC_STRIPE_CANCEL_URL` – URLs users are redirected to after payment.
   - `ADMIN_EMAIL` – where completed submissions are sent.
   - `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS` – credentials for an SMTP server used to send emails.
   - (Optional) `RECAPTCHA_SECRET` and `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` if you enable CAPTCHA.

3. **Run the development server**:

   ```bash
   npm run dev
   ```

   The app will be available at `http://localhost:3000`.

4. **Stripe webhook**:

   To handle payment confirmations, configure a Stripe webhook endpoint pointing to `/api/webhooks/stripe` and use the signing secret in `STRIPE_WEBHOOK_SECRET`. The webhook must listen for the `checkout.session.completed` event.

5. **Deploying**:

   This project is designed for deployment on Vercel, but it can be deployed anywhere that supports Node.js and serverless functions. Ensure that all environment variables are set in your hosting environment.

## Customisation

- **Design tokens** can be modified in `styles/tokens.css`. Colours and fonts here approximate the palette of teaforwomen.com. Feel free to adjust values to better match your brand.
- **Copy** (headlines, descriptions, FAQ) can be updated directly in the relevant components (e.g. `Hero.tsx`, `HowItWorks.tsx`, `FAQ.tsx`).
- **Rate limiting** parameters are defined in `lib/rate-limit.ts`. Adjust the `points` and `duration` options to suit your needs.
- **Storage**: Currently, the submission payload is stored in memory via `lib/storage.ts`. For production use, replace this with persistent storage such as Redis, Supabase, or Upstash.
- **CAPTCHA**: The `verifyCaptcha` function in `lib/captcha.ts` is a stub. Integrate with reCAPTCHA or hCaptcha by sending the token to their respective verify APIs.

## License

This project is provided for demonstration purposes. Feel free to use and modify it for your own projects.