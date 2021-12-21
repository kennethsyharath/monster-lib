import {Roll} from "../models/Roll"

// Can instantiate Roll
test('Can instantiate Roll', () => {
  expect(new Roll()).not.toBeNull();
});