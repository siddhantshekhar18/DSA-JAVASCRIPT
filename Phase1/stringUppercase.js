const stringUppercase = (str) => {
   let result = "";

   for (let i = 0; str[i] !== undefined; i++){
    let code = str.charCodeAt(i);
    if(code >= 97 && code <= 122){
        code = code - 32;
    }
    result += String.fromCharCode(code);
   }
   console.log(result);
}

stringUppercase("hello world");