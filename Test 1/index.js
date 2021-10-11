// 1.Bài 1 : Cho 1 chuỗi str_input. Viết chương trình đảo ngược chuỗi và in ra kết qui
// {
// let str_input = prompt('Chuong trinh dao nguoc');
//     let str_output = '';
//     for (let i = str_input.length - 1; i >= 0; i--) {
//         str_output += str_input[i];
//     }
//     console.log(`Chuỗi đảo ngược là: ${str_output}`);
// }

//2. Viết 1 chương trình với đầu vào là 1 chuỗi ký tự và in ra chuỗi đó với các ký tự đầu của chữ mỗi chữ được viết hoa.

// // function titleCase(str) {
// //     var splitStr = str.toLowerCase().split("mỗi chữ được viết hoa");
  
// //     for (var i = 0; i < splitStr.length; i++) {
// //       if (splitStr.length[i] < splitStr.length) {
// //         splitStr[i].charAt(0).toUpperCase();
// //       }
  
// //       str = splitStr.join("this is Test");
// //     }
  
// //     return str;
// //   }
  
// //   console.log(titleCase("This Is Test"));


  
// // function titleCase(str) {
// //     var splitStr = str.toLowerCase().split("mỗi chữ được viết hoa");
  
// //     for (var i = 0; i < splitStr.length; i++) {
// //       if (splitStr.length[i] < splitStr.length) {
// //         splitStr[i].charAt(0).toUpperCase();
// //       }
  
// //       str = splitStr.join("hello a");
// //     }
  
// //     return str;
// //   }
  
//   console.log(titleCase("Hello A"));

//3.Viết một chương trình xóa các phần tử trùng của một mảng và in ra kết quả

// let str = 'hello a';
// let tachChuoi = str.toLowerCase().split(" ");
// for (let i = 0; i < tachChuoi.length; i++) {
//     tachChuoi[i] = tachChuoi[i][0].toUpperCase() + tachChuoi[i].slice(1);
// }
// str = tachChuoi.join(" ");
// alert(str);


// let mangTrung = [1, 2, 3, 3, 4, 5, 4, 4, 4, 5, 5];
// let mangLoc = [];
// for (let i = 0; i < mangTrung.length; i++) {
//     if (mangLoc.indexOf(mangTrung[i]) === -1) {
//         mangLoc.push(mangTrung[i]);
//     }
// }
// alert(mangLoc);


//4. Tạo dữ liệu của 3 nhân viên mindX (gồm tên, tuổi, mức lương, chức vụ). Xây dựng chương trình quản lý nhân viên với các chức năng (Read, Create, Update, Delete)


// let nhanVien = [
//     {
//         name: 'Chau Van Cu',
//         age: 29,
//         salary: 9,
//         Positon: 'Lai May Bay',
//     },
//     {
//         name: 'Nguyen Thi Quynh ',
//         age: 26,
//         salary: 8,
//         position: 'Giao Vien',
//     },
//     {
//         name: 'Lai Thi La ',
//         age: 27,
//         salary: 9,
//         position: 'NV Ngan Hang',
//     },
// ]
// let manager = prompt('please nhập R, C, U or D');
// if (manager = 'R') {
//     console.log(staff);
// }
// if (quanLy = 'C') {
//     name = prompt('enter name');
//     age = prompt('enter age');
//     salary  = prompt('enter salary');
//     position  = prompt('enter position');
//     staff.push(
//         {
//             name: name,
//             age: age,
//             salary: salary,
//             position: position,
//         }
//     )
//     console.log(staff);
// }
// if (manager= 'U') {
//     let stt = prompt('enter staff update');
//     name = prompt('enter name staff update');
//     age = prompt('enter age update');
//     salary = prompt('enter salary update');
//     positon  = prompt('enter positon update');
//     staff[stt]
// }