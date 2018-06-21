import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css'

// ****{ Can be returned to class, later if state is needed }****

const Movie = (props) => {
  const movie = props.movieData;
  let button = null;
  if (props.addMovieCallback) {
    button = (<button onClick={props.addMovieCallback}>Add to Library</button>)
  }
  let movieDetails = null;
  if (props.selected) {
    movieDetails = "selected-movie-details"
  } else {
    movieDetails = "movie-details"
  }
  return(
    <section className={movieDetails} onClick={props.onMovieClick} >
      <img src={movie.image_url} alt={`${movie.title} poster`}/>
      <section className="caption">
        <h3>{movie.title}</h3>
        <p>{movie.overview}</p>
        <span>{movie.release_date}</span>
        {button}
      </section>
    </section>
  )

}

Movie.propTypes = {
  movieData: PropTypes.object,
  addMovieCallback: PropTypes.func,
  onMovieClick: PropTypes.func
}



// export default class Movie extends Component {
//   render() {
//     let movie = this.props
//
//     return(
//       <a value={movie.id} onClick={movie.selectedMovieCallback} >
//         <img src={`${movie.image_url}`} alt={`${movie.title} poster`}/>
//         <section className="movie-details__item">
//             <p>Title: {movie.title}</p>
//             <p>Overview: {movie.overview}</p>
//             <p>Release Date: {movie.release_date}</p>
//         </section>
//       </a>
//     )
//   }
//
//   static propTypes = {
//     external_id: PropTypes.number,
//     id: PropTypes.number,
//     image_url: PropTypes.string.isRequired,
//     overview: PropTypes.string,
//     release_date: PropTypes.string,
//     title: PropTypes.string,
//     addMovieCallback: PropTypes.func,
//     selectMovieCallback: PropTypes.func
//   }
// }

export default Movie;