import { defineNuxtModule, useLogger, addRouteMiddleware, addTemplate,  createResolver, addServerHandler, addPlugin, addImportsDir, addComponentsDir, addImports } from '@nuxt/kit'
import type { ModuleOptions } from './runtime/types/options'
import { moduleOptionsDefault } from './runtime/default'
import { defu } from 'defu'

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

    nuxt.hooks.hook("nitro:config", async (nitroConfig) => {
      nitroConfig.externals = nitroConfig.externals || {};
      nitroConfig.externals.inline = nitroConfig.externals.inline || [];
      nitroConfig.externals.inline.push(resolve("./runtime"));
    });

    nuxt.options.runtimeConfig = nuxt.options.runtimeConfig || { public: {} }
    nuxt.options.runtimeConfig.public.auth = options

    // Регистрируем middleware
    addRouteMiddleware({
			name: 'auth',
			path: resolve('runtime/middleware/client/auth'),
		});

		addRouteMiddleware({
			name: 'not-auth',
			path: resolve('runtime/middleware/client/not-auth'),
		});

		addServerHandler({
      handler: resolve('runtime/server/server-auth-middleware'),
      // method: 'get',
			// middleware: true,
			route: '' // Применяется ко всем запросам
    });

		addImportsDir(resolve('runtime/composables'));

		addPlugin(resolve('runtime/plugins/auth-plugin'));

		// addComponentsDir({
    //   path: resolve('runtime/components'),
    //   // Убедитесь, что используете корректные параметры, если они нужны
    //   prefix: 'Global', // Опционально: префикс для именования компонентов
    // });

    logger.success('`v-auth-nuxt` setup done')

  },
})
