// don't import from here, that's handled already
// instead this is just setting types for this folder

import type { config } from "@gtw/ui";

export type AppConfig = typeof config;

declare module "@gtw/ui" {
  // overrides TamaguiCustomConfig so your custom types
  // work everywhere you import `tamagui`
  interface TamaguiCustomConfig extends AppConfig {}
}
