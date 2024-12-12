// src/lib/email.ts

// Initialize Resend with your API key

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
	await fetch('https://submit-form.com/KK9o8ufk3', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Accept: 'application/json'
		},
		body: JSON.stringify({
			from,
			to,
			subject,
			html,
			text
		})
	});
	alert('Form submitted');
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
