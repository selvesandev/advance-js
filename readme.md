# Advanced Javascript.
> Examples on (https://jsbin.com/depubus/edit?js,console)


## Promises.
Promises in javascript is like promises in real life.
If someone makes a promise either he fullfill the promise or he fails.
```
let promiseName=new Promise(function(resolve,reject){
   
    //resolve is finishing the promise as promised.
    //reject is not fullfilled in given time and rejecting it.
    
    let complete=true;
    if(complete){
        resolve();
    }else{
        reject();
    }
});

```

#### Executing the promise.
since the promise may take time we will have to wait for it.
the `then` function lets us to do this, it will run only when the promise is completed i.e either success or fail.

```
    promiseName.then(function(result){
        console.log(result);
    }).catch(function(err){
        console.log(err);
    });

```


#### Example.
1) Clean the room.
2) Remove the garbage.
3) Win the Icecream.

```
let cleanTheRoom = function () {
  let roomIsClean=true;
    return new Promise(function (resolve, reject) {
      if(roomIsClean) 
        resolve('cleaned the room');
      else 
        reject('Room is still not cleaned.');
    })
};

let removeTheGarbage = function () {
    return new Promise(function (resolve, reject) {
        resolve('Garbage removed.');
    })
};

let winIceCream = function () {
    return new Promise(function (resolve, reject) {
        resolve('Loved the ice cream');
    })
};


cleanTheRoom().then(function (message) {
    console.log(message);
    return removeTheGarbage();
}).then(function (message) {
    console.log(message);
    return winIceCream();
}).then(function (message) {
    console.log(message);
}).catch(function(err){
  console.log(err);
});
```
#### Promise.all();

You can work with all the promise at once.
```
Promise.all([cleanTheRoom(),removeTheGarbage(),winIceCream()]).then(function(){
    //gets this executed if all of the listed promise is finished.
});
```

```
Promise.race([cleanTheRoom(),removeTheGarbage(),winIceCream()]).then(function(){
    //gets this executed if one of the listed promise is finished.
});
```

## JS DATE
Current Date
```
var date = new Date();
```

Create your date
```
var date = new Date(year,month,date[,hour,minute,second,millisecond ]) 
```

Get Year, Month etc.

```
date.getMonth(); (0-11)
date.getFullYear();(YYYY)
date.getDay();(0-6) //0 is sunday
date.getHours();(0-23)
date.getTime();(0-23) // returns timestamp > number of milliseconds since jan 1st 1970
```

