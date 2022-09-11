import { formatNumber } from './helper.js';

const numbers = [100000000000000000n];

for (let i = 0; i < numbers.length; i++) {
  console.log(`Formatted ${numbers[i]} looks like ${formatNumber(numbers[i])}`);
}