import React from "react";
import styled from "styled-components";

//font-family "gotham rounded", sans-serif;
const BioContainer = styled.div`
  height: 100%;
  width: 100%;
  text-align: center;
  font-family: brandon, helvetica, sans-serif;
  color: #352d31;
`;

const Photo = styled.div`
  border-radius: 50%;
  width: 194px;
  height: 194px;
  background: url(${(props) => props.photoUrl});
  border: 2px solid #777;
  margin: auto;
  padding: 10px;
`;

const Title = styled.p`
  color: rgb(102, 119, 136);
  margin-top: 15px;
`;

const Blurb = styled.p`
  margin-top: 15px;
  font-weight: bold;
  font-size: small;
`;

export const Bio = ({ photoUrl, title, blurb, name }) => {
  return (
    <React.Fragment>
      <BioContainer>
        <h3>{name}</h3>
        <Photo photoUrl={photoUrl} />
        <Title>
          <strong>{title}</strong>
        </Title>
        <Blurb>{blurb}</Blurb>
        <a target="_blank" href="https://github.com/JNickBaughan">
          Github
        </a>
      </BioContainer>
    </React.Fragment>
  );
};

export default Bio;
