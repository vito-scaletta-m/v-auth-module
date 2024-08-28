import { defineNuxtRouteMiddleware } from "#imports";
import { useAuthStore } from "../../store";
import authServerMiddleware from "./auth.server";
import authClientMiddleware from "./auth.client";

export default defineNuxtRouteMiddleware( async (to, from) => {
  const authStore = useAuthStore()

  if(import.meta.server){
    await authServerMiddleware(authStore)
  }

  if(import.meta.client){
   return authClientMiddleware(authStore)
  }
});
