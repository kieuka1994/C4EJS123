// Study 


//1.insertAdjacentHTML first parameter....

// Answer which is which: 1d 2a 3c 4b 

//2.Instead of using setTimeOut to...
 
// function ka () {
//     alert('hi')
// };
// setTimeout(ka, 8000);
// setInterval(ka, 8000);

//3. Read about function scope...

// function name() {
//     let i = 10
//     console.log(i);
// };

 // console.log(i); không tồn tại

//  function name() {
//      var i = 10
//      console.log(i);
//  };

 // console.log(i); không tồn tại 


 //4. You can get DOM...

// let x = document.getElementsByTagName('li');
// console.log(x.length);
// for(let i = 0; i < x.length; i++){
// console.log(x[i]);
// }

//5.You can get DOM...

// let x = document.getElementsByClassName('singe');
// console.log(x.length);
// for(let i = 0; i < x.length; i++) {
//     console.log(x[i]);
// }

//6. Learn how to remove...
// let x = document.getElementById('delete')
// x.addEventListener('click', ()=> {
//     x.remove();
// })


//7.When using...
// let x = document.getElementById('button 1')
// x.addEventListener('click', (e) => {
//     console.log(e.target);
// });
// let y = document.getElementById ('button 2')
// y.addEventListener('click', (f) => {
//     console.log(f.target);
// });
// let z = document.addEventListener('keydown', (g) => {
//     console.log(g.key);
// });

//8.Write a function...
// function helloKa() {
//     alert('đi chít ngừa');

// }
// helloKa();

//9.Write a function...
// function hello(name, wish) {
//     alert(`${name} ${wish}`);
// }
// hello('ka', 'muốn')

//10.Take a look...

// function hello(name, wish) {
//     alert(`${name} ${wish}`)
// }

// let name = prompt('enter your name:');
// let wish = prompt('what do you want?');
// if (wish == "") {
//     alert(`${name} not yet?`);   
// } else {
//     hello(name, wish);
// } 
 

//11.Take a look...

// let i = document.getElementById('upper');
// console.log(i);
// addEventListener('click', (c) => {
//     console.log(c.target);
//     let userName = document.getElementById('nameInput').value;
//     console.log(userName);
//     userName = String(userName).toUpperCase();
//     console.log(userName);
//     let r = document.getElementById('result');
//     console.log(r);
//     r.textContent = String(userName);
// })

//12. Take a look....


// const div = document.getElementById("result_div");
// console.log(div)

// let item = ["Backpack", "Miband watch", "Ring"];
// console.log(item);

// let list = document.getElementById('item_list_ul');
// console.log(list);

// for (let i = 0; i < item.length; i++) {
//     list.insertAdjacentHTML('beforeend', `
//     <li>${item[i]}</li>`)
// }
// console.log(list);

// let huy = document.getElementsByName('Test Item 1')
// huy.remove();
// for (let i = 0; i < 2; i++) {
//     list[i].remove();
// }