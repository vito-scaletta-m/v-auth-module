import {  useAuthStore} from "../store"
import { computed } from 'vue';
import type { AuthUserDataType } from "../types";

const useAuth = <T = AuthUserDataType>() => {

	const authStore = useAuthStore()

	const isAuth = computed(() => authStore.isAuth)

	const sessionData = computed<T>(() => authStore.sessionData)


	return {
		isAuth,
		sessionData
	}
}

export default useAuth
