# svelte-eui-icons

[![NPM][npm]][npm-url]
[![Build][build]][build-badge]

> [Elastic EUI](https://github.com/elastic/eui) SVG icons as Svelte components.

Try it in the [Svelte REPL](https://svelte.dev/repl/f5d1c006b8e444ea91274036261976eb?version=3).

## Install

This library requires svelte version >=3.20.x because it uses `$$restProps`.

```bash
yarn add -D svelte-eui-icons
```

## Usage

```html
<script>
  import Alert from "svelte-eui-icons/lib/Alert";
</script>

<Alert />
```

Refer to [ICON_INDEX.md](ICON_INDEX.md) for a list of supported icons.

## API

`$$restProps` are forwarded to the `svg` element.

### Forwarded events

- on:click
- on:mouseover
- on:mouseenter
- on:mouseout
- on:keydown

## [Changelog](CHANGELOG.md)

## License

[MIT](LICENSE)

[npm]: https://img.shields.io/npm/v/svelte-eui-icons.svg?color=blue
[npm-url]: https://npmjs.com/package/svelte-eui-icons
[build]: https://travis-ci.com/metonym/svelte-eui-icons.svg?branch=master
[build-badge]: https://travis-ci.com/metonym/svelte-eui-icons
