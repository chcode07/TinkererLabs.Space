import React from 'react'
import './Resource.css'

function Resource() {
  return (
    <div class="container">
        <h1>Natural Disaster Safety Guide</h1>
        
        <section id="earthquake">
            <h2>Earthquake Safety</h2>
            <ul>
                <li>Drop, cover, and hold on. Get under a sturdy table or desk.
                <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Flovepik.com%2Fimage-401623058%2Fearthquake-self-help-hiding-under-the-table.html&psig=AOvVaw1vRGnyo-31m4Xf17T-SfoR&ust=1723377224131000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCPizg8yu6ocDFQAAAAAdAAAAABAJ" alt="" />
                </li>
                <li>Stay indoors until the shaking stops and it is safe to go outside.</li>
                <li>If you are outside, move away from buildings, streetlights, and utility wires.</li>
                <li>Once the shaking stops, check for injuries and hazards around you.</li>
                <li>Be prepared for aftershocks.</li>
                <li> <iframe width="904" height="517" src="https://www.youtube.com/embed/MKILThtPxQs" title="When The Earth Shakes - Animated Video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </li>
               
            </ul>

            
        </section>

        <section id="floods">
            <h2>Flood Safety</h2>
            <ul>
                <li>Move to higher ground immediately. Avoid walking or driving through floodwaters.</li>
                <li>If you are in a car, do not drive through flooded roads. Turn around, don’t drown.</li>
                <li>Stay away from power lines and electrical wires.</li>
                <li>Monitor local news for updates and evacuation orders.</li>
                <li>After the flood, avoid floodwater as it may be contaminated.</li>
                <li><iframe width="872" height="491" src="https://www.youtube.com/embed/43M5mZuzHF8" title="How to Prepare for a Flood | Disasters" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></li>
            </ul>
        </section>

        <section id="wildfires">
            <h2>Wildfire Safety</h2>
            <ul>
                <li>Evacuate immediately if instructed by authorities.</li>
                <li>Wear protective clothing such as long sleeves, pants, and a mask.</li>
                <li>Close all doors, windows, and vents in your home.</li>
                <li>If trapped, seek shelter in a building or a vehicle and stay low to the ground.</li>
                <li>Monitor emergency alerts and stay informed about the fire's progress.</li>
                <li><iframe width="872" height="491" src="https://www.youtube.com/embed/2RUv5pO3iFo" title="Home Wildfire Preparedness" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></li>
            </ul>
        </section>
    </div>
  )
}

export default Resource