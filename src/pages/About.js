
import React from 'react';
import Layout from '../components/Layout/Layout';
import { Box, Typography } from '@mui/material';
import backgroundImage from '../images/bg.jpg'; // Ensure this is the correct path to your image file

const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          mt: 0,
          textAlign: "center",
          p: 4,
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          color: "white", // Ensures text is readable
          position: "relative",
          "&:before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent overlay
            zIndex: 1,
          },
          "& h4": {
            fontWeight: "bold",
            my: 2,
            fontSize: "2rem",
            zIndex: 2,
            position: "relative",
          },
          "& h4 a": {
            color:"#4e8dbc",
          },
          "& p": {
            textAlign: "justify",
            zIndex: 2,
            position: "relative",
          },
          "@media (max-width:600px)": {
            mt: 0,
            "& h4": {
              fontSize: "1.5rem",
            },
          },
        }}
      >
        <Typography variant="h4">Welcome to Agra<a>wal Restaurant</a></Typography>
        <br />
        <p><span style={{ color: "#d1c131", fontWeight: "bold" }}>About Us:</span></p>
        <br />
        <p>
          Welcome to Agrawal Restaurant, where every meal is a journey, and every dish tells a story. Located in the heart of Mathura, our restaurant is more than just a place to eat—it's a destination for those who appreciate the art of fine dining. Established in 2020, Agrawal Restaurant is the brainchild of Surendra Kumar Goyal, whose passion for food led to the creation of a culinary haven that blends tradition with innovation.
        </p>
        <br />
        <p><span style={{ color: "#d1c131", fontWeight: "bold" }}>Our Story:</span></p>
        <br />
        <p>
          The story of Agrawal Restaurant began long before the doors first opened. Surendra Kumar Goyal grew up surrounded by the rich culinary traditions of India, where food was more than sustenance—it was a way of life. Inspired by family recipes passed down through generations, and a desire to share the authentic flavors of India with the world, Surendra Kumar Goyal embarked on a journey to create a restaurant that would honor these traditions while embracing modern culinary techniques.
          Since opening, Agrawal Restaurant has become a beloved fixture in Mathura, known for its commitment to quality, creativity, and hospitality. Our mission is simple: to offer an unforgettable dining experience that celebrates the best of Indian cuisine while creating lasting memories for our guests.
        </p>
        <br />
        <p><span style={{ color: "#d1c131", fontWeight: "bold" }}>Our Cuisine:</span></p>
        <br />
        <p>
          At Agrawal Restaurant, we believe that great food starts with great ingredients. That's why we source the finest, freshest produce, meats, and seafood from local farmers and purveyors who share our dedication to quality and sustainability. Our menu is a celebration of authentic Indian cuisine, with each dish thoughtfully crafted to showcase the vibrant flavors and rich heritage of India.
          From the moment you step into our restaurant, you'll be greeted by the aromas of freshly baked bread, simmering sauces, and carefully grilled meats, all prepared with the same love and attention to detail that Surendra Kumar Goyal learned from his ancestors. Whether you're indulging in our signature North Indian Thali, savoring a bowl of our house-made curry, or trying one of our seasonal specials, you're sure to find something that delights your palate.
          Our chefs are passionate about their craft and are constantly experimenting with new techniques and flavor combinations to bring you dishes that are both familiar and exciting. While we take pride in our traditional offerings, we also love to push the boundaries of what's possible in the kitchen, creating innovative dishes that are as visually stunning as they are delicious.
        </p>
        <br />
        <p><span style={{ color: "#d1c131", fontWeight: "bold" }}>Our Awards and Recognition:</span></p>
        <br />
        <p>
          Over the years, Agrawal Restaurant has earned a reputation as one of the premier dining destinations in Mathura. Our dedication to excellence has not gone unnoticed, and we're honored to have received numerous awards and accolades for our food, service, and commitment to sustainability. Some of our proudest achievements include the National Award, which recognizes our dedication to using local, sustainable ingredients, and the Innovation Award, which celebrates our creative approach to traditional Indian cuisine.
          But while we're grateful for the recognition, the true measure of our success is the satisfaction of our guests. There's nothing we love more than seeing our customers return time and time again, whether they're celebrating a special occasion or simply enjoying a night out with friends and family. For us, the greatest reward is knowing that we've played a part in creating lasting memories for our guests.
        </p>
        <br />
        <p><span style={{ color: "#d1c131", fontWeight: "bold" }}>Join Us:</span></p>
        <br />
        <p>
          We invite you to experience the best of Indian cuisine at Agrawal Restaurant. Whether you're a longtime fan of Indian food or trying it for the first time, we're confident that you'll find something to love on our menu. Our team is passionate about providing exceptional service and creating a welcoming atmosphere where everyone feels at home.
          So why not make a reservation today and see for yourself what makes Agrawal Restaurant so special? We look forward to welcoming you and sharing our love of food with you. And don't forget to follow us on Instagram @Agrawal_resto2222 for the latest updates, special offers, and a behind-the-scenes look at what goes on in our kitchen.
        </p>
        <br />
        <br />
        <p><span style={{ color: "black", fontWeight: "bold", fontSize:"30px"}}>Thank you for considering Agrawal Restaurant. We can't wait to serve you !!</span></p>
      </Box>
    </Layout>
  );
};

export default About;
