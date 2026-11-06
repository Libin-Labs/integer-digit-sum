import assert from 'node:assert/strict';
import test from 'node:test';
import * as api from '../dist/esm/index.js';
test('sums positive digits', () => {
  assert.equal(api.digitSum(12345), 15);
});
test('sums negative magnitude', () => {
  assert.equal(api.digitSum(-909), 18);
});
test('handles zero', () => {
  assert.equal(api.digitSum(0), 0);
});
test('handles single digit', () => {
  assert.equal(api.digitSum(7), 7);
});
test('handles safe integer boundary', () => {
  assert.equal(api.digitSum(Number.MAX_SAFE_INTEGER), 76);
});
test('rejects fractional number', () => {
  assert.throws(() => api.digitSum(1.5), TypeError);
});
