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
export const restaurantTransform = ({ results = [] }) => {
  const mappedResult = results.map((item) => {
      item.photos=item.photos.map((p)=>{
          return mockImages[Math.ceil(Math.random()*(mockImages.length-1))]
      })
    return {
      ...item,
      isOpenNow: item.opening_hours && item.opening_hours.open_now,
      isClosedTemparily: item.business_status === "CLOSED_TEMPORILY",
    };
  });
  return camelize(mappedResult);
};
