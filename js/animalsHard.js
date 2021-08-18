// Project 1 - Memory Mayhem

// Empty Arrays
cardsPicked = []
cardsPickedId = []
matchedCards = []

const animalsHard = {
    background: '/Users/suzyq/Desktop/GA/sei-bromeliad/projects/project-1-memorymayhem/Project1-memory-mayhem/Front-Back/animal background.png',
    cards: [ 
    {
    card: 'cardinal', 
    pic: '/Users/suzyq/Desktop/GA/sei-bromeliad/projects/project-1-memorymayhem/Project1-memory-mayhem/animal-images/cardinal.png'
    },
    {
    card: 'cardinal',
    pic: '/Users/suzyq/Desktop/GA/sei-bromeliad/projects/project-1-memorymayhem/Project1-memory-mayhem/animal-images/cardinal.png'
    },
    {
    card: 'cat',
    pic: '/Users/suzyq/Desktop/GA/sei-bromeliad/projects/project-1-memorymayhem/Project1-memory-mayhem/animal-images/cat.png'
    },
    {
    card: 'cat',
    pic: '/Users/suzyq/Desktop/GA/sei-bromeliad/projects/project-1-memorymayhem/Project1-memory-mayhem/animal-images/cat.png'
    },
    {
    card: 'fox',
    pic: '/Users/suzyq/Desktop/GA/sei-bromeliad/projects/project-1-memorymayhem/Project1-memory-mayhem/animal-images/fox.png'
    },
    {
    card: 'fox',
    pic: '/Users/suzyq/Desktop/GA/sei-bromeliad/projects/project-1-memorymayhem/Project1-memory-mayhem/animal-images/fox.png'
    },
    {
    card: 'owl',
    pic: '/Users/suzyq/Desktop/GA/sei-bromeliad/projects/project-1-memorymayhem/Project1-memory-mayhem/animal-images/owl.png'
    },
    {
    card: 'owl',
    pic: '/Users/suzyq/Desktop/GA/sei-bromeliad/projects/project-1-memorymayhem/Project1-memory-mayhem/animal-images/owl.png'
    },
    {
    card: 'sloth',
    pic: '/Users/suzyq/Desktop/GA/sei-bromeliad/projects/project-1-memorymayhem/Project1-memory-mayhem/animal-images/sloth.png'
    },
    {
    card: 'sloth',
    pic: '/Users/suzyq/Desktop/GA/sei-bromeliad/projects/project-1-memorymayhem/Project1-memory-mayhem/animal-images/sloth.png'
    },
    {
    card: 'turtle',
    pic: '/Users/suzyq/Desktop/GA/sei-bromeliad/projects/project-1-memorymayhem/Project1-memory-mayhem/animal-images/turtle.png'
    },
    {
    card: 'turtle',
    pic: '/Users/suzyq/Desktop/GA/sei-bromeliad/projects/project-1-memorymayhem/Project1-memory-mayhem/animal-images/turtle.png',
    },
    {
    card: 'hedgehog',
    pic: '/Users/suzyq/Desktop/GA/sei-bromeliad/projects/project-1-memorymayhem/Project1-memory-mayhem/animal-images/hedgehog.png'
    },
    {
    card: 'hedgehog',
    pic: '/Users/suzyq/Desktop/GA/sei-bromeliad/projects/project-1-memorymayhem/Project1-memory-mayhem/animal-images/hedgehog.png'
    },
    {
    card: 'koala',
    pic: '/Users/suzyq/Desktop/GA/sei-bromeliad/projects/project-1-memorymayhem/Project1-memory-mayhem/animal-images/koala.png'
    },
    {
    card: 'koala',
    pic: '/Users/suzyq/Desktop/GA/sei-bromeliad/projects/project-1-memorymayhem/Project1-memory-mayhem/animal-images/koala.png'
    },
    {
    card: 'lemur',
    pic: '/Users/suzyq/Desktop/GA/sei-bromeliad/projects/project-1-memorymayhem/Project1-memory-mayhem/animal-images/lemur.png'
    },
    {
    card: 'lemur',
    pic: '/Users/suzyq/Desktop/GA/sei-bromeliad/projects/project-1-memorymayhem/Project1-memory-mayhem/animal-images/lemur.png'
    },
    {
    card: 'parrot',
    pic: '/Users/suzyq/Desktop/GA/sei-bromeliad/projects/project-1-memorymayhem/Project1-memory-mayhem/animal-images/parrot.png'
    },
    {
    card: 'parrot',
    pic: '/Users/suzyq/Desktop/GA/sei-bromeliad/projects/project-1-memorymayhem/Project1-memory-mayhem/animal-images/parrot.png'
    },
    {
    card: 'peacock',
    pic: '/Users/suzyq/Desktop/GA/sei-bromeliad/projects/project-1-memorymayhem/Project1-memory-mayhem/animal-images/peacock.png'
    },
    {
    card: 'peacock',
    pic: '/Users/suzyq/Desktop/GA/sei-bromeliad/projects/project-1-memorymayhem/Project1-memory-mayhem/animal-images/peacock.png'
    },
    {
    card: 'prairedog',
    pic: '/Users/suzyq/Desktop/GA/sei-bromeliad/projects/project-1-memorymayhem/Project1-memory-mayhem/animal-images/prairedog.png'
    },
    {
    card: 'prairedog',
    pic: '/Users/suzyq/Desktop/GA/sei-bromeliad/projects/project-1-memorymayhem/Project1-memory-mayhem/animal-images/prairedog.png'
    },
    {
    card: 'rabbit',
    pic: '/Users/suzyq/Desktop/GA/sei-bromeliad/projects/project-1-memorymayhem/Project1-memory-mayhem/animal-images/rabbit.png'
    },
    {
    card: 'rabbit',
    pic: '/Users/suzyq/Desktop/GA/sei-bromeliad/projects/project-1-memorymayhem/Project1-memory-mayhem/animal-images/rabbit.png'
    },
    {
    card: 'raccoon',
    pic: '/Users/suzyq/Desktop/GA/sei-bromeliad/projects/project-1-memorymayhem/Project1-memory-mayhem/animal-images/raccoon.png'
    },
    {
    card: 'raccoon',
    pic: '/Users/suzyq/Desktop/GA/sei-bromeliad/projects/project-1-memorymayhem/Project1-memory-mayhem/animal-images/raccoon.png'
    },
    {
    card: 'squirrel',
    pic: '/Users/suzyq/Desktop/GA/sei-bromeliad/projects/project-1-memorymayhem/Project1-memory-mayhem/animal-images/squirrel.png'
    },
    {
    card: 'squirrel',
    pic: '/Users/suzyq/Desktop/GA/sei-bromeliad/projects/project-1-memorymayhem/Project1-memory-mayhem/animal-images/squirrel.png'
    } 
]
}

let game = new MemoryGame(animalsHard)
game.creatingBoard()
