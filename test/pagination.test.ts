import {
  sortArray,
  pagination,
  totalPageNumber,
} from "../src/functions/pagination";
import * as testArray from "../public/mock_data.json";
describe("sortArray should return a sorted array", () => {
  it("when input text is 'id_asc', ascending by id", () => {
    expect(sortArray(testArray, "id_asc")).toBe(testArray);
  });

  it("when input text is 'id_des', descending by id", () => {
    expect(sortArray(testArray, "id_des")).toBe(testArray.reverse());
  });
});
