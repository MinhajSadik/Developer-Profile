import { Link } from "react-router-dom";
import Logo from "../../images/logo.jpg";
import CV from "../../images/resume.pdf";
import "./Header.css";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar bg sticky-top">
      <div className="container">
        <a className="navbar-brand" href="/">
          <img src={Logo} alt="MinhajSadik" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                <h6 className="nav_name">About</h6>
                <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/skill">
                <h6 className="nav_name">Skill</h6>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/projects">
                <h6 className="nav_name">Projects</h6>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                <h6 className="nav_name">Contact</h6>
              </Link>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://medium.com/@minhajsadik"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h6 className="nav_name">Blog</h6>
              </a>
            </li>
          </ul>

          <a href={CV} download="MinhajSadik_Resume">
            <button className="btn btn-outline-success my-2 my-sm-0">
              Get Resume
            </button>
          </a>
        </div>
      </div>
      {/* <Marquee className='marquee'>
                    Are You Developer, if You're Developer You Can Understand. I Want to talk about my website features. It's My Portfolio Website. I'm Also Update Regular On My Website. Now Here Is Feature is available (JSX, React.js, JavaScript, React-Router, React-Form-Hook, Material-UI, React-Bootstrap, *Simple Node.js*) You Can Route On My Website) Future Update: Firebase All Authentication. Convert This Website Next.js And Node.js Add Express.js Backend System Working
                </Marquee> */}
    </nav>
  );
};

export default Header;
