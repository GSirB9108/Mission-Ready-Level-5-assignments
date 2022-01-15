/* var str =";hello?world!";
str = str.replace(/[^a-zA-Z ]/g," ");
console.log(str); */
//document.write(str);

//"hello world”, “hello%world”, “!helloworld”, “;hello?world!”, “hello;world”and “hello world?”'

function removepunc(word){
    let wordstr=word;
    wordstr= wordstr.replace(/[^a-zA-Z ]/g," ");

    while(wordstr.charAt(0) === ' ')
    {wordstr = wordstr.substring(1);}

    return wordstr;
}

removepunc('!!!hello%world')

