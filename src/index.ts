export function digitSum(value: number): number {
  if (!Number.isSafeInteger(value)) throw new TypeError('Expected safe integer');
  let text = String(Math.abs(value)),
    sum = 0;
  for (const digit of text) sum += Number(digit);
  return sum;
}
