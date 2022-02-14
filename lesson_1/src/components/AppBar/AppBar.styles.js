import styled from "@emotion/styled";

export const Layout = styled.div`
  background-color: ${(props) => (props.isStudent ? "blueviolet" : "red")};
`;
