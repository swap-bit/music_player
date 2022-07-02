$(document).ready(function() {
    // console.log('started practicing');
    const students = [
        { name: 'Quincy', grade: 96 },
        { name: 'Jason', grade: 84 },
        { name: 'Alexis', grade: 100 },
        { name: 'Sam', grade: 65 },
        { name: 'Katie', grade: 90 }
    ];

    const goodStudentNames = students.
    filter( student => 
        student.grade >= 90
    );
    // console.log(goodStudentNames);
    
    let shoppingCart = [
        {
          product: 'phone',
          qty: 1,
          price: 500,
        },
        {
          product: 'Screen Protector',
          qty: 1,
          price: 10,
        },
        {
          product: 'Memory Card',
          qty: 2,
          price: 20,
        },
    ];
    const totalPrice = shoppingCart.reduce(
        function(prevValue, currentVal) {
            // console.log(prevValue + currentVal.qty * currentVal.price);
            return prevValue + currentVal.qty * currentVal.price;
        }, 0
    );
    // console.log(totalPrice);
    let sum = 0;
    const tp = shoppingCart.map( product => {
        return sum += product.qty * product.price;
    });
    // console.log(sum);

    // basic of reduce method
    let sum1 = 0;
    const numbers = [5, 10, 15];
    for(let i = 0; i < numbers.length; i++) {
        sum1 += numbers[i];
    }
    // console.log(sum1);

    const pokemon = [
        { name: "charmander", type: "fire" },
        { name: "squirtle", type: "water" },
        { name: "bulbasaur", type: "grass" }
    ];
    const pokemonModified = {
   
    };
    const result = pokemon.reduce(function(pokemonModified, item){
        // console.log(pokemonModified);
        pokemonModified[item.name] = {
            type:item.type
        }
        return pokemonModified;
    }, {});
    // console.log(result);
    // const input = [ 1, 2, 3, 4, 5 ];
    // const output = input.map(function(value, index, arr) {
    //     return value * value;
    // });
    // console.log(output);

    // const input = [ 1, -4, 12, 0, -3, 29, -150];
    // let total = 0;
    // const positiveCount = input.filter(function(value, index, arr) {
    //     if(arr.length && Math.sign(value) == 1) {
    // return true;
    //         total += value;
    //     } 
    //     return false;
    // });
    // const result1 = input.
    // filter(num => num > 0).
    // reduce( (acc, value) =>
    //     acc + value, 0);
    // console.log(result1);

    // const input = 'George Raymond Richard Martin';
    // const output = input.split(" ").map((obj) => obj[0]).join('');
    // const input = [
    //     {
    //       name: 'John',
    //       age: 13
    //     },
    //     {
    //       name: 'Mark',
    //       age: 56,
    //     },
    //     {
    //       name: 'Rachel',
    //       age: 45,
    //     },
    //     {
    //       name: 'Nate',
    //       age: 67,
    //     },
    //     {
    //       name: 'Jeniffer',
    //       age: 65,
    //     }
    //   ];
    // const output = input.map(student => 
    //     Math.min(student.age) 
            
    // );
    // let reusult = 
    //     Math.min(...output) + " "+
    //     Math.max(...output) + " "+
    //     Math.max(...output) - Math.min(...output)
    //  ;
    // console.log(reusult);

    const tasks = [
        {
          'name'     : 'Write for Envato Tuts+',
          'duration' : 120
        },
        {
          'name'     : 'Work out',
          'duration' : 60
        },
        {
          'name'     : 'Procrastinate on Duolingo',
          'duration' : 240
        }
    ];
    const taskNames = tasks.map( task => 
        task.name
    );
    // console.log(taskNames);
    // const tuesday = [
    //     {
    //         'name'     : 'Keep writing that tutorial',
    //         'duration' : 240
    //     },
    //     {
    //         'name'     : 'Some more web development',
    //         'duration' : 180
    //     },
    //     {
    //         'name'     : 'A whole lot of nothing',
    //         'duration'  : 240
    //     }
    // ];
    // const changeToHrs = tuesday.filter( time =>  
    //     (time.duration) + 60
    // );
    // console.log(changeToHrs);
    var users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
    { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
    { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
    { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
    { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
    { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
    { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];

    const userName = users.map( (user) => 
         user.firstName
    );
    console.log(userName);
    const sendMsg = users.filter( user => user.role == "Full Stack Resident"
    , {});
    console.log(sendMsg);

    var epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];
    const conmbine = epic.reduce(function(prev, curr) {
        // console.log(acc);
        // stringVal += currVal +" "
        return prev + " " + curr
    });
    console.log(conmbine);

// { 'Bradley Bouley': 'Full Stack Resident',
//   'Chloe Alnaji': 'Full Stack Resident',
//   'Jonathan Baughn': 'Enterprise Instructor',
//   'Michael Herman': 'Lead Instructor',
//   'Robert Hajek': 'Full Stack Resident',
//   'Wes Reid': 'Instructor',
//   'Zach Klabunde': 'Instructor' }

    const userFormat = users.reduce( function(userObj, user) {
        let userDetails = user.firstName + " "+ user.lastName;
        userObj[userDetails] = user.role;
        return userObj; 
    }, {});

    console.log(userFormat);










});