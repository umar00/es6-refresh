/*
You take the first letter of a word (e.g. Hello = H) and 
use the last letters (e.g. Hello = ello) and 
add 'ay' to the first letter (e.g. Hello = Ello hay).

rule 1
Words that start with a vowel (A, E, I, O, U) simply have "ay" appended to the end of the word.

rule 2
Words that start with a consonant have all consonant letters up to the first vowel moved to the end of the word (as opposed to just the first consonant letter), and "-ay" is appended. -('Y' is counted as a vowel in this context)

"pig" → "ig-pay"
"banana" → "anana-bay"
"trash" → "ash-tray"
"happy" → "appy-hay"
"duck" → "uck-day"
"glove" → "ove-glay"
*/


function pigLatin(word){
    const ay = 'ay'
    const vowels = ['a','e','i','o','u']

    if(word.length == 0){
        return;
    }
    if(vowels.includes(word.charAt(0).toLowerCase())){
        return word.concat(ay);
    }
    else{
        let strEnding = "".concat("-",word.charAt(0));
        for(let i=1;i<word.length;i++){
            if(vowels.includes(word.charAt(i).toLowerCase())){
               return word.slice(i).concat(strEnding,ay)
            }
            strEnding += word.charAt(i)
        }
    }
}

function testing(){
    // will test a whole phrase. normally would write a unit test for this
    const phrase = 'This phrase will be converted into piglatin please insert your phrase here.'
    const phraseStrArray = phrase.split(" ");

    phraseStrArray.map(
        words =>{
            console.log(pigLatin(words))
        }
    )


}
testing()