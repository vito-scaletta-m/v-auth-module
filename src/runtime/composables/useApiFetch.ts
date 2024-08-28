// DEPRECATED
// import useAuthFetch from "./useAuthFetch";

// const useApiError = () => {

// 	// const { showErrorToast } = useAppToast()

// 	const errorHandler = async (fn: Function) => {
// 		try {
// 			const result = await fn()
// 			// console.log('result in error handler', result);

// 			return result
// 		} catch (error) {
// 			// console.log(error);


// 			// @ts-ignore // TODO
// 			const errorMessage = error?.response?._data?.message
// 			// console.log('error message in error handler', errorMessage);

// 			if(errorMessage){
// 				// showErrorToast(errorMessage)
// 			}
// 		}
// 	}

// 	return {
// 		errorHandler
// 	}

// }

// const useApiFetch = () => {

// 	const { errorHandler } = useApiError()

// 	const { fetchWithAuth } = useAuthFetch()

// 	const postMethod = async <T>(url: string, requestData?: Record<string, any>): Promise<T> => {
// 		return errorHandler(() => fetchWithAuth(url, 'POST', requestData))
// 	}

// 	const getMethod = async <T>(url: string, requestData?: Record<string, any>): Promise<T> => {
// 		return errorHandler(() => fetchWithAuth(url, 'GET', requestData))
// 	}

// 	return {
// 		postMethod,
// 		getMethod
// 	}
// }

// export default useApiFetch
