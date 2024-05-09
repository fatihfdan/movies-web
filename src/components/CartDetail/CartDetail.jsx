import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../components/CartDetail.css";

function CartDetail() {
  const { id } = useParams();
  const [movie, setMovie] = useState();
  const [cartLoading, setCartLoading] = useState(false);

  useEffect(() => {
    fetchMovie();
  }, []);

  const fetchMovie = () => {
    setCartLoading(true);
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=1e31e940b34b9de92c3a0afe8f933b38&append_to_response=videos&language=tr-TR`
    )
      .then((res) => res.json())
      .then((data) => {
        setMovie(data);
        setTimeout(() => setCartLoading(false), 500);
        console.log(data);
      });
  };

  return (
    <>
      <div className="cartdetail">
        {cartLoading ? (
          <div className="loading-overlay">
            <div className="loading-message">Loading...</div>
          </div>
        ) : (
          <>
            {movie ? (
              <div className="moviecard">
                <img
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  alt="img"
                />
                <h2>{movie.title}</h2>
                <p>{movie.overview}</p>
                <p className="release-date">
                  Çıkış Tarihi: {movie.release_date}
                </p>
                <p className="rating">
                  IMDb Puanı:{movie.vote_average.toFixed(1)}
                </p>

                {movie.videos?.results.length !== 0 ? (
                  <iframe
                    src={`https://www.youtube.com/embed/${movie.videos.results[0].key}`}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                ) : (
                  <div>Video Bulunamadı.</div>
                )}
              </div>
            ) : (
              <div>Film bilgilerine erişilemedi.</div>
            )}
          </>
        )}
      </div>
    </>
  );
}

export default CartDetail;
