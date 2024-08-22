export const googleLogIn = async () => {
	window.open(
		`http://localhost:3000/auth/google/callback`,
		"_self"
	);
}
