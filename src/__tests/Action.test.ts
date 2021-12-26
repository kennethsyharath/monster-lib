import { Action } from "../models/Action";
import { DndOutcomeRuleset } from "../models/DndOutcomeRuleset";
import { OutcomeRuleset } from "../models/OutcomeRuleset";
import { Roll } from "../models/Roll";
import { Modifier } from "../models/Modifier";

let dndRuleset: OutcomeRuleset;
let toHit: Roll;
let damage: Roll;

beforeEach(() => {
  dndRuleset = new DndOutcomeRuleset();
  toHit = new Roll(0, dndRuleset, 20); // 1d20 + 0
  damage = new Roll(0, dndRuleset, 8); // 1d8 + 0
});

// Let's target a DnD attack action for now.

test ('when taking an action, action generates all associated Results', () => {
  const action = new Action(
    [
      ["toHit", toHit], 
      ["damage", damage]
    ]
  );

  const modMap = new Map<string, Modifier[]>();
  modMap.set(
    "toHit", 
    [
      "hasAdvantage", 
      ["critsOn", 20]
    ]
  );

  const results = action.take(modMap);
  expect(results.size).toBe(2);
});
