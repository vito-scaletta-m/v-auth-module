import { useConfig } from "../../composables";
import { useAuthStore } from "../../store";
import { defineNuxtRouteMiddleware } from '#imports' // AS IN EXAMPLE
// import { navigateTo } from '#imports'; // AS IN EXAMPLE

export default defineNuxtRouteMiddleware((to, from) => {
	const authStore = useAuthStore()

	console.log('auth user data', authStore.getAuthUser);

	console.log('is user auth', authStore.isAuth);

  if (authStore.isAuth) {

		// const localePath = useLocalePath();

    const appConfig = useConfig()

		// navigateTo(localePath(appConfig.middleware["not-auth"].errorRedirectUrl))
		navigateTo(appConfig.middleware["not-auth"].errorRedirectUrl)

		console.log('navigate to login');

    // return navigateTo('/login');
  }
});
