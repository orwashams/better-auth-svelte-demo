<script lang="ts">
	import { goto } from '$app/navigation';
	import { authClient } from '$lib/client';

	const session = authClient.useSession();
</script>

<h1>Hello {$session?.data?.user.name}</h1>

<button
	onclick={async () =>
		await authClient.signOut({
			fetchOptions: {
				onSuccess: () => {
					goto('/auth/sign-in');
				}
			}
		})}
>
	Sign out
</button>
