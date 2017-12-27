// function là 1 kiểu dữ liệu, object. 
// 1 function có thể được lưu vào 1 biến
let add = (a,b) => a+b;
console.log(add(2,4));
// function có thể làm  tham số của 1 function khác
let mang = [1,2,3,4,5];

// var nhan2 = function(e){
//     return e*3
// };
var nhan2 = e =>e*2;
console.log(mang.map(nhan2));
// function có thể trả về 1 function
let getFunction = (numb) => {
    if(numb > 0){
        return () => console.log('so duong')
    }
    else{
        return () => console.log('so am')
    }
}
// getFunction(-3)();
// function khong có return khi chạy sẽ trả về undefined
let a = () => {}
// console.log(a());