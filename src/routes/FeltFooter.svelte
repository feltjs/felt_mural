<script lang="ts">
	import GithubLogo from '$routes/GithubLogo.svelte';
</script>

<footer {...$$restProps} class="prose panel padded_lg">
	<a href="https://www.felt.dev/">felt.dev</a>
	<a class="github" href="https://github.com/feltjs/felt-mural" rel="me"><GithubLogo /></a>
</footer>

<style>
	footer {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}
	.github {
		--border_width: var(--border_width_4);
		--border_color: transparent;
		text-decoration: none;
		display: flex;
		border-radius: 50%;
		border: var(--border_width) double var(--border_color);
		margin-top: var(--spacing_xs);
	}
	.social a:hover {
		--border_color: var(--color_1);
	}
</style>
