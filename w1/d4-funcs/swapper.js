/* takes key 1 from object 1 and moves it to position of key 2 of object 2 */
/* takes key 2 from object 2 and moves it to position of key 1 of object 1 */
const swapper = function(key1, object1, key2, object2) {
  console.log('Swap!');
  let temp = object2[key2];
  object2[key2] = object1[key1];
  object1[key1] = temp;

  // 1. value of key 2 in temp var
  // 2. get value of key 1
  // 3. put key 1 into object 2
  // 4. put temp into object 1

  console.log('object1: ', object1);
  console.log('object2: ', object2);
};

swapper('a', { a: 1, b: 2, c: 3 }, 'c', { a: 4, b: 3, c: 5 });
swapper('b', { a: 8, b: 7, c: 6 }, 'd', { a: 5, b: 1, c: 2, d: 12 });
swapper('c', { a: 1, b: 3, c: 3, d: 7 }, 'c', { a: 4, b: 0, c: 5 });
/*
Swap!
object1: { a: 5, b: 2, c: 3 }
object2: { a: 4, b: 3, c: 1 }
Swap!
object1: { a: 8, b: 12, c: 6 }
object2: { a: 5, b: 1, c: 2, d: 7 }
Swap!
object1: { a: 1, b: 3, c: 5, d: 7 }
object2: { a: 4, b: 0, c: 3 }
*/