import { defineNuxtModule, addRouteMiddleware, addTemplate,  createResolver, addServerHandler, addPlugin, addImportsDir, addComponentsDir, useRuntimeConfig } from '@nuxt/kit'
import type { ModuleOptions } from './runtime/types/options'
import { moduleOptionsDefault } from './runtime/default'

// Module options TypeScript interface definition
export type { ModuleOptions }

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'my-module',
    configKey: 'vAuth',
  },
  // Default configuration options of the Nuxt module
  defaults: moduleOptionsDefault,
  setup(_options, _nuxt) {
    // @ts-ignore
    const { resolve } = createResolver(import.meta.url);

    _nuxt.options.runtimeConfig.config = _options

    // Регистрируем middleware
    addRouteMiddleware({
			name: 'auth',
			path: resolve('runtime/middleware/client/auth.ts'),
		});

		addRouteMiddleware({
			name: 'not-auth',
			path: resolve('runtime/middleware/client/not-auth.ts'),
		});

		addServerHandler({
      handler: resolve('runtime/middleware/server/auth.ts'),
      // method: 'auth',
			// middleware: true,
			route: '' // Применяется ко всем запросам
    });

		addImportsDir(resolve('runtime/composables'));

		addPlugin(resolve('runtime/plugins/auth-plugin.ts'));

		addComponentsDir({
      path: resolve('runtime/components'),
      // Убедитесь, что используете корректные параметры, если они нужны
      prefix: 'Global', // Опционально: префикс для именования компонентов
    });

    const options = useRuntimeConfig()

    console.log('options', options);

  },
})
