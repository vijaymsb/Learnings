// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find

const courses = [
    { id: 1, name: 'a'},
    { id: 2, name: 'b'},
];

const course = courses.find(function(course) {
    return course.name === 'a';
});

console.log(course);