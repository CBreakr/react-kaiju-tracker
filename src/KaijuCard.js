// React
import React from 'react'
// Components
import EditKaijuForm from './EditKaijuForm'
import CreateKaijuSightingForm from "./CreateKaijuSightingForm"
import KajuSightingsContainer from "./KajuSightingsContainer"
class KaijuCard extends React.Component {

  // How can we show the edit form conditionally?
  render() {
    console.log("isEditMode", this.props.isEditMode, this.props.id);

    const sightings = this.props.sightings.filter(sighting => {
      return sighting.kaijuId == this.props.id;
    });

    return (
      <div className='kaiju-card'>

        {this.props.isEditMode
          ? <>
            <EditKaijuForm {...this.props} />
            <button className='kaiju-card-edit-button' data-id={this.props.id} onClick={this.props.removeEditMode}>Nevermind</button>
            <button className='kaiju-card-delete-button' data-id={this.props.id} onClick={this.props.deleteKaiju}>Delete</button>
          </>
          : <>
            <h2 className='kaiju-card-name'>{this.props.name}</h2>
            <h3 className='kaiju-card-power'>Power: {this.props.power}</h3>

            <img className='kaiju-card-image' src={this.props.image} alt={"Maybe something should go here"} />

            <KajuSightingsContainer sightings={sightings} />
            <CreateKaijuSightingForm {...this.props} />

            {/* What should this edit button do? */}
            <button className='kaiju-card-edit-button' data-id={this.props.id} onClick={this.props.setEditMode}>Edit</button>
          </>
        }

      </div>
    )
  }
}

export default KaijuCard
