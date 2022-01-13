import { Action } from "./Action";

export class Character {
  stats: Map<string, number> = new Map<string, number>();
  actions: Map<string, Action> = new Map<string, Action>();

  constructor(
    stats: [string, number][],
    actions: [string, Action][]
  ) {
    stats.forEach((cur) => {
      var [statId, value] = cur;
      this.stats.set(statId, value);
    });
    actions.forEach((cur) => {
      var [actionId, action] = cur;
      this.actions.set(actionId, action);
    });
  }

  public getStat(statId:string) {
    return this.stats.get(statId);
  }

  public setStat(statId:string, value:number, 
    overrideExistenceCheck:boolean=false) {
      if (overrideExistenceCheck) {
        this.stats.set(statId, value);
      } else if (this.stats.has(statId)) {
        this.stats.set(statId, value);
      }
  }

  public perform(actionId:string) {
    return this.actions.get(actionId)?.take();
  }
};
