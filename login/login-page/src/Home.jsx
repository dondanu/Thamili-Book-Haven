import React from 'react';
import { Link } from 'react-router-dom';
import backgroundImage from './assets/ss.png'; // Import the image from the assets folder

const Home = () => {
  return (
    <div 
      style={{ 
        display: 'flex', 
        padding: "40px",
        borderRadius:"16px",
        //backgroundColor: "lightblue",
        flexDirection: 'column',  
        justifyContent: 'center', 
        alignItems: 'center',     
        height: '84vh',
        width: "1250px",          
        margin: '0',  
        marginLeft:"9px",                        
        textAlign: 'center',      
        backgroundImage: `url(${backgroundImage})`, // Use the imported image for the background
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <h1 
  style={{ 
    paddingLeft: "20px", 
    marginLeft: "100px",  
    color: "greenyellow", 
    textShadow: "2px 2px 0px black, -2px -2px 0px black, 2px -2px 0px black, -2px 2px 0px black"
  }}
>
  Welcome To Thamili - BookShop
</h1>

      
      <div>
        <Link to="/login">
        <button 
  style={{
    paddingLeft: "30px",
    marginLeft: "150px",
    marginRight: "20px",
    backgroundColor: "#4CAF50",  // Set initial background color
    color: "white",              // Text color
    border: "none",             // Remove border
    borderRadius: "8px",        // Rounded corners
    padding: "10px 20px",       // Add padding
    fontSize: "16px",           // Font size
    cursor: "pointer",         // Change cursor on hover
    transition: "transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease",  // Transition for animations
  }}
  onMouseEnter={(e) => {
    e.target.style.transform = "scale(1.1)";  // Scale up on hover
    e.target.style.boxShadow = "0 8px 16px rgba(0, 0, 0, 0.2)";  // Add shadow on hover
    e.target.style.backgroundColor = "#45a049";  // Change background color on hover
  }}
  onMouseLeave={(e) => {
    e.target.style.transform = "scale(1)";  // Reset scale when mouse leaves
    e.target.style.boxShadow = "none";  // Remove shadow
    e.target.style.backgroundColor = "#4CAF50";  // Reset background color
  }}
>
  Go to Login
</button>

        </Link>
        <Link to="/register">
          <button style={{ paddingLeft: "20px", marginLeft: "10px" }}>
            Go to Register
          </button>
        </Link>

        <Link to="/guest">
          <button style={{ paddingLeft: "20px", marginLeft: "30px "}}>
            Guest
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
