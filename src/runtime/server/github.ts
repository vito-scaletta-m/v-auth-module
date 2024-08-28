import useConfig from "../composables/useConfig";

export const githubLogIn = async () => {

  const config = useConfig()

	window.open(
		`${config.apiBaseUrl}/auth/github/callback`,
		"_self"
	);
}
