import type { BaseInvalidResponse } from "../types/index"

export const isResponseInvalid = (response: any): response is BaseInvalidResponse | null | undefined => {
	// console.log('is response invalid', response);

	return response === null || response === undefined ||response &&
		typeof response.message === 'string' &&
		typeof response.stack === 'object' &&
		typeof response.status === 'number' &&
		typeof response.success === 'boolean'
}
