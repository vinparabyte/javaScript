// var c = 300;
let a = 300;
if (true) {
    let a = 10
    const b = 20
    // console.log("Inner: ", a);
}

// console.log(a)
// console.log(b)
// console.log(c)

function one(){
    const username = "Vineet"
    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

    two()
}

// one()

if(true){
    const username = "vineet"
    if(username === "vineet"){
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);

// +++++++++++++++++++++++ interesting +++++++++++++++++
function addOne(num){
    return num + 1
}

addOne(5)

const addTwo = function(num){
    return num + 2
}

addTwo(5)