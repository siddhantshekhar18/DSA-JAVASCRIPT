const stringLowercase = (str) => {
    let result = "";

    for (let i = 0; str[i] !== undefined; i++){
        let code = str.charCodeAt(i);

        if(code >= 65 && code <= 90){
            code = code + 32;
        }
        result += String.fromCharCode(code);
    }
    console.log(result);
}

stringLowercase("HELLO WORld");