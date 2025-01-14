// var
var x=10;
console.log("The value of Var variable is "+x);                 //10

// let
let v=30;
{
    let v=20;
    console.log("The value of Let variable in scope is "+v);    //20
}
console.log("The value of Let variable is "+v);                 //30

// const
const c=100;
console.log("The value of Constant variable is "+c);            //100


// var outside is still used
{
    var x = 1000;
}
console.log("Outside the var is still working",x);              //1000
