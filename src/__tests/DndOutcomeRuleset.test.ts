import { DndOutcomeRuleset } from "../models/DndOutcomeRuleset";
import { Roll } from "../models/Roll";

test('Result generates correct result when applying ruleset', () => {
  const roll = new Roll(2, new DndOutcomeRuleset(), 1, 1, 1, 1, 1);
  const res = roll.roll();
  expect(res.outcome).toEqual(7);
});