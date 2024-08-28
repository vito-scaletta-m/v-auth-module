import { defineNuxtModule, useLogger, addRouteMiddleware, addTemplate,  createResolver, addServerHandler, addPlugin, addImportsDir, addComponentsDir, addImports, addTypeTemplate } from '@nuxt/kit'
import type { ModuleOptions } from './runtime/types/options'
import { moduleOptionsDefault } from './runtime/default'

// Module options TypeScript interface definition
export type { ModuleOptions }

const PACKAGE_NAME = 'v-auth-nuxt'

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: PACKAGE_NAME,
    configKey: 'vAuth',
  },
  // Default configuration options of the Nuxt module
  defaults: moduleOptionsDefault,
  setup(options, nuxt) {
    const logger = useLogger(PACKAGE_NAME)

    // @ts-ignore
    const { resolve } = createResolver(import.meta.url);

    nuxt.options.runtimeConfig = nuxt.options.runtimeConfig || { public: {} }
    nuxt.options.runtimeConfig.public.auth = options

		addImportsDir(resolve('runtime/composables'));

		addRouteMiddleware({
			name: 'auth',
			path: resolve('runtime/middleware/auth/index'),
		});

    addRouteMiddleware({
			name: 'not-auth',
			path: resolve('runtime/middleware/not-auth'),
		});

		// addPlugin(resolve('runtime/plugins/auth-plugin'));

    // addServerHandler({
    //   handler: resolve('runtime/middleware/auth/auth.server.ts'),
		// 	// // route: '', // Used for all request
    //   middleware: true,
    //   // lazy: true,
    // });


		// addComponentsDir({
    //   path: resolve('runtime/components'),
    //   global: true
    // });

    logger.success('`v-auth-nuxt` setup done')

  },
})
