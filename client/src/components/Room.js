import React from 'react'

export default function Room({ room }) {
    const { name, slug, images, price } = room;

    return (
        <div className="room">
            <div className="img-container">
                <img src={images[0]} alt="single room" />
            </div>
        </div>
    )
}
