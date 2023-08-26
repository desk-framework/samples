import { spawnSync } from "child_process";
import * as esbuild from "esbuild";

const watchMode = process.argv.includes("--watch");

let ctx = await esbuild.context({
  entryPoints: ["src/app.test.ts"],
  bundle: true,
  format: "esm",
  packages: "external",
  outdir: ".test-run",
  plugins: [
    {
      name: "run",
      setup(build) {
        build.onEnd((result) => {
          if (!result.errors?.length) {
            if (watchMode) {
              console.clear();
              console.log("Press any key to quit\n");
            }
            console.log("=== Running tests...");
            let ret = spawnSync("node", [".test-run/app.test"], {
              stdio: ["ignore", "inherit", "inherit"],
            });
            if (!watchMode) {
              process.exit(ret.status);
            }
          }
        });
      },
    },
  ],
});
await ctx.watch();
process.stdin.setRawMode(true);
process.stdin.on("data", () => {
  process.exit(watchMode ? 0 : 1);
});
