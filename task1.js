//////////task1
let x =10;
let y =20;
console.log(x,y);
[x,y]=[y,x];
console.log(x,y);

/////
///////////////////task2

function testValue(arr=[]){
    let maxi =Math.max(...arr);
    let mini=Math.min(...arr);
    return {maxi,mini};
}
let { maxi,mini}= testValue(arr=[10,5,30,8,50,2]);
console.log(maxi);
console.log(mini);

////////////////////////////
/////////////////////////////////////task3//////////
 
var fruits = ["apple", "strawberry", "banana", "orange","mango"];
console.log(fruits.every((item) => typeof item == "string"));
console.log(fruits.some((item )=> item.charAt(0)=="a"));  
console.log(fruits.filter((item )=> item.charAt(0)=="b" || item.charAt(0)=="s")); 

var newArr=fruits.map((item )=>` I like  ` + item);
console.log(newArr);

let newarray=fruits.map((item )=>` I like  ` + item);
console.log(newarray);
fruits.forEach((item)=> console.log(item));

//////////////////////////
/////////////////////////////////////task4

function info({coursename,duration,owner,...therest})
{
   if(Object.keys(therest).length >0)
   {
       console.log(therest);
       throw "error!extra parameter"
   }

let information ={
    coursename:"jquery",
    duration : "10hr",
    owner: "marina"
};
var res =Object.assign({},information,...arguments);
console.log(res);
    
}
info({coursename:"oop",duration:"20hr",owner:"mona"
//,grade:"A"
});