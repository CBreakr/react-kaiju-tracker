import React from 'react'

class EditKaijuForm extends React.Component {

  state = {
    id: "",
    name: "",
    power: "",
    image: ""
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  componentDidMount() {
    this.setState({
      id: this.props.id,
      name: this.props.name,
      power: this.props.power,
      image: this.props.image
    });
  }

  render() {
    console.log("edit form props", this.props);
    return (
      <>
        <form className='kaiju-card-edit-form' 
          data-id={this.state.id}
          onSubmit={this.props.editKaiju} >

          <label>Name: </label>
          <input type='text' name="name" value={this.state.name} onChange={this.onChange} />
          <br/>

          <label>Power: </label>
          <input type='text' name="power" value={this.state.power} onChange={this.onChange} />
          <br/>

          <label>Image URL: </label>
          <input type='text' name="image" value={this.state.image} onChange={this.onChange} />
          <br/>

          <input type="submit" value="Save Changes" />

        </form>
      </>
    )
  }
}

export default EditKaijuForm
