// đồng bộ: các câu lệnh chạy từ trên xuống dưới
// bất đồng bộ: câu lệnh 1 chưa chạy xong thì đã chạy câu lệnh 2
setTimeout(() => {
    console.log('da het 1s');
}, 1000);
console.log('ket thuc');