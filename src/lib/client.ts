import { createAuthClient } from 'better-auth/svelte';
export const authClient = createAuthClient({
	baseURL: 'http://localhost:5173' // the base url of your auth server
});
