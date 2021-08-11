// Project 1 - Memory Mayhem

// Card Options
const cardsList = [
    {
        card: 'wildman',
        img: 'vanGogh-images/vanGoghWildMan-small'
    },
    {
        card: 'wildman',
        img: 'vanGogh-images/vanGoghWildMan-small'
    },
    {
        card: 'starryNight',
        img: 'vanGogh-images/vanGoghStarryNight-small'
    },
    {
        card: 'starryNight',
        img: 'vanGogh-images/vanGoghStarryNight-small'
    },
    {
        card: 'skeleton',
        img: 'vanGogh-images/vanGoghSkeleton-small'
    },
    {
        card: 'skeleton',
        img: 'vanGogh-images/vanGoghSkeleton-small'
    },
    {
        card: 'flowers',
        img: 'vanGogh-images/vanGoghBeautyEverywhere-small'
    },
    {
        card: 'flowers',
        img: 'vanGogh-images/vanGoghBeautyEverywhere-small'
    },
    {
        card: 'headshot',
        img: 'vanGogh-images/vanGoghHeadShot-small'
    },
    {
        card: 'headshot',
        img: 'vanGogh-images/vanGoghHeadShot-small'
    },
    {
        card: 'mullberrytree',
        img: 'vanGogh-images/vanGoghMulberryTree-small'
    },
    {
        card: 'mullberrytree',
        img: 'vanGogh-images/vanGoghMulberryTree-small'
    }
]

// Create the Gameboard
creatingBoard = () => {
    const gameboard = document.querySelector('#board')
    for (let i = 0; i < cardsList.length; i++){
        let cards = document.createElement('img')
        cards.setAttribute('src', 'Front-Back/memoryBack.png') 
        cards.setAttribute('data-card', i)
        gameboard.append(cards)  
    }
}

creatingBoard()

// Check for matches

// Flip your card

// Scoring