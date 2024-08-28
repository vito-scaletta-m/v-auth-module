import { defaultRequestAction, refreshAccessToken } from "../helpers/api"
import type { RequestMethodType } from "../types/options"

const useAuthFetch =  () =>  {

	const fetchDefaultAction = async (url: string, method: RequestMethodType, body?: any) => {

		return defaultRequestAction()(url, {
			method,
			body
		})
	}

	const fetchWithAuth = async (url: string, method: RequestMethodType, body?: any) => {
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

export default useAuthFetch
