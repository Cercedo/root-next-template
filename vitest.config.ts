import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    include: ["src/**/*.{test,spec}.ts(x)?"],
    coverage: {
      include: ["src/**/*.ts", "src/**/*.tsx"],
    },
  },
});
