export default function ArticleForm({ newArticle, setNewArticle, articleSubmit, error }) {
  return (
    <div className="mt-5">
      <div className="card f1-form p-3">
        <h2 className="text-warning fw-bold">Add New Article</h2>
        <form onSubmit={articleSubmit}>
          <input type="text" className="form-control" value={newArticle} onChange={e => setNewArticle(e.target.value)} placeholder="Write the new article" />
          <button type="submit" className="btn btn-primary mt-3">Add Article</button>
        </form>
        {error && <small className="fst-italic fw-bolder text-danger mt-2">To add the article it must contain more than 10 characters</small>}
      </div>
    </div>
  );
}