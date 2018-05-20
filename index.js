function theBeatlesPlay(musicians,instruments){
  var newArray = [];
  
  for (let i = 0; i<musicians.length;i++ ) {
      newArray.push(musicians[i]+" plays "+instruments[i]);
  }
  return newArray;
}



function johnLennonFacts(array) {
 var newString = []; 
  let x = 0;
  while (x<array.length) {
  newString.push(array[x]+ "!!!");
 //  array[x] = array[x] +"!!!";
    ++x;
  }
  return newString;
}