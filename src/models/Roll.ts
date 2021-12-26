import { generateRandomInt } from "../extensions/MathExtensions";
import { OutcomeRuleset } from "./OutcomeRuleset";
import { Result } from "./Result";
import { Modifier } from "./Modifier";

export class Roll {
  diceToRoll:number[];

  constructor(
      public bonus:number, 
      public ruleset:OutcomeRuleset,  
      ...dice: number[]
    ) {
    this.diceToRoll = dice;
  }
  
  
  roll(...modifiers: Modifier[]):Result {
    const diceResults = this.ruleset.generateDicePool(
        this.diceToRoll, 
        ...modifiers)
      .map((sides) => generateRandomInt(1, sides));
    return new Result(
      this.bonus, 
      diceResults, 
      this.ruleset);
  }
}
