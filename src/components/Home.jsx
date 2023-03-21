import React from 'react';
import vg from "../assets/2.png"
import {AiFillGoogleCircle,AiFillAmazonCircle,AiFillYoutube,AiFillInstagram, AiFillFacebook} from "react-icons/ai"

const Home = () => {
  return (
    <>
      <div className='home' id="Home">
        <main>
            <h1>Brickbar</h1>
            <p>Answer to fitness</p>
        </main>
      </div>
      
      <div className="home2">
        <img src={vg} alt="Graphics" />

        <div>
          <p>
            The one stop for all your fitness issues.
            Whether it be cardio, paleo keto or anything else.
            We will help you achieve the body you need.
          </p>
        </div>
      </div>

      <div className="home3" id="about">
        <div>
          <h1>Who are We?</h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </div>

      <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>
          <article>

            <div 
              style={{
                animationDelay: "0.3s"
            }}>
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>

            <div 
              style={{
                animationDelay: "0.5s"
            }}>
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>

            <div 
              style={{
                animationDelay: "0.7s"
            }}>
              <AiFillYoutube />
              <p>Youtube</p>
            </div>

            <div 
              style={{
                animationDelay: "0.9s"
            }}>
              <AiFillInstagram />
              <p>Instagram</p>
            </div>

            <div 
              style={{
                animationDelay: "1s"
            }}>
              <AiFillFacebook />
              <p>Facebook</p>
            </div>
          </article>
        </div>
      </div>
    </>
  )
}

export default Home