import {
  getCardFormat,
  getCvv,
  formatCurrency,
  getPercentage,
} from "../src/utils/constants";

it("test price values with comma", () => {
  const result = formatCurrency(10000000);
  expect(result).toBe("10,000,000");
});

it("test cvv values with true value", () => {
  const result = getCvv(444, true);
  expect(result).toBe(444);
});

it("test cvv values with false value", () => {
  const result = getCvv(444, false);
  expect(result).toBe("* * *");
});

it("test card values with true value", () => {
  const result = getCardFormat(4444444444444444, true);
  expect(result).toBe("4444   4444   4444   4444");
});

it("test card values with false value", () => {
  const result = getCardFormat(4444444444444444, false);
  expect(result).toBe("••••   ••••   ••••   4444");
});

it("test percentage with two values", () => {
  const result = getPercentage(750, 1000);
  expect(result).toBe(75);
});
