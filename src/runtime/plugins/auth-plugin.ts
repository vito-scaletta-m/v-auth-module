import { defineNuxtPlugin } from "#imports"; // AS IN EXAMPLE
// import { useCookie } from '#imports';  // AS IN EXAMPLE
import { useAuthStore } from "../store";
import type { AuthUserDataType } from "../types";

export default defineNuxtPlugin((nuxtApp) => {

	console.log('auth plugin');

	const authUserCookie = useCookie('authUser')?.value as AuthUserDataType | undefined;

  console.log('authUserCookie', authUserCookie);


	if(authUserCookie){
    const authStore = useAuthStore()

		authStore.setAuthUser(authUserCookie) // ADD TYPE
		authStore.setAuthStatus(true)
	}
});
