import { logOut } from "../server"
import { emailPasswordLogIn, emailPasswordSignUp } from "../server/email-password"
import { githubLogIn } from "../server/github"
import { googleLogIn } from "../server/google"

export const useAuthActions = () => {

	return {
		emailPasswordLogIn,
		emailPasswordSignUp,
		googleLogIn,
		githubLogIn,
		logOut,
	}
}
