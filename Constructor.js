//In JavaScript, a class can contain only one constructor method. 
//It is a special method that gets called automatically when you create a new instance of the class using the new keyword.

class Student{
    constructor(name,age){                                           // here we don't write the class name we use constructor keyword 
        console.log("My name is "+name+" and my age is "+age);
    }
}
const std= new Student("Avishkar",20);
const std1= new Student("Sapkal",24);