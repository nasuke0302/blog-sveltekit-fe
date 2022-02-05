<script>
	import PortableText from '@portabletext/svelte';
	import CustomP from './CustomP.svelte';

	export let blocks;
	export let serializers = {
		blockStyles: {
			normal: CustomP
		}
	};
</script>

<PortableText {blocks} {serializers} />
