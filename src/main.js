/**
 * compareVersion('1.11.0', '1.9.9') // 1
 *
 * @param {string} [left='']
 * @param {string} [right='']
 * @returns >=0 表示版本合适，<0 表示版本过低
 * @memberof AppUpdateManager
 */
export function compareVersion(left = '', right = ''): number {
  let leftArr = left.split('.');
  let rightArr = right.split('.');
  const len = Math.max(leftArr.length, rightArr.length);

  while (leftArr.length < len) {
    leftArr.push('0');
  }
  while (rightArr.length < len) {
    rightArr.push('0');
  }
  let num1 = leftArr.join('');
  let num2 = rightArr.join('');
  if (+num1 === +num2) {
    return 0;
  }
  return +num1 > +num2 ? 1 : -1;
}
