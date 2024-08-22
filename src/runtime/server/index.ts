import type { AuthResponseData, LogoutResponseData } from "../types/index"
import type { BaseRequestResult } from "../types/index"
import { isResponseInvalid } from "../helpers/response"
import { useAuthStore } from "../store"
import { serverAuthRoutes } from ".."
import { authFetch, useConfig } from "../composables"

export const logOut = async (): Promise<boolean| null> => {
	const { fetchWithAuth } = authFetch()

	const result = await fetchWithAuth(serverAuthRoutes.logout, 'POST') as BaseRequestResult<LogoutResponseData>

	if(isResponseInvalid(result)){
		return null
	} else {
		const authStore = useAuthStore()
		// const localePath = useLocalePath();
		authStore.clearAuthUser()
		authStore.setAuthStatus(false)


    const appConfig = useConfig()

		// navigateTo(localePath(appConfig.endpoints.signOut.redirectUrl))
		navigateTo(appConfig.endpoints.signOut.redirectUrl)

		// navigateTo(localePath(appRoutes.logIn))

		return true
	}
}

// get current auth user
export const userProfile = async ()=> {
	const { fetchWithAuth } = authFetch()

	const result = await fetchWithAuth(serverAuthRoutes.userProfile, 'GET') as BaseRequestResult<AuthResponseData>

	// console.log('user profile result', result);


	if(isResponseInvalid(result)){
		return null
	} else {
		const authStore = useAuthStore()
		authStore.setAuthUser(result)
		authStore.setAuthStatus(true)
		return true
	}
}
