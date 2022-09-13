import { formatNumber } from './helper.js';

const numbers = [1000021000000000]

for (let i = 0; i < numbers.length; i++) {
  console.log(`Formatted ${numbers[i]} looks like ${formatNumber(numbers[i])}`);
}