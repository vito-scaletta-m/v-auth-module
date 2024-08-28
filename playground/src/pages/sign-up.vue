<template>
  <div class=" mt-36 mx-auto w-full  max-w-[400px]">

    <h1 class=" text-black text-center font-bold text-xl my-3">
      Sign Up
    </h1>

		<form
			@submit.prevent="onSubmit"
			class="flex flex-col gap-y-3 w-full"
		>

    <div>
      <label
        for="user-email"
        class="block mb-2 text-sm font-medium text-gray-900"
      >
        Email
      </label>
      <input
        type="text"
        id="user-email"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
        required
        v-model="formData.email"
      />
    </div>

    <div>
      <label
        for="user-password"
        class="block mb-2 text-sm font-medium text-gray-900 "
      >
        Password
      </label>
      <input
        type="password"
        id="user-password"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
        required
        v-model="formData.password"
      />
    </div>

    <div>
      <label
        for="user-password-confirmation"
        class="block mb-2 text-sm font-medium text-gray-900 "
      >
        Password
      </label>
      <input
        type="password"
        id="user-password-confirmation"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
        required
        v-model="formData.passwordConfirmation"
      />
    </div>

    <button
      type="submit"
      class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
    >
      Log in
    </button>

		</form>
	</div>
</template>

<script setup lang="ts">
import { definePageMeta, reactive, useAuthActions } from '#imports';

definePageMeta({
  middleware: 'not-auth'
})

const formData = reactive({
  email: '',
  password: '',
  passwordConfirmation: ''
})

const { emailPasswordSignUp } = useAuthActions()

const onSubmit = async () => {
	const result = await emailPasswordSignUp(formData)

	console.log('login result', result);
}

</script>
