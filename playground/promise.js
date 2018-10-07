

var addNum = (a,b) => {
    return new Promise( (resolve, reject) => {
        if(typeof a != 'number' || typeof b !=='number'){
            reject('Both the elements should be numbers');
        }
        else {
            resolve( a + b );
        }
    })
}

addNum(3,5).then( (x)  => {
    console.log(x);
    return addNum(10,x);
}).then( (x) =>{
    console.log(x);
}).catch( err => {
    console.log(err);
});