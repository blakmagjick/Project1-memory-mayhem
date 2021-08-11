// Project 1 - Memory Mayhem

// Empty Arrays
const cardsPicked = []
const cardsPickedId = []

const memGame = {
// Card Options
    cardsList: [
    {
        card: 'wildman',
        pic: 'vanGogh-images/vanGoghWildMan-small'
    },
    {
        card: 'wildman',
        pic: 'vanGogh-images/vanGoghWildMan-small'
    },
    {
        card: 'starryNight',
        pic: 'vanGogh-images/vanGoghStarryNight-small'
    },
    {
        card: 'starryNight',
        pic: 'vanGogh-images/vanGoghStarryNight-small'
    },
    {
        card: 'skeleton',
        pic: 'vanGogh-images/vanGoghSkeleton-small'
    },
    {
        card: 'skeleton',
        pic: 'vanGogh-images/vanGoghSkeleton-small'
    },
    {
        card: 'flowers',
        pic: 'vanGogh-images/vanGoghBeautyEverywhere-small'
    },
    {
        card: 'flowers',
        pic: 'vanGogh-images/vanGoghBeautyEverywhere-small'
    },
    {
        card: 'headshot',
        pic: 'vanGogh-images/vanGoghHeadShot-small'
    },
    {
        card: 'headshot',
        pic: 'vanGogh-images/vanGoghHeadShot-small'
    },
    {
        card: 'mullberrytree',
        pic: 'vanGogh-images/vanGoghMulberryTree-small'
    },
    {
        card: 'mullberrytree',
        pic: 'vanGogh-images/vanGoghMulberryTree-small'
    }
    ],
// Create the Gameboard
    creatingBoard() {
        const gameboard = document.querySelector('#board')
        for (let i = 0; i < this.cardsList.length; i++){
            let cards = document.createElement('img')
            cards.setAttribute('src', 'Front-Back/memoryBack.png') 
            cards.setAttribute('data-card', i)
            cards.setAttribute('id', 'gameCard')
            cards.addEventListener('click', this.flipTheCard())
            gameboard.append(cards)  
            }
        },
// Flip your card
    flipTheCard () {
   },
// Check for matches
    checkMatches () {
    } 
// Scoring

// Eventlisteners

// END OF OBJECT, don't put anything after this curly bracket
}

memGame.creatingBoard()