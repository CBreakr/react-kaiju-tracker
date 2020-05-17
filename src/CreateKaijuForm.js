import React from 'react'

class CreateKaijuForm extends React.Component {

  state = {
    name: "",
    power: "",
    image: ""
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {
    return (
      <form id='create-kaiju-form' onSubmit={this.props.addKaiju}>

        <label>Name: </label>
        <input type='text' 
          placeholder="add your name here.." 
          name="name"
          value={this.state.name}
          onChange={this.onChange}
        />

        <label>Power: </label>
        <input type='text' 
          placeholder="add your power here..." 
          name="power"
          value={this.state.power}
          onChange={this.onChange}
        />

        <label>Image: </label>
        <input type='text' 
          placeholder="add your image url here..." 
          name="image"
          value={this.state.image}
          onChange={this.onChange}
        />

        <br/>

        <input type='submit' value='List Kaiju' />

      </form>
    )
  }
}

export default CreateKaijuForm
