import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProductList from './components/ProductList';
import { LoginPage } from './components/Login';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import Slider from 'react-slick'; // Import the Slider component from react-slick
import 'slick-carousel/slick/slick.css'; // Import the styles for the slider
import 'slick-carousel/slick/slick-theme.css'; // Import the theme styles for the slider
import { Route, Routes } from 'react-router-dom';

const TrendSection = styled.div`
  padding: 20px;
`;

const ProductForYouSection = styled.div`
  padding: 20px;
`;
const CarouselContainer = styled.div`
max-width: 1600px;
margin: 0 auto;
padding: 0px;

  /* Adjust the carousel container styles as needed */
`;

const carouselSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true, // Add the autoplay prop to enable automatic sliding
  autoplaySpeed: 3000, // Set the autoplay speed to 3000ms (3 seconds)
};

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [trendProducts, setTrendProducts] = useState([]);
  const [productForYouProducts, setProductForYouProducts] = useState([]);

  // Simulated login function for demo purposes
  const login = (username, email , password) => {
    // In a real application, you should validate the username and password against your backend server
    if (username === 'demo' && email === 'montijha143@gmail.com' && password === 'password') {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  };

  useEffect(() => {
    // Fetch Trend of the Week products from the API
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => {
        setTrendProducts(data);
      })
      .catch((error) => {
        console.error('Error fetching Trend of the Week products:', error);
      });

    // Fetch Product for You products from the API
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => {
        setProductForYouProducts(data);
      })
      .catch((error) => {
        console.error('Error fetching Product for You products:', error);
      });
  }, []);

  // Conditional rendering based on isAuthenticated
  if (!isAuthenticated) {
    return <LoginPage onLogin={login} />;
  }

  return (
    <>
      <Navbar />
      <CarouselContainer>
        <Slider {...carouselSettings}>
          <div>
            <img src="https://www.planeasy.ca/wp-content/uploads/2017/10/Tax-Shelters-For-Every-Canadian-1600-x-400.jpeg" alt="" />
          </div>
          <div>
            <img src="https://www.lawrencerealestateonline.com/wp-content/uploads/2018/01/cropped-Chicargo-Skyline-1600-x-400-lq.jpg" alt="" />
          </div>
          <div>
            <img src="https://th.bing.com/th/id/R.2b731bae13229216bdcdb4131ab36f1c?rik=yMNzc0rRag5yXA&riu=http%3a%2f%2fwww.binaryalembic.com%2fwp-content%2fuploads%2f2013%2f12%2fNature-444-photos-1600x400.jpg&ehk=PjrQi6aWSj8IGJQWbEu%2f%2bnw4lPsWtsniH4GGN2MQ2B8%3d&risl=&pid=ImgRaw&r=0" alt="" />
          </div>
          <div>
            <img src="https://th.bing.com/th/id/R.2b731bae13229216bdcdb4131ab36f1c?rik=yMNzc0rRag5yXA&riu=http%3a%2f%2fwww.binaryalembic.com%2fwp-content%2fuploads%2f2013%2f12%2fNature-444-photos-1600x400.jpg&ehk=PjrQi6aWSj8IGJQWbEu%2f%2bnw4lPsWtsniH4GGN2MQ2B8%3d&risl=&pid=ImgRaw&r=0" alt="" />
          </div>
          {/* Add more carousel slides as needed */}
        </Slider>
      </CarouselContainer>
      <TrendSection>
        <h2>Trend of the Week</h2>
        <ProductList products={trendProducts} />
      </TrendSection>

      <ProductForYouSection>
        <h2>Product for You</h2>
        <ProductList products={productForYouProducts} />
      </ProductForYouSection>

      <Footer />
      <Routes>
        <Route path="/about" element={<AboutPage />} />
      </Routes>

      <Routes>
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </>
  );
};

export default App;
