import { navigateTo, useLocalePath } from "#imports"
import useConfig from "./useConfig";

const useRedirect = () => {

  const appConfig = useConfig()

  const localePath = useLocalePath();

	const navigateToWithLocale = (path: string) => {
    return appConfig.redirectWithI18n ? navigateTo(localePath(path)) :  navigateTo(path)
	}

	return {
		navigateToWithLocale
	}
}

export default useRedirect
