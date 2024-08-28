import type { ModuleOptions } from "../types/options"
import {  useRuntimeConfig } from "#imports"

const useConfig = () => {

  const runtimeConfig = useRuntimeConfig()

  const config = runtimeConfig.public.auth as ModuleOptions

  return config

}

export default useConfig
