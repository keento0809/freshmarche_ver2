import { defineConfig } from "vitest/config";
import tsconfigPaths from "vite-tsconfig-paths";
import react from "@vitejs/plugin-react";

export default defineConfig({
  // resolve: {
  //   alias: {
  //     "@": path.resolve(__dirname, "./src"),
  //   },
  // },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./setup.ts",
  },
  plugins: [tsconfigPaths(), react()],
});
