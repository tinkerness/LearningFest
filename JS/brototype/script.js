function show() {
    console.log("button cliked")
    var a = 1
    var b = 2
    var sum = a+b
    console.log("sum="+sum)

    // var can update values of variables
    // let us initialise a variable only once
    let c = 10
    console.log(c)
    // modify
    c=4
    console.log(c)

    // const doesnt allow us to modify values
    const d = 5
    // d=6

    if (d%2==0) {
        console.log("even number")
    }
    else {
        console.log("odd number")
    }

    for (var i=0; i<10; i++) {
        console.log(5)
    }
    
    var arr = ["apple","orange","mango",34]
    console.log(arr)
    console.log(arr[1])
}

function myarray() {    
    display()
    
    // key value pair
    var person = {
        name: "sonu",
        age:"12",
        place:"tokyo"
    }
    console.log(person)
    console.log("Name:"+person.name)

    var persons = [
        {   name: "sonu",
            age:"12",
            place:"tokyo"
        },
        {   name: "allu",
            age:"21",
            place:"korea"
        }
    ]
    console.log(persons)
    console.log("Name:"+persons[1].name)
}

function display() {
    document.writeln("Heyy !")
}