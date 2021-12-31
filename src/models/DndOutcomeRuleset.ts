import { Modifier } from './Modifier';
import { OutcomeRuleset } from './OutcomeRuleset';

export class DndOutcomeRuleset implements OutcomeRuleset {
  resolve(bonus: number, dice: number[]): number {
    return dice.reduce((p, c) => p + c, bonus);
  }
  generateDicePool(diceToRoll: number[], ...modifiers: Modifier[]): number[] {
    if (modifiers.indexOf('hasAdvantage') >= 0) {
      return diceToRoll.concat(diceToRoll);
    } else {
      return diceToRoll;
    }
  }
}
