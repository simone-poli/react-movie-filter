import { useState } from 'react'
import { useEffect } from 'react'



const initialMovies = [
  { title: 'Inception', genre: 'Fantascienza' },
  { title: 'Il Padrino', genre: 'Thriller' },
  { title: 'Titanic', genre: 'Romantico' },
  { title: 'Batman', genre: 'Azione' },
  { title: 'Interstellar', genre: 'Fantascienza' },
  { title: 'Pulp Fiction', genre: 'Thriller' },
]




function App() {
  const [genreFilter, setGenreFilter] = useState('')
  const [movies, setMovie] = useState(initialMovies)


  useEffect(() => {
    if (genreFilter === '') {
      setMovie(initialMovies)
    } else {
      const filteredMovie = initialMovies.filter(movie => movie.genre.includes(genreFilter)
      )
      setMovie(filteredMovie)
    }
  })



  return (
    <>
      <div className="container">
        <div className="text-center">
          <input className="form-control m-4" type="text" placeholder='Inserisci genere' value={genreFilter} onChange={(e) => setGenreFilter(e.target.value)} />
        </div>

        <ul className="list-group m-4">
          {
            movies.map((movie, index) => {
              return (
                <li key={index} className="list-group-item d-flex justify-content-between">
                  <p>{movie.title}</p>
                  <p>{movie.genre}</p>
                </li>
              )
            })
          }
        </ul>

      </div>



    </>
  )
}

export default App
