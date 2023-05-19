import styled from "styled-components";

export const ProductCardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;

  img {
    width: 100%;
    height: 95%;
    object-fit: cover;
    margin-bottom: 5px;
    border-radius: 27px;
  }

  button {
    width: 80%;
    opacity: 0.7;
    position: absolute;
    top: 255px;
    display: none;
  }

  &:hover {
    cursor: pointer;
    opacity: 0.9;
    border-radius: 27px;
    button:active {
    background-color: green;
  }


  img {
  /* opacity: 0.8; */
  border-radius: 56px;
  transform: scale(1); /* Set initial scale value */
  transition: transform 0.6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
}

img:hover {
  /* transform: scale(1.1); Set hover scale value */
  transform: rotate(-1.5deg); /* Set hover scale value */
}

    button {
      opacity: 0.85;
      display: flex;
    }
  }
`;

export const Footer = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  margin-left: 25px;
`;

export const Name = styled.span`
  width: 90%;
  margin-bottom: 15px;
  font-weight: bold;
`;

export const Price = styled.span`
  width: 10%;
  margin-right: 45px;
  font-weight: bold;
`;
