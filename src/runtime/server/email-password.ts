import type { LogInRequestData, SignInRequestData } from "../types/index"
import { isResponseInvalid } from "../helpers/response"
import { useAuthStore } from "../store"
import useRedirect from "../composables/useRedirect"
import useConfig from "../composables/useConfig"
import useAuthFetch from '../composables/useAuthFetch'



// need for log-in and sign-up
const setSessionAfterSignIn = (result: any, options: {
  redirectUrl?: string
}): boolean| null => {
	if(isResponseInvalid(result)){
		return false
	} else {
		const authStore = useAuthStore()

		authStore.setSession(result)
		authStore.setSessionAuthStatus(true)

    if(options.redirectUrl){
      const { navigateToWithLocale } = useRedirect()

      navigateToWithLocale(options.redirectUrl)
    }

		return true
	}
}

export const emailPasswordLogIn = async <T = LogInRequestData>(requestData: T): Promise<boolean| null> => {

  const fetchWithAuth = useAuthFetch()

  const config = useConfig()

	const result = await fetchWithAuth(config.endpoints.signIn.path, config.endpoints.signIn.method, requestData)

	return setSessionAfterSignIn(result, {
    redirectUrl: config.endpoints.signIn.redirectUrl
  })

}

export const emailPasswordSignUp = async <T = SignInRequestData>(requestData: T): Promise<boolean| null> => {

  const fetchWithAuth = useAuthFetch()

  const config = useConfig()

	const result = await fetchWithAuth(config.endpoints.signUp.path, config.endpoints.signUp.method,  requestData)

	return setSessionAfterSignIn(result, {
    redirectUrl: config.endpoints.signUp.redirectUrl
  })

}
