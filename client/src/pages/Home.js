import React from 'react'
import { Link } from 'react-router-dom'
import Banner from '../components/Banner'
import FeaturedRooms from '../components/FeaturedRooms'
import Hero from '../components/Hero'
import Services from '../components/Services'

export default function Home() {
    return (
        <>
            <Hero>
                <Banner title="Pattaya Beach" subtitle="Luxurious for someone">
                    <Link to="/rooms" className="btn-primary">
                        see more
                    </Link>
                </Banner>
            </Hero>
            <Services />
            <FeaturedRooms />
        </>
    )
}
