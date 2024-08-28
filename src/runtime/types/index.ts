import type { UserAuthType } from "../enums"

// available for set custom
export type LogInRequestData = {
	email: string
	password: string
}

export type SignInRequestData = {
	email: string
	password: string
	passwordConfirmation: string
}

export type LogoutResponseData = {
	result: boolean
}

// strick types
export type RefreshAccessTokenType = {
	result: boolean,
	token?: string
}

export type AuthUserDataType = {
	id: string
	login?: string
	email?: string
	authType: UserAuthType,
	isActivated: boolean
	nickname: string
}

export type BaseInvalidResponse = {
	message: string
	stack: object
	status: number
	success: boolean
}

export type BaseRequestResult<T> = T | BaseInvalidResponse
