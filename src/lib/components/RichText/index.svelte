<script>
	import PortableText from '@portabletext/svelte';
	import CustomP from './CustomP.svelte';
	import CustomH from './CustomH.svelte';

	export let blocks;
	export let serializers = {
		blockStyles: {
			normal: CustomP,
			h1: CustomH,
			h2: CustomH,
			h3: CustomH,
			h4: CustomH,
			h5: CustomH,
			h6: CustomH
		}
	};
</script>

<PortableText {blocks} {serializers} />
