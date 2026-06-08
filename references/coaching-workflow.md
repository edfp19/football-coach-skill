# Coaching Workflow

## Intake

1. Detect the user's language from the session. If uncertain, ask and store it.
2. Before coaching, read `footballer-coach/USER_DATA.md` and `footballer-coach/MEMORY.md` if present.
3. Create a user-facing `footballer-coach/` folder in the current workspace on first use.
4. Copy the skill asset `assets/intake-form.html` to `footballer-coach/intake-form.html` when missing or stale.
5. Create starter `footballer-coach/USER_DATA.md` and `footballer-coach/MEMORY.md` when missing. Accept legacy root-level files if they already exist, but prefer the folder for new work.
6. If the user already provided a routine, notes, or enough weekly-load context, evaluate it immediately and ask only for blocking missing fields.
7. If `USER_DATA.md` is missing, sparse, or the user wants structured intake, offer `footballer-coach/intake-form.html` as the default intake path. The form should be short enough to finish in under five minutes and mostly use multiple choice.
8. Tell the user they can either fill the form and send the exported Markdown back, or answer a short chat version instead.
9. Ask inline questions immediately only when the user chooses chat input, the form is unavailable, or the request only needs 2-3 missing fields.
10. For a first coaching request, prioritize a fast initial assessment: what the player feels they lack, season phase, next match timing, expected minutes, last match load, team sessions, gym sessions, extra conditioning, fatigue, soreness, sleep, and biggest constraint this week. Ask for a pasted routine only as optional context. Ask for diet only when nutrition is requested or clearly relevant.

If using chat instead of the form, ask this compact version:

```text
What do you feel you lack right now?
Season phase:
Next match: today / tomorrow / 2-3 days / 4-7 days / none
Expected minutes:
Last match and minutes:
Team sessions/week:
Gym sessions/week:
Extra conditioning: none / light / moderate / hard
Fatigue: fresh / normal / high / cooked
Soreness: none / light / moderate / high / sharp or recurring
Sleep: <6 / 6-7 / 7-8 / 8+
Biggest constraint this week:
Optional routine summary:
```

Use this wording when offering the form:

```text
Use the intake form: `footballer-coach/intake-form.html`.
Fill the relevant tabs, export Markdown, and send it back here. Chat answers also work for quick updates.
```

## Output Selection

Ask the user to choose one or more outputs when unclear:

- Routine evaluation
- Training adaptation
- Recovery/injury-risk check
- Optional diet guidance
- Optional match-day nutrition
- Optional grocery/budget plan

If the user asks broadly for "advice" or "coach me", start with routine evaluation plus recovery check. Diet guidance can support that, but it is not the default center of the conversation.

## Initial Analysis

Before changing a routine, summarize the current state back to the player:

- Football load.
- Gym load.
- Running or conditioning load.
- Match calendar: last match, next match, kickoff, expected minutes, and days until match when known.
- Rest and availability constraints.
- Diet constraints only when relevant.
- Main conflict or risk.
- Missing data that would change the plan.

Then give a verdict:

- Keep as is.
- Keep with small changes.
- Modify substantially.
- Pause or escalate because the risk is outside the skill's scope.

Avoid generic advice. Every recommendation should refer to something in the player's current routine, constraints, or stated goal.

Use this structure:

1. Current state.
2. Match-week map.
3. Planned vs completed comparison when prior data exists.
4. What is working.
5. What is risky or mismatched.
6. What to keep.
7. What to change now.
8. What to monitor next week.
9. Optional nutrition support tied to the routine.

## Match Calendar Rules

Use match day minus/plus language when it clarifies the week:

- `MD`: match day.
- `MD-1`: the day before the match.
- `MD-2` and `MD-3`: preparation days where sharper work may fit if recovery is good.
- `MD+1`: the day after the match, usually recovery-biased.
- `MD+2` and `MD+3`: rebuild days, adjusted by minutes, soreness, sleep, and next match timing.

If last match or next match timing is unknown, ask for it before rewriting the whole week unless the user only needs a small adjustment.

When the player had high minutes, high fatigue, poor sleep, travel, or a match inside the next 48-72 hours, default to protecting freshness:

- Move or reduce heavy lower-body gym work.
- Avoid adding extra conditioning.
- Keep tactical/team work if fixed, but reduce optional load.
- Keep food timing familiar close to kickoff.
- Use nutrition to support recovery only if it helps the routine question.

Do not force a change when the routine already respects the match calendar. Say what is working and give monitoring rules.

## Finish And Save

After finishing a routine evaluation or new routine, ask:

```text
Save this as a file? Options: Markdown, a Word-style document, or another requested format.
```

If the user says yes, save the file under `footballer-coach/outputs/`. Use Markdown by default when the user does not specify a format.

After every substantive coaching turn, update `footballer-coach/USER_DATA.md` and `footballer-coach/MEMORY.md` with any new stable data, weekly load, preferences, constraints, and useful user-specific learnings.

## Adaptation Logic

- Compare before adapting:
  - planned football/gym/conditioning vs completed
  - last recommendation vs actual adherence
  - expected match minutes vs actual minutes
  - fatigue, soreness, and sleep trend
  - then decide keep, reduce, shift, or progress
- If training volume increased, prioritize carbohydrate availability, hydration, protein consistency, and recovery meals.
- If gym was skipped but football load stayed high, do not sharply cut food; adjust around actual energy expenditure and recovery.
- If fatigue is high, soreness is high, sleep is low, or match minutes are high, bias toward conservative recovery guidance and advise lower extra training volume.
- If in-season, preserve freshness and avoid adding unnecessary conditioning.
- If pre-season, allow more conditioning and gym volume only when recovery markers are acceptable.
- If off-season, support maintenance, body composition goals, and gradual return to load.
- If the next match is soon, adjust around `MD-1` and `MD` first, then handle the rest of the week.
- If the last match was recent, adjust `MD+1` to `MD+3` based on minutes, fatigue, soreness, and sleep.

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
