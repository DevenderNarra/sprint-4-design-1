import { RxCross2 } from "react-icons/rx";
import './index.css'
import DoctorsCard from "../DoctorsCard";

const filters=[
    {
        id:1,
        name:"Expertise"
    },
    {
        id:2,
        name:"Gender"
    },
    {
        id:3,
        name:"Fees"
    },
    {
        id:4,
        name:"Languages"
    },
    {
        id:5,
        name:"All filters"
    }
]

const resultFilters=[
    {
        id:1,
        name:"Hair care"
    },
    {
        id:2,
        name:"Female"
    },
    {
        id:3,
        name:"Rs.0-Rs.500"
    },
    {
        id:4,
        name:"Hindi"
    }

]

const doctorsList=[
    {
        id:1,
        name:"Dr.Prerna Parag",
        expertise:"Male-Female Infertility",
        experience:"7 Years of Experience",
        languages:"English, Hindi, Marathi",
        consulFee:"$800"
    },
    {
        id:2,
        name:"Dr.Prerna Parag",
        expertise:"Male-Female Infertility",
        experience:"7 Years of Experience",
        languages:"English, Hindi, Marathi",
        consulFee:"$800"
    },
    {
        id:3,
        name:"Dr.Prerna Parag",
        expertise:"Male-Female Infertility",
        experience:"7 Years of Experience",
        languages:"English, Hindi, Marathi",
        consulFee:"$800"
    }
]

const FindDoctors = () => {
  return (
    <div className='doctors-container'>
      <ul className='filters-container'>
        {
            filters.map(eachFilters=>(
                <li><select>
                 <option>{eachFilters.name}</option>
               </select></li>
        ))
        }
      </ul>
      <ul className='result-filters-container'>
       {
        resultFilters.map(eachFilters=>(
            <div>
                <p>{eachFilters.name}</p>
                <RxCross2/>
            </div>
        ))
       }
      </ul>
     <ul className="doctors-cards-container">
        {
            doctorsList.map(doctor=>(
                <DoctorsCard doctorDetails={doctor} key={doctor.id} />
            ))
        }
     </ul>
    </div>
  )
}

export default FindDoctors
