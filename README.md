# Declaw Pirate style plugin

A small, functioning third-party [Declaw](https://github.com/jzlosman/declaw)
plugin. It adds one namespaced style, `pirate/pirate`, without importing Pi
internals, making model calls, or changing the host agent's context.

This repository is intentionally minimal. Use it as a reference when building a
style plugin or as a starting point for your own style package.

## Install

With Declaw already installed:

```sh
pi install npm:declaw-style-pirate
```

Reload Pi, then verify the plugin:

```text
/declaw list
/declaw style
/declaw pirate/pirate
```

The plugin should appear under the `pirate` plugin and expose the
`pirate/pirate` style.

## Development

```sh
socket-npm install --ignore-scripts
npm test
```

The test uses a fake protected answer. It does not call a model or access Pi
session context.

## How it works

- `style.ts` declares the plugin metadata, instructions, and protected-answer payload.
- `index.ts` registers the plugin through `pi-declaw/plugin-api`.
- The host owns preservation, model access, lifecycle, and display-only publication.

The plugin receives already-protected text and passes it through exactly once.
It cannot rewrite the original conversation or feed output back into the agent.

See Declaw's [`PLUGIN_GUIDE.md`](https://github.com/jzlosman/declaw/blob/main/PLUGIN_GUIDE.md)
for the complete contract.
