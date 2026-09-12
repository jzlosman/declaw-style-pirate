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
