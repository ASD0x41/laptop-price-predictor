import React, { useState, useEffect } from 'react';
import backgroundImage from './4.png';
import CardWithTextBoxes from './Components/CardWithTextBoxes';
import img2 from './7.jpg';
import appleImage from './apple.jpg'; 
import hpImage from './hp.jpeg'; 
import acerImage from './acer.webp';
import asusImage from './asus.webp';
import dellImage from './dell.jpeg';
import lenovoImage from './lenovo.webp';
import razerImage from './razer.jpeg';

function App() {
  const [showHelpPopup, setShowHelpPopup] = useState(false);
  const [showAboutPopup, setShowAboutPopup] = useState(false);
  const [popupPosition, setPopupPosition] = useState({});
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (showHelpPopup || showAboutPopup) {
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;
      let popupWidth, popupHeight;

      if (showHelpPopup) {
        popupWidth = 800;
        popupHeight = 300;
      } else if (showAboutPopup) {
        popupWidth = 600;
        popupHeight = 300;
      }

      const left = (windowWidth - popupWidth) / 2;
      const top = (windowHeight - popupHeight) / 2;
      setPopupPosition({ left, top });
    }
  }, [showHelpPopup, showAboutPopup]);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, [currentSlide]);

  const toggleHelpPopup = () => {
    setShowHelpPopup(!showHelpPopup);
  };

  const toggleAboutPopup = () => {
    setShowAboutPopup(!showAboutPopup);
  };
  
    const breakpoints = {
    small: 640, // Example: for screens smaller than 640px
    medium: 768,
    large: 1024,
    // Add more breakpoints as needed
  };

  const laptopBrands = [
    {
      name: 'Apple',
      description: 'Known for its sleek designs and user-friendly operating system. Apple laptops are favored by creative professionals for their reliability and performance. With a focus on craftsmanship and attention to detail, Apple laptops often feature high-resolution Retina displays, powerful processors, and long battery life, making them ideal for professionals in design, photography, and video editing.',
      image: appleImage,
    },
    {
      name: 'HP',
      description: 'A popular choice for both personal and business use, offering a wide range of laptops. HP laptops are known for their durability, affordability, and extensive support options. From sleek ultrabooks to powerful workstations, HP offers a variety of models to suit different needs. With features like HP Sure View privacy screens, Bang & Olufsen audio, and HP Fast Charge technology, HP laptops provide a reliable and productive computing experience.',
      image: hpImage,
    },
    {
      name: 'Acer',
      description: 'Provides affordable laptops with decent performance for everyday use. Acer laptops are often praised for their value proposition, offering good specs at competitive prices. Whether you need a budget-friendly Chromebook for web browsing or a powerful gaming laptop with dedicated graphics, Acer has a laptop to meet your needs. With features like Acer Color Intelligence, BlueLightShield, and Acer CoolBoost, Acer laptops deliver a comfortable and enjoyable computing experience.',
      image: acerImage,
    },
    {
      name: 'Asus',
      description: 'Offers a diverse range of laptops catering to different needs, from gaming to productivity. Asus laptops are known for their innovation, cutting-edge features, and gaming prowess. With ROG (Republic of Gamers) laptops designed for hardcore gamers, ZenBook laptops for professionals, and VivoBook laptops for everyday users, Asus provides a laptop for every lifestyle. Features like Asus SonicMaster audio, ErgoLift hinges, and NanoEdge displays enhance the overall user experience.',
      image: asusImage,
    },
    {
      name: 'Dell',
      description: 'Known for its reliable performance and sturdy build quality across its laptop lineup. Dell laptops are popular among professionals and students for their robustness and business-friendly features. Whether you need a thin and light ultrabook for travel or a powerful workstation for demanding tasks, Dell offers a wide range of laptops to suit various needs. With features like Dell Cinema for immersive entertainment, ExpressCharge for fast charging, and Dell Optimizer for AI-driven performance optimization, Dell laptops deliver exceptional reliability and productivity.',
      image: dellImage,
    },
    {
      name: 'Lenovo',
      description: 'Offers a wide selection of laptops suitable for various purposes, from business to entertainment. Lenovo laptops are recognized for their exceptional build quality, long battery life, and legendary keyboards. From the iconic ThinkPad series favored by professionals to the versatile Yoga series with 2-in-1 functionality, Lenovo provides a laptop for every need. Features like Dolby Audio, Lenovo Vantage software, and Rapid Charge technology enhance the user experience and productivity.',
      image: lenovoImage,
    },
    {
      name: 'Razer',
      description: 'Specializes in high-performance gaming laptops with premium build quality and cutting-edge hardware. Razer laptops are designed for gamers who demand top-tier performance, sleek design, and customizable features. With powerful graphics cards, high-refresh-rate displays, and advanced cooling systems, Razer laptops deliver smooth gaming experiences. Features like Chroma RGB lighting, per-key customizable keyboards, and THX Spatial Audio enhance immersion and personalization.',
      image: razerImage,
    },
  ];   

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === laptopBrands.length - 1 ? 0 : prevSlide + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? laptopBrands.length - 1 : prevSlide - 1));
  };

  const containerStyle = {
    backgroundImage: `url(${img2})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100%',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    padding: '80px 0',
    position: 'relative',
  };

  const slideshowContainerStyle = {
    width: '100%',
    marginBottom: '40px',
    marginTop: '-15px',
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    padding: '20px',
  };
  
  const imageStyle = {
    width: '600px', 
    height: '400px',
    borderRadius: '100px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
  };

  const cardStyle = {
    backgroundImage: `url(${backgroundImage})`,
    opacity: '0.9',
    width: '75%',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 1)',
    padding: '70px',
    borderRadius: '50px',
    border: '2px solid #555555',
  };

  const headerStyle = {
    backgroundImage: `url(${backgroundImage})`,
    width: '100%',
    height: '80px',
    backgroundColor: '#333',
    color: '#fff',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 20px',
    top: '0',
    left: '0',
    zIndex: '2',
    opacity: '0.9',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    borderBottom: '10px solid #555555',
    position: 'fixed',
  };
  
  const logoStyle = {
    width: '50px',
    marginRight: '10px', 
  };

  const footerStyle = {
    backgroundImage: `url(${backgroundImage})`,
    color: '#fff',
    textAlign: 'center',
    padding: '10px 0',
    opacity: '0.9',
    bottom: '0',
    width: '100%',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    borderTop: '10px solid #555555', 
  };
  
  const footerContentStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  };
  
  const footerText = {
    margin: '0',
  };
  
  const footerLink = {
    color: '#fff',
    textDecoration: 'none',
    fontWeight: 'bold',
  };
  
  const footerSeparator = {
    margin: '0 10px',
    color: '#fff',
  };

  const overlayStyle = {
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: '3',
    display: showHelpPopup || showAboutPopup ? 'block' : 'none',
  };

  const popupStyle = {
    position: 'fixed',
    top: popupPosition.top + 'px',
    left: popupPosition.left + 'px',
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '40px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    zIndex: '4',
    display: showHelpPopup || showAboutPopup ? 'block' : 'none',
    opacity: showHelpPopup || showAboutPopup ? 1 : 0,
    transform: `scale(${showHelpPopup || showAboutPopup ? 1 : 0.9}) rotate(${showHelpPopup || showAboutPopup})`, 
    animation: `${showHelpPopup || showAboutPopup ? 'popupFlash' : 'none'} 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards`, 
  };
  
  const animationStyles = `
    @keyframes popupFlash {
      0% {
        opacity: 0;
        transform: scale(0.9);
      }
      50% {
        opacity: 0.8;
        transform: scale(1.1);
      }
      100% {
        opacity: 1;
        transform: scale(1);
      }
    }
  `;

  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = animationStyles;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const closeButtonStyle = {
    position: 'absolute',
    top: '20px',
    right: '20px',
    backgroundColor: '#fff',
    color: '#333',
    border: 'none',
    borderRadius: '50%',
    width: '30px',
    height: '30px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
  };

  const buttonStyle = {
    backgroundColor: '#1E3A8A',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    color: '#fff',
    padding: '5px 10px',
    borderRadius: '5px',
    marginRight: '10px',
    transition: 'background-color 0.3s, color 0.3s',
  };

  return (
    <div className="flex flex-col justify-center items-center opacity-100">
      <div style={headerStyle}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img src="/Icon.png" alt="Logo" style={logoStyle} />
          <div style={{ fontSize: '100%', fontWeight: 'bold', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'}}>
            <b>LaptopLens</b>
          </div>  
        </div>
      <div>
        <button
            onClick={toggleHelpPopup}
            style={{
              backgroundColor: '#1E3A8A',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              color: '#fff',
              padding: '5px 10px',
              borderRadius: '5px',
              marginRight: '10px',
              transition: 'background-color 0.3s, color 0.3s',  
            }}
            onMouseEnter={(e) => { e.target.style.backgroundColor = 'lightgray'; e.target.style.color = 'black'; }} 
            onMouseLeave={(e) => { e.target.style.backgroundColor = '#1E3A8A'; e.target.style.color = '#fff'; }} 
          >
            Help
          </button>
          <button
            onClick={toggleAboutPopup}
            style={{
              backgroundColor: '#1E3A8A',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              color: '#fff',
              padding: '5px 10px',
              borderRadius: '5px',
              transition: 'background-color 0.3s, color 0.3s', 
            }}
            onMouseEnter={(e) => { e.target.style.backgroundColor = 'lightgray'; e.target.style.color = 'black'; }} 
            onMouseLeave={(e) => { e.target.style.backgroundColor = '#1E3A8A'; e.target.style.color = '#fff'; }} 
          >
            About
          </button>
        </div>
      </div>

      <div style={containerStyle}>

      <div className="mb-6 px-6 py-6 flex justify-end" style={{marginTop: '50px', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
          <h6 style={{fontSize: '400%', color: 'white', WebkitTextStroke: '0.3px black', textStroke: '0.4px black' }} className="text-xl font-bold">LaptopLens</h6>
      </div>

      <div className="px-6 py-6" style={{width:'80%', display: 'grid', placeItems: 'center',marginTop:'30px', marginBottom:'50px', backgroundColor: 'rgba(255, 255, 255, 0.4)', borderRadius:'50px'}}>
        <p className="text-lg text-center text-black-700">
          LaptopLens is an innovative project revolutionizing the way consumers navigate the complex world of laptop purchasing. Leveraging cutting-edge machine learning algorithms, LaptopLens offers a sophisticated solution for predicting laptop prices with unparalleled accuracy and reliability.
          <br/><br/>
          At the core of LaptopLens is a comprehensive analysis of diverse factors influencing laptop pricing. Our algorithm meticulously scrutinizes intricate details such as hardware specifications, market dynamics, historical trends, and user sentiment extracted from extensive reviews. By synthesizing this wealth of data, LaptopLens generates precise price predictions, empowering consumers to make well-informed decisions.
          <br/><br/>
          What sets LaptopLens apart is its ability to adapt and evolve alongside the rapidly changing landscape of technology and consumer preferences. Our model continuously learns from new data, refining its predictions and staying ahead of market shifts. Whether you're a tech enthusiast seeking the latest gadget or a budget-conscious shopper looking for value, LaptopLens equips you with the insights needed to navigate the myriad options available in the laptop market.
          <br/><br/>
          With LaptopLens, gone are the days of uncertainty and guesswork in laptop purchasing. Say goodbye to overpaying for underwhelming devices or missing out on hidden gems. Embrace the future of informed decision-making with LaptopLens and embark on a journey where every laptop purchase is a well-calculated investment.
      </p>
      </div>
        
      <div className="mb-6 px-6 py-6 text-center" style={{ marginTop: '30px', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
          <h6 style={{ fontSize: '200%', color: 'white', WebkitTextStroke: '0.3px black', textStroke: '0.4px black' }} className="text-xl font-bold">Here Are Some Known Brands</h6>
      </div>

       {/* Slideshow Container */}
          <div style={{
              ...slideshowContainerStyle,
              flexDirection: window.innerWidth < breakpoints.medium ? 'column' : 'row'
          }}>
            <div style={{ flex: '1', marginBottom: window.innerWidth < breakpoints.medium ? '30px' : '0', marginLeft: window.innerWidth > breakpoints.medium ? '100px' : '0'}}>
              <img src={laptopBrands[currentSlide].image} alt={laptopBrands[currentSlide].name} style={imageStyle} />
            </div>
            <div style={{ flex: '1', backgroundColor: 'rgba(255, 255, 255, 0.4)', padding: '20px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)', marginRight: window.innerWidth > breakpoints.medium ? '100px' : '0'}}>
              <h3 className="font-bold text-xl">{laptopBrands[currentSlide].name}</h3>
              <p className="text-l">{laptopBrands[currentSlide].description}</p>
            </div>
          </div>

        <div style={{marginTop: "50px"}}></div>    

        <div style={cardStyle} className='flex flex-col justify-center items-center'>
          <CardWithTextBoxes />

            <div style ={{marginTop:'30px', marginRight:'10px'}} className="text-center text-white font-bold text-2xl mb-4">
              Information and Disclaimer
              </div>
              <div className="text-center text-white text-m mb-4">
              The accuracy of price predictions may vary depending on the quality and availability of data, as well as the sophistication of the prediction algorithms used. We make no guarantees regarding the accuracy or reliability of the price predictions provided on this platform. Users are advised to use the predictions as a reference and conduct their own research before making purchasing decisions.
              </div>

        </div>
        
  

        <div style={overlayStyle}></div>
        {/* Help Popup */}
        <div style={{ ...popupStyle, display: showHelpPopup ? 'block' : 'none', width: '800px', height: '340px' }} className='flex flex-col justify-center items-center'>
        <h3 className="font-bold text-xl">Help: Providing Laptop Specifications and Predicting Prices</h3>
          <p className="mt-4">
              To provide laptop specifications and predict prices, follow these steps:
          </p>
          <ol className="mt-4 text-left">
              <li>Enter the manufacturer, category, model name, operating system, and other relevant details in the respective fields.</li>
              <li>Specify details such as screen type, screen size, resolution, GPU, CPU model, clock speed, RAM size, and storage capacity.</li>
              <li>Once all specifications are entered, click the "Confirm" button.</li>
              <li>The system will analyze the specifications and predict the price based on historical data and market trends.</li>
              <li>The predicted price will be displayed on the screen.</li>
          </ol>
          <p className="mt-4">
              If you need further assistance, please refer to our documentation or contact our support team.
          </p>
          <button onClick={toggleHelpPopup} style={closeButtonStyle}>X</button>
        </div>

        {/* About Popup */}
        <div style={{ ...popupStyle, display: showAboutPopup ? 'block' : 'none', width: '600px', height: '360px' }} className='flex flex-col justify-center items-center'>
            <h3 className="font-bold text-2xl">About Us</h3>
            <br/>
            <div className="text-center text-black font-bold text-2xl mb-4">
              LaptopLens: Predictive Pricing
            </div>
            <div className="text-center text-black font-semibold text-lg mb-4">
              Laptop Price Prediction Project
            </div>
            <div className="text-center text-black text-lg mb-2">
            <p>BCS-6F | AI Project</p>
            </div>
            <div className="text-center text-black text-m mb-2">
            <p>M. Asad Tariq (21L-5266)</p>
            <p>Sultan Ahmad (21L-7560)</p>
            <p>Mudesser Ahmad (21L-5387)</p>
            </div>
            <button onClick={toggleAboutPopup} style={closeButtonStyle}>X</button>
        </div>
      </div>

        <div style={footerStyle}>
        <div style={footerContentStyle}>
          <p style={footerText}>
           <div style={{ fontSize: '25px', fontWeight: 'bold', marginTop: '15px' }}>LaptopLens: Predictive Pricing</div>
            <div style={{ fontSize: '15px'}}>Laptop Price Prediction Project</div>
            <br />
          </p>
          <p style={footerText}>&copy; 2024 All rights reserved.</p>
        </div>
    </div>
  </div>          

  );
}

export default App;
