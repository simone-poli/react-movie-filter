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
  const [newMovie, setNewMovie] = useState('')
  const [newGenr, setNewGenr] = useState('')
  const [titleFilter, setTitleFilter] = useState('')
  const [genreFilter, setGenreFilter] = useState('')
  const [movies, setMovie] = useState(initialMovies)


  useEffect(() => {
    if (genreFilter === '' && titleFilter === '') {
      setMovie(initialMovies)
    } else {
      const filtered = initialMovies.filter(movie => movie.genre.includes(genreFilter) && movie.title.includes(titleFilter)
      )
      setMovie(filtered)
    }
  }, [genreFilter,titleFilter])

 

  function handleSubmit(e) {
    e.preventDefault()
    setMovie((prev) => [
      ...prev,
      {
        title: newMovie,
        genre: newGenr,
      }
    ])

    setNewMovie('')
    setNewGenr('')
  }


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
          <input className="form-control m-4" type="text" placeholder='Filtra titolo film' value={titleFilter} onChange={(e) => setTitleFilter(e.target.value)} />
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




        <form onSubmit={handleSubmit}>
          <input className="form-control" type="text" placeholder='insert new movie' value={newMovie} onChange={e => setNewMovie(e.target.value)} />
          <input className="form-control" type="text" placeholder='insert gener' value={newGenr} onChange={e => setNewGenr(e.target.value)} />
          <button className="btn" type="submit">Insert</button>
        </form>

      </div>



    </>
  )
}

export default App
