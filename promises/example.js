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