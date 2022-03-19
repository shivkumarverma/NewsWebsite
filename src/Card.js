const Card = (p) => {
  return (
    <>
      <div className="col">
        <div className="card">
          <img src={p.imageUrl} className="card-img-top" alt="..." />

          <div className="card-body">
            <h5 className="card-title">{p.title}</h5>
            <p className="card-text">{p.content}</p>
            <a href={p.readMoreUrl} class="btn btn-primary">
              Read More
            </a>
            <span className="badge rounded-pill bg-light text-dark  justify-content-end">
              {p.date}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
