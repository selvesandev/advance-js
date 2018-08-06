let promiseName=new Promise(function(resolve,reject){
    let complete=true;
    if(complete){
        resolve('clean successfully');
    }else{
        reject();
    }
});

promiseName.then(function(result){
    console.log(result);
}).catch(function(err){
    console.log(err);
});