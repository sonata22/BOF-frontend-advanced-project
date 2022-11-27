import { generatePath } from "react-router";

export const GetRandomProductPath = () => {
  const getRandomProductId = (max: number) => {
    return Math.floor(Math.random() * max);
  };
  let randomProductId: number = getRandomProductId(200) + 1; // 1-200
  let randomProductPath = generatePath("/products/:productId", {
    productId: JSON.stringify(randomProductId),
  });
  return randomProductPath;
};

export default GetRandomProductPath;
