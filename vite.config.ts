import type { UserConfigFn, UserConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import path from "path";

const defineConfig: UserConfigFn = () => {
  const config: UserConfig = {
    plugins: [react(), tsconfigPaths()],
    build: {
      lib: {
        entry: path.resolve(__dirname, "src/lib.ts"),
        name: "MyLib",
        fileName: (format) => `my-lib.${format}.js`,
      },
      rollupOptions: {
        // make sure to externalize deps that shouldn't be bundled
        // into your library
        external: ["react", "react-dom"],
        output: {
          // Provide global variables to use in the UMD build
          // for externalized deps
          globals: {
            react: "React",
          },
        },
      },
    },
  };
  return config;
};

export default defineConfig;
