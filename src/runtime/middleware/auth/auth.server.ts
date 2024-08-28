import { defineEventHandler, getCookie, setCookie } from "h3";
import { defineSession, refreshAccessToken } from '../../helpers/api';
import { useCookie } from "#imports";

const authServerMiddlewareLog = (message: string, value?: any) => {
	// temporarily hidden
	// console.log(`<<< APP SERVER AUTH MIDDLEWARE > ${message}`);
	// console.log(JSON.stringify(value, null, 2));
}

const startedLogs = () => {
	// temporarily hidden
	// console.log();
	// console.log('start server middleware');
	// console.log();
}

const authServerMiddleware = async (authStore: any) => {
  startedLogs()

  const accessToken = useCookie('accessToken').value;
  const refreshToken = useCookie('refreshToken').value;

  authServerMiddlewareLog('access token', accessToken)
  authServerMiddlewareLog('refresh token', refreshToken)

  const setSessionDataToCookie = (sessionData: any) => {
    authStore.setSession(sessionData)
    authStore.setSessionAuthStatus(true)
  }

  const getAndSetSession = async (accessToken?: string) => {
    const sessionData = await defineSession(accessToken)

    authServerMiddlewareLog('session data', sessionData)

    setSessionDataToCookie(sessionData)
  }

  if(accessToken && refreshToken) {
    authServerMiddlewareLog('access and refresh token exist')

    await getAndSetSession(accessToken)

  } else if( !accessToken && refreshToken) {
    authServerMiddlewareLog('refresh exist / access not exist')

    const newAccessTokenData = await refreshAccessToken(refreshToken)

    authServerMiddlewareLog('new access token', newAccessTokenData)

    if(newAccessTokenData?.result){
      await getAndSetSession(newAccessTokenData?.token)
    }


  } else {
    setSessionDataToCookie(null)
  }

}

export default authServerMiddleware
