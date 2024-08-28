// import { defineSession, refreshAccessToken } from '../helpers/api';
// import { defineEventHandler, getCookie, setCookie } from 'h3';

// const authServerMiddlewareLog = (message: string, value?: any) => {
// 	// temporarily hidden
// 	// console.log(`<<< APP SERVER AUTH MIDDLEWARE > ${message}`);
// 	// console.log(JSON.stringify(value, null, 2));
// }

// const startedLogs = () => {
// 	// temporarily hidden
// 	console.log();
// 	console.log('start server middleware');
// 	console.log();
// }

// export default defineEventHandler(async (event) => {

//   console.log(event);


// 	startedLogs()

//   const accessToken = getCookie(event, 'accessToken');
//   const refreshToken = getCookie(event, 'refreshToken');

// 	authServerMiddlewareLog('access token', accessToken)
// 	authServerMiddlewareLog('refresh token', refreshToken)

// 	const setUserToCookie = (userData: any) => {
//     // setCookie(event, 'authUser', JSON.stringify(userData), { httpOnly: false, secure: true });
// 	}

// 	const getAndSetSession = async (accessToken?: string) => {
// 		const sessionData = await defineSession(accessToken)

// 		authServerMiddlewareLog('session data', sessionData)

// 		setUserToCookie(sessionData)
// 	}

// 	if(accessToken && refreshToken) {
// 		authServerMiddlewareLog('access and refresh token exist')

// 		getAndSetSession(accessToken)

// 	} else if( !accessToken && refreshToken) {
// 		authServerMiddlewareLog('refresh exist / access not exist')

// 		const newAccessTokenData = await refreshAccessToken(refreshToken)

// 		authServerMiddlewareLog('new access token', newAccessTokenData)

// 		if(newAccessTokenData?.result){
// 			getAndSetSession(newAccessTokenData?.token)
// 		}


// 	} else {

//     setUserToCookie(null)

//     console.log('no access and no refresh token');

//   }

// 	// else {
// 	// 	sendError(event, createError({ statusCode: 401, statusMessage: 'Unauthorized' }))
// 	// }

// });
