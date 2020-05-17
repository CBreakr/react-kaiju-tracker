//React
import React from 'react'
// Components
import KaijuCard from './KaijuCard'
import CreateKaijuForm from './CreateKaijuForm'
import TickerContainer from './TickerContainer'
//Fetch Requests
import * as requests from './requests'
// Read the README for how to fetch

class KaijuContainer extends React.Component {

  state = {
    kaijus: [],
    sightings: [],
    currentEditId: null
  }

  componentDidMount(){
    this.getAndDisplayKaijus();
    this.getSightings();
  }

  getAndDisplayKaijus = () => {
    requests.fetchKaijus()
    .then(data => {
      this.setState({currentEditId: null, kaijus: data});
    });
  }

  addKaiju = (event) => {
    event.preventDefault();

    const newKaiju = {
      name: event.target.name.value,
      power: event.target.power.value,
      image: event.target.image.value
    }

    event.target.reset();

    console.log(newKaiju);

    requests.addKaiju(newKaiju)
    .then(data => {
      this.getAndDisplayKaijus();
    });
  }

  setEditMode = (event) => {
    console.log("set edit mode", event.target);
    this.setState({currentEditId: event.target.dataset.id});
  }

  editKaiju = (event) => {
    event.preventDefault();
    console.log("edit kaiju", event.target);

    const newKaiju = {
      id: event.target.dataset.id,
      name: event.target.name.value,
      power: event.target.power.value,
      image: event.target.image.value
    }

    requests.editKaiju(newKaiju)
    .then(data => {
      this.getAndDisplayKaijus();
    });
  }

  removeEditMode = () => {
    this.setState({currentEditId: null});
  }

  deleteKaiju = (event) => {
    console.log("DELETE kaiju", event.target.dataset);
    requests.deleteKaiju(event.target.dataset.id)
    .then(data => {
      this.getAndDisplayKaijus();
    })
  }

  getSightings = () => {
    requests.fetchSightings()
    .then(data => {
      console.log("sightings", data);
      this.setState({sightings: data});
    })
  }

  createSighting = (event) => {
    event.preventDefault();

    console.log("create sighting", event.target);

    const newSighting = {
      kaijuId: event.target.dataset.id,
      location: event.target.location.value,
      description: event.target.description.value
    }

    event.target.reset();

    console.log("sighting form dataset", event.target.dataset);
    console.log(newSighting);

    requests.addSighting(newSighting)
    .then(data => {
      this.getSightings();
    })
  }

  //
  //
  // RENDER
  //
  //

  render() {

    console.log("state", this.state);

    return (
      <>

        <CreateKaijuForm addKaiju={this.addKaiju} />

        <div id='kaiju-container'>

          {/* Kaiju cards should go in here! */}
          {this.state.kaijus.map(kaiju => {
            console.log("edit id", this.state.currentEditId, kaiju.id);
            return <KaijuCard 
                    key={kaiju.id} 
                    {...kaiju}
                    sightings={this.state.sightings}
                    createSighting={this.createSighting}
                    isEditMode={this.state.currentEditId == kaiju.id}
                    setEditMode={this.setEditMode}
                    removeEditMode={this.removeEditMode}
                    deleteKaiju={this.deleteKaiju}
                    editKaiju={this.editKaiju} />
          })}

        </div>


        {/* Just pass kaijus to TickerContainer and it'll create a news ticker at the bottom */}
        <TickerContainer kaijus={this.state.kaijus} />
        {/* You won't have to modify TickerContainer but it's a fun preview for some other react features */}

      </>
    )

  }
}

export default KaijuContainer
