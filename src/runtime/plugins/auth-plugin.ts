// DEPRECATED

// import { defineNuxtPlugin } from "#imports";
// import { useCookie } from "#imports";
// import { useAuthStore } from "../store";

// export default defineNuxtPlugin((nuxtApp) => {

// 	const sessionCookie = useCookie('session')?.value as any

//   console.log('auth plugin', sessionCookie);


// 	if(sessionCookie){
//     const authStore = useAuthStore()
// 		authStore.setSession(sessionCookie)
// 		authStore.setSessionAuthStatus(true)
// 	}
// });
