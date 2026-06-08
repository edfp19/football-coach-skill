# Footballer Routine Coach

Use this repository as an agent-neutral instruction pack.

Read `SKILL.md` first, then use:

- `references/coaching-workflow.md` for the routine-evaluation process.
- `references/user-data-template.md` for `footballer-coach/USER_DATA.md`.
- `references/memory-template.md` for `footballer-coach/MEMORY.md`.
- `references/safety-boundaries.md` for refusal and escalation rules.
- `assets/intake-form.html` for the standalone intake form.

Before coaching, read `footballer-coach/USER_DATA.md` and `footballer-coach/MEMORY.md` if they exist.

The main job is routine evaluation: understand the player's current football, gym, and conditioning routine; say what to keep, what to change, what to remove, and what to monitor. Nutrition is optional support.

After a substantive coaching turn, update `footballer-coach/USER_DATA.md` and `footballer-coach/MEMORY.md`.
