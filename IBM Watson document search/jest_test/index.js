function removepunc(word){
    let wordstr=word;
    wordstr= wordstr.replace(/[^a-zA-Z ]/g," ");
    

    while(wordstr.charAt(0) === ' ')
    {wordstr = wordstr.substring(1);}
    return wordstr;
}

module.exports = removepunc;