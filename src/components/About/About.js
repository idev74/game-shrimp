import React from 'react';

export default function About() {
    return (
        <section className="h-100 mx-5">
            <header className="inline-flex">
                <h1 className="text-8xl text-amber-100 font-semibold my-5 mr-2">About</h1>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.2" stroke="beige" class="w-24 h-24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                </svg>
            </header>
            <section className=" inline-flex">
            <main className="justify-end">
                <h2 className="text-2xl text-amber-100 font-semibold mb-10">Game Shrimp is a website for anyone to look up and favorite games from many different platforms!</h2>
                <h3 className="text-amber-100 font-bold">How to use: </h3>
                <ol className="text-amber-100 font-bold">
                    <li>Search any game you desire</li>
                    <li>Click on the game you want to see more about (platforms, videos, dev info, tags, etc.)</li>
                    <li>Click the heart to favorite the game</li>
                    <li>Click the "Favorites" link in the header to see your favorite games and click any platform icon to buy the game!</li>
                </ol>
            </main>
            <section className="align-center justify-end ">
                <img src={`${process.env.PUBLIC_URL}/arcade.png`} alt="illustration of an arcade machine"/>
            </section>
            </section>
        </section>
    )
}