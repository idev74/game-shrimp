import './About.css'

export default function About() {
    return (
        <div className='h-100'>
            <h1>About</h1>
            <h2>Game Shrimp is a website for anyone to look up and favorite games from many different platforms!</h2>
            <h3>How to use: </h3>
            <ol>
                <li>Search any game you desire</li>
                <li>Click on the game you want to see more about (platforms, videos, dev info, etc.)</li>
                <li>Click the heart to favorite the game</li>
                <li>Click the "Favorites" link in the header to see your favorite games and click any platform icon to buy the game!</li>
            </ol>
        </div>
    )
}