# @feltjs/felt-mural

> a Svelte component for collaborative drawing using
> [felt-ui](https://github.com/feltjs/felt-ui)

`Mural` is a [Svelte](https://svelte.dev/) component using
[felt-ui](https://github.com/feltjs/felt-ui)'s design system.
It provides a proof-of-concept demo for collaborative editing using
[felt-server](https://github.com/feltjs/felt-server). (TODO link a demo video)

Longer term, we hope to make this a polished collaborative drawing tool,
but for now it's on the backburner and exists only to demonstrate
how felt-server can be leveraged by any web frontend, including static sites,
to create collaborative experiences scoped to the people in your Felt communities.

deployed: [mural.felt.dev](https://mural.felt.dev/)

## usage

```bash
npm i -D @feltjs/felt-mural
```

```ts
import {Mural} from '@feltjs/felt-mural';
```

See [the library](https://mural.felt.dev/library) for early docs and demos.

## build

```bash
npm run build
# or
gro build
```

See [Gro's build docs](https://github.com/feltjs/gro/blob/main/src/docs/build.md) for more.

## test

```bash
gro test
gro test filepattern1 filepatternB
gro test -- uvu --forwarded_args 'to uvu'
```

See [uvu](https://github.com/lukeed/uvu),
[`src/lib/example.test.ts`](src/lib/example.test.ts),
and [Gro's test docs](https://github.com/feltjs/gro/blob/main/src/docs/test.md) for more.

## deploy

[Deploy](https://github.com/feltjs/gro/blob/main/src/docs/deploy.md)
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
[uvu](https://github.com/lukeed/uvu) ∙
[TypeScript](https://github.com/microsoft/TypeScript) ∙
[ESLint](https://github.com/eslint/eslint) ∙
[Prettier](https://github.com/prettier/prettier) ∙
[felt-ui](https://github.com/feltjs/felt-ui) ∙
[@feltjs/util](https://github.com/feltjs/util) ∙
[Gro](https://github.com/feltjs/gro)
& [more](package.json)

## [🐦](https://wikipedia.org/wiki/Free_and_open-source_software)
