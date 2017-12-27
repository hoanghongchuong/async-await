// khi trả về kết quả  thành công thì dùng resolve, lỗi thì dùng reject
// khi cả 2 cùng được gọi thì cái gọi trước sẽ được thực thi
let aPromise = new Promise((resolve, reject) => {
    // resolve("thanh cong");
    setTimeout(()=> {
        reject(new Error("khong the koi noi server"));
    }, 2000);
    
});

aPromise.then((msg) => console.log("da thuc thi: " + msg),
(errMsg) => console.log(errMsg.toString()));
