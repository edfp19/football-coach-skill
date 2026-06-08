# USER_DATA.md Template

Use this structure in the current workspace. Keep it concise and update it when the user provides new data.

```markdown
# Footballer User Data

## Profile
- Language:
- Country/currency:
- Units: metric
- Age: optional
- Sex: optional
- Height cm:
- Weight kg:
- Position:
- Soccer format: 11-a-side / 8-a-side / both
- Level: recreational / amateur / semi-pro / professional

## Current Goal
- Focus:
- Priority:
- Deadline or event:

## Initial State
- Current football routine:
- Current gym routine:
- Current running or conditioning:
- Current diet snapshot:
- Player's read of the problem:

## Pasted Docs Or Notes
Paste raw Markdown, routines, coach notes, or other text here when the user provides it.

## Training Context
- Season phase: pre-season / in-season / off-season / deload / unknown
- Club sessions per week:
- Gym sessions per week:
- Match minutes per week:
- Extra running or conditioning:
- Skipped or added sessions:

## Recovery Context
- Fatigue 1-10:
- Soreness/niggles:
- Sleep average:
- Stress:
- Notes:

## Nutrition Context
- Budget:
- Budget type: hard cap / flexible
- Cooking access:
- Dietary restrictions:
- Allergies:
- Disliked foods:
- Foods not to suggest:
- Meal timing constraints:

## Weekly Updates
### YYYY-MM-DD
- Weight kg:
- Club sessions completed:
- Gym sessions completed:
- Match minutes:
- Training minutes:
- Fatigue 1-10:
- Soreness/niggles:
- Sleep average:
- Budget or food changes:
- Skipped/extra sessions:
- Coach notes:
```

## Update Rules

- Ask for missing fields only when needed for the user's requested output.
- Treat age and sex as optional.
- Keep all units metric.
- Record food dislikes and "do not suggest" items exactly.
- Add weekly updates as dated entries rather than overwriting history.
- If the user used the HTML intake form, paste or merge the exported Markdown into the relevant sections.
