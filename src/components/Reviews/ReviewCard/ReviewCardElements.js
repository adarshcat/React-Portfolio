import styled from "@emotion/styled";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 4rem;
  overflow: hidden;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0 5px 15px -3px var(--card-shadow2),
    0 4px 6px -2px var(--card-shadow);
  @media (min-width: 992px) {
    border-bottom: 0;
    transform: scale(100%);
    transition: transform 0.1s ease-in-out 0s;

    &:hover {
      transform: scale(101%);
      transition: transform 0.1s ease-in-out 0s;
    }
  }

  color: var(--text-color);
  background-color: var(--card-background);
  // cursor: pointer;

  hr {
    margin: 15px;
    border-style: solid;
    border-bottom: none;
    border-color:rgb(232, 232, 232);
    border-top-width: 1px;
  }
`;

export const CardTop = styled.div`
  display: flex;
  flex-direction: row;
  height: 50px;
  
  .rating-profile {
    width: 50px;
    height: auto;
    border-radius: 50%;
    box-shadow: 0 5px 15px -3px var(--card-shadow2),
    0 4px 6px -2px var(--card-shadow);
    margin-right: 18px;
  }
`;

export const CardTopRight = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1px;
  
  > h1 {
    font-weight: 500;
  }
`;

export const CardTopCountry = styled.div`
  display: flex;
  margin-top: auto;
  flex-direction: row;
  text-align: center;
  vertical-align: middle;
  > img {
    width: 18px;
    height: 18px;
    border-radius: 0;
    box-shadow: none;
    padding: 0px;
    margin-right: 10px;
  }
  font-size: 13px;
  color:#555555;
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  > h1 {
    text-align: justify;
    font-size: 15px;
    margin: 10px 0;
    font-weight: 300;
  }
`;

export const Star = styled.div`
  display: flex;
  flex-direction: row;
  vertical-align: middle;
  .star{
    margin: 3px 1.5px;
  }
  font-size: 14px;
  h1 {
    margin-left: 2px;
    font-weight: 500;
  }
`;

export const Link = styled.a`
  color: var(--text-color);
  text-decoration: underline;
`