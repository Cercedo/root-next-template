import path from "path";

import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [react()] as any,
  test: {
    environment: "jsdom",
    include: ["src/**/*.{test,spec}.ts(x)?"],
    coverage: {
      include: ["src/**/*.ts", "src/**/*.tsx"],
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
