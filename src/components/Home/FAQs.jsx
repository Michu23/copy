import React, { useState } from "react";
import Union from "../../assets/Union.svg";

const FAQs = () => {
  const faqsData = [
    { sl: "01", question: "Question 1", answer: "Answer 1" },
    { sl: "02", question: "Question 2", answer: "Answer 2" },
    { sl: "03", question: "Question 3", answer: "Answer 3" },
    { sl: "04", question: "Question 4", answer: "Answer 4" },
    { sl: "05", question: "Question 5", answer: "Answer 5" },
    { sl: "06", question: "Question 6", answer: "Answer 6" },
    { sl: "07", question: "Question 7", answer: "Answer 7" },
    { sl: "08", question: "Question 8", answer: "Answer 8" },
    { sl: "09", question: "Question 9", answer: "Answer 9" },
    { sl: "10", question: "Question 10", answer: "Answer 10" },
    // Add more FAQ items as needed
  ];

  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleToggle = (index) => {
    if (index === expandedIndex) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
    }
  };

  return (
    <div>
      <div className="display__desktop"><div className="first">
        <div className="faqs">
          <div className="faqcontent">
            <h2 className="fheading">Frequently Asked Questions</h2>
            <div className="faqcontent">
              {/* <div className="faq">
                <h4 className="sl">01</h4>
                <div className="qna">
                  <div className="topelement">
                    <div>
                      <h5>Store, manage, secure and unlock ?</h5>
                    </div>
                    <div className="closebtn">
                      <img src={Union} alt="" />
                    </div>
                  </div>
                  <p>
                    Nibh quisque suscipit fermentum netus nulla cras porttitor
                    euismod nulla. Orci, dictumst nec aliquet id ullamcorper
                    venenatis. Fermentum sulla craspor ttitore ismod nulla.
                  </p>
                </div>
              </div>
              <div className="faq">
                <h4 className="sl">02</h4>
                <div className="qna">
                  <div className="topelement">
                    <div>
                      <h5>Priotize Data Security Streamline flows ? </h5>
                    </div>
                    <div className="closebtn__closed">
                      <img src={Union} alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="faq">
                <h4 className="sl">03</h4>
                <div className="qna">
                  <div className="topelement">
                    <div>
                      <h5>Never Happens Query engine that autoscales ?</h5>{" "}
                    </div>
                    <div className="closebtn__closed">
                      <img src={Union} alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="faq">
                <h4 className="sl">04</h4>
                <div className="qna">
                  <div className="topelement">
                    <div>
                      <h5>disagreement Maximise teams Collaboration ? </h5>{" "}
                    </div>
                    <div className="closebtn__closed">
                      <img src={Union} alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="faq">
                <h4 className="sl">05</h4>
                <div className="qna">
                  <div className="topelement">
                    <div>
                      <h5>Realtime Empowers, Personalized Experiences ? </h5>{" "}
                    </div>
                    <div className="closebtn__closed">
                      <img src={Union} alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="faq">
                <h4 className="sl">06</h4>
                <div className="qna">
                  <div className="topelement">
                    <div>
                      <h5>disagreement Maximise teams Collaboration ? </h5>{" "}
                    </div>
                    <div className="closebtn__closed">
                      <img src={Union} alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="faq">
                <h4 className="sl">07</h4>
                <div className="qna">
                  <div className="topelement">
                    <div>
                      <h5>disagreement Maximise teams Collaboration ? </h5>{" "}
                    </div>
                    <div className="closebtn__closed">
                      <img src={Union} alt="" />
                    </div>
                  </div>
                </div>
              </div> */}

              {faqsData.map((faq, index) => (
                <div className="faq" key={index}>
                  <h4 className="sl">{faq.sl}</h4>
                  <div className="qna">
                    <div className="topelement">
                      <div>
                        <h5>{faq.question}</h5>{" "}
                      </div>
                      <div className={` ${expandedIndex === index ? 'closebtn' : 'closebtn__closed'}`}
                      onClick={() => handleToggle(index)}
                      >
                        <img
                          src={Union}
                          alt=""
                        />
                      </div>
                    </div>
                    {expandedIndex === index && <p>{faq.answer}</p>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div></div>
      <div className="display__mobile">
        <div className="faq__mob">
          <h2>
          Frequently Asked 
Questions
          </h2>
          <div className="mob__faq__content">
          {faqsData.map((faq, index) => (
            <div className="mob__faq" key={index}>
              <div className="mob__top">
                <div className="mob__q">
                <h4>{faq.sl}</h4>
                <h4>{faq.question}</h4>
              </div>
              <div className={` ${expandedIndex === index ? 'closebtn' : 'closebtn__closed'}`}
                      onClick={() => handleToggle(index)}
                      >
                        <img
                          src={Union}
                          alt=""
                        />
                      </div>
              </div>
              {expandedIndex === index && <p>{faq.answer}</p>}

              <hr />
             

            </div>
              ))}

          </div>
        </div>
      </div>
      
    </div>
  );
};

export default FAQs;
