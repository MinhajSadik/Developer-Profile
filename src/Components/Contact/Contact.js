import Aos from "aos";
import "aos/dist/aos.css";
import emailjs from "emailjs-com";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { IoMdCloudDone } from "react-icons/io";
import "./Contact.css";

const Contact = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const [success, setSuccess] = useState(true);
  const { register, errors } = useForm();

  const sendMail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_nnu9oa7",
        "template_w3rsb9s",
        e.target,
        "user_AFNCYrKN4V06fayq1Hx8z"
      )
      .then((res) => {
        console.log(res);
        setSuccess(false);
      })
      .catch((err) => console.log(err));
  };

  const handleReturn = () => {
    setSuccess(true);
  };

  return (
    <div id="contact-section" className="container skill">
      <div className="back-line d-flex align-items-center skill-title">
        <div className="front-box d-flex align-items-center">
          <p className="d-flex align-items-center">Contact</p>
        </div>
      </div>
      <div data-aos="flip-left" className="row d-flex justify-content-center ">
        {success ? (
          <div className="col-12 col-sm-12 col-md-6">
            <form className="contact-form" onSubmit={sendMail}>
              <input
                className="form-control"
                name="name"
                ref={register({ required: true })}
                placeholder="Your Name"
              />
              {errors.name && <span className="error">Name is required</span>}
              <br />
              <input
                className="form-control"
                name="email"
                ref={register({ required: true })}
                placeholder="Your Email"
              />
              {errors.email && <span className="error">Email is required</span>}
              <br />
              <input
                className="form-control"
                name="subject"
                ref={register({ required: true })}
                placeholder="Subject"
              />
              {errors.subject && (
                <span className="error">Subject is required</span>
              )}
              <br />
              <textarea
                className="form-control"
                name="message"
                ref={register({ required: true })}
                placeholder="Enter Your Message"
              />
              {errors.message && (
                <span className="error">Your Text is required</span>
              )}
              <br />
              <input
                className="form-control btn btn-success"
                type="submit"
                value="Submit"
              />
            </form>
          </div>
        ) : (
          <div className="col-12 col-sm-12 col-md-6">
            <div className="Sucess-div">
              <h1 className="d-flex justify-content-center align-items-center">
                Thanks!
              </h1>
              <h2 className="d-flex justify-content-center align-items-center">
                <IoMdCloudDone></IoMdCloudDone>
              </h2>
              <h1 className="d-flex justify-content-center align-items-center">
                Message Received!
              </h1>
              <h1 className="d-flex justify-content-center align-items-center">
                <span className="success-heart">&hearts;</span>
              </h1>
              <button
                onClick={handleReturn}
                className="btn btn-success my-2 my-sm-0 btn-margin"
              >
                Return
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;
