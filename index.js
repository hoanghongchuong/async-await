let a = 10;
// console.log(a);
if(true){
    let b = 3;
    // console.log(b);
}
// arrow function
let mang = [1,2,3,4,5];
mang.forEach(function (e){
    // console.log(e);
});

mang.forEach((a) =>{
    // console.log(a);
});
// nếu có 1 tham số thì có thể bỏ ngoặc, có nhiều tham số thì không được bỏ ngoặc
mang.forEach(e=>{
    // console.log(e);
});
// nếu có một câu lệnh thì có thể viết bỏ ngoặc nhọn
// mang.forEach(e=> console.log(e));
// 
var mang2 = mang.map(function(e){
    return e*2;
});
// console.log(mang2);
var mang3 = mang.map(e =>{
    return e*4;
}); 
// console.log(mang3);
var mang4 = mang.map(e => e*10);
// console.log(mang4);

// function add(a,b){
//     return a+b;
// }
let add = (a,b) => {
    return a + b;
}
// console.log(add(2,3));
let tong = (a,b) => a+b;
var x = tong(6,5);
// console.log(x);