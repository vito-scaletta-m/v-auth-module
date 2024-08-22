import appRoutes from "~/constants/routes";
import { useAuthStore } from "../../store";

export default defineNuxtRouteMiddleware((to, from) => {
	const authStore = useAuthStore()

	console.log('auth user data', authStore.getAuthUser);

	console.log('is user auth', authStore.isAuth);

  if (!authStore.isAuth) {

		const localePath = useLocalePath();	

		navigateTo(localePath(appRoutes.dashboard))

		console.log('navigate to login');
		
    // return navigateTo('/login');
  }
});