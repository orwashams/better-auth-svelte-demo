import type { PageServerLoad, Actions } from './$types.js';

import { fail } from '@sveltejs/kit';

import { superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import { formSchema } from './schema.js';
import { authClient } from '$lib/client.js';

export const load: PageServerLoad = async () => {
	return {
		form: await superValidate(zod(formSchema))
	};
};

export const actions: Actions = {
	default: async (event) => {
		const form = await superValidate(event, zod(formSchema));

		if (!form.valid) {
			return fail(400, {
				form
			});
		}

		try {
			// Use the form data for signup instead of hardcoded values
			const { error } = await authClient.signIn.email({
				email: form.data.email,
				password: form.data.password
			});

			if (error) {
				return fail(400, {
					form,
					message: error.message || 'Signin failed'
				});
			}

			// If signin is successful, you might want to redirect or set a success message
			return {
				form,
				message: 'Signin successful'
			};
		} catch (error) {
			// Handle any unexpected errors
			return fail(500, {
				form,
				message: 'An unexpected error occurred'
			});
		}
	}
};
