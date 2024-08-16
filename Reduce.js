// Add the previous values 


const num = [1,2,3]

// const newvalue = num.reduce((acc , curvalue)=>{
//     console.log(`acc:- ${acc} and curvalue:- ${curvalue}`);            //6
//     return acc + curvalue;
// },0);
// console.log(newvalue);


const shoppingcart = [
    {
        item1: "JS",
        price: 2000
    },
    {
        item2: "cpp",
        price:2500
    },
    {
        item3: "java",
        price:25000
    },
    {
        item4: "ruby",
        price:3562
    }
]

const totalprice = shoppingcart.reduce((acc, item)=>(acc + item.price),0)

console.log(totalprice);