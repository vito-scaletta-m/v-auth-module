import { useAuthStore } from "../store";
import type { AuthUserDataType } from "../types";
export default defineNuxtPlugin((nuxtApp) => {

	console.log('auth plugin');


	const authUserCookie = useCookie('authUser')?.value as AuthUserDataType | undefined;

	if(authUserCookie){
    const authStore = useAuthStore()

		authStore.setAuthUser(authUserCookie) // ADD TYPE
		authStore.setAuthStatus(true)
	}
});
