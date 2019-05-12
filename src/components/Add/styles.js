import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.8);
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
`

export const Form = styled.form`
  width: 300px;
  background: #ededed;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  padding: 10px;
  input {
    margin-top: 10px;
    width: 100%;
    height: 30px;
    padding: 0 10px;
    font-size: 12px;
    font-weight: bold;
    border-radius: 5px;
    border: 0;
  }
  input::placeholder {
    color: #dbdbdb;
  }
  div {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-top: 10px;
    margin-bottom: 10px;
  }
  button {
    font-size: 12px;
    font-weight: bold;
    background: #bababa;
    color: #fff;
    width: 135px;
    height: 30px;
    border-radius: 5px;
    &:hover {
      background: #656565;
    }
    &:last-child {
      background: #03b303;
      &:hover {
        background: #027902;
      }
    }
  }
  span {
    font-size: 10px;
    color: #bababa;
  }
`
