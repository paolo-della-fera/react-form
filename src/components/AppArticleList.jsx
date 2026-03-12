export default function ArticleList({ f1Article }) {
  return (
    <div className="row">
      {f1Article.map((article) => (
        <div className="col-md-4 mb-3" key={article.id}>
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">{article.title}</h5>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}