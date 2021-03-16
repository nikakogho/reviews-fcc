import React, { useState } from 'react'
import './App.css'
import Review from './Review'

const people = [
    { 
        img: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',
        name: 'Susan Smith',
        job: 'Web Developer',
        info: `I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry`
    },
    { 
        img: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg',
        name: 'anna johnson',
        job: 'web designer',
        info: `Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.`
    },
    { 
        img: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg',
        name: 'peter jones',
        job: 'intern',
        info: `Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.`
    },
    { 
        img: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg',
        name: 'bill anderson',
        job: 'the boss',
        info: `Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. `
    }
]

const App = () => {
    const [index, setIndex] = useState(0)

    const goLeft = () => {
        setIndex(old => old === 0 ? (people.length - 1) : (old - 1))
    }

    const goRight = () => {
        setIndex(old => old === people.length - 1 ? 0 : (old + 1))
    }

    const getRandom = () => {
        const rand = Math.random()
        const newIndex = Math.floor(rand * people.length)
    
        setIndex(old => old !== newIndex ? newIndex : ((old + 1) % people.length))
    }

    return <div className='container'>
        <div className='top'>
            <h2>Our Reviews</h2>
            <div></div>
        </div>
        <div className='content'>
            <Review key={index} {...people[index]} />
            <div className='left-right'>
                <button onClick={goLeft}>{'<'}</button>
                <button onClick={goRight}>{'>'}</button>
            </div>
            <button onClick={getRandom} className='random'>Surprise Me</button>
        </div>
    </div>
}

export default App