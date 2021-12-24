import { generateRandomInt } from "../extensions/MathExtensions";
import { OutcomeRuleset } from "./OutcomeRuleset";
import { Result } from "./Result";

export class Roll {
  diceToRoll:number[];

  constructor(
      public bonus:number, 
      public ruleset:OutcomeRuleset,  
      ...dice: number[]
    ) {
    this.diceToRoll = dice;
  }
  
  roll():Result {
    const diceResults = this.diceToRoll.map((sides) => 
        generateRandomInt(1, sides))
    return new Result(
      this.bonus, 
      diceResults, 
      this.ruleset);
  }
}
