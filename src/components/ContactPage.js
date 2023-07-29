import React from 'react';
import styled from 'styled-components';

const ContactPageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-image: url('https://bes-corp.com/wp-content/uploads/2018/08/workers-background-1-1024x671.jpg'); /* Replace 'path/to/your/contact-page-background.jpg' with the actual path to your contact page background image */
  background-size: cover;
  background-position: center;
  color: #212121; /* Set the text color to white for better visibility */
  text-shadow: 2px 3px 4px rgba(0, 0, 0, 0.6); /* Add a text shadow for better readability */
`;

const ContactPageContent = styled.div`
  max-width: 600px;
  padding: 20px;
  text-align: center;
`;

const ContactPage = () => {
  return (
    <ContactPageContainer>
      <ContactPageContent>
        <h2>Contact Us</h2>
        <p>
          If you have any questions or inquiries, please feel free to contact us.
        </p>
        <p>
          Email: contact@example.com
        </p>
        <p>
          Phone: +1 123-456-7890
        </p>
      </ContactPageContent>
    </ContactPageContainer>
  );
};

export default ContactPage;
