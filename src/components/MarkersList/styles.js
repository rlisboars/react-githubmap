import styled from 'styled-components'

export const Container = styled.div`
  background-color: #fff;
  box-shadow: 0px 0px 8px 1px rgba(0, 0, 0, 0.4);
  width: 350px;
  position: absolute;
  top: 20px;
  left: 20px;
  bottom: 20px;
  border-radius: 3px;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    -webkit-appearance: none;
    width: 7px;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background-color: rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 0 1px rgba(255, 255, 255, 0.5);
  }
`
export const Marker = styled.li`
  display: flex;
  padding: 10px 10px;
  border-bottom: 1px solid #f2f2f2;
  font-size: 14px;
  &:hover {
    background: #f2f2f2;
  }
  .empty {
    text-align: center;
    margin: 0 auto;
    color: #bababa;
    font-weight: bold;
    margin-top: 20px;
    height: 40px;
  }
  img {
    height: 50px;
    border-radius: 50%;
  }
  .info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 50px;
    flex-grow: 1;
    span {
      color: #959595;
    }
    padding-left: 10px;
  }
  .actions {
    display: flex;
    align-items: center;
    button {
      font-size: 16px;
      border: none;
      width: 30px;
      height: 30px;
      color: #959595;
      background: transparent;
    }
    button:first-child {
      color: red;
      &:hover {
        background: red;
        color: #fff;
      }
    }
  }
`
