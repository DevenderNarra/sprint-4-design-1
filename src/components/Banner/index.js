import location from '../../assets/location (2).png'
import { FaArrowRight } from "react-icons/fa";
import './index.css'

const Banner = () => {
  return (
    <div className='banner-section'>
      <h1>Find Expert Doctors For An In-clinic Session Here</h1>
      <div className='location-search-container'>
        <div className='location-container'>
        <img src={location} alt=""/>
            <select>
                <option>Select Location</option>
            </select>
        </div>
        <div className="search-container">
            <input type="text" placeholder="eg Doctor, specialization, clinic name"/>
            <button type="button">
                <FaArrowRight/>
            </button>
        </div>
      </div>
    </div>
  )
}

export default Banner
