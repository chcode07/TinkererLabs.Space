import React, { useEffect, useState } from 'react'
import './Home.css'
import EarthquakeReport from './EarthquakeReport';

function Home() {

  const [quotes, setQuotes] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(()=>{
    fetch('https://dummyjson.com/quotes')
    .then(res=>res.json())
    .then(data=>{
      setQuotes(data.quotes)
      // console.log(data);
    })
    .catch((err)=>{
      console.log(err);
    })
  },[])

  useEffect(() => {
    // Only set up the interval if there are quotes available
    if (quotes.length > 0) {
      const intervalId = setInterval(() => {
        setCurrentIndex(prevIndex => (prevIndex + 1) % quotes.length);
      }, 4000); 

      // Clean up interval on component unmount
      return () => clearInterval(intervalId);
    }
  }, [quotes]);

  

  return (
    <>
 <div className="description">
        <p className="welcome-text">Hi and welcome to our initiative!</p>
        <p className="intro-text">
          We are here to help you develop awareness about the natural disasters
          happening in and around our area!
        </p>
        <p className="question-text">
          You might be wondering, how would a website help us with anything of
          such a huge effect, right? 
        </p>
        <p className="highlight-text">
          If you really want to survive and not appear on{' '}
          <i>Watch Mojo's top 10 moments!</i>
        </p>
        <p className="call-to-action">
          Register yourself in the registration section and follow the tutorial
          in the resource.
        </p>
      </div>



    <div className='quotes-contianer'>
      {
        quotes.length >0 && (
          <div  className='quotes'>
            <b><h1>{quotes[currentIndex].quote}</h1></b>
            <i><p >{quotes[currentIndex].author}</p></i>
          </div>
        )
      }
      </div>
      {/* <button onClick={() => setCurrentIndex((currentIndex + 1) % quotes.length)}></button> */}

      
      
      <EarthquakeReport />

      <p className="earth">
        If you are wondering what this is, this is our very own ThinkerLabs.Space's creation!
        <br />
        <span className="earth-title">The Earthquake Historian!</span>
        <br /><br />
        What this does is that it collects your location <i>(with your permission, of course)</i> and figures out the earthquake history of your location.
      </p>


    
    </>
  )
}

export default Home