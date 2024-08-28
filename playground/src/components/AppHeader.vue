<template>
  <div class=" border-b border-black px-6 py-3">

    <div class="flex justify-between items-center">
      <nav class=" px-3">
        <ul
          class=" flex gap-x-4 items-center"
        >
          <li
            v-for="link in links"
            :key="link.to"
            class=" text-blue-800 text-base font-medium"
          >
            <nuxt-link-locale :to="link.to">
              {{ link.title }}
            </nuxt-link-locale>
          </li>
        </ul>
      </nav>

      <div>
        <div v-if="!isAuth">
          <nuxt-link-locale
            class=" text-blue-800 text-base font-medium mr-4"
            :to="clientRoutes.login"
          >
            Login
          </nuxt-link-locale>

          <nuxt-link-locale
            class=" text-blue-800 text-base font-medium"
            :to="clientRoutes.signup"
          >
            Sign Up
          </nuxt-link-locale>
        </div>

        <button
          v-if="isAuth"
          class=" bg-blue-600 px-6 py-2 text-base outline-none text-white rounded-md"
          @click="logOut"
        >
          log out
        </button>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import { useAuth, useAuthActions } from '#imports';
import clientRoutes from '../defaults/client-routes'

const {isAuth, sessionData } = useAuth()

const {logOut} = useAuthActions()

const links = [
  {
    id: 'dashboard',
    title: 'Dashboard',
    to: clientRoutes.dashboard
  }
]

</script>
