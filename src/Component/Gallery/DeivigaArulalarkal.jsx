import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import jsondata from '../../Data/Data.json';
import image1 from '../../Assets/gallery/img1.jpg'
import image2 from '../../Assets/gallery/img2.jpg'
import image3 from '../../Assets/gallery/img3.jpg'
import image4 from '../../Assets/gallery/img4.jpg'
import image5 from '../../Assets/gallery/img5.jpg'
import image6 from '../../Assets/gallery/img6.jpg'
import image7 from '../../Assets/gallery/img7.jpg'
import image8 from '../../Assets/gallery/img8.jpg'
import image9 from '../../Assets/gallery/img9.jpg'
import image10 from '../../Assets/gallery/img10.jpg'
import image11 from '../../Assets/gallery/img11.jpg'
import image12 from '../../Assets/gallery/img12.jpg'
import image13 from '../../Assets/gallery/img13.jpg'
import image14 from '../../Assets/gallery/img14.jpg'
import image15 from '../../Assets/gallery/img15.jpg'
import image16 from '../../Assets/gallery/img16.jpg'
import image17 from '../../Assets/gallery/img17.jpg'

const DeivigaArulalarkal = () => {
  const [activeHeader, setActiveHeader] = useState('DeivigaArulalarkal');
  const headerNames = [
    { name: 'DeivigaArulalarkal', path: '/DeivigaArulalarkal' },
    { name: 'IsaiArulalarkal', path: '/IsaiArulalarkal' },
    { name: 'IsaiKalaivanarkal', path: '/IsaiKalaivanarkal' },
    { name: 'IsaiPerairignarkal', path: '/IsaiPerairignarkal' },
    { name: 'PannIsaiPerarignarkal', path: '/PannIsaiPerarignarkal' },
  ];

  const { language } = useSelector((state) => state.language);
  const galleryd = jsondata[language]?.gallery || [];

  const translations = {
    'DeivigaArulalarkal': 'தெய்வீக அருளாளர்கள்',
    'IsaiArulalarkal': 'இசை அருளாளர்கள்',
    'IsaiKalaivanarkal': 'இசை கலைவாணர்கள்',
    'IsaiPerairignarkal': 'முஇசைப் பேரறிஞர்கள்',
    'PannIsaiPerarignarkal': 'பண் இசைப் பேரறிஞர்கள்',
  };

  const headerStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '30px',
    marginBottom: '40px',
    padding: '15px 30px',
    borderRadius: '10px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
    position: 'relative',
    animation: 'fadeIn 1s ease-in-out',
  };

  const headerItemStyle = (name) => ({
    fontSize: '12px',
    fontWeight: '600',
    color: activeHeader === name ? '#F39C12' : '#333333',
    textTransform: 'capitalize',
    cursor: 'pointer',
    padding: '12px 24px',
    borderRadius: '5px',
    transition: 'color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease',
    boxShadow: activeHeader === name ? '0 0 10px rgba(243, 156, 18, 0.6)' : 'none',
    '&:hover': {
      color: '#F39C12',
      transform: 'scale(1.1)',
      boxShadow: '0 0 10px rgba(243, 156, 18, 0.4)',
    },
  });

  const images = [
    { src: image1 },
    { src: image2 },
    { src: image3 },
    { src: image4 },
    { src: image5 },
    { src: image6 },
    { src: image7 },
    { src: image8 },
    { src: image9 },
    { src: image10 },
    { src: image11 },
    { src: image12 },
    { src: image13 },
    { src: image14 },
    { src: image15 },
    { src: image16 },
    { src: image17 },
  
  ];

  const [visibleImages, setVisibleImages] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleImages((prev) => [...prev, entry.target]);
          }
        });
      },
      {
        threshold: 0.2,
      }
    );

    const imageElements = document.querySelectorAll('.gallery-item');
    imageElements.forEach((image) => observer.observe(image));

    return () => observer.disconnect();
  }, []);

  const galleryContainerStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
    gap: '20px',
    padding: '20px',
  };

  const galleryItemStyle = (isVisible, index) => ({
    position: 'relative',
    overflow: 'hidden',
    borderRadius: '10px',
    boxShadow: isVisible ? '0 4px 12px rgba(0, 0, 0, 0.2)' : 'none',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    cursor: 'pointer',
    textAlign: 'center',
    opacity: isVisible ? 1 : 0,
    transform: isVisible
      ? index % 2 === 0
        ? 'translateX(0)'
        : 'translateX(0)'
      : index % 2 === 0
      ? 'translateX(-100px)'
      : 'translateX(100px)',
    transition: `opacity 1s ease, transform 1s ease, transition-delay ${index * 0.3}s`, // Sequential delay for each image
  });

  const galleryImageStyle = {
    width: '100%',
    height: '200px',
    objectFit: 'contain',
    transition: 'transform 0.3s ease',
  };

  const imageNameStyle = {
    marginTop: '10px',
    fontSize: '16px',
    fontWeight: '600',
    color: '#FFF',
    textShadow: '0px 1px 1px ',
    color: 'rgba(243, 156, 18, 0.6)',
    padding: '8px 12px',
    borderRadius: '5px',
    maxWidth: '100%',
    textAlign: 'center',
    transition: 'background 0.3s ease, transform 0.3s ease',
  };

  return (
    <div>
      <div style={headerStyle} className="header-container">
        {headerNames.map(({ name, path }) => (
          <Link
            key={name}
            to={path}
            style={headerItemStyle(name)}
            onClick={() => setActiveHeader(name)}
          >
            {language === 'tamil' && translations[name] ? translations[name] : name}
          </Link>
        ))}
      </div>

      <div style={{ textAlign: 'center' }}>
        <h6 style={{ fontSize: '26px', fontWeight: '500', color: '#F39C12', marginBottom: '40px' }}>
          {language === 'tamil' && translations[activeHeader] ? translations[activeHeader] : activeHeader}
        </h6>
      </div>

      <div style={galleryContainerStyle}>
        {images.map((image, index) => (
          <div
            key={index}
            className="gallery-item"
            style={galleryItemStyle(visibleImages.includes(document.querySelector(`.gallery-item:nth-child(${index + 1})`)), index)}
          >
            <img
              src={image.src}
              alt={image.name}
              style={galleryImageStyle}
            />
            <div style={imageNameStyle}>
              {galleryd[0]?.gallery1?.[index]?.title || 'No Title Available'}
            </div>
          </div>
        ))}
      </div>

      <style>
        {`
          @keyframes fadeIn {
            0% {
              opacity: 0;
              transform: translateY(-20px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes slideInFromLeft {
            0% {
              opacity: 0;
              transform: translateX(-100px);
            }
            100% {
              opacity: 1;
              transform: translateX(0);
            }
          }

          @keyframes slideInFromRight {
            0% {
              opacity: 0;
              transform: translateX(100px);
            }
            100% {
              opacity: 1;
              transform: translateX(0);
            }
          }

          /* Responsive styles */
          @media (max-width: 768px) {
            .header-container {
              flex-direction: column;
              align-items: center;
            }

            .header-container a {
              margin-bottom: 10px;
            }

            /* Remove the gallery item animations on mobile */
            .gallery-item {
              animation: none;
              transform: translateX(0) !important; /* Prevents movement */
              opacity: 1 !important; /* Keep the images visible */
            }
          }
        `}
      </style>
    </div>
  );
};

export default DeivigaArulalarkal;
