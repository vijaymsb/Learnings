const person = {
    name: 'vijay',
    age: 30
};

for (let key in person)
    console.log(key, person[key]);

for (let key in person)
    console.log('dot indication',key, person.key);


// const colors = ['red', 'green', 'blue'];

// for (let place in colors)
//     console.log('in',place);

//     for (let place of colors)
//     console.log('of',place);


// for (let index in colors)
//     console.log(index, colors[index]);
