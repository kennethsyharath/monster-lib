import { OutcomeRuleset } from "./OutcomeRuleset";

export class DndOutcomeRuleset implements OutcomeRuleset{
  apply(bonus: number, dice: number[]): number {
    return dice.reduce((p, c) => p + c, bonus);
  }
}