// EventsSection.tsx

import React from 'react';
import { MainEvent } from './index'; // Import MainEvent component here
import { aboutus, event1, event2, event3, event4, event5 } from "../components/MainEventtexxt"; // Assuming you have a component named MainEvent
import Navbar from '@/components/Navbar';
import Head from 'next/head';
const EventsSection: React.FC = () => {
    return (
        <>
            <Head>
                <title>TISBZephyr</title>
                <meta name="description" content="TISBZephyr" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="./images/zephyr logo.png" />
            </Head>
            <div className="w-screen h-full bg-primary" >
                <Navbar />

                <div className="flex w-screen h-auto bg-primary " id="events">
                    <div className="flex flex-col items-center justify-center w-full h-auto px-6 sm:px-8">
                        <h1 className="w-full mb-8 mt-16 text-6xl font-semibold text-center sm:text-left">
                            Events
                        </h1>
                        <div className="flex flex-col items-start justify-center text-black w-full h-auto gap-4">
                            <MainEvent title={event1.title} description={event1.description} image='./images/dance.jpg' />
                            <MainEvent title={event2.title} description={event2.description} image='./images/music.jpg' />
                            <MainEvent title={event3.title} description={event3.description} image='./images/comic.jpeg' />
                            <MainEvent title={event4.title} description={event4.description} image='./images/standup.png' />
                            <MainEvent title={event5.title} description={event5.description} image='./images/poetry.jpg' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default EventsSection;
