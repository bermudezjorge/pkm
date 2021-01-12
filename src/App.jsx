import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { loadDataFromAPI, errorFromAPI } from './state/pkmAPI/pkmApiActions.js'

import { getPkm } from './api/pkmAPI/getPkm.js'

import './css/pkm.css'


function App({ name, id, sprite, err, loadDataFromAPI, errorFromAPI }) {
  useEffect(() => {
    getPkm()
      .then((data) => loadDataFromAPI(data))
      .catch(({ message }) => errorFromAPI(message))

  }, [])

  console.log(name, id, sprite, err)

  if(!name) {
    return <span>Loading...</span>
  } else if(!!err) {
    return <span>{err}</span>
  } else {
    return (
      <div className="pkm__container">
        <h1 className="pkm__name">{name}</h1>
          <h3 className="pkm__id">{id}</h3>
        <img className="pkm__sprite pkm__sprite--anim" src={sprite} alt="is a pokemon" />
      </div>
    )
  }
}

const mapStateToProps = ({ name, id, sprite, err }) => ({
  name,
  id,
  sprite,
  err
})

export default connect(
  mapStateToProps,
  {
    loadDataFromAPI,
    errorFromAPI
  }
)(App)
