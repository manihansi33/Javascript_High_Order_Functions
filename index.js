//mapping the elements in array
const arr=[1,2,3,4,5];
const output=arr.map(x=>x*2);
console.log(output);

//Filteing elements in array
const result=arr.filter(x=>x>3);
console.log(result);

//calculating sum of the values in arrray
const reduceresult=arr.reduce((acc,curr)=>{
 acc=acc+curr;
 return acc;
},0);
console.log(reduceresult);