<script lang="ts">
	import * as Form from '$lib/components/ui/form';
	import { Input } from '$lib/components/ui/input';
	import { formSchema, type FormSchema } from './schema';
	import { type SuperValidated, type Infer, superForm } from 'sveltekit-superforms';

	import { authClient } from '$lib/client';

	import { IconBrandGithub, IconBrandGoogle } from '@tabler/icons-svelte';
	import { zodClient } from 'sveltekit-superforms/adapters';

	export let data: SuperValidated<Infer<FormSchema>>;

	const form = superForm(data, {
		validators: zodClient(formSchema),
		dataType: 'json'
	});

	const { form: formData, enhance } = form;
</script>

<div class="flex h-screen items-center justify-center">
	<div class="flex flex-col gap-8 rounded-xl border border-slate-500 p-14">
		<div class="flex gap-4">
			<button
				onclick={async () => {
					await authClient.signIn.social({
						provider: 'google'
					});
				}}
				class="flex gap-3 rounded-full border border-slate-500 p-6"
			>
				<IconBrandGoogle />
				<p>Sign up with Google</p>
			</button>

			<button
				onclick={async () => {
					await authClient.signIn.social({
						provider: 'github'
					});
				}}
				class="flex gap-3 rounded-full border border-slate-500 p-6"
			>
				<IconBrandGithub />
				<p>Sign up with GitHub</p>
			</button>
		</div>

		<hr class="flex-1 border-slate-500" />

		<form method="POST" use:enhance class="flex flex-col gap-2">
			<Form.Field {form} name="fullname">
				<Form.Control>
					{#snippet children({ props })}
						<Form.Label>Fullname</Form.Label>
						<Input {...props} bind:value={$formData.fullname} />
					{/snippet}
				</Form.Control>
				<Form.FieldErrors />
			</Form.Field>

			<Form.Field {form} name="email">
				<Form.Control>
					{#snippet children({ props })}
						<Form.Label>Email</Form.Label>
						<Input {...props} bind:value={$formData.email} />
					{/snippet}
				</Form.Control>
				<Form.FieldErrors />
			</Form.Field>

			<Form.Field {form} name="password">
				<Form.Control>
					{#snippet children({ props })}
						<Form.Label>Password</Form.Label>
						<Input {...props} bind:value={$formData.password} type="password" />
					{/snippet}
				</Form.Control>
				<Form.FieldErrors />
			</Form.Field>

			<Form.Field {form} name="passwordConfirm">
				<Form.Control>
					{#snippet children({ props })}
						<Form.Label>Confirm Password</Form.Label>
						<Input {...props} bind:value={$formData.passwordConfirm} type="password" />
					{/snippet}
				</Form.Control>
				<Form.FieldErrors />
			</Form.Field>

			<div class="flex justify-between pb-6">
				<a href="/auth/sign-in">Sign in Instead</a>
			</div>

			<Form.Button>Submit</Form.Button>
		</form>
	</div>
</div>
