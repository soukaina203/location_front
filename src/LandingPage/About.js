import React from 'react'

function About() {
    return (
        <div id='About'>

            <div >{/* flex-direction=column */}
                <h3>ABOUT US</h3>
                <h2> <b>Best Customer Experience</b></h2>
                <div> {/* row */}
                    <img src="imgs/about.png" alt="" />
                    <div> {/* col */}
                        <h3>ABOUT US</h3> {/*orange  */}
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus vitae laboriosam numquam, mollitia dolore quia sunt, maiores aspernatur nesciunt pariatur deleniti. Nemo ad vero voluptatum harum voluptatibus, sit optio cum.
                            <br />
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse provident odio exercitationem doloribus quae fuga ex tenetur, repudiandae laudantium non temporibus ea expedita.

                        </p>
                        <button> <a href="">Learn more</a></button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default About
