import { initializeTimes, updateTimes } from "./Main";

beforeEach(() => {
  global.fetchAPI = jest.fn(() => ["17:00", "18:00", "19:00"]);
});

afterEach(() => {
  delete global.fetchAPI;
});

test("initializeTimes returns the times fetched from the API for today's date", () => {
  const result = initializeTimes();
  expect(global.fetchAPI).toHaveBeenCalledWith(expect.any(Date));
  expect(result).toEqual(["17:00", "18:00", "19:00"]);
});

test("updateTimes returns the times fetched from the API for the dispatched date", () => {
  const state = ["17:00", "18:00"];
  const result = updateTimes(state, { type: "UPDATE_TIMES", date: "2026-08-20" });
  expect(global.fetchAPI).toHaveBeenCalledWith(expect.any(Date));
  expect(result).toEqual(["17:00", "18:00", "19:00"]);
});
