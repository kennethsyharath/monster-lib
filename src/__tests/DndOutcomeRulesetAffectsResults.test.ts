import { Action } from "../models/Action"
import { DndOutcomeRuleset } from "../models/DndOutcomeRuleset";
import { Modifier } from "../models/Modifier";
import { OutcomeRuleset } from "../models/OutcomeRuleset";
import { Roll } from "../models/Roll";

let dndRuleset: OutcomeRuleset;
let toHit: Roll;
let damage: Roll;

beforeEach(() => {
  dndRuleset = new DndOutcomeRuleset();
  toHit = new Roll(0, dndRuleset, 20); // 1d20 + 0
  damage = new Roll(0, dndRuleset, 8); // 1d8 + 0
});

test('DndOutcomeRuleset applies advantage', () => {
  const action = new Action(
    [
      ["toHit", toHit],
    ]
  );

  const modMap = new Map<string, Modifier[]>();
  modMap.set(
    "toHit", 
    ["hasAdvantage"]
  );

  const results = action.take(modMap);
  const toHitResults = results.get("toHit");
  
  expect(toHitResults).toBeDefined();
  if (toHitResults) {
    expect(toHitResults.diceResults.length).toBe(2);
  }
});