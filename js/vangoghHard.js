// Project 1 - Memory Mayhem

// Empty Arrays
cardsPicked = []
cardsPickedId = []
matchedCards = []

const vanGoghHard = {
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
    },
    {
    card: 'cherryblossoms',
    pic: 'vanGogh-images/cherryblossoms.png',
    },
    {
    card: 'cherryblossoms',
    pic: 'vanGogh-images/cherryblossoms.png',
    },
    {
    card: 'harbour',
    pic: 'vanGogh-images/harbour.png',
    },
    {
    card: 'harbour',
    pic: 'vanGogh-images/harbour.png',
    },
    {
    card: 'pinkflowers',
    pic: 'vanGogh-images/pink flowers.png',
    },
    {
    card: 'pinkflowers',
    pic: 'vanGogh-images/pink flowers.png',
    },
    {
    card: 'room',
    pic: 'vanGogh-images/room.png',
    },
    {
    card: 'room',
    pic: 'vanGogh-images/room.png',
    },
    {
    card: 'sunflowers',
    pic: 'vanGogh-images/sunflowers.png',
    },
    {
    card: 'sunflowers',
    pic: 'vanGogh-images/sunflowers.png',
    },
    {
    card: 'tableflowers',
    pic: 'vanGogh-images/tableflowers.png',
    },
    {
    card: 'tableflowers',
    pic: 'vanGogh-images/tableflowers.png',
    },
    {
    card: 'thefields',
    pic: 'vanGogh-images/thefields.png',
    },
    {
    card: 'thefields',
    pic: 'vanGogh-images/thefields.png',
    },
    {
    card: 'trees',
    pic: 'vanGogh-images/trees.png',
    },
    {
    card: 'trees',
    pic: 'vanGogh-images/trees.png',
    },
    {
    card: 'bandageear',
    pic: 'vanGogh-images/bandageear.png',
    },
    {
    card: 'bandageear',
    pic: 'vanGogh-images/bandageear.png',
    }
]
}

let game = new MemoryGame(vanGoghHard)
game.creatingBoard()

const audio = new Audio('music/Cambo - Chill Funk.mp3')

vanGoghMusic = () => {
    audio.play()
}
stopVanGoghMusic = () => {
    audio.pause()
}
