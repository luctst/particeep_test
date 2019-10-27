import styled from "styled-components";

const MoviesStyled = styled.div `
.delete--btn {
  position: absolute;
  right: 0;

  button {
      background-color: #fecc00;
    }
}
  margin-top 10%;
  text-align: left;
  .cards {
    justify-content: center;
  }
  .card {
    margin-right: 25px;
  }
  .card--toggle--likes {
    i {
      color: #fecc00;
    }
  }
  button {
    text-align: right;
  }
`

export default MoviesStyled