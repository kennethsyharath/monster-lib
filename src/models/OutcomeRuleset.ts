export interface OutcomeRuleset {
  apply(bonus: number, dice: number[]):number;
}