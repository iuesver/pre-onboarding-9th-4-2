import {
  sortArray,
  pagination,
  totalPageNumber,
} from "../../src/functions/pagination";
import * as testArray from "../../public/mock_data.json";

//Function sortArray test code

describe("sortArray should return a sorted array", () => {
  it("when input text is 'id_asc'", () => {
    expect(sortArray(testArray, "id_asc")).toBe(testArray);
  });

  it("when input text is 'id_des'", () => {
    expect(sortArray(testArray, "id_des")).toBe(testArray.reverse());
  });
  it("when input text is 'status_true'", () => {
    const trueArray = testArray.filter((item) => item.status === true);
    const falseArray = testArray.filter((item) => item.status === false);
    const testResult = [...trueArray, ...falseArray];
    expect(sortArray(testArray, "status_true")).toEqual(testResult);
  });
  it("when input text is 'status_false'", () => {
    const trueArray = testArray.filter((item) => item.status === true);
    const falseArray = testArray.filter((item) => item.status === false);
    const testResult = [...falseArray, ...trueArray];
    expect(sortArray(testArray, "status_false")).toEqual(testResult);
  });
  it("when input text is 'date_asc'", () => {
    const testResult = testArray.sort(
      (a, b) =>
        new Date(a.transaction_time).getTime() -
        new Date(b.transaction_time).getTime()
    );
    expect(sortArray(testArray, "date_asc")).toEqual(testResult);
  });
  it("when input text is 'date_des'", () => {
    const testResult = testArray.sort(
      (a, b) =>
        new Date(b.transaction_time).getTime() -
        new Date(a.transaction_time).getTime()
    );
    expect(sortArray(testArray, "date_des")).toEqual(testResult);
  });
});

// Function pagination test code

// Function totalPageNumber test code

describe("totalPageNumber should return a integer number", () => {
  const LIMIT = 50;
  it("without keyword", () => {
    expect(totalPageNumber(testArray, null)).toBe(
      Math.ceil(testArray.length / LIMIT)
    );
  });
  it("with keyword 'a'", () => {
    const includeKeywordArray = testArray.filter((item) =>
      item.customer_name.includes("a")
    );
    expect(totalPageNumber(testArray, "a")).toBe(
      Math.ceil(includeKeywordArray.length / LIMIT)
    );
  });
});
