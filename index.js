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

//4. Write a script...

// let shop = ['C','U','D','R'];
// let items = ['Jeans', 'T-Shirt', 'Socks'];
// while(true){
//     let ask = prompt('Hello, welcome to shop home, what do you want (C, R, U, D)');
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
//         let updateItem = prompt('Enter the position at the shop you want to update');
//         let newName = prompt('Enter the new name at the shop ');
//         items[position] = newName;
//         alert('Done');

//     }else if(ask == 'd'){
//         let deleteItem = prompt('Enter the position at the shop you want to delete')
//         alert('Done');
//     }else{
//         alert('This command is not supported');
//         break
//     }
// }


