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
  const [titleFilter, setTitleFilter] = useState('')
  const [genreFilter, setGenreFilter] = useState('')
  const [movies, setMovie] = useState(initialMovies)


  useEffect(() => {
    if (genreFilter === '') {
      setMovie(initialMovies)
    } else {
      const filtered = initialMovies.filter(movie => movie.genre.includes(genreFilter)
      )
      setMovie(filtered)
    }
  }, [genreFilter])
  
  useEffect(() => {
    if (titleFilter === '') {
      setMovie(initialMovies)
    } else {
      const filteredTitle = initialMovies.filter(movie => movie.title.includes(titleFilter)
      )
      setMovie(filteredTitle)
    }
  }, [titleFilter])



  return (
    <>
      <div className="container">
        <div className="text-center">
          <select className="form-control m-4" type="text" value={genreFilter} onChange={(e) => setGenreFilter(e.target.value)}>
            <option value="">Selezione Genere</option>
            <option value="Fantascienza">Fantascienza</option>
            <option value="Thriller">Thriller</option>
            <option value="Romantico">Romantico</option>
            <option value="Azione">Azione</option>
          </select>
          <input className="form-control m-4" type="text" value={titleFilter} onChange={(e) => setTitleFilter(e.target.value)}/>
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
