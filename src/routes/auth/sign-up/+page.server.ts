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

		// Use the form data for signup instead of hardcoded values
		const { error } = await authClient.signUp.email({
			email: form.data.email,
			password: form.data.password,

			name: form.data.fullname, // Optional: extract name from email
			image: undefined // Optional: you can add image logic if needed
		});

		console.log(form);

		if (error) {
			return fail(400, {
				form,
				message: error.message || 'Signup failed'
			});
		}

		// If signin is successful, you might want to redirect or set a success message
		return {
			form,
			message: 'Signup successful'
		};
	}
};