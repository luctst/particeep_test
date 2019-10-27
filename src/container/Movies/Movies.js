import React, {useState, useEffect} from "react";
import {movies$} from "../../utilis/movies";
import MovieCard from "../../components/Cards/MovieCard";
import MoviesStyled from "../style/MoviesStyled.style";
import Paginate from "../../components/Pagination/Paginate";
import CategoriesStyled from "../style/CategoriesStyled.style";

function Movies() {
  const [data, setData] = useState({
    data: [],
    currentPage: 1,
    filters: {
      categories: [],
      categorySelected: "All"
    }
  })

  useEffect(() => {
    (async function () {
      const newState = {...data};
      const dataMovies = await movies$;
      const categoriesArray = [];

      dataMovies.forEach(item => categoriesArray.includes(item.category) ? null : categoriesArray.push(item.category));
      categoriesArray.push("All");
      newState.data = [...dataMovies]; 
      newState.filters.categories = [...categoriesArray];

      setData(newState);
    })()
  }, [])
  
  function deleteCard(index) {
    const newState = {...data};

    newState.data.splice(index, 1);
    setData(newState);
  }

  function toggleFunction(e) {
    if (e.target.className === "fas fa-thumbs-up") {
      e.target.classList.remove("fa-thumbs-up");
      e.target.classList.add("fa-thumbs-down");
    } else {
      e.target.classList.remove("fa-thumbs-down");
      e.target.classList.add("fa-thumbs-up");
    }
  }

  function handleOnChangeCategory(e) {
    const newState = {...data};
    newState.filters.categorySelected = e.target.value;

    setData(newState);
  }

  return(
    <React.Fragment>
    <MoviesStyled className="container container--cards">
      <CategoriesStyled className="categories">
          <select className="categories--select" onChange={handleOnChangeCategory}>
            {
              data.filters.categories.map(category => <option value={category} key={category}>{category}</option>)
            }
          </select>
        </CategoriesStyled>
        <div className="row cards">
          {
            function () {
              if (data.data.length === 0) return "loading";

              if (data.filters.categorySelected !== "All") {
                return data.data.map((movie, index) => {
                  if (movie.category === data.filters.categorySelected) {
                    return <MovieCard 
                              data={movie} 
                              key={index} 
                              deletedButton={() => deleteCard(index)} 
                              toggleLike={toggleFunction} 
                            />
                  }
                })
              }

              return data.data.map((movie, index) => {
                return <MovieCard
                  data={movie}
                  key={index}
                  deletedButton={() => deleteCard(index)}
                  toggleLike={toggleFunction}
                />
              });
            }()
          }
        </div>
      </MoviesStyled>
      <Paginate />
      {/* <Paginate changedPage={page => getList(page)} /> */}
    </React.Fragment>
  )
}

export default Movies