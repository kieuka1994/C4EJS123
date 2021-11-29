//. 1 .Cho một mảng các chuỗi, viết chương trình trả về mảng mới chứa các chuỗi có độ dài lớn nhất.


// function allLongestStrings(inputArray) {
//   var newarr = ["BINH", "HUNG", "PHUOC", "CAO", "KHANH"];

//   if( inputArray.length == 1){
//     return inputArray;
//   }
//   var longestWord = inputArray.sort(function(a, b) {
//    return b.length - a.length;
//   });
//   var lengthOfLongestWord = longestWord[0].length;//returns length of longest word


//   for(var i = 0; i < longestWord.length; i++){
//    if(longestWord[i].length == lengthOfLongestWord){
//      newarr.push(longestWord[i]);
//    }
//   }

//   return newarr;
//   }
//   var yolo = allLongestStrings(["BINH", "HUNG", "PHUOC", "CAO", "KHANH"]);
//     console.log(yolo); //reuturns[ "KHANH", "PHUOC" ]

  //. 2 . Viết chương trình có đầu vào là một mảng chưa cân nặng của tất cả mọi người theo thứ tự hàng ban đầu và yêu cầu trả về mảng chưa tổng cân nặng của 2 team.

  // function alternatingSums(a) {
  // var team1 = 0;
  // var team2 = 0;
  // var team3 = 0; 

  //   return a.reduce((acc, n, i) => {
  //     acc[i % 2] += n;
  //     return acc;
  //   }, [0, 0]);
  // }
  
  // const nums = [60, 40, 55, 75, 64];
  // const result = alternatingSums(nums);
  // console.log("result: ", result); // [179, 115]

  //. B . Code Challenge 



    