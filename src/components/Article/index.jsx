import styled from "styled-components"
import moment from "moment";
import { mobile} from "../../responsive"; 

const Article = ({ title, snippet, date, length }) => {
  return (
    <Container>
        <Title>{title}</Title>
        <Info>
          <Date>{moment(date).format("dddd Do, YYYY")}</Date>
          <Length>{length} min read</Length>
        </Info>
        <Snippet>{snippet}</Snippet>
    </Container>
  );
};

const Container = styled.div`

`

const Title = styled.h2`
font-size: 30px;
letter-spacing: 3px;
text-transform: capitalize;

${mobile({
  fontSize: "22px"
})}
`

const Info = styled.div`
  font-size: 22px;
  font-style: italic;

  ${mobile({
    fontSize: "16px",
  })}
`;

const Date = styled.span`
`

const Length = styled.span`

`;

const Snippet = styled.p`
  font-size: 22px;

  ${mobile({
    fontSize: "16px",
  })}
`;
export default Article
