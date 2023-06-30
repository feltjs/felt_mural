<script lang="ts">
	import GithubLogo from '$lib/GithubLogo.svelte';
</script>

<footer {...$$restProps} class="prose panel padded_lg">
	<slot>💚</slot>
	<div class="social">
		<a href="https://github.com/feltjs/felt-ui" rel="me">
			<GithubLogo />
		</a>
	</div>
	<p>
		<a href="https://www.felt.dev/">felt.dev</a>
	</p>
	<p>
		<a href="mailto:team@felt.social">team@felt.social</a>
	</p>
</footer>

<style>
	footer {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}
	.social {
		display: flex;
		margin-bottom: var(--spacing_md);
	}
	.social a {
		--border_width: var(--border_width_4);
		--border_color: transparent;
		text-decoration: none;
		display: flex;
		border-radius: 50%;
		border: var(--border_width) double var(--border_color);
	}
	.social a:hover {
		--border_color: var(--color_1);
	}
</style>
