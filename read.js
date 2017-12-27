let fs = require('fs');
// callback function là một câu lệnh được thực hiện khi 1 thao tác bất đồng bộ được thực hiện xong
fs.readFile('./a.txt', 'utf8', (err, data) => {
    if(err) return console.log('Loi: ' + err);
    console.log('du lieu: ' + data);
});

// let data = fs.readFileSync('./a.txt','utf8');
// console.log(data);
console.log('ket thuc');
// không thể phân biệt được tác vụ là bất đồng bộ hay không đồng bộ. mà phải dựa vào docmentation của câu lệnh
// tuy nhiên có thể phân biệt theo cảm tính: resquest đến database, thao tác vs file, settimeout, request đến 1 trang web,...
