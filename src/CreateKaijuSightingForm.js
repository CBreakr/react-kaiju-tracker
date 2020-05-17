import React from "react";

export default class CreateKaijuSightingForm extends React.Component {

    state = {
        location: "",
        description: ""
    }

    onChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    render(){
        return (
            <form className="kaiju-card-sighting-form" 
                data-id={this.props.id}
                onSubmit={this.props.createSighting} >
                <label htmlFor="description">New {this.props.name} sighting description</label>
                <br/>
                <input type="text" 
                    name="description" 
                    value={this.state.description} 
                    onChange={this.onChange}
                />
                <br/>
                <label htmlFor="location">Location</label>
                <br/>
                <input type="text" 
                    name="location"
                    value={this.state.location}
                    onChange={this.onChange}
                />
                <br/>
                <input type="submit"/>
            </form>
        )
    }
}