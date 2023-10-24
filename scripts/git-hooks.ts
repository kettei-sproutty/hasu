import { argv } from "bun";
import fs from "fs";
import path from "path";

const PRE_COMMIT = ["bun --bun run lint-staged"];

const COMMIT_MSG = ["bun --bun commitlint --no -- commitlint --edit ${1}"];

const hooks = {
  "pre-commit": PRE_COMMIT,
  "commit-msg": COMMIT_MSG,
};

const installHooks = async (args: string[]) => {
  const isVerbose = args.includes("--verbose");

  if (isVerbose) console.log("Installing git hooks...");

  const gitDir = path.join(process.cwd(), ".git");
  if (!gitDir)
    throw new Error(".git directory not found, are you in a git repository?");

  const hooksDir = path.join(gitDir, "hooks");
  if (!fs.existsSync(hooksDir)) fs.mkdirSync(hooksDir);

  const hooksFiles = await fs.promises.readdir(hooksDir);

  for (const [hookName, hookCommands] of Object.entries(hooks)) {
    if (isVerbose) console.log(`Installing ${hookName} hook...`);

    const hookFilePath = path.join(hooksDir, hookName);
    const hookFileExists = hooksFiles.includes(hookName);
    const hookFileContent = `#!/bin/sh\n${hookCommands.join("\n")}\n`;

    if (hookFileExists) {
      const hookFile = await fs.promises.readFile(hookFilePath, {
        encoding: "utf-8",
      });
      if (hookFile === hookFileContent) continue;
    }

    await fs.promises.writeFile(hookFilePath, hookFileContent, { mode: 0o755 });
  }
};

installHooks(argv);
