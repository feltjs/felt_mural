# @feltjs/felt-mural

> a proof-of-concept Svelte component for collaborative drawing using
> [Felt](https://github.com/feltjs/felt)

`Mural` is a proof-of-concept demonstrating
how [felt](https://github.com/feltjs/felt)
can be leveraged by any web frontend, including static sites,
to create collaborative experiences scoped to the people in your Felt communities.
Eventually we hope to make this a polished production-ready tool,
but for now it's on the backburner.

TODO: include a video demo

deployed: [mural.felt.dev](https://mural.felt.dev/)

## usage

```bash
npm i -D @feltjs/felt-mural
```

```ts
// use deep imports:
import Mural from '@feltjs/felt-mural/Mural.svelte';
```

See [the library](https://mural.felt.dev/library) for early docs and demos,
and [`src/lib`](src/lib) for the available modules.

## build

```bash
npm run build
# or
gro build
```

See [Gro's build docs](https://github.com/grogarden/gro/blob/main/src/lib/docs/build.md) for more.

## test

```bash
gro test
gro test filepattern1 filepatternB
gro test -- uvu --forwarded_args 'to uvu'
```

## deploy

[Deploy](https://github.com/grogarden/gro/blob/main/src/lib/docs/deploy.md)
(build, commit, and push) to the `deploy` branch, e.g. for GitHub Pages:

```bash
npm run deploy
# or
gro deploy
```

## credits 🐢<sub>🐢</sub><sub><sub>🐢</sub></sub>

[Svelte](https://github.com/sveltejs/svelte) ∙
[SvelteKit](https://github.com/sveltejs/kit) ∙
[Vite](https://github.com/vitejs/vite) ∙
[esbuild](https://github.com/evanw/esbuild) ∙
[Gro](https://github.com/grogarden/gro) ∙
[uvu](https://github.com/lukeed/uvu) ∙
[TypeScript](https://github.com/microsoft/TypeScript) ∙
[ESLint](https://github.com/eslint/eslint) ∙
[Prettier](https://github.com/prettier/prettier) ∙
[Fuz](https://github.com/fuz-dev/fuz) ∙
[@grogarden/util](https://github.com/grogarden/util)
& [more](package.json)

## license [🐦](https://wikipedia.org/wiki/Free_and_open-source_software)

public domain ⚘ [The Unlicense](license)
