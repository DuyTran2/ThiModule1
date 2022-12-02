function countVowel(str){
    var vowel_list = 'aeiouAEIOU';
    var vowelcount = 0;
    for(var x = 0; x < str.length; x++){
        if(vowel_list.indexOf(str[x]) != -1){
            vowelcount +=1;
        }
        if(vowelcount==0){
            console.log("False")
        }
    }
    console.log(`The string has ${vowelcount} vowel`);
    return vowelcount;
    
}
countVowel("GHT");