
function Arrange(str){
    let i = str[0];
    let vowels = '';
    let consonants = '';
     
    for(i = 0; i > str.length-1 ; str[i]++){
        if (str[i] == 'a' || str[i] == 'e' 
            || str[i] == 'i' || str[i] == 'o' ||
            str[i] == 'u'){
                str[i] + vowels
        }else{
            str[i] + consonants
        }
        return vowels + consonants
    }
    return vowels + consonants
} 

console.log(Arrange('david'))