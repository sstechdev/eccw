import { useState } from 'react';
import timetable from "../public/timetable.png";
import Image from 'next/image';


function AppointmentForm() {
  const [appointmentData, setAppointmentData] = useState({
    date: '',
    time: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setAppointmentData({ ...appointmentData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(appointmentData);
    alert('Appointment scheduled successfully!');
    setAppointmentData({
      date: '',
      time: '',
    });
  };

  return (
    <div className='flex flex-col p-3 m-2 items-center py-3 gap-3 '>
      <div>
        <Image src={timetable} height={100} width={100}/>
      </div>
    <form onSubmit={handleSubmit}>
      
      <div>
      <label htmlFor="date"
      className='flex text-3xl'
      >
        Selecciona el dia:
        </label>
      
      <input
        type="date"
        id="date"
        name="date"
        value={appointmentData.date}
        onChange={handleInputChange}
        required
        className='flex text-4xl rounded-md bg-blue-100 w-58 h-20'
      />
      </div>

      
      <div className='py-10'>
      <label htmlFor="time"
      className='flex text-3xl'
      >Selecciona la hora:</label>
      <input
      className='flex border m-2 rounded-md 
      bg-blue-100 w-48 h-20 text-4xl'
        type="time"
        id="time"
        name="time"
        value={appointmentData.time}
        onChange={handleInputChange}
        required
      />
      </div>
      

      <button type="submit" 
      className="send-button flex border-2 gap-3 
      rounded-md w-25 h-8 p-3 items-center 
      bg-teal-500 text-white ">
        Reservar
        </button>
    </form>
    
    </div>
  );
}

export default AppointmentForm;
