import React, { useState, useEffect, useMemo } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import arrowRight from "./assets/icons/Vector (3).png";
import lady1 from "./assets/images/Practice website 1.png";
import flower from "./assets/images/Group 2.png";
import waveImage from "./assets/icons/Vector 3.png";
import waveArrow from "./assets/icons/Vector.png";
import peopleMeeting1 from "./assets/images/Frame 19.png";
import peopleMeeting2 from "./assets/images/Frame 23.png";
import peopleMeeting3 from "./assets/images/Frame 21.png";
import peopleMeeting4 from "./assets/images/Frame 20.png";
import profileImage from "./assets/icons/solar_user-circle-bold-duotone.png";
import internetLogo from "./assets/icons/Frame 33.png";
import arrowTopRight from "./assets/icons/Frame 34.png";
import analysisIcon from "./assets/icons/Frame 4.png";
import planningIcon from "./assets/icons/Frame 3.png";
import consultingIcon from "./assets/icons/Frame 9.png";
import strategyIcon from "./assets/icons/Frame 9.png";
import designIcon from "./assets/icons/Frame 7.png";
import evaluationIcon from "./assets/icons/Frame 10.png";
import cooperate1 from "./assets/images/Frame 47.png";
import cooperate2 from "./assets/images/Frame 48.png";
import cooperate3 from "./assets/images/Frame 49.png";
import yellow from "./assets/images/Union.png";
import stars from "./assets/images/Frame 63 (1).png";
import logo from "./assets/icons/logo.png";

function App() {
  const members = useMemo(
    () => [
      {
        id: 1,
        position: "Head of power MTI",
        imageSrc: cooperate1,
        information:
          "Sahledin Adam is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
        name: "Sahledin Adam",
      },
      {
        id: 2,
        position: "Senior client partner",
        imageSrc: cooperate2,
        information:
          "Jessica Angel is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
        name: "Jessica Angel",
      },
      {
        id: 3,
        position: "Director ACT",
        imageSrc: cooperate3,
        information:
          "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64.",
        name: "Tommy Bells",
      },
    ],
    []
  );

  // Load data from local storage if available
  const storedMembers = JSON.parse(localStorage.getItem("members")) || members;
  const [selectMember, setSelectMember] = useState(storedMembers[0]);

  const handleMemberClick = (member) => {
    setSelectMember(member);
  };

  // Save data to local storage when component unmounts
  useEffect(() => {
    localStorage.setItem("members", JSON.stringify(members));
  }, [members]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Find the next member in the list
      const currentIndex = members.findIndex(
        (member) => member.id === selectMember.id
      );
      const nextIndex = (currentIndex + 1) % members.length;
      setSelectMember(members[nextIndex]);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(intervalId);
  }, [selectMember, members]);

  const selectedTracker = "bg-[#12182B] w-[10px] h-[10px] rounded-[50%]";
  return (
    <div className=" h-[100vh]">
      <div className=" fixed w-[100%] z-40 ">
        <Navbar />
      </div>
      <main
        id="home"
        className=" text-secondary font-Poppins pt-28 myLS:pt-32 "
      >
        <section className=" p-5 grid-cols-2 align-top myLS:grid  ">
          <div className=" mb-10 ">
            <h1 className=" text-5xl text-center text-primary font-bold mb-5 myLS:mb-10 myLS:text-left myLS:leading-[70px] myLS:max-w-[320px] ">
              Utilize our solution to expand your business.
            </h1>
            <p className=" text-justify text-sm  text-primary mb-5 myLS:mb-10 myLS:max-w-[400px]">
              Make your business prosper with our great team of experts. We'll
              make your new business plan a success!
            </p>
            <button className="flex items-center gap-1 text-xs bg-primary px-4 py-2 rounded-[8px] ">
              Let’s Talk <img src={arrowRight} alt="" />
            </button>
          </div>
          <div className=" relative  pb-36 h-[570px] max-w-[600px] myLS:pt-0 myLS:h-[550px] ">
            <div className=" mr-10 absolute  max-h-[600px] top-[50px] z-[1] myLS:top-0">
              <img src={lady1} alt="" className=" myLS:h-[530px] myLS:min-w-[450px] " />
              <img
                src={flower}
                alt=""
                className=" absolute w-[100px] top-[100px] myLS:left-[-70px] myLS:w-[220px] "
              />
            </div>
            <div className=" bg-primary w-[220px] px-5 py-3 rounded-[15px] absolute right-0 z-0  ">
              <h5 className=" text-[0.60rem] mb-1 ">Total bonus</h5>
              <h3 className=" font-semibold">+80.5%</h3>
              <img src={waveImage} alt="" />
            </div>
            <div className=" bg-primary w-[200px] p-3 rounded-[15px] absolute top-[330px] left-0 myLS:top-[190px] myLS:left-[-30px] z-[2]  ">
              <h4 className=" text-xs text-center mb-3">
                Business Sales Tracker
              </h4>
              <div className=" flex gap-2 justify-center ">
                <div>
                  <ul className=" flex flex-col gap-[2px] ">
                    <li className=" text-[0.60rem] ">20k</li>
                    <li className=" text-[0.60rem] ">15k</li>
                    <li className=" text-[0.60rem] ">10k</li>
                    <li className=" text-[0.60rem] ">5k</li>
                  </ul>
                </div>
                <div className=" flex items-baseline gap-3 mt-1">
                  <div className=" flex flex-col gap-1 ">
                    <div className=" w-[15px] h-[20px] bg-tertiary"></div>
                    <h5 className=" text-[0.60rem] ">Jan</h5>
                  </div>
                  <div className=" flex flex-col gap-1 ">
                    <div className=" w-[15px] h-[30px] bg-tertiary"></div>
                    <h5 className=" text-[0.60rem] ">Feb</h5>
                  </div>
                  <div className=" flex flex-col gap-1 ">
                    <div className=" w-[15px] h-[40px] bg-tertiary"></div>
                    <h5 className=" text-[0.60rem] ">Mar</h5>
                  </div>
                  <div className=" flex flex-col gap-1 ">
                    <div className=" w-[15px] h-[50px] bg-tertiary"></div>
                    <h5 className=" text-[0.60rem] ">Apr</h5>
                  </div>
                  <div className=" flex flex-col gap-1 ">
                    <div className=" w-[15px] h-[60px] bg-tertiary"></div>
                    <h5 className=" text-[0.60rem] ">May</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className=" bg-primary w-[250px] px-5 py-3 rounded-[15px] absolute right-0 bottom-0 z-[3] myLS:right-[20px]">
              <h3 className=" mb-2">+80.5%</h3>
              <h5 className=" text-[0.60rem] ">Last 30 days business growth</h5>
              <div className=" w-[100%] h-[10px] bg-secondary rounded-[5px] my-1">
                <div className=" bg-tertiary w-[75%] h-[100%] rounded-[5px] "></div>
              </div>
              <h5 className=" text-[0.60rem] ">
                40.25% increase from last work
              </h5>
            </div>
          </div>
        </section>
        <section className="  bg-primary mt-16 ">
          <div className=" py-10 px-5 ">
            <div>
              <div>
                <h2 className=" text-2xl font-bold mb-2 myLS:text-left myLS:max-w-[320px] ">
                  We Provide The Best
                </h2>
                <img
                  src={waveArrow}
                  alt=""
                  className=" bg-tertiary px-6 py-2 rounded-[25px] mb-2  "
                />
                <h2 className=" text-2xl text-cente font-bold mb-5 myLS:mb-10 myLS:text-left myLS:max-w-[320px] ">
                  Solution For Your Business Development
                </h2>
              </div>
              <div>
                <p className=" text-justify text-sm mb-5 myLS:mb-10 myLS:max-w-[320px] ">
                  Make your business prosper with our great team of experts.
                  We'll make your new business plan a success!
                </p>
              </div>
            </div>
            <div className=" overflow-x-auto flex flex-row pb-5 myLS:gap-5 lg:justify-center  ">
              <img src={peopleMeeting1} alt="" className=" mr-4 w-[295px]" />
              <img src={peopleMeeting2} alt="" className=" mr-4 w-[295px]" />
              <img src={peopleMeeting3} alt="" className=" mr-4 w-[295px]" />
            </div>
          </div>
        </section>
        <section className=" gap-5 flex flex-col justify-center items-center myLS:flex myLS:flex-row mb-8 mt-16 p-5 ">
          <div className=" relative  mt-5 max-w-[500px] ">
            <img src={peopleMeeting4} alt="" className=" p-5 " />
            <div className=" absolute top-[-20px] left-0 bg-primary w-[160px] h-[115px] rounded-[7px] ">
              <div className=" border-secondary border-b-[0.5px] border-opacity-[0.5] p-1 ">
                <h4 className=" text-sm text-center font-light  ">
                  Export team
                  <span className=" text-[0.60rem] font-lighter pl-4 ">
                    more
                  </span>
                </h4>
              </div>
              <div>
                <div className=" flex flex-row justify-center items-center gap-1 mt-2 ">
                  <img src={profileImage} alt="" className=" w-[30px]" />
                  <div className=" flex flex-col  gap-1">
                    <h4 className=" text-xs font-light ">Kumadin Eda</h4>
                    <div className=" bg-secondary w-[80px] h-[7px] rounded-[5px]">
                      <div className=" bg-tertiary w-[75%] h-[100%] rounded-[5px] "></div>
                    </div>
                  </div>
                </div>
                <div className=" flex flex-row justify-center items-center gap-1 mt-1 ">
                  <img src={profileImage} alt="" className=" w-[30px]" />
                  <div className=" flex flex-col  gap-1">
                    <h4 className=" text-xs font-light ">Raira Vin</h4>
                    <div className=" bg-secondary w-[80px] h-[7px] rounded-[5px]">
                      <div className=" bg-tertiary w-[75%] h-[100%] rounded-[5px] "></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className=" absolute bottom-[-20px] right-0 text-primary text-center bg-secondary w-[110px] h-[125px] shadow-lg rounded-[12px] myLS:right-[-10px] ">
              <img
                src={internetLogo}
                alt=""
                className=" w-[30px] m-auto pt-3"
              />
              <h3 className=" text-lg font-semibold ">53.9K</h3>
              <h5 className=" text-xs mt-1 ">Reach</h5>
              <div className=" flex justify-center items-center gap-2">
                <img src={arrowTopRight} alt="" className=" w-[30px] " />
                <h3 className=" text-primary ">44.5%</h3>
              </div>
            </div>
          </div>
          <div className=" max-w-[500px] ">
            <div className=" text-primary p-5 ">
              <h2 className=" text-2xl font-bold mb-3 myLS:text-4xl myLS:leading-[55px] myLS:max-w-[300px]  ">
                We Lead Your Business Team To Victory
              </h2>
              <h4 className=" text-sm ">
                We are a team of passionate business consultants & technology
                veterans eager to help companies reach their full potential.
              </h4>
            </div>
            <div className=" text-primary flex flex-row justify-between items-center px-5">
              <h3 className=" bg-primary text-secondary px-3 py-1 rounded-[5px] ">
                Our Mission
              </h3>
              <h3>Our Vission</h3>
              <h3>Our Value</h3>
            </div>
            <div className=" p-5 ">
              <h3 className=" text-primary bg-[#E7ECFF] text-sm py-3 px-7 rounded-[5px]">
                Our strategic planning process rapidly delivers plans that
                stick, with execution support to make your plans a reality.
              </h3>
            </div>
          </div>
        </section>
        <section className=" bg-[#0E121F] mb-10 w-[100%] mt-16 myLS:mt-20 ">
          <div className=" px-5 py-12  ">
            <div className=" pb-3 ">
              <h1 className="text-3xl text-center mb-5">
                What We Do To Serve Your Best
              </h1>
              <h3 className=" text-xs text-center font-light mb-5">
                We provide comprehensive services to support your business by
                leveraging strategy to drive people, process, and information.
              </h3>
            </div>
            <div className=" w-[100%] myLS:flex myLS:justify-center ">
              <div className=" flex overflow-x-auto gap-5 grid-cols-3 myLS:grid myLS:w-[950px] pb-5 ">
                <div className=" text-center p-5 items-center bg-[#12182B]  min-w-[300px] myLS:min-w-[250px] myLS:max-w-[300px] h-[250px] rounded-[15px] ">
                  <img
                    src={analysisIcon}
                    alt=""
                    className=" w-[40px] mb-5 mt-7 m-auto"
                  />
                  <h3 className=" text-xl mb-3">Business Analysis</h3>
                  <h4 className=" text-center text-[0.60rem] font-light max-w-[170px] m-auto ">
                    Using analytics, we can bridge the analysis between
                    technology and business
                  </h4>
                </div>
                <div className=" text-center p-5 items-center bg-[#12182B] min-w-[300px] myLS:min-w-[250px] myLS:max-w-[300px] h-[250px] rounded-[15px] ">
                  <img
                    src={planningIcon}
                    alt=""
                    className=" w-[40px] mb-5 mt-7 m-auto"
                  />
                  <h3 className=" text-xl mb-3">Strategic Planning</h3>
                  <h4 className=" text-center text-[0.60rem] font-light max-w-[170px] m-auto ">
                    Develop the most effective strategies and plans to boost
                    your growth and achieve your goals
                  </h4>
                </div>
                <div className=" text-center p-5 items-center bg-[#12182B] min-w-[300px] myLS:min-w-[250px] myLS:max-w-[300px] h-[250px] rounded-[15px] ">
                  <img
                    src={consultingIcon}
                    alt=""
                    className=" w-[40px] mb-5 mt-7 m-auto"
                  />
                  <h3 className=" text-xl mb-3">Business Consulting</h3>
                  <h4 className=" text-center text-[0.60rem] font-light max-w-[170px] m-auto ">
                    Create in depth reports and presentations on your business
                  </h4>
                </div>
                <div className=" text-center p-5 items-center bg-[#12182B] min-w-[300px] myLS:min-w-[250px] myLS:max-w-[300px] h-[250px] rounded-[15px] ">
                  <img
                    src={strategyIcon}
                    alt=""
                    className=" w-[40px] mb-5 mt-7 m-auto"
                  />
                  <h3 className=" text-xl mb-3">Marketing Strategy</h3>
                  <h4 className=" text-center text-[0.60rem] font-light max-w-[170px] m-auto ">
                    We use a variety of innovative and good strategies to
                    achieve a target for the business you are developing
                  </h4>
                </div>
                <div className=" text-center p-5 items-center bg-[#12182B] min-w-[300px] myLS:min-w-[250px] myLS:max-w-[300px] h-[250px] rounded-[15px] ">
                  <img
                    src={designIcon}
                    alt=""
                    className=" w-[40px] mb-5 mt-7 m-auto"
                  />
                  <h3 className=" text-xl mb-3">Experience Design</h3>
                  <h4 className=" text-center text-[0.60rem] font-light max-w-[170px] m-auto ">
                    We help clients understand, ideate and execute modern
                    interactions across channels and functional areas
                  </h4>
                </div>
                <div className=" text-center p-5 items-center bg-[#12182B] min-w-[300px] myLS:min-w-[250px] myLS:max-w-[300px] h-[250px] rounded-[15px] ">
                  <img
                    src={evaluationIcon}
                    alt=""
                    className=" w-[40px] mb-5 mt-7 m-auto"
                  />
                  <h3 className=" text-xl mb-3">Audit & Evaluation</h3>
                  <h4 className=" text-center text-[0.60rem] font-light max-w-[170px] m-auto ">
                    We assist a company in staying afloat and preventing so that
                    it may be dealt with immediately
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className=" p-5  text-primary pt-10 ">
          <h1 className=" text-4xl font-bold max-w-[560px] mb-5 leading-[50px] m-auto myLS:text-center ">
            Our mentors are experts in different fields
          </h1>
          <div>
            <div className=" overflow-x-auto flex flex-row myLS:gap-4 lg:justify-center pb-5">
              <div className=" min-w-[295px]  mr-5">
                <img src={cooperate1} alt="" className=" mr-4 w-[295px]" />
                <h3 className=" text-3xl text-center mt-6 font-semibold ">
                  Sahledin Adam
                </h3>
                <h4 className=" text-xs text-center mt-3 ">
                  Head of power MTI
                </h4>
              </div>
              <div className=" min-w-[295px] mr-5 ">
                <img src={cooperate2} alt="" className=" mr-4 w-[295px]" />
                <h3 className=" text-3xl text-center mt-6 font-semibold ">
                  Jessica Angel
                </h3>
                <h4 className=" text-xs text-center mt-3 ">
                  Senior client partner
                </h4>
              </div>
              <div className=" min-w-[295px] mr-5">
                <img src={cooperate3} alt="" className=" mr-4 w-[295px]" />
                <h3 className=" text-3xl text-center mt-6 font-semibold ">
                  Tommy Bells
                </h3>
                <h4 className=" text-xs text-center mt-3 ">Director ACT</h4>
              </div>
            </div>
          </div>
        </section>
        <section className=" p-5 text-primary mt-10 ">
          <div>
            <h1 className=" text-4xl font-bold text-center mb-5 leading-[50px] m-auto myLS:text-center ">
              What’s Our Client Saying?
            </h1>
            <h4 className=" text-center font-light max-w-[450px] m-auto ">
              We assist a company in staying afloat and preventing so that it
              may be dealt with immediately
            </h4>
            <div className=" flex-row items-center m-auto max-w-[1000px] myLS:flex ">
              <div className=" m-auto mb-5 myLS:mb-0">
                <div className=" relative mt-20 w-[270px] m-auto ">
                  <img
                    src={yellow}
                    alt=""
                    className=" absolute h-[70px] right-[-45px] top-[-60px] "
                  />
                  <img
                    src={selectMember.imageSrc}
                    alt=""
                    className=" absolute left-5 bottom-5 rounded-[10px] h-[310px]"
                  />
                  <div className=" bg-primary w-[270px] h-[300px] rounded-[10px] "></div>
                </div>
              </div>
              <div className=" max-w-[365px] m-auto">
                <h3 className=" mb-3 myLS:mb-5">{selectMember.information}</h3>
                <div className="">
                  <img src={stars} alt="" className=" mb-3 myLS:mb-5" />
                  <h3 className=" text-lg font-semibold myLS:mb-3 ">
                    {selectMember.name}
                  </h3>
                  <h4 className=" text-sm mb-5 myLS:mb-10 ">
                    {selectMember.position}
                  </h4>
                  <ul className=" flex gap-3 justify-center myLS:justify-start ">
                    {members.map((member) => (
                      <li
                        key={member.id}
                        onClick={() => handleMemberClick(member)}
                        className={
                          selectMember.id === member.id
                            ? selectedTracker
                            : " bg-[#D9D9D9] w-[10px] h-[10px]  rounded-[50%] "
                        }
                      ></li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className=" p-5 mb-5 mt-10 ">
          <div className="  bg-primary p-5 myLS:p-16 rounded-[15px] ">
            <h1 className=" text-3xl text-center font-semibold pt-10 pb-5 myLS:text-4xl myLS:p-16 ">
              Ready to change your business route
            </h1>
            <h3 className=" text-sm text-center pb-5 m-auto font-light myLS:max-w-[500px] myLS:pb-10">
              Contact with us now and get the all effecient service on your door
              let's have a chat. Shall we?
            </h3>
            <div className=" flex justify-between items-center bg-secondary max-w-[340px] h-[45px] rounded-[7px] mb-10 m-auto myLS:mb-14 ">
              <input
                type="text"
                placeholder="Your email here"
                className=" text-primary text-xs min-w-[100px] ml-3 "
              />
              <button className=" bg-[#69FAB4] text-primary text-xs py-[7px] px-[13px] mr-3 rounded-[5px] font-semibold">
                Subscribe
              </button>
            </div>
          </div>
        </section>
        <section className=" p-5 text-primary my-10 ">
          <div className=" grid grid-cols-2 gap-y-5 gap-x-5 myLS:grid-cols-4 ">
            <div className="">
              <div className=" max-w-[300px] mr-5 ">
                <div className=" flex items-center gap-3 mb-3">
                  <img src={logo} alt="" className=" w-[45px] h-[45px] " />
                  <div>
                    <h2 className=" text-2xl font-semibold tracking-wide ">
                      Brand
                    </h2>
                    <h4 className=" text-[0.50rem] tracking-[8px] ">Consult</h4>
                  </div>
                </div>
                <h5 className=" text-xs ">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </h5>
              </div>
            </div>
            <ul className=" text-xl ">
              <li className=" text-xs font-semibold mb-3 whitespace-nowrap ">
                Our Company
              </li>
              <li className=" text-xs mb-3 ">Home</li>
              <li className=" text-xs mb-3 ">About us</li>
              <li className=" text-xs mb-3 ">Portfolio</li>
              <li className=" text-xs mb-3 ">Our services</li>
            </ul>

            <ul className=" text-xl mr-5 ">
              <li className=" text-xs font-semibold mb-3 ">Services</li>
              <li className=" text-xs mb-3 ">Business Analysis</li>
              <li className=" text-xs mb-3 ">Strategy Planning</li>
              <li className=" text-xs mb-3 ">Business Consulting</li>
              <li className=" text-xs mb-3 ">Marketing Strategy</li>
              <li className=" text-xs mb-3 ">Experienced Design</li>
              <li className=" text-xs mb-3 ">Audit & Evaluation</li>
            </ul>
            <div className=" ">
              <h4 className=" text-xs font-semibold mb-3 ">
                Subscribe to our newsletter
              </h4>
              <input
                type="text"
                placeholder=" Your email here "
                className=" text-xs bg-[#E7ECFF] w-[100%] p-1 rounded-[5px] mb-3 max-w-[230px] block "
              />
              <button className=" bg-[#69FAB4] text-primary text-xs py-[7px] px-[13px] mr-3 rounded-[5px] font-semibold">
                Subscribe
              </button>
            </div>
          </div>
        </section>
        <a href="#home">
          <div className=" bg-primary w-[50px] h-[50px] rounded-[50%] flex justify-center items-center fixed bottom-[80px] right-[50px] border-[0.5px] border-secondary z-[10]">
            <img
              src={arrowRight}
              alt=""
              className=" rotate-[270deg] w-[25px] "
            />
          </div>
        </a>
      </main>
      <Footer />
    </div>
  );
}

export default App;
