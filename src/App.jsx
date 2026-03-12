import { useState } from "react";
import AppHeader from "./components/AppHeader"



const articles = [
  { id: 1, title: "Verstappen dominates the Monaco GP" },
  { id: 2, title: "Ferrari: new updates on the way" },
  { id: 3, title: "Hamilton signs with Ferrari" },
  { id: 4, title: "Leclerc on pole at Silverstone" },
  { id: 5, title: "McLaren surprises everyone at Monza" },
  { id: 6, title: "Norris: my best season ever" },
  { id: 7, title: "Japanese GP: Verstappen wins" },
  { id: 8, title: "Mercedes back to competitive?" },
  { id: 9, title: "Ferrari: new rear wing arrives at the Chinese GP" },
];



function App() {
  const [newArticle, setNewArticle] = useState('')
  const [f1Article, setF1Article] = useState(articles)
  const [error, setError] = useState(false)


  function articleSubmit(e) {
    e.preventDefault()

    console.log(newArticle)

    if (newArticle.length >= 10) {
      setError(false)

      const newItem = { id: f1Article.length + 1, title: newArticle };
      setF1Article([newItem, ...f1Article]);

      setNewArticle('');
    }
    else {
      setError(true)
    }

  }



  return (
    <>
      <AppHeader />

      <div className="container text-center mt-5">


        {/* article list */}
        <div className="row">

          {
            f1Article.map((article) => (
              <div className="col-md-4 mb-3" key={article.id}>
                <div className="card h-100">
                  <div className="card-body">
                    <h5 className="card-title">{article.title}</h5>
                  </div>
                </div>
              </div>
            ))
          }

        </div>


        {/* form new article */}
        <div className="mt-5">

          <h2>Add New Article</h2>

          <form onSubmit={articleSubmit}>
            <input type="text" className="form-control" value={newArticle} onChange={e => setNewArticle(e.target.value)} placeholder="Write the new article" />
            <button type="submit" className="btn btn-primary mt-3">Add Article</button>
          </form>
          {error && <small className="fst-italic text-danger mt-2">To add the article it must contain more than 10 characters</small>}

        </div>


      </div>

    </>
  )
}

export default App
