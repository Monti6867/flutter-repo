import React from 'react';
import styled from 'styled-components';

const AboutPageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-image: url('https://img.freepik.com/free-vector/isometric-workers-warehouse-collect-boxes-warehouse-work_130740-841.jpg?size=664&ext=jpg');
  background-size: cover;
  background-position: center;
`;

const AboutPageContent = styled.div`
  max-width: 600px;
  padding: 20px;
  text-align: center;
  background-color: rgba(255, 255, 255, 0.8); /* Add a semi-transparent background color to make the content more readable */
`;

const AboutPage = () => {
  return (
    <AboutPageContainer>
      <AboutPageContent>
        <h2>The future of e-commerce is sustainable, equitable and inclusive.</h2>
        <p>
          As we continue to drive changes across key areas of our operations, our commitment is embedded in our vision to create a positive impact, for the planet and communities.
        </p>
      </AboutPageContent>
    </AboutPageContainer>
  );
};

export default AboutPage;
