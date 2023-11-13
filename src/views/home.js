import React from 'react'

import { Helmet } from 'react-helmet'

import GalleryCard3 from '../components/gallery-card3'
import Question from '../components/question'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Naive Memorable Tarsier</title>
        <meta property="og:title" content="Naive Memorable Tarsier" />
      </Helmet>
      <div className="home-header">
        <header data-thq="thq-navbar" className="home-navbar-interactive">
          <span className="home-logo">TRIPPE</span>
          <div data-thq="thq-navbar-nav" className="home-desktop-menu">
            <nav className="home-links">
              <span>Home</span>
              <span className="home-nav2">About</span>
              <span className="home-nav3">Tours</span>
              <span className="home-nav4">Destinations</span>
              <span className="home-nav5">Contact</span>
            </nav>
            <div className="home-buttons">
              <button className="home-login button">Login</button>
              <button className="home-register button">Register</button>
            </div>
          </div>
          <div data-thq="thq-burger-menu" className="home-burger-menu">
            <svg viewBox="0 0 1024 1024" className="home-icon">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div data-thq="thq-mobile-menu" className="home-mobile-menu">
            <div className="home-nav">
              <div className="home-top">
                <span className="home-logo1">TRIPPE</span>
                <div data-thq="thq-close-menu" className="home-close-menu">
                  <svg viewBox="0 0 1024 1024" className="home-icon02">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav className="home-links1">
                <span className="home-nav11">Home</span>
                <span className="home-nav21">About</span>
                <span className="home-nav31">Tours</span>
                <span className="home-nav41">Destinations</span>
                <span className="home-nav51">Contact</span>
              </nav>
              <div className="home-buttons1">
                <button className="home-login1 button">Login</button>
                <button className="home-register1 button">Register</button>
              </div>
            </div>
            <div>
              <svg viewBox="0 0 950.8571428571428 1024" className="home-icon04">
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg viewBox="0 0 877.7142857142857 1024" className="home-icon06">
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg viewBox="0 0 602.2582857142856 1024" className="home-icon08">
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </header>
      </div>
      <div className="home-hero">
        <div className="home-hero1">
          <div className="home-container1">
            <h1 className="home-hero-heading heading1">
              Explore Northeast India with TripPe
            </h1>
            <span className="home-hero-sub-heading">
              <span>Discover the hidden gems of the region with</span>
              <span className="home-text01">
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="home-text02">TANBIR &amp; DEIJY</span>
            </span>
            <div className="home-btn-group">
              <button className="home-hero-button1 button">Get Started</button>
              <button className="home-hero-button2 button">Learn More →</button>
            </div>
          </div>
        </div>
      </div>
      <div className="home-details">
        <div className="home-details1">
          <div className="home-container2">
            <span className="home-text03 sectionTitle">
              <span>Details</span>
              <br></br>
            </span>
            <h2 className="home-details-heading heading2">
              Welcome to TripPe - Your Gateway to Northeast India
            </h2>
            <span className="home-details-sub-heading">
              TripPe is a full-fledged tour agency specializing in providing
              unique and immersive experiences in the enchanting region of
              Northeast India. With our expertly crafted itineraries, we offer
              you the opportunity to explore the unexplored and witness the
              beauty of this untouched paradise.
            </span>
          </div>
          <img
            alt="image"
            src="https://images.unsplash.com/photo-1594513986731-3facac274fae?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDQyfHxOb3J0aGVhc3QlMjBJbmRpYXxlbnwwfHx8fDE2OTk4ODgxMTd8MA&amp;ixlib=rb-4.0.3&amp;w=400"
            className="home-details-image"
          />
        </div>
      </div>
      <div className="home-features"></div>
      <div className="home-pricing"></div>
      <div className="home-gallery">
        <div className="home-gallery1">
          <h1 className="home-gallery-heading heading2">
            Explore the Beauty of Northeast India
          </h1>
          <span className="home-gallery-sub-heading">
            Witness the mesmerizing landscapes and vibrant cultures of Northeast
            India through our gallery
          </span>
          <div className="home-container3">
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1568644577260-0568ed0217e0?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDF8fE5vcnRoZWFzdCUyMEluZGlhfGVufDB8fHx8MTY5OTg4ODEwN3ww&amp;ixlib=rb-4.0.3&amp;w=1500"
              rootClassName="rootClassName"
            ></GalleryCard3>
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1455157823797-3019317cbcf0?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE0fHxOb3J0aGVhc3QlMjBJbmRpYXxlbnwwfHx8fDE2OTk4ODgxMDd8MA&amp;ixlib=rb-4.0.3&amp;w=1500"
              rootClassName="rootClassName1"
            ></GalleryCard3>
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1465919292275-c60ba49da6ae?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDN8fE5vcnRoZWFzdCUyMEluZGlhfGVufDB8fHx8MTY5OTg4ODEwN3ww&amp;ixlib=rb-4.0.3&amp;w=1500"
              rootClassName="rootClassName3"
            ></GalleryCard3>
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1528034342377-c406327f14b7?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE1fHxOb3J0aGVhc3QlMjBJbmRpYXxlbnwwfHx8fDE2OTk4ODgxMDd8MA&amp;ixlib=rb-4.0.3&amp;w=1500"
              rootClassName="rootClassName2"
            ></GalleryCard3>
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1552978534-9d01e1f91517?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDd8fE5vcnRoZWFzdCUyMEluZGlhfGVufDB8fHx8MTY5OTg4ODEwN3ww&amp;ixlib=rb-4.0.3&amp;w=1500"
              rootClassName="rootClassName4"
            ></GalleryCard3>
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1459271167741-0e47bc68df31?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDIxfHxOb3J0aGVhc3QlMjBJbmRpYXxlbnwwfHx8fDE2OTk4ODgxMDd8MA&amp;ixlib=rb-4.0.3&amp;w=1500"
              rootClassName="rootClassName5"
            ></GalleryCard3>
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1562528064-b014e32c46df?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDh8fE5vcnRoZWFzdCUyMEluZGlhfGVufDB8fHx8MTY5OTg4ODEwN3ww&amp;ixlib=rb-4.0.3&amp;w=1500"
              rootClassName="rootClassName6"
            ></GalleryCard3>
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1610701288758-dc024b74897b?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDl8fE5vcnRoZWFzdCUyMEluZGlhfGVufDB8fHx8MTY5OTg4ODEwN3ww&amp;ixlib=rb-4.0.3&amp;w=1500"
              rootClassName="rootClassName7"
            ></GalleryCard3>
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1500614922032-b6dd337b1313?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEwfHxOb3J0aGVhc3QlMjBJbmRpYXxlbnwwfHx8fDE2OTk4ODgxMDd8MA&amp;ixlib=rb-4.0.3&amp;w=1500"
              rootClassName="rootClassName8"
            ></GalleryCard3>
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1530507629858-e4977d30e9e0?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDcyfHxOb3J0aGVhc3QlMjBJbmRpYXxlbnwwfHx8fDE2OTk4ODgxMjZ8MA&amp;ixlib=rb-4.0.3&amp;w=1500"
              rootClassName="rootClassName9"
            ></GalleryCard3>
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1633323773512-486500ee15ef?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDc5fHxOb3J0aGVhc3QlMjBJbmRpYXxlbnwwfHx8fDE2OTk4ODgzMjR8MA&amp;ixlib=rb-4.0.3&amp;w=1500"
              rootClassName="rootClassName10"
            ></GalleryCard3>
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1647946402690-59e39e84913e?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDgwfHxOb3J0aGVhc3QlMjBJbmRpYXxlbnwwfHx8fDE2OTk4ODgzMjR8MA&amp;ixlib=rb-4.0.3&amp;w=1500"
              rootClassName="rootClassName11"
            ></GalleryCard3>
          </div>
        </div>
      </div>
      <div className="home-banner">
        <div className="home-banner1">
          <h1 className="home-banner-heading heading2">
            Unforgettable Experiences in Northeast India
          </h1>
          <span className="home-banner-sub-heading">
            Embark on a journey filled with breathtaking landscapes, rich
            cultural heritage, and thrilling adventures.
          </span>
          <button className="home-banner-button button">Learn More</button>
        </div>
      </div>
      <div className="home-faq">
        <div className="home-faq-container">
          <div className="home-faq1">
            <div className="home-container4">
              <span className="home-text06 sectionTitle">
                <span>FAQ</span>
                <br></br>
              </span>
              <h2 className="home-text09 heading2">Common questions</h2>
              <span className="home-text10">
                <span>
                  Here are some of the most common questions that we get.
                </span>
                <br></br>
                <span>
                  <span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                  <span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                </span>
                <span>
                  <span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                  <span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                </span>
              </span>
            </div>
            <div className="home-container5">
              <Question
                Answer="Some popular tourist destinations in Northeast India are Kaziranga National Park, Tawang Monastery, Cherrapunji, Shillong, and Majuli Island."
                Question="What are the popular tourist destinations in Northeast India?"
              ></Question>
              <Question
                Answer="TripPe offers a wide range of tours including adventure tours, cultural tours, wildlife tours, and heritage tours."
                Question="What types of tours does TripPe offer?"
              ></Question>
              <Question
                Answer="Yes, TripPe provides customizable tour packages to suit your preferences and requirements. You can contact our team to discuss your specific needs."
                Question="Can I customize my tour package?"
              ></Question>
              <Question
                Answer="Yes, accommodations are included in the tour packages offered by TripPe. We ensure comfortable and convenient stays for our customers."
                Question="Are accommodations included in the tour packages?"
              ></Question>
              <Question
                Answer="The best time to visit Northeast India is during the months of October to May when the weather is pleasant and favorable for outdoor activities."
                Question="What is the best time to visit Northeast India?"
              ></Question>
            </div>
          </div>
        </div>
      </div>
      <div className="home-footer">
        <footer className="home-footer1">
          <div className="home-container6">
            <span className="home-logo2">TRIPPE</span>
            <nav className="home-nav1 home-nav1">
              <span className="home-nav12">Home</span>
              <span className="home-nav22">About</span>
              <span className="home-nav32">Tours</span>
              <span className="home-nav42">Destinations</span>
              <span className="home-nav52">Contact</span>
            </nav>
          </div>
          <div className="home-separator"></div>
          <div className="home-container7">
            <span className="home-text27">
              © 2023 myCompany, All Rights Reserved.
            </span>
            <div className="home-icon-group1">
              <svg viewBox="0 0 950.8571428571428 1024" className="home-icon10">
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg viewBox="0 0 877.7142857142857 1024" className="home-icon12">
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg viewBox="0 0 602.2582857142856 1024" className="home-icon14">
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default Home
