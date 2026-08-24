const onlyAlphabet = (str) => {

    for (let i = 0; i < str.length; i++){
        let code = str.charCodeAt(i);

        if((code < 65 || code > 90) && (code < 97 || code > 122)){
            return false;
        }
    }
    return true;
}

console.log(onlyAlphabet("hello"));
console.log(onlyAlphabet("hello123"));
console.log(onlyAlphabet("welcome"));
console.log(onlyAlphabet("!@#"));