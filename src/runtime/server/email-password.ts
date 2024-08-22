import type { AuthResponseData, LogInRequestData, SignInRequestData } from "../types/index"
import type { BaseRequestResult } from "~/types"
import { isResponseInvalid } from "~/components/helpers/response"
import appRoutes from "~/constants/routes"
import { useAuthStore } from "../store"
import { serverAuthRoutes } from ".."
import { useApiFetch } from '../composables/index'


// need for log-in and sign-up
const setAuthUserAfterSignIn = (result: BaseRequestResult<AuthResponseData>): boolean| null => {
	if(isResponseInvalid(result)){
		return false
	} else {
		const authStore = useAuthStore()
		const localePath = useLocalePath();	

		authStore.setAuthUser(result)
		authStore.setAuthStatus(true)

		navigateTo(localePath(appRoutes.dashboard))

		return true
	}
}

export const emailPasswordLogIn = async (requestData: LogInRequestData): Promise<boolean| null> => {
	const { postMethod } = useApiFetch()

	const result = await postMethod(serverAuthRoutes.logIn, requestData) as BaseRequestResult<AuthResponseData>

	return setAuthUserAfterSignIn(result)

}

export const emailPasswordSignUp = async (requestData: SignInRequestData): Promise<boolean| null> => {
	const { postMethod } = useApiFetch()

	const result = await postMethod(serverAuthRoutes.signUp, requestData) as BaseRequestResult<AuthResponseData>

	return setAuthUserAfterSignIn(result)

}