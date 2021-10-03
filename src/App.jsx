import styled, { ThemeProvider } from "styled-components";
import { useState, useEffect } from "react";
import { lightTheme, darkTheme } from "./themes.js";
import Article from "./components/Article";
import data from "./data";
import {mobile, tablet, tabletPro} from './responsive' 

const getStorageTheme = () => {
  let theme = "light-theme";
  if (localStorage.getItem("theme")) {
    theme = localStorage.getItem("theme");
  }
  return theme;
};


const App = () => {
  const [theme, setTheme] = useState(getStorageTheme());

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <Container>
        <Wrapper>
          <Top>
            <Title>Dark Mode</Title>
            <ButtonWrapper>
              <Button onClick={() => themeToggler()}>Toggle</Button>
            </ButtonWrapper>
          </Top>
          <Bottom>
            {data.map((item) => {
              return <Article key={item.id} {...item} />;
            })}
          </Bottom>
        </Wrapper>
      </Container>
    </ThemeProvider>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: .6s;
  background: ${props => props.theme.body};
  color: ${props => props.theme.fontColor}
`;
const Wrapper = styled.div`
  width: 50%;
  height: 100%;
  padding: 20px 50px;

  ${tabletPro({
    width: "70%",
  })}

  ${tablet({
    width: "80%",
  })}

  ${mobile({
    width: "90%",
    padding: "0 10px"
  })}
`;

const Top = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Title = styled.h1`
  font-size: 40px;
  letter-spacing: 3px;

  ${mobile({
    fontSize: "28px"
  })}
`;

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Button = styled.button`
  font-size: 22px;
  padding: 5px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  letter-spacing: 1px;
  background: ${(props) => props.theme.btnBg};
  transition: 0.3s;
  color: ${(props) => props.theme.btnColor};

  &:hover {
    opacity: 0.6;
  }

  ${mobile({
    fontSize: "16px",
  })}
`;

const Bottom = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;

  ${mobile({
    marginTop: "0"
  })}
`;

export default App;
