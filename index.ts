import { registerDeclawPlugin } from "pi-declaw/plugin-api";
import { piratePlugin } from "./style.ts";

export default function declawPirate() {
  registerDeclawPlugin(piratePlugin);
}
