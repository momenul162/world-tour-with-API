// Zero parameter
const returnEightyNine = () => 89;

const result = returnEightyNine(89);
console.log(result);

// One parameter
const divided = (n) => n / 17;

const result1 = divided(565);
console.log(result1);

// Two parameters
const added = (a, b) => (a + b) / 2;

const result2 = added(15, 85);
console.log(result2);

// Multiline arrow function
const added1 = (a, b) => {
  const add = a + 7 + b + 7;
  return add;
};
const result3 = added1(15, 25);
console.log(result3);
