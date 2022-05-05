function test() {
    console.log("start testing");

    let name = "Chris Finster";
    console.log(name);
    console.log("name");
}
function sayHi(firstName, lastName) {
    console.log("Say hi " + firstName + " " + lastName);
}

function sum(num1, num2) {
    let result = num1 + num2;
    return result;
}

function arrayTest(){
    let nums = [1,3,451,123,3456,1234,457,967,235,235,567,2345,1,234,567,6789];

    // get value by index (position)
    console.log(nums[0]); // 0 = first position of the array

    for(let i = 0; i < nums.length; i++){
        let num = nums[1];
        console.log(num);
    }

    console.log("---------------------------");

    // 1: print numbers lower than 500
    for(let i = 0; i < nums.length; i++){
        if(nums[i] < 500){
            console.log(nums[i]);
        }
    }

    console.log("---------------------------");

    // 2:  print the numbers from 0 to 20
    // b: -1 to 20
    for(let i = 0; i < 21; i++){
        console.log(i);
    }
    console.log("---------------------------");
    for(let i = 1; i < 21; i++){
        console.log(i);
    }
    console.log("---------------------------");
    for(let i = 1; i < 21; i++){
        if(i != 13){
            console.log(i);
        }
    }
    let total = 0;
    // 3: print the sum of all numbers
    for(let i = 0; i < nums.length; i++){
        total += nums[i];
    }
    console.log(total);
}

function init() {
    console.log("Intro page");

    // hook events

    // load data
    test();
    sayHi("Joseph", "Smith");
    sayHi("Rose", "Smith");

    let myName = "Christopher";
    sayHi(myName);

    let result = sum(21, 21);
    console.log(result);

    arrayTest();
}

// whhen the browser finishes rendering the html
// execute init function.
window.onload = init;
