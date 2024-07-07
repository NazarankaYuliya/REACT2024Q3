import { Component } from 'react';
import ErrorButton from './ErrorButton';
import '../App.css';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="header-content">
          <div className="title-container">
            <h1 className="site-title">Wubba Lubba Dub Dub!</h1>
            <p className="subtitle">Explore the infinite possibilities...</p>
            <ErrorButton />
          </div>
          <div className="portal-image-container">
            <img
              src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgRnsn8D1i7x5dL_lvUYvUjjvB9DXDOLRzu77MNcd314nIU6cvYDGp58XyDRGlnRMhXi5K3ThEpvPiWyYg21YTJOuEZd3c2Klgr5O7z5molzjgOSolnfc21JH12-KgT2PtfIu4D6RrmbmZO/w919-h516-p-k-no-nu/rick-and-morty-portal-uhdpaper.com-4K-8.2001-wp.thumbnail.jpg"
              alt="Portal"
              className="portal-image"
            />
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
