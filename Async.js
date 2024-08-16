async function one() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let connection = true;
            if (connection) {
                resolve('Connection Establish');
            } else {
                reject("Error found");
            }
        }, 5000);
    })
}
async function two() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let datafetch = true;
            if (datafetch) {
                resolve('Data Fetch Successfully');
            } else {
                reject("Error found");
            }
        }, 2000);
    })
}

async function run(){
    
    const promiseone = one();                                               // If i write await here then it will run one() then two() where one() has 5sec delay
    
    promiseone.then((connect)=>{
        console.log("Fetching Data 1: ")
        console.log(connect);
    })
    .catch((err)=>{
        console.log(err);
    })
    await two()
    .then((connect)=>{
        console.log("Fetching Data 2:")
        console.log(connect);
    })
    .catch((err)=>{
        console.log(err);
    })
}

run();