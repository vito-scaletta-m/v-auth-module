import type { ModuleOptions } from "../types/options";

export const moduleOptionsDefault: ModuleOptions = {
  apiBaseUrl: 'http://localhost:3000/',
  middleware: {
    auth: {
      errorRedirectUrl: '/login'
    },
    'not-auth': {
      errorRedirectUrl: '/dashboard'
    },
  },
  endpoints: {
    signIn: { path: 'log-in', method: 'post' },
    signOut: { path: 'logout', method: 'post', redirectUrl: '/login' },
    signUp: { path: 'sign-up', method: 'post' },
    getSession: { path: 'profile', method: 'get' },
    refresh: { path: 'refresh-token', method: 'post' },
  }
}
