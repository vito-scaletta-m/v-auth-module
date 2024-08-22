import type { UserAuthType } from "../enums"

export type LogInRequestData = {
	email: string
	password: string
}

export type SignInRequestData = {
	email: string
	password: string
	passwordConfirmation: string
}


export type AuthResponseData = BaseUserData

export type LogoutResponseData = {
	result: boolean
}





// new types
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