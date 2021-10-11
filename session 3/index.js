// Study 

// 1. Variable swap...

// let a = 10, b = 15;
// [a,b] = [b,a];
// console.log(`${a} ${b}`);

// let a = 5, b = 10;
// a = a ^ b;
// b = a ^ b;
// a = a ^ b;

// console.log('a is now:', a );
// console.log('b is now:', b );

// 2. Split String into Array...
 
// let message = 'Have a good day';
// console.log(message.split(' ', 4 )); // ["Have", "a", "good", "day"] 

//3. In JavaScript, the spread operator...

// let a=['Steak','Risotto','Burrito', 'Quesadilla'];
// console.log(...a);
// let x = [4, 5, 7, -8];
// console.log(...x);

// 4. Write a script...

// let shop = ['C','U','D','R'];???

// let items = ['Jeans', 'T-Shirt', 'Socks'];

// while(true){
//     let ask = prompt('Hello, welcome to shop home, what do you want (C, R, U, D)');
//     ask = ask.toLowerCase();
//     // console.log(ask);
//     if (ask == 'r'){
//         console.log('The items in the shop are:');
//         for(i = 0; i < items.length; i++){
//             console.log(`${i+1}. ${items[i]}`)
            
//         }
//     }else if(ask == 'c'){
//         let newItem = prompt('Enter the name of the new item at the shop');
//         items.push(newItem);
//         alert('Done');

//     }else if(ask == 'u'){
//         let position = prompt('Enter the position at the shop you want to update');
//         let newName = prompt('Enter the new name at the shop ');
//         items[position] = newName;
//         alert('Done');

//     }else if(ask == 'd'){
//         let deleteItem = prompt('Enter the position at the shop you want to delete');
//         items.splice(deleteItem,1);
//         alert('Done');
//     }else{
//         alert('This command is not supported');
//         break
//     }
// }


// 5. Write a script...

// let n = prompt('Enter a sequence of number, separated by commas(,)');
// let arr = n.split(',');
// let sum = 0;
// for (let i = 0; i < arr.length; i++){
//     sum = sum + Number(arr[i]);
// }
// alert(`The sum of them is ${sum}`);

// 6. Write a script...

// let arr = prompt('Please enter want your number').split(',').map(Number);
// alert('The smallest number is ' + Math.min(...arr));

// 7. Create an array...

// const arr = [18, 24, 12, 7, -1, -2];
// let num = Number(prompt('Enter want your a number'));
// for(let i = 0; i < arr.length; i++){
//     if(num == arr[i]){
//         alert(`${num} is FOUND in my array at index ${i}`)
//     }else{
//         alert(`${num} is NOT found in my array`)
        
//     }
// }
  



// // 8. You are a shepherd who owns a flock of sheep


// // 8.1. Create an array to... 
// let sheep = [5, 7, 300, 90, 24, 50, 75];
// console.log('Hello, my name is My and here is my sheep sizes:');
// console.log(...sheep);

// // 8.2. At the end of each month...
// console.log(`Now my biggest sheep has size ${Math.max(...sheep)}`);

// // 8.3. When your biggest sheer...
// let maxNumber = sheep.indexOf(Math.max(...sheep));
// console.log(`After shearing, here is my flock`);
// sheep[maxNumber] = 8;
// console.log(...sheep);

// // 8.4. In the following month...
// let months = 4;

// for (let mon = 1; mon <= months; mon++) {

//     for (let i = 0; i < sheep.length; i++) {
//         sheep[i] = sheep[i] + 50;
//     }
//     console.log(`MONTH ${mon}`);
//     console.log('One month has, passed, my sheeps have grown, here are their sizes');
//     console.log(...sheep);
//     console.log(`Now my biggest sheep has size ${Math.max(...sheep)}`);
//     console.log(`After shearing, here is my flock`);
//     console.log(...sheep);
// }

// // 8.5. After day... 
// let total = 0;

// for (let i = 0; i < sheep.length; i++) {
//     total = total + sheep[i];
// }

// console.log(`My flock has size in total: ${total}`);
// console.log(`I would get ${total} * 2$ = ${total*2}$`);
