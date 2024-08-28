import { defineNuxtRouteMiddleware } from '#imports'
import { useAuthStore } from "../store";
import useRedirect from "../composables/useRedirect";
import useConfig from "../composables/useConfig";

export default defineNuxtRouteMiddleware((to, from) => {
	const authStore = useAuthStore()

  if (authStore.isAuth) {
    const appConfig = useConfig()

    const { navigateToWithLocale } = useRedirect()

		return navigateToWithLocale(appConfig.middleware["not-auth"].errorRedirectUrl)
  }
});
