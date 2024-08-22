export const githubLogIn = async () => {
	window.open(
		`http://localhost:3000/auth/github/callback`,
		"_self"
	);
}