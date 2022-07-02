$(document).ready(function() {
    console.log('inside operation');

    $('button').click(function() {
        debugger;
        $('#player').attr('src', this.value);
        $('#songName').text(this.outerText);
    });
    
    let letters = ['a', 'b', 'c', 'd', 'e', 'c', 'a', 'b', 'c','e', 'b', 'f'];
    let numbers = [1, 2, 3, 4, 5];
    let duplicateNumbers = ['1','2','3','4','5','4','4','3','2','5','2','2',];
    let stringNum = ['1', '2','3','4','5'];
    let products = [
        { name:"laptop", price: 27000, qty:3 },
        { name:"mobile", price: 16000, qty:5 },
        { name:"desktop", price: 14000, qty:7 },
    ];
    const peoples = [
        {name : "oggy", age:21},
        {name : "jack", age:25},
        {name : "bob", age:15},
        {name : "marina", age:18},
    ];
    let count = {};
    letters.forEach(item => {
        if(count[item]){
            count[item]++;
        } else {
            count[item] = 1;
        }
    });
    const numbersDouble = numbers.map( (value) => {
       return value * 2;
    });
    
    const totalPrice = products.map( item => ({

        name : item.name,
        totalValue : item.price * item.qty,
    }));

    const changeDataType = stringNum.map(Number);
    const isEven = numbers.filter( value => {
        return value % 2 != 0;
    });

    const adults = peoples.filter( people => people.age > 18);
    // ['1','2','3','4','5','4','4','3','2','5','2','2',];
    const distinctNums = duplicateNumbers.filter( (value, index, arr) => {
        return arr.indexOf(value) === index;
    })
    
    
    
    console.log(count);
    console.log(numbersDouble);
    console.log(totalPrice);
    console.log(changeDataType);
    console.log(isEven);
    console.log(adults);
    console.log(distinctNums);
    
});