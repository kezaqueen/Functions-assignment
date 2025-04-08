//Question 1
function reverse(names){
    let sorted= names.sort().reverse();
    sorted.map((name,index) =>{
    sorted[index] = name.split("").reverse().sort().join("");
});
return sorted;
};
console.log(reverse([`banana`, `pineaple`,`grapes`,`strawberries`]));

//Question 2
function checkArray(numbers){
    numbers.map(num=>{
        if(num>=0){
            console.log(`positive`)
        }
        else{
            console.log(`Negative`)
        };
    });



}
checkArray([12,0,15,6,0,-5,0])

//Question3

function profile(details){
    return details.sort((x, y)=>x.salaries-y.salaries);
    };
    const details = profile([{tin:1,employee:"joseph",salaries:10000},
    {tin:2,employee:"joy",salaries:5000}]);
    console.log(details);


//Question 4
function multiplesOfTwo(arrayOfNumbers){
    arrayOfNumbers.forEach((num,index)=>{
    arrayOfNumbers[index] = num*2 ;
    });
    return arrayOfNumbers;
};
console.log(multiplesOfTwo([2,4,3,6,5,7,10]));

//Question 5
function arrayOfNumbers(numeric){
    numeric.forEach((num,index)=>{
        if(index<4){
            console.log(`${num*8}`)
        } else if(index >= arrayOfNumbers.length-2){
            console.log(`${num+5}`)
        }
    })
}
arrayOfNumbers([2,1,30,4,50,60]);

