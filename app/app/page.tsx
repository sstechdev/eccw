import Image from 'next/image'
import Link from 'next/link'
import timetable from "../public/timetable.png"
import moonrace from "../public/moonrace.png";
import order from "../public/order.png";
import map from "../public/map.png";
import add from "../public/add.png";
import Signin from './signin/page';
import Signup from './signup/page';



export default function Home() {
  return (
    <div>
    <main className=" bg-white px-10 dark:bg-gray-800 md:px-20 lg:px-40 min-h-screen">
      <div className='flex justify-center'>

      <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <div className="flex flex-row gap-3 p-2 cursor-pointer items-center font-semibold">
              <div className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white  p-1 border-none rounded-md">
              <Link href='/signup'>Singup</Link>
              </div>
              
              <div className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white p-1 border-none rounded-md">
              <Link href='/signin'>Singin</Link>

              
              </div>
              
              

            </div>
            <ul className="flex items-center gap-4">
              <li className="flex gap-3 ">
                <a href="/contact" className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white p-1 border-none rounded-md">
                  contactanos
                </a>
                
                <a href="/about" className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white p-1 border-none rounded-md">
                  acerca de
                </a>
              </li>
            </ul>
          </nav>
       </div>
 <div className="text-center p-10 py-5">
            <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
              ECO CLEAN CAR WASH
            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
              Manten tu auto reluciente donde te encuentres.
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              De tu telefono a ti en minutos!
            </p>
            
            
            <div className='flex flex-col'>

              <div className='flex justify-center'>
              <a href="/date">
              <Image src={add} alt="add" />
              </a>
              </div>

              <Image src={order} height={300} width={300}  alt="pic2"/>
              
            </div>
          </div>
      
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Servicio de lavado vehicular de tu telefono a tu casa!</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
            Sigue estos tres simples pasos y tu carro estara como cuando lo compraste ;)  
            
            </p>
           
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
              <a href="https://www.flaticon.com/free-icons/map" title="map icons">
                <Image src={timetable} alt="hey"height={200} width={200}/>
              </a>
              <h3 className="text-lg font-semibold pt-8 pb-2  ">
                1. Donde se va a encontrar tu vehiculo
              </h3>
              
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={moonrace} width={200} height={200} alt="mr" />
              <h3 className="text-lg font-semibold pt-8 pb-2 ">
                2. Especifica el dia y la hora
              </h3>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={map} width={300} height={300} alt="map"/>
              <h3 className="text-lg font-semibold pt-8 pb-2 ">
                3. Un especialista estara en caimno!
              </h3> 
            </div>
          </div>
        </section>
       <footer>
       <div className="text-2xl flex justify-center gap-7 py-3 text-gray-600 dark:text-gray-400">
             
              
            </div>
       </footer>

    </main>
    </div>
  )
}
