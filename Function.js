// Simple way to declare the function

function worldcup(){

    function India(){
        console.log("Team India");
    }
    function England(){
        console.log("Team England");
    }
    function Australia(){
        console.log("Team Australia");
    }
    function WestIndies(){
        console.log("Team WestIndies");
    }

    India();
    England();
    Australia();
    WestIndies();
}
worldcup();


// Another way to declare the function

let fruit = function(){
    console.log("I am Apple");
};                                            // there must a semicolon 
fruit();

//Object passed function

const Student ={
    name : "Avishkar",
    Age: 21
};

function handleobject (anyobject){
    console.log(`The name is ${anyobject.name} and age is ${anyobject.Age}`);
}
handleobject(Student)


// Array passed in the function

let arr =[1,2,3,4,5,6,7];

function handlearray(anyarray){
    return anyarray[3]
}
console.log("The element at 4th postion is: "+handlearray(arr));