// src/lib/email.ts
import { Resend } from 'resend';
import { RESEND_API_KEY } from '$env/static/private';

// Initialize Resend with your API key
const resend = new Resend(RESEND_API_KEY);

// Email sending function with TypeScript types
export async function sendEmail({
	from = 'Your Company <onboarding@yourdomain.com>',
	to,
	subject,
	html,
	text
}: {
	from?: string;
	to: string | string[];
	subject: string;
	html?: string;
	text?: string;
}) {
	try {
		const { data, error } = await resend.emails.send({
			from,
			to,
			subject,
			html,
			text,
			react: { useSuspense: true }
		});

		if (error) {
			console.error('Resend Email Error:', error);
			return { success: false, error };
		}

		return { success: true, data };
	} catch (err) {
		console.error('Email Send Unexpected Error:', err);
		return {
			success: false,
			error: err instanceof Error ? err.message : 'Unknown error'
		};
	}
}

// Example email template function
export function welcomeEmailTemplate(name: string) {
	return {
		subject: 'Welcome to Our Platform!',
		html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h1>Welcome, ${name}!</h1>
        <p>Thank you for joining our platform. We're excited to have you on board.</p>
        <a href="https://yourwebsite.com/welcome" style="background-color: #4CAF50; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px;">Get Started</a>
      </div>
    `
	};
}
