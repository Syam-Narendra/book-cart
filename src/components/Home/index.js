import {Link} from 'react-router-dom'

import Header from '../Header'

import './index.css'

const Home = () => (
  <>
    <Header />
    <div className="home-container">
      <div className="home-content">
        <h1 className="home-heading">
          A book is a dream that you hold in your hands
        </h1>
        <img
          src="https://images.pexels.com/photos/256455/pexels-photo-256455.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="clothes that get you noticed"
          className="home-mobile-img"
        />
        <p className="home-description">
          Welcome to our book store, a haven for book lovers and avid readers.
          Step into a world where words come alive and imagination knows no
          bounds. Our store is a sanctuary for those seeking literary
          adventures, where shelves lined with books of every genre beckon you
          to embark on exciting journeys.
        </p>
        <Link to="/products">
          <button type="button" className="shop-now-button">
            Shop Now
          </button>
        </Link>
      </div>
      <img
        src="https://images.pexels.com/photos/256455/pexels-photo-256455.jpeg?auto=compress&cs=tinysrgb&w=600"
        alt="clothes that get you noticed"
        className="home-desktop-img"
      />
    </div>
  </>
)

export default Home
