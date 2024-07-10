const arrayMethods = ()=>{
    const fruits = ["banan","apple","mongo"]
    console.log(fruits);

    console.log(fruits.at(2))
    console.log(fruits[1])
    console.log(fruits.join(" ")) // joins all the values of array
    console.log(fruits.pop()) // removes the end
    console.log(fruits) // shows that its mutable
    fruits.push('pushed Kiwi')
    console.log(`fruits = [] `,fruits) 
    const fruitLength = fruits.push('pushed fruit')
    console.log(fruitLength);

    let shift = fruits.shift();
    console.log(shift) //removes the first array element and "shifts" all other elements to a lower index.
    fruits.unshift("unshifted banan");
    console.log(fruits);
    fruits[0] = 'banan'
    console.log(fruits)

    fruits.forEach(fruit=>{
        console.log(`fruit ${fruit}}`,fruit)
    })

    const deletedFruit = delete fruits[0]
    console.log(deletedFruit) // returns true

    const vegetables = ['tomato','cucumber','carrots']
    const arr1 = []
    const food = fruits.concat(vegetables,arr1);
    food.concat('concat Value'); // this wont be added to list
    console.log(food); 

    const fruitsNew = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];  
    const copyWithFruits = fruitsNew.copyWithin(2, 0);
    console.log(copyWithFruits) // copy elements from 0 to 2

    const numList = [1,2,3,4,5,6,7,8,9]
    const numListx = numList.copyWithin(1, 3);
    console.log(numListx);

    const myArr = [[1,2],[3,4],[5,6,7,8,9]];
    const newMyArr = myArr.flat()
    console.log(newMyArr)

    const fruits2 = ["Banana", "Orange", "Apple", "Mango"];
    const slicedFruit = fruits2.slice(2); //index 2 onwards
    console.log(slicedFruit.slice(0));

    const arr3 = [1, 2, 3];
    const arr4 = [4, 5, 6];
    const mergedArray1 = arr3.concat(arr4);
    const mergedArray2 = [...arr3,...arr4]
    console.log(mergedArray1);
    console.log(mergedArray2);
}

const SortingArrays = ()=>{
    const fruits = ["banana", "Orange", "Apple", "Mango",'x'];
    fruits.sort();
    console.log(fruits) // sorts capital first then numbers
    fruits.reverse()
    console.log(fruits) 

    // safe way to sort an array without altering the original array.
    
    const toSorted = fruits.toSorted(); // you need to asign a const
    console.log(toSorted) 

    const points = [5,4,3,2,1];
    const sortedPoints = points.sort((a,b)=> {return a-b});
    console.log(sortedPoints);

    const cars = [
        {type:"Volvo", year:2016},
        {type:"Saab", year:2001},
        {type:"BMW", year:2010}
    ];

    cars.sort((a,b)=>{
        let x = a.type.toLowerCase();
        let y = b.type.toLowerCase();
        if(x<y) { return -1 }
        if(x>y) { return 1  }
        return 0 
    })
    console.log(cars)

    cars.sort((a,b)=>{
        let x = a.year;
        let y = b.year; 
        
        return x-y
    })
    console.log(cars)
}

const iterations = ()=>{
    const numbers = [45,4,9,16,25]

    const numbers2 = numbers.map(myFunction1);

    console.log(numbers2);

    function myFunction1(value){
        return value*2
    }

    const myArr = [1,2,3,4,5,6]
    const newArr = myArr.flatMap((x)=> x*2); // first maps all elements of an array and then creates a new array by flattening the array.
    console.log(newArr);

    const myArr2 = [1,2,3,4,5,6]
    const over18 = myArr2.filter((value)=>{
        return value > 3;
    });

    console.log(over18);

    const myArr3 = [45, 4, 10, 16, 25]; // reduce will create a single number
    let sum = myArr3.reduce((a,b)=>{
        return a+b
    })
    console.log(sum)

    let allOver18 = myArr3.every((value)=>{
        return value;
    }); // checks if all array are larger than 18

    console.log(allOver18);

    let isAllUnder24 = myArr3.every((value)=>{ 
        return value < 24;
    })
    console.log(isAllUnder24);

    // check if some are under 24
    isAllUnder24 = myArr3.some((value)=>{
        return value < 24;
    }) 
    console.log(isAllUnder24);

    console.log(Array.from("ABCDEFG")); // Array object from any object  

    console.log(Array.from(12)); //[]

    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    let keys = fruits.entries();
    for(let x of keys){
        console.log(x); // [ 0, 'Banana' ] [ 1, 'Orange' ]
    }

}


const stringMethod = ()=>{
    let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let length = text.length;

    let char = text.charAt(0);
    console.log(char)

    let letter = text.at(2);
    console.log(letter)

    let text1 = "Apple, Banana, Kiwi";
    let part = text1.slice(20)
    console.log(part);

    var charArr = "Hello World".split('')
    console.log(charArr)
    const a = [...'0123'];
    console.log(a);

    let partSubstring = text1.substring(1,13);
    let partSlice = text1.slice(1,13);
    console.log(partSubstring);
    console.log(partSlice.toLowerCase()) // both do the same thing
    console.log(partSubstring.concat(partSlice,"array").trim()); // trim removed white space from both sides

    console.log("     This uses trimStart()".trimStart())
    console.log("     This uses trimEnd()  ".trimEnd())

    let text2 = "5";
    let padded = text2.padStart(4,"0");
    console.log(padded); // adds 0 until it reaches length 4

    // convert to a string
    let numbers = 534
    let texts = numbers.toString(); 
    let padding = texts.padStart(6,"0") // until the total is 6. so could be that there isnt any added
    console.log(padding)
    console.log("0000".concat(padding));
    console.log("123".startsWith(padding)) // false
    console.log(padding.padEnd(10,"12")) // if there is more needed it will add 12 again


    // repeat(count)
    let text4 = "hello world"
    let result4 = text4.repeat(2); // repeats! with count
    console.log(result4);

    //replace() method replaces a specified value with another value in a string
    let text5 = "Please visit Microsoft Microsoft"
    let result5 = text5.replace("Microsoft", "apple") //immutable
    console.log(result5) // only first one

    // replaceAll() deos the whole thing

    // split creates an array
    console.log("this is a string".split("")) // will split all the letters. " " will create words
}


//arrayMethods()
//SortingArrays()
//iterations()
stringMethod()