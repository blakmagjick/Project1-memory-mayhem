// Project 1 - Memory Mayhem

// Empty Arrays
    cardsPicked = []
    cardsPickedId = []
    matchedCards = []

const vanGogh = {
    background: 'Front-Back/memoryBack.png',
    cards: [
    {
    card: 'cats', 
    pic: 'vanGogh-images/cats.png'
    },
    {
    card: 'cats',
    pic: 'vanGogh-images/cats.png'
    },
    {
    card: 'starryNight',
    pic: 'vanGogh-images/vanGoghStarryNight-small.png'
    },
    {
    card: 'starryNight',
    pic: 'vanGogh-images/vanGoghStarryNight-small.png'
    },
    {
    card: 'skeleton',
    pic: 'vanGogh-images/vanGoghSkeleton-small.png'
    },
    {
    card: 'skeleton',
    pic: 'vanGogh-images/vanGoghSkeleton-small.png'
    },
    {
    card: 'flowers',
    pic: 'vanGogh-images/vanGoghBeautyEverywhere-small.png'
    },
    {
    card: 'flowers',
    pic: 'vanGogh-images/vanGoghBeautyEverywhere-small.png'
    },
    {
    card: 'headshot',
    pic: 'vanGogh-images/vanGoghHeadShot-small.png'
    },
    {
    card: 'headshot',
    pic: 'vanGogh-images/vanGoghHeadShot-small.png'
    },
    {
    card: 'mullberrytree',
    pic: 'vanGogh-images/vanGoghMulberryTree-small.png'
    },
    {
    card: 'mullberrytree',
    pic: 'vanGogh-images/vanGoghMulberryTree-small.png',
    }
    ]
}
    
let game = new MemoryGame(vanGogh)
game.creatingBoard()
