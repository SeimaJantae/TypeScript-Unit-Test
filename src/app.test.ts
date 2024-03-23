import merge from "./app";

test("merge function exists", () => {
  expect(merge).toBeDefined();
});

test("merge: three collection elements are different values", () => {
  const collection_1: number[] = [10, 8, 6, 4, 2];
  const collection_2: number[] = [1, 3, 5];
  const collection_3: number[] = [7, 9];

  const mergedArray: number[] = merge(collection_1, collection_2, collection_3);

  // Expected merged array
  const expectedArray: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  expect(mergedArray).toEqual(expectedArray);
});

test("merge: three collection elements are same values", () => {
  const collection_1: number[] = [3, 2, 1];
  const collection_2: number[] = [1, 2, 3];
  const collection_3: number[] = [1, 2, 3];

  const mergedArray: number[] = merge(collection_1, collection_2, collection_3);

  // Expected merged array
  const expectedArray: number[] = [1, 1, 1, 2, 2, 2, 3, 3, 3];

  expect(mergedArray).toEqual(expectedArray);
});

test("merge: collection_1 is emtry ", () => {
  const collection_1: number[] = [];
  const collection_2: number[] = [1, 3, 5];
  const collection_3: number[] = [2, 4];

  const mergedArray: number[] = merge(collection_1, collection_2, collection_3);

  // Expected merged array
  const expectedArray: number[] = [1, 2, 3, 4, 5];

  expect(mergedArray).toEqual(expectedArray);
});

test("merge: collection_2 is emtry ", () => {
  const collection_1: number[] = [5, 3, 1];
  const collection_2: number[] = [];
  const collection_3: number[] = [2, 4];

  const mergedArray: number[] = merge(collection_1, collection_2, collection_3);

  // Expected merged array
  const expectedArray: number[] = [1, 2, 3, 4, 5];

  expect(mergedArray).toEqual(expectedArray);
});

test("merge: collection_3 is emtry ", () => {
  const collection_1: number[] = [5, 3, 1];
  const collection_2: number[] = [2, 4];
  const collection_3: number[] = [];

  const mergedArray: number[] = merge(collection_1, collection_2, collection_3);

  // Expected merged array
  const expectedArray: number[] = [1, 2, 3, 4, 5];

  expect(mergedArray).toEqual(expectedArray);
});

test("merge: only collection_1 is not emtry ", () => {
  const collection_1: number[] = [2, 1];
  const collection_2: number[] = [];
  const collection_3: number[] = [];

  const mergedArray: number[] = merge(collection_1, collection_2, collection_3);

  // Expected merged array
  const expectedArray: number[] = [1, 2];

  expect(mergedArray).toEqual(expectedArray);
});

test("merge: only collection_2 is not emtry ", () => {
  const collection_1: number[] = [];
  const collection_2: number[] = [1, 2];
  const collection_3: number[] = [];

  const mergedArray: number[] = merge(collection_1, collection_2, collection_3);

  // Expected merged array
  const expectedArray: number[] = [1, 2];

  expect(mergedArray).toEqual(expectedArray);
});

test("merge: only collection_3 is not emtry ", () => {
  const collection_1: number[] = [];
  const collection_2: number[] = [];
  const collection_3: number[] = [1, 2];

  const mergedArray: number[] = merge(collection_1, collection_2, collection_3);

  // Expected merged array
  const expectedArray: number[] = [1, 2];

  expect(mergedArray).toEqual(expectedArray);
});

test("merge: all collection are emtry ", () => {
  const collection_1: number[] = [];
  const collection_2: number[] = [];
  const collection_3: number[] = [];

  const mergedArray: number[] = merge(collection_1, collection_2, collection_3);

  // Expected merged array
  const expectedArray: number[] = [];

  expect(mergedArray).toEqual(expectedArray);
});
