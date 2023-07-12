import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
function Ride() {
    return (
        <div id='Ride' className='w-[100vw] h-[40rem] bg-slate-400'> {/* col */}
            <div class="text-center mt-[2rem] ">


                <h3 className='text-[25px]'>HOW IT WORK</h3>
                <h2 className='text-4xl'><b>Rent With 3 Easy Steps </b></h2>
            </div>
            <div className='flex flex-row bg-slate-300 mt-[8rem] '> {/* row     add icons */}
                <div className='iconDiv'> 
                {/* <i class="fa-solid fa-location-dot text-orange-500"></i> */}
                <FontAwesomeIcon icon="fa-solid fa-location-dot" />
                {/* <FontAwesomeIcon icon={faMapMarkerAlt} className="text-orange-500 text-4xl" /> */}


                    <h3 className='font-semibold'>Choose A Location</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo totam placeat alias expedita itaque doloribus saepe odit architecto dolorum repellat aut quos explicabo laboriosam reiciendis numquam quis a, enim doloremque.</p>
                </div>

                {/* <div> 
                    <h3>Pick-Up Date</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo totam placeat alias expedita itaque doloribus saepe odit architecto dolorum repellat aut quos explicabo laboriosam reiciendis numquam quis a, enim doloremque.</p>
                </div>

                <div> 
                    <h3>Book A Car</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo totam placeat alias expedita itaque doloribus saepe odit architecto dolorum repellat aut quos explicabo laboriosam reiciendis numquam quis a, enim doloremque.</p>
                </div> */}
            </div>
        </div>
    )
}

export default Ride
