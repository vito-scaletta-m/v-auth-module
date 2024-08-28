import useConfig from "../../composables/useConfig";
import useRedirect from "../../composables/useRedirect";

const authClientMiddleware = (authStore: any) => {

  if (!authStore.isAuth) {
    const appConfig = useConfig()

    const { navigateToWithLocale } = useRedirect()

    return navigateToWithLocale(appConfig.middleware.auth.errorRedirectUrl)
  }
}

export default authClientMiddleware
