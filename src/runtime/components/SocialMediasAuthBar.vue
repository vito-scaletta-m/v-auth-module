<template>
	<div>
		<div class=" col-span-12 flex justify-between gap-x-2">
			<template
				v-for="item in socialMediasData"
				:key="item.id"
			>
				<Button
					label="Contrast" 
					severity="contrast"
					type="button"
					class="w-full flex items-center"
					@click="item.action()"
				>
					<i 
						class="pi" 
						:class="[`pi-${item.icon}`]"
						style="font-size: 1rem"
					></i>


					{{ item.text }}
				</Button>
			</template>
		</div>
	</div>
</template>

<script setup lang="ts">
import Button from 'primevue/button';
import { useAuthActions } from '../composables';

const {  googleLogIn, githubLogIn } = useAuthActions()

const socialMediasData = [
	{
		id: 'google',
		action: googleLogIn,
		icon: 'google',
		text: 'Google'
	},
	{
		id: 'github',
		action: githubLogIn,
		icon: 'github',
		text: 'Github'
	}
]

</script>