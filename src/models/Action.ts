import { Result, Roll } from '..';
import { Modifier } from './Modifier';

export class Action {
  rolls: Map<string, Roll> = new Map<string, Roll>();

  constructor(rolls: [string, Roll][]) {
    this.initRolls(rolls);
  }

  private initRolls(rolls: [string, Roll][]) {
    rolls.forEach((rollInfo) => {
      const rollId = rollInfo[0];
      const roll = rollInfo[1];
      this.rolls.set(rollId, roll);
    });
  }

  take(modifierMap: Map<string, Modifier[]> = new Map<string, Modifier[]>()) {
    const results = new Map<string, Result>();

    this.rolls.forEach((value, key) => {
      const modifiers = modifierMap.get(key);
      if (modifiers) {
        results.set(key, value.roll(...modifiers));
      } else {
        results.set(key, value.roll());
      }
    });

    return results;
  }
}
