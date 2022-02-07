<script lang="ts">
	import type { ICategory } from '$lib/interfaces';
	export let category: ICategory;
</script>

<span class="text-white text-xs rounded-2xl font-semibold px-2 py-1 bg-cyan-500 align-middle"
	>{category.title}</span
>
