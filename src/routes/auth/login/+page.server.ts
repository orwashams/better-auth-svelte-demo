import { auth } from '$lib/server/auth';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ request }) => {
	const session = await auth.api.getSession({
		headers: request.headers
	});
	if (!session) {
		return {
			status: 401,
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				error: 'Unauthorized'
			})
		};
	}
	return session;
};
