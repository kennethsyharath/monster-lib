import {Roll} from "../models/Roll"
import {Result} from "../models/Result";
import { DndOutcomeRuleset } from "../models/DndOutcomeRuleset";

test('can set bonus at construction', () => {
  expect((new Roll(10, new DndOutcomeRuleset())).bonus).toBe(10);
});

test('can set dice at construction', () => {
  const roll = new Roll(0, new DndOutcomeRuleset(), 1, 2, 3);
  expect(roll.diceToRoll).toEqual([1,2,3]);
})

test('roll method creates Result', () => {
  const roll = new Roll(1, new DndOutcomeRuleset(), 1, 2, 3);
  expect(roll.roll() instanceof Result).toBe(true);
})
