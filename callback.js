// callback hell là: mô tả các trường hợp có nhiều tác vụ bất đồng bộ được gọi liên tiếp nhau, tác vụ sau là kết quả của tác vụ trước.
//  gây khó khăn cho việc đọc hiểu và debug
let square = (a,b,h) => (a+b)*h /2 ;
console.log('Dien tich: ' + square(2,3,2));

let add = (a,b,cb) => {
    setTimeout(() => {
        // let err, result;
        if(typeof a != 'number' || typeof b !='number'){
            // err = 'Tham so phai co kieu number';
            return cb(new Error('Tham số truyền vào phải là số'));
        }
        // result = a+b;
        // cb(err, result);
        cb(undefined, a+b);
    }, 1000);
}

let multiply =(a,b,cb) => {
    setTimeout(() => {
        if(typeof a != 'number' || typeof b!='number'){
            return cb(new Error('Tham số truyền vào phải là số'));
        }
        cb(undefined, a*b);
    }, 1000);
}
let divide =(a,b,cb) => {
    setTimeout(() => {
        if(typeof a != 'number' || typeof b!='number'){
            return cb(new Error('Tham số truyền vào phải là số'));
        }
        if(b==0) return cb(new Error('chia cho 0'));
        cb(undefined, a / b);
    }, 1000);
}

let tinhDienTichHinhThang = (a,b,h,cb) =>{
    add(a,b, (err, result) => {
        if(err) return cb(err);
        multiply(result, h, (errs, result) => {
          if(errs) return (errs);
            divide(result, 2, (err, resultx) => {
                if(err) return (err);
                cb(undefined, resultx);
            });
        });
        
    });
}
tinhDienTichHinhThang(2, 3, 2, (err, kq)=> {
    // if(err) return console.log(err + ''); // err + '' tuong duong voi err.toString()
    if(err) return console.log(err.toString());
    console.log('Dien tich la: ' + kq);
});