import type { AuthResponseData, LogoutResponseData } from "../types/index"
import type { BaseRequestResult } from "~/types"
import { isResponseInvalid } from "~/components/helpers/response"
import appRoutes from "~/constants/routes"
import { useAuthStore } from "../store"
import { serverAuthRoutes } from ".."
import { authFetch } from "../composables"

export const logOut = async (): Promise<boolean| null> => {
	const { fetchWithAuth } = authFetch()

	const result = await fetchWithAuth(serverAuthRoutes.logout, 'POST') as BaseRequestResult<LogoutResponseData> 

	if(isResponseInvalid(result)){
		return null
	} else {
		const authStore = useAuthStore()
		const localePath = useLocalePath();
		authStore.clearAuthUser()
		authStore.setAuthStatus(false)

		navigateTo(localePath(appRoutes.logIn))

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