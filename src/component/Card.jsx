import React from 'react'

function Card(props) {
  return (
    <div>

<div className="card">
  <div className="card-body">
    <h5 className="card-title text-danger">{props.title}</h5>
    <h6 className="card-subtitle mb-2 text-body-secondary">{props.subtitle}</h6>
    <p className="card-text">{props.discription}</p>
  </div>
</div>

    </div>
  )
}

export default Card