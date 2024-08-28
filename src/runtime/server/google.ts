import useConfig from "../composables/useConfig";

export const googleLogIn = async () => {

  const config = useConfig()

	window.open(
		`${config.apiBaseUrl}/auth/google/callback`,
		"_self"
	);
}
