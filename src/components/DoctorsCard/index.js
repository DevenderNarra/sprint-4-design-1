import doctorImage from '../../assets/doctor-img.png'
import expertiseImage from '../../assets/expertise-image.png'
import expImage from '../../assets/experience-image.png'
import langImage from '../../assets/language-image.png'
import './index.css'

const DoctorsCard = ({doctorDetails}) => {
    const{name,expertise,experience,languages,consulFee}=doctorDetails
  return (
    <div className='card'>
       <img src={doctorImage} alt="doctor-image"/>
       <h1>{name}</h1>
       <div className='expertise-container'>
        <img src={expertiseImage} alt=""/>
        <p>{expertise}</p>
       </div>
       <div className='experience-container'>
        <img src={expImage} alt=""/>
        <span>{experience}</span>
       </div>
       <div className='language-container'>
        <img src={langImage} alt=""/>
        <p>Speaks:{languages}</p>
       </div>
       <div className='fee-container'>
        <div>
        <span>Video ConsultationFee</span>
        <p>{consulFee}</p>
        </div>
       <div>
        <span>Chat ConsultationFee</span>
        <p>Free</p>
       </div>
       </div>
       <button type="button" className='view-profile-btn'>View Profile</button>
       <button type="button" className='booking-btn'>Book a consultation</button>
    </div>
  )
}

export default DoctorsCard
