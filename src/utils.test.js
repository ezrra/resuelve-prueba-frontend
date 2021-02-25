import { filterArrayByText } from './utils';

it("return a fruit", () => {
  const array = ['apple', 'banana', 'cherry', 'orange', 'pear'];
  const text = 'app';

  const result = filterArrayByText({ array, text });
  const EXPECT_COUNT = 1;

  expect(EXPECT_COUNT).toBe(result.length);
});

it("return two o more fruits", () => {
  const array = ['apple', 'banana', 'cherry', 'orange', 'pear'];
  const text = 'a';

  const result = filterArrayByText({ array, text });
  const EXPECT_GREATER_THAN = 2;

  expect(result.length).toBeGreaterThanOrEqual(EXPECT_GREATER_THAN);
});

it("return zero results", () => {
  const array = ['apple', 'banana', 'cherry', 'orange', 'pear'];
  const text = 'mango';

  const result = filterArrayByText({ array, text });
  const EXPECT_COUNT = 0;

  expect(result.length).toBe(EXPECT_COUNT);
});