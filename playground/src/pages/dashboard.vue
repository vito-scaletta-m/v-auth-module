<template>
	<div class="base-container flex flex-col gap-y-10">

		<div>
			<h2 class=" text-black text-lg">
				Welcome to your dashboard , {{ sessionData?.email }} this is full available info about you:
			</h2>

			<pre class="mt-4">{{ sessionData }}</pre>
		</div>

	</div>
</template>

<script setup lang="ts">
import { definePageMeta, useAuth } from '#imports'

definePageMeta({
  middleware: 'auth'
})

const { sessionData } = useAuth()

</script>

