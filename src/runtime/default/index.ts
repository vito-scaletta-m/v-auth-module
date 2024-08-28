import type { ModuleOptions } from "../types/options";

export const moduleOptionsDefault: ModuleOptions = {
  apiBaseUrl: 'http://localhost:3000',
  redirectWithI18n: false,
  middleware: {
    auth: {
      errorRedirectUrl: 'login'
    },
    'not-auth': {
      errorRedirectUrl: 'dashboard'
    },
  },
  endpoints: {
    signIn: {
      path: 'auth/log-in',
      method: 'post',
      redirectUrl: 'dashboard'
    },
    signOut: {
      path: 'auth/logout',
      method: 'post',
      redirectUrl: 'login'
    },
    signUp: {
      path: 'auth/sign-up',
      method: 'post',
      redirectUrl: 'dashboard'
    },
    getSession: {
      path: 'auth/profile',
      method: 'get'
    },
    refresh: {
      path: 'auth/refresh-token',
      method: 'post'
    },
  }
}
