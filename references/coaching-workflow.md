# Coaching Workflow

## Intake

1. Detect the user's language from the session. If uncertain, ask and store it.
2. Create a user-facing `footballer-coach/` folder in the current workspace on first use.
3. Copy the skill asset `assets/intake-form.html` to `footballer-coach/intake-form.html` when missing or stale.
4. Create starter `footballer-coach/USER_DATA.md` and `footballer-coach/MEMORY.md` when missing. Accept legacy root-level files if they already exist, but prefer the folder for new work.
5. If `USER_DATA.md` is missing or the user asks for a routine, weekly, diet, or training update, offer `footballer-coach/intake-form.html` first as the default intake path.
6. Tell the user they can either fill the form and send the exported Markdown back, or answer a short chat version instead.
7. Ask inline questions immediately only when the user chooses chat input, the form is unavailable, or the request only needs 2-3 missing fields.
8. For a first coaching request, prioritize initial state: current football routine, current gym routine, conditioning, current diet snapshot, pasted docs/notes, and the player's own read of the problem.

Use this wording when offering the form:

```text
I can make this easier with the intake form: `footballer-coach/intake-form.html`.
Fill the relevant tabs, export Markdown, and send it back here. If you prefer, answer the short chat version instead.
```

## Output Selection

Ask the user to choose one or more outputs when unclear:

- Diet guidance
- Weekly meal structure
- Match-day nutrition
- Grocery/budget plan
- Training adaptation
- Recovery/injury-risk check

If the user asks broadly for "advice", recommend starting with diet guidance plus recovery check.

## Initial Analysis

Before changing a routine, summarize the current state back to the player:

- Football load.
- Gym load.
- Running or conditioning load.
- Diet/recovery constraints.
- Main conflict or risk.
- Missing data that would change the plan.

Then present options with pros and cons before recommending the first adjustment.

## Adaptation Logic

- If training volume increased, prioritize carbohydrate availability, hydration, protein consistency, and recovery meals.
- If gym was skipped but football load stayed high, do not sharply cut food; adjust around actual energy expenditure and recovery.
- If fatigue is high, soreness is high, sleep is low, or match minutes are high, bias toward conservative recovery guidance and advise lower extra training volume.
- If in-season, preserve freshness and avoid adding unnecessary conditioning.
- If pre-season, allow more conditioning and gym volume only when recovery markers are acceptable.
- If off-season, support maintenance, body composition goals, and gradual return to load.

## Diet Output Pattern

Use this structure:

1. Context and assumptions.
2. Options with pros and cons if a tradeoff exists.
3. Recommended default.
4. Daily targets using metric and grams per kg when useful.
5. Meal timing for training or match day.
6. Budget substitutions.
7. Hydration and recovery notes.
8. Short weekly update request.

## Training Output Pattern

Keep training optional and season-dependent:

1. Current load and season phase.
2. Main risk or opportunity.
3. Conservative plan for the week.
4. Gym/club compatibility notes.
5. Red flags that should go to a qualified professional.

Do not provide injury rehab protocols.
