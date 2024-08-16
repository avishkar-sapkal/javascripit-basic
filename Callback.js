function getdata(dataID, getNextData) {
    setTimeout(() => {
        console.log("Data: ", dataID);
        if (getNextData) {
            console.log('1');
            getNextData();
        }
    }, 1000);
}
// getdata(1,2)
getdata(1, () => {                                         // CallBack Hell
    getdata(2, () => {
        getdata(3)
    })
})