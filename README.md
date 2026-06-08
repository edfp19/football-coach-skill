# Footballer Nutrition Coach

A Codex skill for evaluating a footballer's current training routine, then adapting the plan around football load, gym work, recovery, and optional nutrition.

It is built for amateur, recreational, semi-pro, and professional footballers. The default use case is simple: give Codex your current football routine, gym routine, body data, fatigue, minutes, and what feels off. It evaluates what you are already doing, keeps what works, changes what does not, and only brings nutrition in when it supports the routine.

No pretending everyone has a private chef. No supplement gospel. No crash dieting. No rehab cosplay.

## What It Does

- Evaluates the player's current football, gym, conditioning, and nutrition routine.
- Says what to keep, what to change, what to remove, and what to monitor.
- Adds nutrition support when it matters, using metric units.
- Adapts to 11-a-side and 8-a-side football.
- Accounts for club training, gym work, match minutes, skipped sessions, and season phase.
- Supports pre-season, in-season, off-season, and deload contexts.
- Asks what output you want before producing a plan.
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

If something sounds medical, recurring, severe, or risky, the skill should tell the user to speak with a qualified professional.

## User Data

The skill expects Codex to keep a `USER_DATA.md` file in a workspace folder named:

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
- Match and training minutes
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

Codex should read `MEMORY.md` before browsing. It should only research again when the memory is missing, stale, contradicted, local/current, or the user asks for latest guidance.

## Intake Form

The skill includes:

```text
assets/intake-form.html
```

It is a self-contained static HTML form. No server needed.

On first use, the skill should create:

```text
footballer-coach/
  intake-form.html
  USER_DATA.md
  MEMORY.md
```

The user should open `footballer-coach/intake-form.html`, not dig through the skill install directory.

Tabs:

- Profile
- Current Routine
- Weekly Load
- Optional Nutrition
- Output Focus

The Initial State tab accepts current football routines, gym routines, conditioning, diet snapshots, pasted docs, Markdown, coach notes, and the player's own read of the problem. The form exports Markdown that can be pasted into `footballer-coach/USER_DATA.md` or given to Codex.

The skill should offer this form by default when `USER_DATA.md` is missing or when the user asks for a routine, weekly, diet, or training update. Chat intake is still allowed, but it should be the fallback, not the first move.

If an embedded browser blocks clipboard or download actions, use the `Select Markdown` button and copy the selected text manually.

## References

The skill includes focused reference files:

```text
references/user-data-template.md
references/memory-template.md
references/coaching-workflow.md
references/safety-boundaries.md
```

These keep `SKILL.md` readable while still giving Codex enough structure to behave consistently.

## Installation

Install it into your Codex skills directory. The repo name can stay `football-coach-skill`, but the installed folder should be named `footballer-nutrition-coach` because that is the skill name.

### Windows PowerShell

```powershell
git clone https://github.com/edfp19/football-coach-skill.git "$env:USERPROFILE\.codex\skills\footballer-nutrition-coach"
```

### macOS or Linux

```bash
git clone https://github.com/edfp19/football-coach-skill.git ~/.codex/skills/footballer-nutrition-coach
```

### Manual Install

Download the repo as a ZIP, extract it, rename the extracted folder to:

```text
footballer-nutrition-coach
```

Then move it into:

```text
~/.codex/skills/
```

Then invoke it with:

```text
$footballer-nutrition-coach
```

Example prompt:

```text
Use $footballer-nutrition-coach. I weigh 74 kg, I am in season, I skipped gym today, and I played 90 minutes. Adapt my diet.
```

## Validation

The skill was structurally checked for:

- Required `SKILL.md`
- Valid skill name
- Frontmatter containing only `name` and `description`
- Required reference files
- Required intake form
- Installed copy under `.codex\skills`
- GitHub-ready copy under `Downloads`

The official `quick_validate.py` script could not run in this environment because the bundled Python runtime is missing `PyYAML`.
