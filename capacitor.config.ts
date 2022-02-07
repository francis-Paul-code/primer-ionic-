/* eslint-disable @typescript-eslint/naming-convention */
import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.primer.ion',
  appName: 'primer',
  webDir: 'www',
  bundledWebRuntime: false,
  server: {
    allowNavigation: [],
  },
  android: {
    allowMixedContent: true,
  },
};

export default config;

