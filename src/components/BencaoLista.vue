<script setup lang="ts">
import { ref, computed } from 'vue';
import Search from './Global/Search.vue'
import FilterTag from './Global/FilterTag.vue'
import bencao from '../data/bencao.json'

const search = ref("")
const tagList = ref(["Luz", "Sombra", "Vida", "Morte", "Ordem", "Caos"])
const tag = ref("")

const listSearch = computed(() => {
	if (search.value.length > 0) {
		return bencao.filter((b) => { return b.desc.toUpperCase().includes(search.value.toUpperCase()) || b.title.toUpperCase().includes(search.value.toUpperCase()) })
	}
	return bencao
})

const bencaoFiltro = computed(() => {
	if (tag.value.length > 0) {
		return listSearch.value.filter((b) => { return b.type.toUpperCase().includes(tag.value.toUpperCase()) })
	}
	return listSearch.value
})

</script>

<template>
	<div class="flex flex-col gap-4">
		<h3 class="border-b font-bold mt-6">Lista de Bençãos</h3>
		<div class="flex gap-2">
			<Search v-model:search="search" />
			<FilterTag v-model="tag" :list="tagList" />
		</div>
		<br>
		<div class="grid grid-cols-2 gap-4">
			<div v-for="b in bencaoFiltro" class="border rounded-lg py-2">
				<div class="border-b px-4 py-1 flex justify-between">
					<p>{{ b.title }}</p>
					<div>[{{ b.type }}]</div>
				</div>
				<div class="flex justify-between px-2 pt-1 text-sm">
					<p><strong>Sangue:</strong> {{ b.custe }}</p>
					<p><strong>Requisito:</strong> {{ b.req }}</p>
				</div>
				<p class="text-sm px-2 pt-2">{{ b.desc }}</p>
			</div>
		</div>
	</div>
</template>
