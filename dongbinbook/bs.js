// function binarySearch(array,target,start,end){
//   if(start>end){
//     return null;
//   }
//   let mid = Math.floor((end+start)/2);
//   if(target == array[mid]){
//     return mid;
//   }
//   else if(target < array[mid]){
//     return binarySearch(array,target,start,mid-1);
//   }
//   else{
//     return binarySearch(array,target,mid+1,end);
//   }
// }


function binarySearch(array,target,start,end){
  while(start<=end){
    let mid = Math.floor((end+start)/2);
    if(target == array[mid]){
      return mid;
    }
    else if(target < array[mid]){
      end = mid -1;
    }
    else{
      start = mid +1;
    }
  }
  return;
}


let t = [1,3,6,8,10,12,15];
console.log(binarySearch(t,10,0,t.length-1));