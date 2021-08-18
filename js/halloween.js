// Project 1 - Memory Mayhem

// Empty Arrays
cardsPicked = []
cardsPickedId = []
matchedCards = []

const halloween = {
    background: '/Users/suzyq/Desktop/GA/sei-bromeliad/projects/project-1-memorymayhem/Project1-memory-mayhem/Front-Back/halloBack.png',
    cards: [
    {
    card: 'cat', 
    pic: '/Users/suzyq/Desktop/GA/sei-bromeliad/projects/project-1-memorymayhem/Project1-memory-mayhem/halloween-images/cat.png'
    },
    {
    card: 'cat',
    pic: '/Users/suzyq/Desktop/GA/sei-bromeliad/projects/project-1-memorymayhem/Project1-memory-mayhem/halloween-images/cat.png'
    },
    {
    card: 'catnghost',
    pic: '/Users/suzyq/Desktop/GA/sei-bromeliad/projects/project-1-memorymayhem/Project1-memory-mayhem/halloween-images/catnghost.png'
    },
    {
    card: 'catnghost',
    pic: '/Users/suzyq/Desktop/GA/sei-bromeliad/projects/project-1-memorymayhem/Project1-memory-mayhem/halloween-images/catnghost.png'
    },
    {
    card: 'ghost',
    pic: '/Users/suzyq/Desktop/GA/sei-bromeliad/projects/project-1-memorymayhem/Project1-memory-mayhem/halloween-images/ghost.png'
    },
    {
    card: 'ghost',
    pic: '/Users/suzyq/Desktop/GA/sei-bromeliad/projects/project-1-memorymayhem/Project1-memory-mayhem/halloween-images/ghost.png'
    },
    {
    card: 'pumpkin',
    pic: '/Users/suzyq/Desktop/GA/sei-bromeliad/projects/project-1-memorymayhem/Project1-memory-mayhem/halloween-images/pumpkin.png'
    },
    {
    card: 'pumpkin',
    pic: '/Users/suzyq/Desktop/GA/sei-bromeliad/projects/project-1-memorymayhem/Project1-memory-mayhem/halloween-images/pumpkin.png'
    },
    {
    card: 'trickotreat',
    pic: '/Users/suzyq/Desktop/GA/sei-bromeliad/projects/project-1-memorymayhem/Project1-memory-mayhem/halloween-images/trickotreat.png'
    },
    {
    card: 'trickotreat',
    pic: '/Users/suzyq/Desktop/GA/sei-bromeliad/projects/project-1-memorymayhem/Project1-memory-mayhem/halloween-images/trickotreat.png'
    },
    {
    card: 'witch',
    pic: '/Users/suzyq/Desktop/GA/sei-bromeliad/projects/project-1-memorymayhem/Project1-memory-mayhem/halloween-images/witch.png'
    },
    {
    card: 'witch',
    pic: '/Users/suzyq/Desktop/GA/sei-bromeliad/projects/project-1-memorymayhem/Project1-memory-mayhem/halloween-images/witch.png',
    }
    ]
}

let game = new MemoryGame(halloween)
game.creatingBoard()
