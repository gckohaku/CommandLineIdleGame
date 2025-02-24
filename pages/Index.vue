<script lang="ts" setup>
definePageMeta({
	alias: ["/"],
});

onBeforeMount(async () => {
	await indexedDbPreparation();
});
</script>

<template>
	<div class="page-wrapper">
		<CommandLineArea />
	</div>
	
</template>

<style>
.page-wrapper {
	height: 100dvh;
}
</style>