import type { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.example.myapp",
  appName: "MyApp",
  webDir: "dist/client",
  server: {
    androidScheme: "https",
  },
};

export default config;