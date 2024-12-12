import { betterAuth } from 'better-auth';
import { drizzleAdapter } from 'better-auth/adapters/drizzle';

import {
	GITHUB_CLIENT_ID,
	GITHUB_CLIENT_SECRET,
	GITHUB_OAUTH_REDIRECT_URI,
	GOOGLE_CLIENT_ID,
	GOOGLE_CLIENT_SECRET,
	GOOGLE_OAUTH_REDIRECT_URI
} from '$env/static/private';

import { db } from '$lib/server/db';

import * as schema from './db/schema';
// import { sendEmail } from '$lib/email';

export const auth = betterAuth({
	database: drizzleAdapter(db, {
		provider: 'sqlite', // or "mysql", "sqlite",
		schema: {
			...schema
		}
	}),

	socialProviders: {
		github: {
			clientId: GITHUB_CLIENT_ID,
			clientSecret: GITHUB_CLIENT_SECRET,
			redirectURI: GITHUB_OAUTH_REDIRECT_URI
		},
		google: {
			clientId: GOOGLE_CLIENT_ID,
			clientSecret: GOOGLE_CLIENT_SECRET,
			redirectURI: GOOGLE_OAUTH_REDIRECT_URI
		}
	},
	emailAndPassword: {
		enabled: true
	}

	// emailVerification: {
	// 	sendVerificationEmail: async ({ user, url, token }, request) => {
	// 		await sendEmail({
	// 			from: 'Your Company <onboarding@yourdomain.com>',
	// 			to: user.email,
	// 			subject: 'Verify your email address',
	// 			text: `Click the link to verify your email: ${url}`
	// 		});
	// 	}
	// }
});
