# Footballer Routine Coach

An open-source coaching instruction pack for evaluating a footballer's current training routine, then adapting the plan around football load, gym work, recovery, and optional nutrition.

Built for amateur, recreational, semi-pro, and professional footballers. The default use case is simple: collect the current football routine, gym routine, body data, fatigue, minutes, and what feels off. The coach evaluates the current routine, keeps what works, changes what does not, and only brings nutrition in when it supports the routine.

The skill avoids private-chef assumptions, supplement-heavy plans, crash dieting, rehab protocols, and generic advice when the player provides an actual routine.

## Open Standard

The project uses plain files:

- `SKILL.md` for the agent instructions
- `assets/intake-form.html` for the standalone intake form
- `references/*.md` for templates and workflow rules
- `footballer-coach/USER_DATA.md` for player state
- `footballer-coach/MEMORY.md` for evidence and user-specific memory
- `footballer-coach/outputs/` for saved routines

Any agent, app, or workflow can use the standard: read `SKILL.md`, create the `footballer-coach/` workspace folder, keep `USER_DATA.md` and `MEMORY.md` current, and write outputs as normal Markdown or document files.

The repository is MIT licensed.

## What It Does

- Evaluates the player's current football, gym, conditioning, and nutrition routine.
- Says what to keep, what to change, what to remove, and what to monitor.
- Adds nutrition support when it matters, using metric units.
- Adapts to 11-a-side and 8-a-side football.
- Accounts for club training, gym work, match minutes, skipped sessions, match calendar, rest windows, and season phase.
- Supports pre-season, in-season, off-season, and deload contexts.
- Asks for the output focus before producing a plan.
- Gives pros and cons when there is a real tradeoff.
- Steers toward recovery and injury-risk reduction when fatigue, soreness, or minutes are high.
- Adapts to the user's budget, country, currency, cooking access, restrictions, and disliked foods.
- Responds in the user's language of choice when known.
- Keeps local workspace memory through `USER_DATA.md` and `MEMORY.md`.

## Main Outputs

The skill can help with:

- Routine evaluation
- Training adaptation
- Recovery and injury-risk checks
- Optional diet guidance
- Optional match-day nutrition

The main focus is routine evaluation. Nutrition is support, not the point of the intake.

## What It Refuses To Do

The skill explicitly avoids:

- Medical diagnosis
- Injury rehab plans
- Eating disorder coaching
- Aggressive cutting or bulking
- Dehydration or unsafe weight manipulation
- Banned substance advice
- Supplement-heavy plans

Medical, recurring, severe, or risky cases are routed to a qualified professional.

## User Data

The workflow keeps a `USER_DATA.md` file in a workspace folder named:

```text
footballer-coach/
```

That file tracks:

- Language preference
- Country and currency
- Height and weight
- Optional age and sex
- Position and level
- Soccer format
- Season phase
- Club sessions
- Gym sessions
- Last match and next match
- Kickoff time and expected match minutes
- Match and training minutes
- Fixed training days, rest days, travel, and schedule constraints
- Fatigue
- Soreness or niggles
- Sleep
- Budget
- Cooking access
- Allergies and restrictions
- Disliked foods and foods not to suggest
- Weekly updates

The point is not to make the user write an essay. Weekly updates should stay short.

## Memory

The skill also expects a `MEMORY.md` file in the same workspace folder.

It keeps two things separate:

- Academic or evidence memory
- User-specific coaching memory

Evidence memory is for academic links, consensus statements, institutional sources, summaries, and practical takeaways. User-specific memory is for things like "do not suggest eggs", budget constraints, adherence notes, and what worked before.

A compatible agent reads `MEMORY.md` before browsing and researches again only when memory is missing, stale, contradicted, local/current, or the user asks for latest guidance.

Before coaching, the workflow reads `footballer-coach/USER_DATA.md` and `footballer-coach/MEMORY.md`. After coaching, it updates both files with stable new information.

## Intake Form

The skill includes:

```text
assets/intake-form.html
```

It is a self-contained static HTML form. No server needed.

On first use, the workflow creates:

```text
footballer-coach/
  intake-form.html
  USER_DATA.md
  MEMORY.md
```

The intake form lives at `footballer-coach/intake-form.html`, so the skill install directory does not need to be opened.

Tabs:

- Basics
- Match Week
- Load Check
- Output

The form is intentionally short and mostly multiple choice, aiming for a useful first evaluation in under five minutes. It asks what the player feels they lack right now, then captures basics, match timing, expected minutes, recent match load, team/gym/conditioning load, fatigue, soreness, sleep, the biggest weekly constraint, and one optional paste box for the current routine or coach notes. It exports Markdown that can be pasted into `footballer-coach/USER_DATA.md` or sent to any compatible agent or coaching workflow.

The intake form is offered by default when `USER_DATA.md` is missing or when the user asks for a routine, weekly, diet, or training update. Chat intake is still available for quick updates.

If an embedded browser blocks clipboard or download actions, use the `Select Markdown` button and copy the selected text manually.

After finishing a routine evaluation or new routine, the workflow asks whether the result should be saved as a file, for example Markdown or a Word-style document. Saved routines go under `footballer-coach/outputs/`.

## References

The skill includes focused reference files:

```text
references/user-data-template.md
references/memory-template.md
references/coaching-workflow.md
references/safety-boundaries.md
```

These keep `SKILL.md` readable while still giving the workflow enough structure to behave consistently.

## Installation

### npx

Install directly from GitHub:

```bash
npx github:edfp19/football-coach-skill install claude
```

Show installer help:

```bash
npx github:edfp19/football-coach-skill help
```

Targets:

```bash
npx github:edfp19/football-coach-skill install claude
npx github:edfp19/football-coach-skill install claude-project
npx github:edfp19/football-coach-skill install opencode
npx github:edfp19/football-coach-skill install local
```

- `claude` installs a personal Claude skill under `~/.claude/skills/footballer-nutrition-coach`.
- `claude-project` installs a project skill under `.claude/skills/footballer-nutrition-coach`.
- `opencode` installs the pack under `.footballer-routine-coach/` and adds a marked section to `AGENTS.md`.
- `local` copies the instruction pack into `./footballer-nutrition-coach` by default, or into the directory passed after `local`.

Use `--dry-run` to preview and `--force` to overwrite existing files:

```bash
npx github:edfp19/football-coach-skill install claude --dry-run
npx github:edfp19/football-coach-skill install claude --force
```

### Clone

Clone or download the repository wherever the target agent or workflow reads instruction packs. If the tool expects a skill folder name, use `footballer-nutrition-coach`.

```bash
git clone https://github.com/edfp19/football-coach-skill.git footballer-nutrition-coach
```

### Manual Install

Download the repo as a ZIP, extract it, rename the extracted folder to:

```text
footballer-nutrition-coach
```

## Usage

Use the repo as a portable agent instruction pack:

1. Provide the agent with `SKILL.md`.
2. Point it to `references/coaching-workflow.md`.
3. Use `assets/intake-form.html` for intake, or paste the exported Markdown directly.
4. Keep player state in `footballer-coach/USER_DATA.md`.
5. Keep evidence and long-term user memory in `footballer-coach/MEMORY.md`.
6. Save finished routines in `footballer-coach/outputs/`.

Example prompt:

```text
Use the footballer routine coach. I weigh 74 kg, I am in season, I skipped gym today, and I played 90 minutes. Evaluate my routine and tell me what to keep or change.
```

## Claude Tutorial

Claude can use this as a normal instruction pack.

1. Clone or download this repository.
2. Open a conversation with Claude.
3. Attach or paste `SKILL.md`.
4. Attach or paste `references/coaching-workflow.md`.
5. For structured intake, open `assets/intake-form.html`, fill it in, export Markdown, and paste that into Claude.
6. Ask Claude to maintain `footballer-coach/USER_DATA.md` and `footballer-coach/MEMORY.md` as plain Markdown files.

Prompt:

```text
Use this footballer routine coach instruction pack. Read SKILL.md and references/coaching-workflow.md. Evaluate my current routine first; do not give generic advice.
```

For Claude Code, keep the repository as a project folder. `CLAUDE.md` points Claude Code to the main instructions, and `SKILL.md` contains the coaching standard.

Claude Code project flow:

```bash
git clone https://github.com/edfp19/football-coach-skill.git footballer-nutrition-coach
cd footballer-nutrition-coach
claude
```

Then prompt:

```text
Use the local footballer routine coach. Read CLAUDE.md and SKILL.md, create footballer-coach/ if needed, and evaluate my current routine.
```

## OpenCode Tutorial

OpenCode can use the repo through `AGENTS.md`, a common instruction file for coding agents.

1. Clone the repository.
2. Open the folder in OpenCode.
3. OpenCode should read `AGENTS.md`.
4. `AGENTS.md` points it to `SKILL.md`, the workflow references, the intake form, and the memory files.
5. Ask it to create `footballer-coach/` on first use.

```bash
git clone https://github.com/edfp19/football-coach-skill.git footballer-nutrition-coach
cd footballer-nutrition-coach
opencode
```

Prompt:

```text
Use AGENTS.md. Start the footballer routine coach, create footballer-coach/ if needed, and evaluate my current training routine before suggesting changes.
```

The expected workspace state after first use:

```text
footballer-coach/
  intake-form.html
  USER_DATA.md
  MEMORY.md
  outputs/
```
