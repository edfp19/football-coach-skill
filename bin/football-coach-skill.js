#!/usr/bin/env node

const fs = require("fs");
const os = require("os");
const path = require("path");

const SKILL_NAME = "footballer-nutrition-coach";
const ROOT = path.resolve(__dirname, "..");

const PAYLOAD = [
  "SKILL.md",
  "README.md",
  "CLAUDE.md",
  "AGENTS.md",
  "LICENSE",
  "agents",
  "assets",
  "references"
];

function usage() {
  console.log(`Footballer Routine Coach installer

Usage:
  npx github:edfp19/football-coach-skill install claude
  npx github:edfp19/football-coach-skill install claude-project
  npx github:edfp19/football-coach-skill install opencode
  npx github:edfp19/football-coach-skill install local [directory]

Options:
  --force    Overwrite existing files
  --dry-run  Show what would happen without writing files

Targets:
  claude          Install as a personal Claude skill at ~/.claude/skills/${SKILL_NAME}
  claude-project  Install as a project Claude skill at ./.claude/skills/${SKILL_NAME}
  opencode        Install pack under ./.footballer-routine-coach and add an AGENTS.md section
  local           Copy the instruction pack to ./footballer-nutrition-coach, or to [directory] if provided
`);
}

function fail(message) {
  console.error(`Error: ${message}`);
  process.exit(1);
}

function hasFlag(flag) {
  return process.argv.includes(flag);
}

function ensureInsidePackage() {
  const missing = PAYLOAD.filter((item) => !fs.existsSync(path.join(ROOT, item)));
  if (missing.length) {
    fail(`package is missing required files: ${missing.join(", ")}`);
  }
}

function mkdirp(dir, dryRun) {
  if (dryRun) {
    console.log(`mkdir ${dir}`);
    return;
  }
  fs.mkdirSync(dir, { recursive: true });
}

function copyEntry(src, dest, options) {
  const { force, dryRun } = options;
  if (!fs.existsSync(src)) return;

  if (fs.existsSync(dest) && !force) {
    console.log(`skip existing ${dest}`);
    return;
  }

  if (dryRun) {
    console.log(`copy ${src} -> ${dest}`);
    return;
  }

  const stat = fs.statSync(src);
  if (stat.isDirectory()) {
    fs.cpSync(src, dest, { recursive: true, force });
  } else {
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    fs.copyFileSync(src, dest);
  }
}

function copySkillPack(dest, options) {
  mkdirp(dest, options.dryRun);
  for (const item of PAYLOAD) {
    copyEntry(path.join(ROOT, item), path.join(dest, item), options);
  }
}

function appendAgentsSection(projectRoot, packDir, options) {
  const agentsPath = path.join(projectRoot, "AGENTS.md");
  const markerStart = "<!-- footballer-routine-coach:start -->";
  const markerEnd = "<!-- footballer-routine-coach:end -->";
  const relativeSkill = path.relative(projectRoot, path.join(packDir, SKILL_NAME, "SKILL.md")).replace(/\\/g, "/");
  const relativeWorkflow = path.relative(projectRoot, path.join(packDir, SKILL_NAME, "references", "coaching-workflow.md")).replace(/\\/g, "/");
  const section = `${markerStart}

## Footballer Routine Coach

Use \`${relativeSkill}\` as the main instruction file for football routine evaluation.
Use \`${relativeWorkflow}\` for the coaching workflow.

Create and maintain:

\`\`\`text
footballer-coach/
  intake-form.html
  USER_DATA.md
  MEMORY.md
  outputs/
\`\`\`

Evaluate the player's current routine before suggesting changes.

${markerEnd}
`;

  if (options.dryRun) {
    console.log(`update ${agentsPath}`);
    return;
  }

  if (!fs.existsSync(agentsPath)) {
    fs.writeFileSync(agentsPath, `# Project Instructions\n\n${section}`, "utf8");
    return;
  }

  const current = fs.readFileSync(agentsPath, "utf8");
  if (current.includes(markerStart) && current.includes(markerEnd)) {
    const pattern = new RegExp(`${escapeRegExp(markerStart)}[\\s\\S]*?${escapeRegExp(markerEnd)}`);
    fs.writeFileSync(agentsPath, current.replace(pattern, section.trim()), "utf8");
    return;
  }

  fs.writeFileSync(agentsPath, `${current.trim()}\n\n${section}`, "utf8");
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function installClaude(options) {
  const dest = path.join(os.homedir(), ".claude", "skills", SKILL_NAME);
  copySkillPack(dest, options);
  console.log(`Installed Claude personal skill: ${dest}`);
}

function installClaudeProject(options) {
  const dest = path.resolve(process.cwd(), ".claude", "skills", SKILL_NAME);
  copySkillPack(dest, options);
  console.log(`Installed Claude project skill: ${dest}`);
}

function installOpenCode(options) {
  const projectRoot = process.cwd();
  const packRoot = path.join(projectRoot, ".footballer-routine-coach");
  const dest = path.join(packRoot, SKILL_NAME);
  copySkillPack(dest, options);
  appendAgentsSection(projectRoot, packRoot, options);
  console.log(`Installed OpenCode instruction pack: ${dest}`);
  console.log("Updated project AGENTS.md");
}

function installLocal(args, options) {
  const requested = args[2] || SKILL_NAME;
  const dest = path.resolve(process.cwd(), requested);
  copySkillPack(dest, options);
  console.log(`Installed local instruction pack: ${dest}`);
}

function main() {
  ensureInsidePackage();

  const args = process.argv.slice(2).filter((arg) => !arg.startsWith("--"));
  const command = args[0] || "help";
  const target = args[1];
  const options = {
    force: hasFlag("--force"),
    dryRun: hasFlag("--dry-run")
  };

  if (command === "help" || command === "--help" || command === "-h") {
    usage();
    return;
  }

  if (command !== "install") {
    fail(`unknown command "${command}"`);
  }

  if (!target) {
    usage();
    fail("missing install target");
  }

  if (target === "claude") installClaude(options);
  else if (target === "claude-project") installClaudeProject(options);
  else if (target === "opencode") installOpenCode(options);
  else if (target === "local") installLocal(args, options);
  else fail(`unknown install target "${target}"`);
}

main();
