const args = process.argv.splice(2);

let getSum = function(args) {
  let sum = 0;
  args.forEach(num => {
    sum += parseInt(num);
  });
  return sum;
};

console.log(getSum(args));