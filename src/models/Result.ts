import { generateRandomInt } from "../extensions/MathExtensions";
import { OutcomeRuleset } from "./OutcomeRuleset";
import { Modifier } from "./Modifier";

export class Result {
  readonly outcome: number;

  constructor(
      public readonly bonus: number = 0,
      public readonly diceResults: number[] = [],
      public readonly ruleset: OutcomeRuleset = {
        resolve:() => 0,
        generateDicePool:() => []
      }, 
      addtlDiceToRoll: [number, number][] = [],
      ...modifiers: Modifier[]
    ) {
    this.rollAddtlDice(addtlDiceToRoll);
    this.outcome = this.ruleset.resolve(this.bonus, this.diceResults);
  }

  private rollAddtlDice(addtlDiceToRoll:[number,number][]) {
    addtlDiceToRoll.forEach((ad) => {
      let sides = ad[0];
      let count = ad[1];
      for (let i = 1; i <= count; i++) {
        this.diceResults.push(generateRandomInt(1, sides));
      }
    });
  }
}