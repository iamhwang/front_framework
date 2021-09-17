import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 80vh;
  justify-content: center;
  align-items: center;
  flex-direction: column;

`;

export const Wrapper = styled.div`
  max-width: 350px;
  width: 100%;
`;

export const WhiteBox = styled.div`
  background-color: white;
  border: 1px solid rgb(219,219,219);
  width: 100%;
`;

export const TopBox = styled(WhiteBox)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  form {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    input, button {
      width: 100%;
      border-radius: 3px;
      padding: 7px;
      background-color: #fafafa;
      border: 0.5px solid rgb(219, 219, 219);
      margin-top: 5px;
      box-sizing: border-box;
      &::placeholder {
        font-size: 12px;
      }
    }
    button {
      font-weight: 600;
      background: #3b5998;
      color: #ffffff;
      margin-bottom: 30px;
    }
  }
`;

export const Separator = styled.div`
  margin: 20px 0px 30px 0px;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  width: 100%;
  align-items: center;
  div {
    width: 100%;
    height: 1px;
    background-color: rgb(219, 219, 219);
  }
  span {
    margin: 0px 10px;
    font-weight: 600;
    color: #8e8e8e;
  }
`;
