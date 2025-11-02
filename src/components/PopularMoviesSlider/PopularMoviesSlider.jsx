import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { useGetMoviesQuery } from "../../services/TMDB";
import { Link } from "react-router-dom";

const PopularMoviesSlider = () => {
  // Fetch only popular movies with limit
  const { data, isLoading, error } = useGetMoviesQuery({
    genreIdOrCategoryName: "popular",
    page: 1,
  });

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-96">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (error || !data || !data.results) {
    return null;
  }

  // Get first 6 movies
  const popularMovies = data.results.slice(0, 6);

  return (
    <div className="mb-12 w-full">
      <div className="mb-6">
        <h2 className="text-3xl font-bold text-foreground mb-2">
          Popular Movies
        </h2>
        <div className="h-1 w-20 bg-primary rounded"></div>
      </div>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation={true}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="popular-movies-swiper"
      >
        {popularMovies.map((movie) => (
          <SwiperSlide key={movie.id}>
            <Link to={`/movie/${movie.id}`}>
              <div className="group relative overflow-hidden rounded-xl cursor-pointer shadow-2xl">
                {/* Background Image */}
                <div className="aspect-[16/9] w-full overflow-hidden bg-muted relative">
                  <img
                    src={
                      movie.backdrop_path
                        ? `https://image.tmdb.org/t/p/w1280/${movie.backdrop_path}`
                        : `https://www.fillmurray.com/1920/1080`
                    }
                    alt={movie.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80"></div>

                  {/* Content Overlay */}
                  <div className="absolute inset-0 flex items-end p-8 md:p-16">
                    <div className="max-w-4xl w-full">
                      {/* Movie Poster on the side */}
                      <div className="flex gap-6 items-end">
                        <div className="w-32 md:w-48 hidden md:block flex-shrink-0">
                          <img
                            src={
                              movie.poster_path
                                ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                                : `https://www.fillmurray.com/400/600`
                            }
                            alt={movie.title}
                            className="w-full rounded-lg shadow-2xl"
                          />
                        </div>

                        {/* Movie Info */}
                        <div className="flex-1">
                          <h3 className="text-white font-bold text-3xl md:text-5xl mb-3 line-clamp-2 drop-shadow-lg">
                            {movie.title}
                          </h3>
                          {movie.overview && (
                            <p className="text-white/90 text-sm md:text-base mb-4 line-clamp-3 drop-shadow">
                              {movie.overview}
                            </p>
                          )}
                          <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2 bg-primary/90 px-4 py-2 rounded-full">
                              <svg
                                className="w-5 h-5 text-primary-foreground"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <span className="text-primary-foreground text-lg font-bold">
                                {movie.vote_average.toFixed(1)}
                              </span>
                            </div>
                            {movie.release_date && (
                              <span className="text-white text-lg font-medium">
                                {new Date(movie.release_date).getFullYear()}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>

      <style>{`
        .popular-movies-swiper {
          padding-bottom: 40px;
        }
        .popular-movies-swiper .swiper-button-next,
        .popular-movies-swiper .swiper-button-prev {
          color: hsl(var(--primary));
          background: hsl(var(--background));
          width: 40px;
          height: 40px;
          border-radius: 50%;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }
        .popular-movies-swiper .swiper-button-next:after,
        .popular-movies-swiper .swiper-button-prev:after {
          font-size: 18px;
        }
        .popular-movies-swiper .swiper-pagination-bullet {
          background: hsl(var(--primary));
          opacity: 0.3;
        }
        .popular-movies-swiper .swiper-pagination-bullet-active {
          opacity: 1;
        }
        .popular-movies-swiper .swiper-slide {
          transition: all 0.3s;
        }
      `}</style>
    </div>
  );
};

export default PopularMoviesSlider;
