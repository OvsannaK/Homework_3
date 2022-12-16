// .  Task 1 

let arr = [1, 5, 6, -5, 30, 10, 25];    // (1)
let arrDoubled = [];
for (let num of arr) {
    arrDoubled.push (num * 2);
}
console.log (arrDoubled)



let arr1 = [2, 5, 4, 3, 10];            // (2)
let arrDoubled2 = [];
for (num2 of arr1) {
    arrDoubled2.push (num2 * 2)
}

console.log (arrDoubled2)


// .  Task 1 with Function (map)

let arr3 = [1, 5, 6, -5, 30, 10, 25];       // (1)
let arrDoubled3 = [];
arrDoubled3 = arr3.map (function (num3){
    return num3 * 2
})

console.log (arrDoubled3);


let arr4 = [2, 5, 4, 3, 10];                // (2)
let arrDoubled4 = [];
arrDoubled4 = arr4.map (function (num4){
    return num4 * 2
})

console.log (arrDoubled4);



// .  Task 2 (sa menak senc karoghaca. 1in orinaki depqum ashkhatec, 2rdini depqum ` vat :D)


let array = [10, 25, 16, -5, 30, 15, 24];           // (1)
n = 16;
let largerThanGivenNumber = [];
for (let randomArray of array) {
    largerThanGivenNumber.push (randomArray) 
    if (randomArray > n) {
        
        console.log (randomArray)
    }
}



let array2 = [1, 1, 2, -3, 0, 8, 4, 0];    //  (2) .  cheghav mi tesak :/
n1 = 9;
let largerThanGivenNumber2 = [];
for (let randomArray2 of array2) {
   largerThanGivenNumber2.push (randomArray2) 
        if (randomArray2 > n1) {
            console.log (randomArray2)
        }
        else {
            console.log ("Such values do not exist")
        }
    }



// .  Task 3 (sran alternative tarberak ka? :D)


let arr5 = [1, 2, 5, 8 , 7];                // (1)
console.log(arr5.indexOf(8));


let arr6 = [1, 3, 5, 9];                    // (2)
console.log(arr6.indexOf (15));


// .  Task 4 (kyanqis amenadazhan 4 zhamy, tanjvelov grel em, bayc chem haskacel ankeghts asats :D)


let sent = '_, we have a _.';                  // (1)   
let words = ["Houston", "problem"];
let toBeChanged = ["_", "_"];

toBeChanged.forEach (word2 => {
    sent = sent.replace (word2, 'Houston')
    sent = sent.replace (word2, 'problem')
})
console.log(sent)



let sent2 = "If at _ you don't _, try, try _."     // (2)
let words2 = ["first", "succeed", "again"]
let toBeChanged2 = ["_", "_", "_"];

toBeChanged2.forEach (word3 =>{
    sent2 = sent2.replace (word3, "first")
    sent2 = sent2.replace (word3, "succeed")
    sent2 = sent2.replace (word3, "again")
})
console.log(sent2)



let sent3 = "May the _ _ _ _. "              // (3)
let words3 = ["force", "be", "with", "you"]
let toBeChanged3 = ["_", "_", "_", "_"];

toBeChanged3.forEach (word4 => {
    sent3 = sent3.replace (word4, "force"),
    sent3 = sent3.replace (word4, "be")
    sent3 = sent3.replace (word4, "with")
    sent3 = sent3.replace (word4, "you");
})

console.log (sent3)



// .   Task 5


const arr2 = [1, '10', 'hi', 2, 3];                  // (1)
const onlyNumbers = arr2.filter(
    element => typeof element === 'number'
);
const onlyStrings = arr2.filter(
    element => typeof element === 'string'
  );
console.log("Numbers:" + " " + onlyNumbers.length)
console.log ("Strings:" + " " + onlyStrings.length)




const arr10 = [1, 4, 'i am a string', '456'];           // (2)
const onlyNumbers3 = arr10.filter(

  element => typeof element === 'number'

);
const onlyStrings3 = arr10.filter(

    element => typeof element === 'string'
  
  );
console.log("Numbers:" + " " + onlyNumbers3.length)
console.log ("Strings:" + " " + onlyStrings3.length)