//1.3 C4EJSLab - Basic - part 3


// let quizizz = [
//     {
//         question: '1. Who is the actress who plays the movie sherlockhome?', 
//         answer: [
//             'A. Charlie puth', 
//             'B. Taylor swift',
//             'C. Robert Downey Jr.',
//             'D. Celinedion',
//         ],
//         correctAnswer: 'C',

//     },
//     {
//         question: '2. How many members does westlife band have?',
//         answer: [
//             'A. 3',
//             'B. 4',
//             'C. 7',
//             'D. 5',      
//         ],
//         correctAnswer: 'D',
//     },
//     {
//         question: '3. Which character in the game resident evil gets a job at the raccoon city police station?',
//         answer: [
//             'A. ADa',
//             'B. Leon',
//             'C. Chris',
//             'D. Wesker',
//         ],
//         correctAnswer: 'B',    },
//     {
//         question: '4. In which country is leon assigned to rescue the daughter of the US president?',
//         answer: [
//             'A. Spain',
//             'B. VietNam',
//             'C. Italy',
//             'D. Australia',
//         ],
//         correctAnswer: 'A',
//     },
// ]

// //1.4, 1.5, 1.6, 1.7 ,1.8
// let randum=Math.floor(Math.random()*question.length);
// let enter=Number(prompt(question[randum].cauhoi+'\n'+question[randum].correctAnswer));
// while(true){
//     if(chon==question[randum].correctAnswer){
//     alert('you wrong');
//     break;}
//     else{
//     alert('you right');
// break;}
// }

// for(let i=0,dem=0;i<=question.length;i++)
// var randum=Math.floor(Math.random()*question.length);
//     let chon=Number(prompt(question[randum].question+'\n'+question[randum].correctAnswer));
//     if(chon==question[randum].correctAnswer){
//     count+=1;
    
// }
// alert(`You right ${count} in 4 question`);
 
// 2.1 

// let arr = ['to', 'be', 'that', 'of', 'elon', 'to', 'this', 'now', 'back', 'cool', 'hey', 'love', 'of', 'life', 'that', 'rain', 'summer', 'color', 'now', 'of', 'hat', 'late', 'sorry', 'my', 'team'];
// let a = [];
// let b = [];
// let prev;
// arr.sort();
// for(let i = 0; i < arr.length; i++){
//     if(arr[i] !== prev){
//         a.push(arr[i]);
//         b.push(1);
//     }else{
//         b[b.length-1]++;
//     }
//     prev = arr[i]
// }
// console.log(`${a} : ${b} `)



// // 2.2 
// const inventory = [
//     {
//         name: 'HP Envy 13aq',
//         price: 21000,
//         brand: 'HP',
//         quantity: 5,
//     },
//     {
//         name: 'Dell XPS 9370',
//         price: 30000,
//         brand: 'Dell',
//         quantity: 1,
//     },
//     {
//         name: 'Dell Inspiron 3567',
//         price: 9300,
//         brand: 'Dell',
//         quantity: 12,
//     },
//     {
//         name: 'Dell Latitude E5450',
//         price: 8600,
//         brand: 'Dell',
//         quantity: 2,
//     },

//     {
//         name: 'Asus Zenbook',
//         brand: 'Asus',
//         price: 20000,
//         quantity: 4,
//     },
//     {
//         name: 'HP Pavilion',
//         brand: 'HP',
//         price: 14000,
//         quantity: 7,
//     },
// ]


// // 2.3 
// let inventoryByBrand = {
//     'Asus': [],
//     'Dell': [],
//     'HP': [],

// }
// for(let i = 0; i < inventory.length; i++){
//     let sitem = inventory[i];
//     let trademark = inventory[i].brand;
//     inventoryByBrand[trademark].push(inventory[i])
// }
// console.log(inventoryByBrand)



// // 2.4 
// let x = prompt('Which brand?');

// for(let brand in inventoryByBrand){
//     if(x == brand){
//         alert(`There are ${inventoryByBrand[brand].length} generations of "${brand}" in the inventory"`)

//     }

// }



// // 2.5 + 2.6 + 2.7 
// let listName = inventoryByBrand[x];
// console.log(listName);
// let name = [];
// let price;
// let total = 0;
// for(let i = 0; i < listName.length; i++){
//     Name.push(listName[i].name);
//     price = listName[i].price * listName[i].quantity;
//     total = total + price;
// }
// alert(`${Name}`)
// alert(` total value ${total}`)

