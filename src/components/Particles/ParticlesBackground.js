import React from 'react'
import Particles from "react-tsparticles";
import particlesConfig from './particles-config';


function ParticlesBackground() {
    return (
        <div>
            <Particles params={particlesConfig}></Particles>            
        </div>
    )
}

export default ParticlesBackground;
