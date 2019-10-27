import React from "react";

function MovieCard(props) {
  return (
    <div className="card col-lg-3 col-md-6 col-xs-12 mb-3" >
      <div className="delete--btn">
        <button className="btn--delete" onClick={props.deletedButton}>x</button>
        {/* <button className="btn--delete" onClick={(el, i) => props.deletedButton(i, el)}>DELETE</button> */}
      </div>
      <div className="card-title">
        <strong>{props.data.title}</strong>
      </div>
      <div className="card-body">
        <div className="card--category">
          #{props.data.category}
        </div>
        <div className="row mt-2 mb-2 card--likes--dislikes">
          {/* <div className="card--likes col-3">
            <p>
              Ratio {Math.round(props.data.likes / props.data.dislikes)}
            </p>
          </div> */}
          <div className="card--toggle--likes col-lg-3">
            <p>
              <i className="fas fa-thumbs-up" onClick={props.toggleLike} ></i>
            </p>
          </div>
          <div className="card--likes col-lg-4">
            <p>
              {props.data.likes} <i className="fas fa-thumbs-up"></i>
            </p>
          </div>
          <div className="card--dislikes col-lg-4">
            <p>
              {props.data.dislikes} <i className="fas fa-thumbs-down"></i>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieCard