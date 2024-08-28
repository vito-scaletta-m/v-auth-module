import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', () => {

	const sessionData = ref<any | null>(null)

	const isAuth = ref(false)

	const setSession = (data: any) => {
		sessionData.value = data
	}

	const clearSession = () => {
		sessionData.value = null
	}

	const setSessionAuthStatus = (value: boolean) => {
		isAuth.value = value
	}

  return {
		setSession,
		clearSession,
		sessionData,
		isAuth,
		setSessionAuthStatus
	}
})


// DEPRECATED
// export const useAuthLoaderStore = defineStore('auth-loader', () => {

// 	const isLoading = ref(false)

// 	const setAppLoading = (value: boolean) => {
// 		isLoading.value = value
// 	}

// 	return {
// 		setAppLoading,
// 		isLoading
// 	}
// })
