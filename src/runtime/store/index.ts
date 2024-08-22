import { computed, ref } from 'vue'
import type { AuthUserDataType } from '../types'
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', () => {

	const userData = ref<AuthUserDataType | null>(null)

	const isAuth = ref(false)

	const setAuthUser = (data: AuthUserDataType) => {
		userData.value = data
	}

	const clearAuthUser = () => {
		userData.value = null
	}

	const setAuthStatus = (value: boolean) => {
		isAuth.value = value
	}

	const getAuthUser = computed(() => userData.value)

  return {
		setAuthUser,
		clearAuthUser,
		getAuthUser,
		isAuth,
		setAuthStatus
	}
})

export const useAuthLoaderStore = defineStore('auth-loader', () => {

	const isLoading = ref(false)

	const setAppLoading = (value: boolean) => {
		isLoading.value = value
	}

	return {
		setAppLoading,
		isLoading
	}
})
