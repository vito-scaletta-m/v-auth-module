<template>
  <div>
		<form
			@submit.prevent="onSubmit"
			class="grid-default"
		>
			<input
				name="email"
				placeholder="Email"
				type="email"
        v-model="formData.email"
			/>

			<input
				name="password"
				placeholder="Password"
				type="password"
        v-model="formData.password"
			/>

			<button type="submit">
				Log in
			</button>

		</form>
	</div>
</template>

<script setup lang="ts">
import { definePageMeta, reactive } from '#imports';
// import { useAuthActions } from '#imports';

definePageMeta({
  middleware: 'not-auth'
})

const formData = reactive({
  email: '',
  password: ''
})

const { emailPasswordLogIn } = useAuthActions()

const onSubmit = async () => {

	const result = await emailPasswordLogIn(formData)

	console.log('login result', result);
}

</script>
