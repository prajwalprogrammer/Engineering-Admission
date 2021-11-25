import { mockImages, mocks } from "./mock";
import camelize from "camelize";
export const restaurantRequest = (location) => {
  return new Promise((resolve, reject) => {
    const mock = mocks[location];
    if (!mock) {
      reject("Not Found");
    }
    resolve(mock);
  });
};
const Status = {
  "18.46426300998177,73.86740976358865": "Private-Autonoumous",
  "19.50312815658777,75.43923019536294": "Private",
  "19.50312815658779,75.4392301953629": "Government",
};

export const restaurantTransform = ({ results = [] }, loc) => {
  const getStatus = Status[loc];

  const mappedResult = getStatus
    ? results.filter((clg) => {
      return clg.status.toLowerCase() === getStatus.toLowerCase();
    })
    : results;
  return camelize(mappedResult);
};
