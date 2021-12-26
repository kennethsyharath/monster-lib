import { Modifier } from "./Modifier";

export interface OutcomeRuleset {
  resolve(bonus: number, dice: number[]):number;
  generateDicePool(diceToRoll: number[], ...modifiers: Modifier[]):number[];
}