import type { DeclawStylePlugin } from "pi-declaw/plugin-api";

export const piratePlugin: DeclawStylePlugin = {
  apiVersion: 1,
  id: "pirate",
  name: "Pirate styles",
  version: "0.1.0",
  status: "active",
  styles: [{
    id: "pirate/pirate",
    name: "Pirate",
    description: "A theatrical pirate voice that keeps the answer's meaning intact.",
    relationship: "Local preset",
    instructions: [
      "Rewrite the answer in a vivid, theatrical pirate voice.",
      "Use pirate vocabulary and rhythm when it does not obscure the original meaning.",
      "Do not add nautical facts, jokes, promises, commands, or recommendations.",
      "Keep the original speaker, certainty, conditions, optionality, procedure order, and table structure.",
    ].join("\n"),
    buildUserPayload: (protectedAnswer) =>
      JSON.stringify({ assistantMessage: protectedAnswer }),
  }],
};
