<script lang="ts">
	import type { Category } from '$lib/generated/graphql';
	export let category: Category;
</script>

<span class="text-white text-xs rounded-2xl font-semibold px-2 py-1 bg-cyan-500 align-middle"
	>{category.title}</span
>
