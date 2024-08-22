import { useConfig } from "."
import { serverAuthRoutes } from ".."
import type { AuthUserDataType, RefreshAccessTokenType } from "../types"

export const defaultRequestAction = (middlewareAccessToken?: string) => {
	const config = useConfig()

	const accessToken = middlewareAccessToken || getAccessToken()

	const fetchDefault = $fetch.create({
		baseURL: `${config.apiBaseUrl}`,
		credentials: 'include',
		retry: false,

		// @ts-ignore // TODO
		headers: {
			authorization: import.meta.server && accessToken
		}
	})

	return fetchDefault
}

export const refreshAccessToken = async (middlewareRefreshToken?: string): Promise<RefreshAccessTokenType | null> => {
	try {

		const refreshToken = middlewareRefreshToken || getRefreshToken()

		const response = await defaultRequestAction()(serverAuthRoutes.refreshToken, {
			method: 'POST',
			body: {
				refreshToken: import.meta.server && refreshToken,
				isServerSide: import.meta.server
			}
		}) as RefreshAccessTokenType

		return response

	} catch (error) {
		console.log('refresh token error', error);
		return null
	}
}

export const defineAuthUser = async (middlewareAccessToken?: string): Promise<AuthUserDataType | null> => {
	try {
		const response = await defaultRequestAction(middlewareAccessToken)(serverAuthRoutes.userProfile, {
			method: 'GET',
		}) as AuthUserDataType

		return response

	} catch (error) {
		console.log('define auth user data error', error);
		return null
	}
}

export const getAccessToken = () => {
	try {
		if (import.meta.server) {
			const accessToken = useCookie('accessToken')?.value
			// console.log('access token', accessToken);
			return accessToken
		}
		// console.log('no access token...');
		return null
	} catch (error) {
		console.log('error in get access token');
		return null
	}
}

export const getRefreshToken = () => {
	try {
		// console.log('get refresh token > is server mode', import.meta.server);
		if (import.meta.server) {
			const refreshToken = useCookie('refreshToken').value
			// console.log('get refresh token in server mode', refreshToken);
			return refreshToken
		}
		// console.log('no refresh token...');
		return null
	} catch (error) {
		console.log('error in get refresh token', error);
	}
}
