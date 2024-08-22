import { serverAuthRoutes } from ".."
import { logOut, userProfile } from "../server"
import { emailPasswordLogIn, emailPasswordSignUp } from "../server/email-password"
import { githubLogIn } from "../server/github"
import { googleLogIn } from "../server/google"
import {  useAuthLoaderStore, useAuthStore} from "../store"
import { defaultRequestAction, refreshAccessToken } from "./api"
import type { ModuleOptions } from "../types/options"

type MethodsTypes = "GET" | "HEAD" | "PATCH" | "POST" | "PUT" | "DELETE"

export const useApiFetch = () => {

	const { errorHandler } = useApiError()

	const { fetchWithAuth } = authFetch()

	const postMethod = async <T>(url: string, requestData?: Record<string, any>): Promise<T> => {
		return errorHandler(() => fetchWithAuth(url, 'POST', requestData))
	}

	const getMethod = async <T>(url: string, requestData?: Record<string, any>): Promise<T> => {
		return errorHandler(() => fetchWithAuth(url, 'GET', requestData))
	}

	return {
		postMethod,
		getMethod
	}
}

export const authFetch =  () =>  {

	const fetchDefaultAction = async (url: string, method: MethodsTypes, body?: any) => {

		return defaultRequestAction()(url, {
			method,
			body
		})
	}

	const fetchWithAuth = async (url: string, method: MethodsTypes, body?: any) => {
		try {

			const response = await fetchDefaultAction(url, method, body)

			return response

		} catch (error) {
			console.log(error);

			// @ts-ignore
			const errorStatusCode = error?.response?.status

			if (errorStatusCode === 401) {
				const refreshTokenResponse = await refreshAccessToken();

				if(refreshTokenResponse?.result){
					const response = await fetchDefaultAction(url, method, body)

					return response
				} else {
					console.log('LOGOUT'); // TODO
				}


			} else {
				throw error
			}
		}
	}

	return {
		fetchWithAuth
	}

}

export const useAuth = () => {

	const authStore = useAuthStore()

	const authLoaderStore = useAuthLoaderStore()

	const isAuth = computed(() => authStore.isAuth)

	const authUser = computed(() => authStore.getAuthUser)

	const isAuthLoaded = computed(() => authLoaderStore.isLoading)


	return {
		isAuth,
		authUser,
		isAuthLoaded
	}
}
export const useAuthActions = () => {

	return {
		emailPasswordLogIn,
		emailPasswordSignUp,

		googleLogIn,
		githubLogIn,

		logOut,
		userProfile
	}
}

// DEPRECATED
const useAuthInit = () => {
	const authLoaderStore = useAuthLoaderStore()

	const isAuthLoaded = computed(() => authLoaderStore.isLoading)

	const initAuth = async () => {
		try {
			// console.log('isAuthLoaded', isAuthLoaded.value);
			// console.log('auth loader status before init', isAuthLoaded.value);

			// check if this first auth check
			if(!isAuthLoaded.value){
				const result = await userProfile()

				if(result){
					authLoaderStore.setAppLoading(true)
				}

				// console.log(result);
			}
		} catch (error) {
			// console.log('error in init auth');
			console.log(error);
		}
	}

	return {
		initAuth
	}
}
const useApiError = () => {

	// const { showErrorToast } = useAppToast()

	const errorHandler = async (fn: Function) => {
		try {
			const result = await fn()
			// console.log('result in error handler', result);

			return result
		} catch (error) {
			// console.log(error);


			// @ts-ignore // TODO
			const errorMessage = error?.response?._data?.message
			// console.log('error message in error handler', errorMessage);

			if(errorMessage){
				// showErrorToast(errorMessage)
			}
		}
	}

	return {
		errorHandler
	}

}

export const useConfig = () => {

  const runtimeConfig = useRuntimeConfig()

  const config = runtimeConfig.config as ModuleOptions

  return config

}
