"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function merge(collection_1, collection_2, collection_3) {
    const length_c1 = collection_1.length;
    const length_c2 = collection_2.length;
    const length_c3 = collection_3.length;
    // Create the result array
    const totalLength = length_c1 + length_c2 + length_c3;
    const result = new Array(totalLength);
    // Merge collection_2 (sorted min to max) and collection_3 (sorted min to max)
    const mergedArray = new Array(length_c2 + length_c3);
    let index_c2 = 0, index_c3 = 0, index_m = 0;
    while (index_c2 < length_c2 && index_c3 < length_c3) {
        if (collection_2[index_c2] <= collection_3[index_c3]) {
            mergedArray[index_m] = collection_2[index_c2];
            index_c2++;
        }
        else {
            mergedArray[index_m] = collection_3[index_c3];
            index_c3++;
        }
        index_m++;
    }
    // Add remaining elements from collection_2
    while (index_c2 < length_c2) {
        mergedArray[index_m] = collection_2[index_c2];
        index_c2++;
        index_m++;
    }
    // Add remaining elements from collection_3
    while (index_c3 < length_c3) {
        mergedArray[index_m] = collection_3[index_c3];
        index_c3++;
        index_m++;
    }
    // Merge collection_1 (sorted max to min) and the merged collection_2 and collection_3
    let index_c1 = length_c1 - 1, index_r = 0;
    // Reset index of merged array
    index_m = 0;
    while (index_c1 >= 0 && index_m < mergedArray.length) {
        if (mergedArray[index_m] <= collection_1[index_c1]) {
            result[index_r] = mergedArray[index_m];
            index_m++;
        }
        else {
            result[index_r] = collection_1[index_c1];
            index_c1--;
        }
        index_r++;
    }
    // Add remaining elements from merged array
    while (index_m < mergedArray.length) {
        result[index_r] = mergedArray[index_m];
        index_m++;
        index_r++;
    }
    // Add remaining elements from collection_1
    while (index_c1 >= 0) {
        result[index_r] = collection_1[index_c1];
        index_c1--;
        index_r++;
    }
    return result;
}
// Example usage
// const collection_1: number[] = [10, 8, 6, 4, 2];
// const collection_2: number[] = [1, 3, 5];
// const collection_3: number[] = [7, 9];
// const mergedArray: number[] = merge(collection_1, collection_2, collection_3);
// console.log(mergedArray);
exports.default = merge;
//# sourceMappingURL=app.js.map