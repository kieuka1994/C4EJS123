// Study

//1.
// {
//   let promise = new Promise(function(resolved, reject) {
//     setTimeout(() => {
//          resolved('Bạn tiêm vắc xin chưa');
//       }, 5000);
//       console.log(resolved);
//     });

//     async function promisesText() {
//       console.log('pending');
//       let result = await promise
//       console.log(result);
//     }
//     promisesText();
//     promise.then(
//       result=>{console.log(result)},
//       error =>{console.log(error)}
//     )
//  }

//2.
// {
// async function fetch() {
//   console.log('tải xuống');
//   const result = await fetch('https://bongdaplus.vn/')
//   return await result.json();
// }
// fetch().then(
//   result => console.log(result)
//   );

// }

//3. 

// https://sheetdb.io/api/v1/58f61be4dda40

// Review
//4.

// const randomNum = () =>{
//   return Math.floor(Math.random(10-5+1)+5);
// }

// const x = randomNum();
// if (x < 5) {
//   console.log('Failed: the number is smaller than 5');
// } else if (x > 10) {
//   console.log('Failed: the number is bigger than 10');
// } else {
//   console.log('Passed, ka');
// }

//5. 

// {
//   const randomNumAB = (a,b) =>{
//        return Math.floor(Math.random()*(a-b+1)+b);
//    }
//    const x = randomNumAB (4,16);
//    if (x < 4) {
//     console.log('Failed: the number is smaller than 4');
//   } else if (x > 16) {
//     console.log('Failed: the number is bigger than 16');
//   } else {
//     console.log('Passed, ka');
//   }
  
// } 

//6.
 
// const distance  = (x1, y1, x2, y2) => {
//         return Math.sqrt((x1-x2)*(x1-x2)+(y1-y2)*(y1-y2));
//     }

    // {
    //   function getDistance(x1, y1, x2, y2) {
    //     return Math.sqrt((x2 - x1)*(x1 - x2)+(y2 - y1)*(y1 - y2));
    //   }
    //   const a = getDistance(3, 10, 0, 6);
    //   if (a != 5) {
    //     console.log('Failed: the calculation is wrong');
    //   } else {
    //     console.log('Passed, ka ');
    //     }
    // }

    // Serious exercices

//7. 

// {
//     async function fetchApi() {
//       let fetchData = await fetch('http://quotes.rest/qod.json');
//       return await fetchData.json();
//     }
//     fetchApi().then (
//       data => {
//         document.getElementsById('quote_content').innerHTML = data['contents']['quotes'][0]['quocte'];
//         document.getElementsById('quote_author').innerHTML = data['contents']['quotes'][0]['author'];
//       },
//     )
// }   

//8. 

// https://docs.sheetdb.io/#display-data




