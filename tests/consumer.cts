import * as api from '@lp-labs/integer-digit-sum';
import { digitSum } from '@lp-labs/integer-digit-sum';
console.log(digitSum(-12345));
// @ts-expect-error invalid argument must be rejected by declarations
api.digitSum('123');
