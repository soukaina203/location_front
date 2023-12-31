import React from 'react'

function About() {
    return (
        <div id='About'>

            <div className='flex flex-col w-[100vw] h-[40rem]  mt-[3rem]'>{/* flex-direction=column */}
                <div class="text-center mt-[8rem]">
                    <h3 class="text-[25px] ">ABOUT US</h3>
                    <h2 class="text-4xl "><b>Best Customer Experience</b></h2>
                </div>
                <div className='flex flex-row gap-5'> {/* row */}
                    <img src="imgs/about.png" alt="" className='h-[60vh] w-[50vw] mt-[4rem] ml-16' />
                    <div className='flex flex-col mt-[5.8rem] w-[27rem] font-semibold '> {/* col */}
                        <h3 className='text-orange-500 font-bold'>ABOUT US</h3> 
                         <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus vitae laboriosam numquam, mollitia dolore quia sunt, maiores aspernatur nesciunt pariatur deleniti. Nemo ad vero voluptatum harum voluptatibus, sit optio cum.
                            <br />
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse provident odio exercitationem doloribus quae fuga ex tenetur, repudiandae laudantium non temporibus ea expedita.
                        </p> 
                        {/* <br /> */}
                        <button className='p-2 bg-blue-600 rounded text-slate-50 w-[10em] mt-[10px]'> <a href="bv">Learn more</a></button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default About
