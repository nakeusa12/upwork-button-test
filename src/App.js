import "./styles.css";
import styled from "styled-components";

const Button = styled.button`
  padding: 12px 30px;
  color: white;
  font-size: 15px;
  font-weight: 700;
  background-color: #14a800;
  border: 0px;
  border-radius: 40px;
  appearance: none;
  cursor: pointer;
  transition: 0.2s ease-out;

  &:hover {
    background-color: #3c8224;
  }
`;

export default function App() {
  return (
    <div className="App">
      <Button>Post Your Job Now</Button>
    </div>
  );
}
