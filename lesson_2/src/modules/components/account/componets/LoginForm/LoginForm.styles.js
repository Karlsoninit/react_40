import styled from "@emotion/styled";

export const SubmitButton = styled.button`
  background-color: ${(props) => (props.isError ? "red" : "green")};
`;
