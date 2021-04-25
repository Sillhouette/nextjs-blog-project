import Image from 'next/image'

import classes from './hero.module.css'

function Hero() {
    return <section className={classes.hero}>
        <div className={classes.image}>
            <Image 
                src="/images/site/austin.png" 
                alt="An image of Austin" 
                height={300} 
                width={300}
            />
        </div>
        <h1>Hi, I'm Austin</h1>
        <p>
            I'm a polyglot developer!
        </p>
    </section>
}

export default Hero