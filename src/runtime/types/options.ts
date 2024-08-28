type ModuleEndpoints = 'signIn' | 'signOut' | 'signUp' | 'getSession' | 'refresh'

export type RequestMethodType = "get" | "GET" | "HEAD" | "PATCH" | "POST" | "PUT" | "DELETE" | "CONNECT" | "OPTIONS" | "TRACE" | "head" | "patch" | "post" | "put" | "delete" | "connect" | "options" | "trace" | undefined

type ModuleEndpointsOptions = {
	path: string
	method: RequestMethodType
  redirectUrl?: string
}

type ModuleMiddleware = 'auth' | 'not-auth'

type ModuleMiddlewareOptions = {
	errorRedirectUrl: string
}

export type ModuleOptions = {
  redirectWithI18n: boolean
  apiBaseUrl: string
	middleware: Record<ModuleMiddleware, ModuleMiddlewareOptions>
	endpoints: Record<ModuleEndpoints, ModuleEndpointsOptions>
}
