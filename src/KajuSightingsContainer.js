import React from "react";

export default class KajuSightingsContainer extends React.Component {
    render(){
        return (
            <ul>
                {this.props.sightings.map(sighting => {
                    return <li key={sighting.id}>{sighting.location}: {sighting.description}</li>
                })}
            </ul>
        )
    }
}