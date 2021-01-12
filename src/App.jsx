import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { loadDataFromAPI } from './state/pkmAPI/pkmApiActions.js'

import { getPkm } from './api/pkmAPI/getPkm.js'

import './css/pkm.css'


function App({ name, id, sprite, loadDataFromAPI }) {
  useEffect(() => {
    getPkm()
      .then((data) => loadDataFromAPI(data))
      .catch((err) => loadDataFromAPI(err))
  }, [])

  return (
    <div className="pkm__container">
      {!!name ? (
        <span>Loading...</span>
      ) : (
        <>
          <h1 className="pkm__name">{name}</h1>
            <h3 className="pkm__id">{id}</h3>
          <img className="pkm__sprite" src={sprite} alt="is a pokemon" />
        </>
      )}
    </div>
  )
}

const mapStateToProps = state => {
  const { name, id, sprite } = state

  return { name, id, sprite }
}

export default connect(
  mapStateToProps,
  { loadDataFromAPI }
)(App)
