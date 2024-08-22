import { defineAuthUser, refreshAccessToken } from "../../composables/api";

const authServerMiddlewareLog = (message: string, value?: any) => {
	// temporarily hidden
	console.log(`<<< APP SERVER AUTH MIDDLEWARE > ${message}`);
	console.log(JSON.stringify(value, null, 2));		
}

const startedLogs = () => {
	// temporarily hidden
	console.log();
	console.log();
	console.log();
}

export default defineEventHandler(async (event) => {	

	startedLogs()

  const accessToken = getCookie(event, 'accessToken');
  const refreshToken = getCookie(event, 'refreshToken');

	authServerMiddlewareLog('access token', accessToken)
	authServerMiddlewareLog('refresh token', refreshToken)

	const setUserToCookie = (userData: any) => {
		setCookie(event, 'authUser', JSON.stringify(userData), { httpOnly: false, secure: true });
	}

	const getAndSetAuthUser = async (accessToken?: string) => {
		const authUser = await defineAuthUser(accessToken)

		authServerMiddlewareLog('auth user', authUser)

		setUserToCookie(authUser)
	}

	if(accessToken && refreshToken) {
		authServerMiddlewareLog('access and refresh token exist')

		getAndSetAuthUser(accessToken)

	} else if( !accessToken && refreshToken) {
		authServerMiddlewareLog('refresh exist / access not exist')

		const newAccessTokenData = await refreshAccessToken(refreshToken)

		authServerMiddlewareLog('new access token', newAccessTokenData)

		if(newAccessTokenData?.result){
			getAndSetAuthUser(newAccessTokenData?.token)
		}


	} 
	
	// else {
	// 	sendError(event, createError({ statusCode: 401, statusMessage: 'Unauthorized' }))
	// }

});