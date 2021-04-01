/* https://prod.liveshare.vsengsaas.visualstudio.com/join?059E2D491A400F11BE37D53B2F019390D4E5 */

/* for any lines that have a raisin print "raisin alert!" else print All Good!*/
const raisinAlarm = function (cookie) {
  let empty = "All Good!";


  for (let emoji of cookie) {
    if (emoji === '🍇') {
      return "Raisin Alert!";
    } 
  }
  return empty;
};
console.log(raisinAlarm(["🍫", "🍫", "🍇", "🍫"]));
console.log(raisinAlarm(["🍫", "🍇", "🍫", "🍫", "🍇"]));
console.log(raisinAlarm(["🍫", "🍫", "🍫"]));


const raisinAlarmArray = function (cookies) {
  let result = [];
  cookies.forEach(cookie => {
    result.push(raisinAlarm(cookie));
  });
  return result;
};

console.log(raisinAlarmArray(
  [
    ["🍫", "🍫", "🍇", "🍫"],
    ["🍫", "🍇", "🍫", "🍫", "🍇"],
    ["🍫", "🍫", "🍫"]
  ]
));
// expected: ["Raisin alert!", "Raisin alert!", "All good!"]