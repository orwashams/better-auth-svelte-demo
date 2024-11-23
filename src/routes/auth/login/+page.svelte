<script lang="ts">
	import { authClient } from '$lib/client';
</script>

<div class="flex justify-center p-16">
	<button
		onclick={async () => {
			await authClient.signIn.social({
				provider: 'google'
			});
		}}
		class="rounded-md border border-slate-500 p-6"
	>
		Sign in with Google
	</button>
</div>
