import AppHeader from "./components/AppHeader"



const articles = [
  { id: 1, title: "Verstappen domina il GP di Monaco" },
  { id: 2, title: "Ferrari: nuovi aggiornamenti in arrivo" },
  { id: 3, title: "Hamilton firma con la Ferrari" },
  { id: 4, title: "Leclerc in pole a Silverstone" },
  { id: 5, title: "La McLaren sorprende tutti a Monza" },
  { id: 6, title: "Norris: la mia stagione migliore" },
  { id: 7, title: "GP del Giappone: trionfa Verstappen" },
  { id: 8, title: "Mercedes torna competitiva?" },
];



function App() {


  return (
    <>
      <AppHeader />

      <div className="container text-center mt-4">
        <ul className="list-group">
          {
            articles.map((article) => (
              <li className="list-group-item" key={article.id}>{article.title}</li>
            ))
          }
        </ul>
      </div>

    </>
  )
}

export default App
