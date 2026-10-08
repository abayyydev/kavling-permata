import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.kavling',
  appName: 'Kavling Permata Sakina',
  webDir: 'dist',
  server: {
    url: 'https://kavling-permata.vercel.app/',
    cleartext: true,
  },
};

export default config;
