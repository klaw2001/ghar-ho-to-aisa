const image = (name) => `/images/${name}.png`;

export const brands = (brandNames) => {
  return brandNames.map(name => ({ img: image(name) }));
};

// Example usage:
const brandNames = [
  "brand1", "brand2",  "brand4", "brand5", 
  "brand6", "brand7", "brand8", "brand9", "brand10", 
  "brand11", "brand12"
];

export const dynamicBrands = brands(brandNames);
