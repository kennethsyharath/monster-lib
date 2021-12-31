import { DndOutcomeRuleset } from '../models/DndOutcomeRuleset';
import { Roll } from '../models/Roll';

test('resolves to correct baseline outcome', () => {
  const bonus = 2;
  const dice = [1, 1, 1, 1, 1];
  const ruleset = new DndOutcomeRuleset();
  expect(ruleset.resolve(bonus, dice)).toEqual(7);
});

test('generates correct baseline dice pool', () => {
  const bonus = 2;
  const dice = [1, 1, 1, 1, 1];
  const ruleset = new DndOutcomeRuleset();
  expect(ruleset.generateDicePool(dice)).toEqual([1, 1, 1, 1, 1]);
});
