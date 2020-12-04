import svgr from "@svgr/rollup";
import del from "rollup-plugin-delete";
import esbuild from "rollup-plugin-esbuild";
import externalPeerDeps from "rollup-plugin-peer-deps-external";

export default {
  input: "./src/index.js",
  output: [{ dir: "dist", format: "esm" }],
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
    externalPeerDeps(),
    del({ targets: ["./dist/*"] }),
    svgr(),
  ],
};
