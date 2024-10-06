// function add(a, b)
// {
// return a + b;
// }
// let result = add(3, 5)
// console.log(result)
//arrow function
var add = (a, b) => {
    var sum = a + b;
    console.log(sum);
    console.log(`this is sum ${sum}`)
}
add(5,7)