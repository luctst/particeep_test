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
      category: "Comedy"
    }
  })

  const [dataCategory, setDataCategory] = useState({
    categories: []
  });

  // const [dataLike, setDataLike] = useState({
  //   likes: null,
  //   dislikes: null
  // })

  useEffect(() => {
    movies$.then(function (value) {
      setData({
        data: value,
        currentPage: 1,
        filters: {
          category: "Comedy"
        }
      })
    })
  }, [data.filters.category])

  // function getList(page) {
  //   movies$.then(function (value) {
  //     setData({
  //       data: value,
  //       currentPage: page,
  //     })
  //   })
  // }

  // useEffect(() => {
  //   getList(data.currentPage)
  // }, [])

  // function handleChangePage(page) {
  //   getList(page)
  // }

  console.log(data.data);

  function deleteCard(el, index) {
    const newState = [...data.data];
    newState.splice(index, 1);
    setData({data: newState});
    // el.target.parentNode.parentNode.parentNode.remove(el.target);
  }

  function toggleFunction(e) {
    if (e.target.className === "fas fa-thumbs-up") {
      // const newState =[...data.data];

      // newState.map((card, index) => {
      //   console.log(card.likes);
      //   setDataLike({
      //     likes: card.likes,
      //     dislikes: card.dislikes
      //   })
      // })
      // console.log(dataLike);

      e.target.classList.remove("fa-thumbs-up");
      e.target.classList.add("fa-thumbs-down");
    } else {
      e.target.classList.remove("fa-thumbs-down");
      e.target.classList.add("fa-thumbs-up");
    }
  }

  function allCategories() {
    const newState = {...dataCategory};

    data.data.map(movie => {
      newState.categories.push(movie.category);
    })
  }
  allCategories()
  
  function handleOnChangeCategory(element) {
    const newState = {...data}
    console.log(newState);
    console.log(element.target.value);
    newState.filters[element.target.id] = element.target.value;
    setData({
      data: newState,
      currentPage: 1,
      filters: {
        category: element.target.value
      }
    });

  }

  return(
    <React.Fragment>
    <MoviesStyled className="container container--cards">
      <CategoriesStyled className="categories">
          <select className="categories--select" onChange={el => handleOnChangeCategory(el)}>
            {
              function () {
                const movieCategory = [...new Set(data.data.map(movie => {
                  return movie.category
                  })
                )]
                return movieCategory.map(category => {
                  return (
                    <option value={category} key={category}>{category}</option>
                  )
                })
              }()
            }
          </select>
        </CategoriesStyled>
        <div className="row cards">
          {
            function () {
              if (data.data.length === 0){
                return "loading";
              } else {
                return data.data.map((movie, index) => {
                  return <MovieCard data={movie} key={index} deletedButton={(el) => deleteCard(el, index)} toggleLike={toggleFunction} />
                })
              }
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