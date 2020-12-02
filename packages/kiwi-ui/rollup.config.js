import del from "rollup-plugin-delete";
import esbuild from "rollup-plugin-esbuild";
import external from "rollup-plugin-peer-deps-external";
import pkg from "./package.json";

export default {
  input: "./src/index.js",
  output: [
    { file: "./dist/index.cjs.js", format: "cjs" },
    { file: "./dist/index.esm.js", format: "esm" },
  ],
  plugins: [
    esbuild({
      include: /\.(js|jsx)$/, // default, inferred from `loaders` option
      exclude: /node_modules/, // default
      minify: process.env.NODE_ENV === "production",
      target: "esnext",
      loaders: {
        ".json": "json",
        ".js": "jsx",
      },
    }),
    external(),
    del({ targets: ["./dist/*"] }),
  ],
  external: Object.keys(pkg.peerDependencies || {}),
};
