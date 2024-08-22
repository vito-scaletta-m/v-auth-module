<template>
	<div class="base-container flex flex-col gap-y-10">

		<div>
			<h2 class=" text-black text-lg">
				Full available info about you:
			</h2>

			<pre class="mt-4">{{ authUser }}</pre>
		</div>

	</div>
</template>

<script setup lang="ts">
import { definePageMeta } from '#imports'
// import { useAuth } from '#imports';

definePageMeta({
  middleware: 'auth'
})

const { authUser } = useAuth()

</script>

