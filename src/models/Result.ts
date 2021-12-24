import { generateRandomInt } from "../extensions/MathExtensions";
import { OutcomeRuleset } from "./OutcomeRuleset";

export class Result {
  readonly outcome: number;

  constructor(
      public readonly bonus: number = 0,
      public readonly diceResults: number[] = [],
      public readonly ruleset: OutcomeRuleset = {apply:() => 0},
      ...addtlDiceToRoll: [number, number][]
    ) {
    this.rollAddtlDice(addtlDiceToRoll);
    this.outcome = this.ruleset.apply(this.bonus, this.diceResults);
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