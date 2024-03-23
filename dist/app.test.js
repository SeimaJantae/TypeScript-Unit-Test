"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
test("merge function exists", () => {
    expect(app_1.default).toBeDefined();
});
test("merge: three collection elements are different values", () => {
    const collection_1 = [10, 8, 6, 4, 2];
    const collection_2 = [1, 3, 5];
    const collection_3 = [7, 9];
    const mergedArray = (0, app_1.default)(collection_1, collection_2, collection_3);
    // Expected merged array
    const expectedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    expect(mergedArray).toEqual(expectedArray);
});
test("merge: three collection elements are same values", () => {
    const collection_1 = [3, 2, 1];
    const collection_2 = [1, 2, 3];
    const collection_3 = [1, 2, 3];
    const mergedArray = (0, app_1.default)(collection_1, collection_2, collection_3);
    // Expected merged array
    const expectedArray = [1, 1, 1, 2, 2, 2, 3, 3, 3];
    expect(mergedArray).toEqual(expectedArray);
});
test("merge: collection_1 is emtry ", () => {
    const collection_1 = [];
    const collection_2 = [1, 3, 5];
    const collection_3 = [2, 4];
    const mergedArray = (0, app_1.default)(collection_1, collection_2, collection_3);
    // Expected merged array
    const expectedArray = [1, 2, 3, 4, 5];
    expect(mergedArray).toEqual(expectedArray);
});
test("merge: collection_2 is emtry ", () => {
    const collection_1 = [5, 3, 1];
    const collection_2 = [];
    const collection_3 = [2, 4];
    const mergedArray = (0, app_1.default)(collection_1, collection_2, collection_3);
    // Expected merged array
    const expectedArray = [1, 2, 3, 4, 5];
    expect(mergedArray).toEqual(expectedArray);
});
test("merge: collection_3 is emtry ", () => {
    const collection_1 = [5, 3, 1];
    const collection_2 = [2, 4];
    const collection_3 = [];
    const mergedArray = (0, app_1.default)(collection_1, collection_2, collection_3);
    // Expected merged array
    const expectedArray = [1, 2, 3, 4, 5];
    expect(mergedArray).toEqual(expectedArray);
});
test("merge: only collection_1 is not emtry ", () => {
    const collection_1 = [2, 1];
    const collection_2 = [];
    const collection_3 = [];
    const mergedArray = (0, app_1.default)(collection_1, collection_2, collection_3);
    // Expected merged array
    const expectedArray = [1, 2];
    expect(mergedArray).toEqual(expectedArray);
});
test("merge: only collection_2 is not emtry ", () => {
    const collection_1 = [];
    const collection_2 = [1, 2];
    const collection_3 = [];
    const mergedArray = (0, app_1.default)(collection_1, collection_2, collection_3);
    // Expected merged array
    const expectedArray = [1, 2];
    expect(mergedArray).toEqual(expectedArray);
});
test("merge: only collection_3 is not emtry ", () => {
    const collection_1 = [];
    const collection_2 = [];
    const collection_3 = [1, 2];
    const mergedArray = (0, app_1.default)(collection_1, collection_2, collection_3);
    // Expected merged array
    const expectedArray = [1, 2];
    expect(mergedArray).toEqual(expectedArray);
});
test("merge: all collection are emtry ", () => {
    const collection_1 = [];
    const collection_2 = [];
    const collection_3 = [];
    const mergedArray = (0, app_1.default)(collection_1, collection_2, collection_3);
    // Expected merged array
    const expectedArray = [];
    expect(mergedArray).toEqual(expectedArray);
});
//# sourceMappingURL=app.test.js.map