import type { LogoutResponseData } from "../types/index"
import type { BaseRequestResult } from "../types/index"
import { isResponseInvalid } from "../helpers/response"
import { useAuthStore } from "../store"
import useRedirect from "../composables/useRedirect"
import useConfig from "../composables/useConfig"
import useAuthFetch from "../composables/useAuthFetch"

export const logOut = async <T = LogoutResponseData>(): Promise<boolean| null> => {
	const fetchWithAuth= useAuthFetch()

  const config = useConfig()

	const result = await fetchWithAuth(config.endpoints.signOut.path, config.endpoints.signOut.method) as
    BaseRequestResult<T>

	if(isResponseInvalid(result)){
		return null
	} else {
		const authStore = useAuthStore()
		authStore.clearSession()
		authStore.setSessionAuthStatus(false)

    const appConfig = useConfig()

    const { navigateToWithLocale } = useRedirect()

    if(appConfig.endpoints.signOut.redirectUrl){
      navigateToWithLocale(appConfig.endpoints.signOut.redirectUrl)
    }


    return true
	}
}


// DEPRECATED
// get current auth user
// export const userProfile = async ()=> {
// 	const { fetchWithAuth } = useAuthFetch()

//   const config = useConfig()

// 	const result = await fetchWithAuth(config.endpoints.getSession.path, config.endpoints.getSession.method) as BaseRequestResult<AuthUserDataType>

// 	if(isResponseInvalid(result)){
// 		return null
// 	} else {
// 		const authStore = useAuthStore()
// 		authStore.setSession(result)
// 		authStore.setSessionAuthStatus(true)
// 		return true
// 	}
// }
