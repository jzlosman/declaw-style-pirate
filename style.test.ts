import test from "node:test";
import assert from "node:assert/strict";
import { getRegisteredDeclawPlugins, registerDeclawPlugin } from "pi-declaw/plugin-api";
import { piratePlugin } from "./style.ts";

test("Pirate plugin has a stable namespaced style and no side effects", () => {
  registerDeclawPlugin(piratePlugin);
  const registered = getRegisteredDeclawPlugins().find((plugin) => plugin.id === "pirate");
  assert.ok(registered);
  assert.equal(registered.styles[0].id, "pirate/pirate");
  assert.match(registered.styles[0].instructions, /theatrical pirate voice/);
  assert.equal(registered.styles[0].buildUserPayload("Keep `config.json` and 25 seconds."),
    JSON.stringify({ assistantMessage: "Keep `config.json` and 25 seconds." }));
});

test("Pirate prompt encourages expressive rewriting without inventing facts", () => {
  const { instructions } = piratePlugin.styles[0];
  assert.match(instructions, /Recast whole sentences/);
  assert.match(instructions, /Do not merely replace/);
  assert.match(instructions, /nautical metaphors, playful asides, and jokes/);
  assert.match(instructions, /Do not invent factual claims/);
  assert.match(instructions, /Keep technical text .* intact/);
  assert.match(instructions, /Preserve procedure order and table structure/);
  assert.match(instructions, /Voice example/);
  assert.doesNotMatch(instructions, /Do not add nautical facts, jokes/);
});
