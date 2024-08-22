type ModuleEndpoints = 'signIn' | 'signOut' | 'signUp' | 'getSession' | 'refresh'

type ModuleEndpointsOptions = {
	path: string
	method: string
}

type ModuleMiddleware = 'auth' | 'not-auth'

type ModuleMiddlewareOptions = {
	errorRedirectUrl: string
}

export type ModuleOptions = {
	middleware: Record<ModuleMiddleware, ModuleMiddlewareOptions>
	endpoints: Record<ModuleEndpoints, ModuleEndpointsOptions>
}
