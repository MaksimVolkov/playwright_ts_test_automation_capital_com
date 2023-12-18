/**
 * Generates random numbers within a specified range.
 *
 * @param {number} maxNumber - The maximum number, inclusive, for generating random numbers.
 * @param {number} [needRandomNumber=1] - The number of random numbers to generate (default is 1).
 * @returns {number[]} - An array of generated random numbers.
 */
export function getRandomNumber(maxNumber: number, needRandomNumber: number = 1): number[] {
  const getRandomNumber = () => Math.floor(Math.random() * maxNumber) + 1;
  const randomNumber: number[] = [];
  for (let i = 0; i < needRandomNumber; i++) {
    randomNumber.push(getRandomNumber());
  }
  return randomNumber;
}
