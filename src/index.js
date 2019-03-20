import uniq from 'lodash/uniq';
import Foo from './foo';
const foo = [1,2,3,4,3,4,6];

const doubleIt = (a) => {
  return a.map((ele) =>  ele*2);
}

const uniqIt = (a) => {
  return uniq(a);
}


console.log(doubleIt(foo));
console.log(uniqIt(foo));
console.log(uniqIt(foo));
new Foo().doThis();
console.log('this looks good');
