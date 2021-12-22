function findNumber(A) {
  let len = A.length;
  let max_A = 0;
  A = A.filter(x => x >= 1).sort((a,b) => a - b);
  
  for(var i = 0; i < len; i++){
    if(A[i] > max_A) max_A = A[i];
  }
  
  let result = 1;
  
  if(max_A > 0){
  for(var j = 0; j < max_A; j++){
    if(!A.includes(j)) result = j;
    else result = max_A + 1
  }
 }
 
 return result
}
