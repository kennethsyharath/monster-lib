import { DndOutcomeRuleset } from '../models/DndOutcomeRuleset';
import { Result } from '../models/Result';

test('has outcome', () => {
  expect(new Result().outcome).toBeDefined();
});

test('bonus can be set at construction ', () => {
  const res = new Result(10);
  expect(res.bonus).toEqual(10);
});

test('can assign additional dice to roll', () => {
  const res = new Result(1, [], new DndOutcomeRuleset(), [[3, 4]]);
  expect(res.diceResults.length).toEqual(4);
});
