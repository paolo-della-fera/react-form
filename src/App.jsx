import { useState } from "react";

import AppHeader from "./components/AppHeader"
import ArticleList from "./components/AppArticleList";
import ArticleForm from "./components/AppFormArticle";



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

      <main>

        <div className="container text-center pt-5">

          {/* article list */}
          <ArticleList f1Article={f1Article} />

          {/* form new article */}
          <ArticleForm newArticle={newArticle} setNewArticle={setNewArticle} articleSubmit={articleSubmit} error={error} />

        </div>

      </main>


    </>
  )
}

export default App
