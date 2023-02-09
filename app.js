
function getRandomMovie() {
    const myArray = [
        'Toy Story', 
        'Cinderalla',
        'Beauty and The Beast',
        'The Last of Us',
        'Avengers'];
    
    const randomNumber = getRandomIndex(myArray);
    const randomMovie = myArray[randomNumber];

    console.log(randomMovie);
}

function getRandomIndex(myArray) {
    let random = Math.random() * myArray.length
    let randomIndex = Math.floor(random)
    return randomIndex;
}

getRandomMovie();

// Challenge 1

const arrayOfNumbers = [1, 2, 5, 4, 30]

arrayOfNumbers.forEach(number => {
    if (number % 2 === 0) {
        console.log(number + ` is even`);
    }
    else {
        console.log(number + ` is odd`);
    }
})

// Challenge 2

const cardArray = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']

function getShuffledArray(myArray) {
    let itemsToShuffle = [...myArray];
    let newArray = [];
    for(let i = 0; i < myArray.length; i++) {
        const randomIndex = Math.floor(itemsToShuffle.length * Math.random());
        const randomItem = itemsToShuffle[randomIndex];
        itemsToShuffle = [
            // First Step grab the 0 index and everything less than the randomIndex
            ...itemsToShuffle.slice(0, randomIndex),
            // Second Step grabs the index after the randomIndex because of the plus one and then use length to get all items after the randomIndex + 1
            ...itemsToShuffle.slice(randomIndex + 1, itemsToShuffle.length),
            // Third Step after slicing everything before and after the randomIndex
        ]

        newArray = [...newArray, randomItem];
    }
    return newArray;
}

console.log(getShuffledArray(cardArray));