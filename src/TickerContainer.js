// React & Hooks
import React, {useState, useEffect} from 'react'
// Requests
import * as requests from './requests'

const TickerContainer = ({kaijus}) => {

  // Oooooooh shiny react hooks! Consider this a teaser for later >:)
  const [sightings, setSightings] = useState([])
  useEffect(() => {requests.fetchSightings().then(setSightings)}, [])

  // Helper function
  const findKaiju = (sighting) => kaijus.find(k => k.id == sighting.kaijuId)

  // Helper function to build out spans for the ticker
  const renderSightings = () => {
    // Only show sightings if they exist
    if (kaijus.length && sightings.length) {
      return sightings.map(sighting => {

        console.log("in the TICKER", sighting);

        const kaiju = findKaiju(sighting)
        // But also only show a sighting if the kaiju exists
        if (kaiju) {
          return <span key={sighting.id}
            style={{animation: '1s warning-flash infinite alternate'}}>
            &#9888; {kaiju.name} seen in {sighting.location}! {sighting.description} &#9888;
            </span>
        } else {
          return <span key={sighting.id}
            style={{animation: '1s warning-flash infinite alternate'}}>
            &#9888; Error Error Error &#9888;
            </span>
        }
      })
    // Otherwise create a single announcement about how there are no announcements
    } else {
      return <span>No kaiju sightings ... Stay tuned for more announcements ...</span>
    }
  }

  // This is a FUNCTIONAL component, we only need a return statement
  return (
    <div id='ticker-container'>

      <div>

        {renderSightings()}

      </div>

    </div>
  )
}

export default TickerContainer
