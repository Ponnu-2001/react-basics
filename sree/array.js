let fruits = ['apple', 'banana', 'orange'];
console.log(fruits[1])
fruits.push('kiwi')
console.log(fruits)
fruits[1] = 'grapse'
console.log(fruits)
fruits[3] = 'strawberry'
console.log(fruits)
console.log(fruits.length)

let people = [
    {
        name: 'Alice',
        age: 25,
        place: {
            city: 'wonderland',
            country:'Fairyland'
        }
    },
    {
        name: 'Bob',
        age: 30,
        place: {
            city: 'Techcity',
            country: 'Geekland'
        } 
    },
    {
        name: 'charlie',
        age: 28,
        place: {
            city: 'Artsville',
            country: 'Createland'
        }
    }     

]
console.log(people)
console.log(people[1].name)
console.log(people[2].place.city)