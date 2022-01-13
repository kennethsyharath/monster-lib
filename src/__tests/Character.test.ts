import { Action, DndOutcomeRuleset, Roll } from "..";
import { Character } from "../models/Character";

test('can assign stat', () => {
  const char = new Character(
    [
      ["strength", 10]
    ], []
  );
  
  expect(char.getStat("strength")).toEqual(10);
});

test('get unknown stat is undefined', () => {
  const char = new Character(
    [
      ["strength", 10]
    ],
    []
  );

  expect(char.getStat("dexterity")).toBeUndefined();
});

test('can update stat value', () => {
  const char = new Character(
    [
      ["strength", 10]
    ],
    []
  );

  char.setStat("strength", 13);

  expect(char.getStat("strength")).toEqual(13);
});

test('updating an undeclared stat fails', () => {
  const char = new Character([], []);

  char.setStat("strength", 13);

  expect(char.getStat("strength")).toBeUndefined();
});

test('can override default behavior of updating undeclared stat', () => {
  const char = new Character([], []);
  
  char.setStat("strength", 13, true);

  expect(char.getStat("strength")).toEqual(13);
});

test('can assign actions', () => {
  const action = new Action([
    [
      'toHit', 
      new Roll(0, new DndOutcomeRuleset(), 20)
    ],
  ])
  
  const char = new Character([], [
    ["attack", action]
  ]);

  expect(char.actions.has("attack")).toBeTruthy();
  expect(char.actions.get("attack")).toEqual(action);
});

test('can perform given action', () => {
  const action = new Action([
    [
      'toHit', 
      new Roll(0, new DndOutcomeRuleset(), 20)
    ],
    [
      'damage',
      new Roll(0, new DndOutcomeRuleset(), 8)
    ]
  ])
  
  const char = new Character([], [
    ["attack", action]
  ]);
  
  const results = char.perform('attack');

  if (results !== undefined) {
    expect(results.size).toEqual(2);
  }
});

test('performing an action not on character returns undefined', () => {
  const char = new Character([], []);

  const results = char.perform('attack');
  expect(results).toBeUndefined();
})