import { styled } from "styled-components";
import { desktop } from "../utils/Responsive";

const Container = styled.div`
  width: 327px;
  max-width: 100%;
  margin: 0 auto;

  ${desktop}{
    width: 1110px;
  }
`;

export default Container;
