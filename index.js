function receivesAFunction(callback){
    return callback();
}

function returnsANamedFunction(){
    const namedFunction = () => {
        console.log('This is a named function');
    }
    return namedFunction;
}

function returnsAnAnonymousFunction(){
    return (() => console.log('This is the function reponse!'));
}