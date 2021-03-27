import React, { Component } from 'react'
import { RoomContext } from '../context';
import Loading from './Loading';
import Room from './Room';
import Title from './Title';

export default class FeaturedRooms extends Component {
    static contextType = RoomContext;
    render() {
        let { featuredRooms : rooms, loading } = this.context;
        console.log(rooms);

        rooms = rooms.map(room => {
            return <Room key={room.id} room={room} />
        })

        return (
            <div className="featured-rooms">
                <Title title="featured room" />
                <div className="featured-rooms-center">
                    {loading ? <Loading /> : rooms}
                </div>
            </div> 
        )
    }
}
