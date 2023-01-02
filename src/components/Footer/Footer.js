import React from "react";
import { Link } from "react-router-dom";
import styles from "./Footer.module.scss";

const Footer = () => {
  const scrollTop = () => {
    window.scrollTo(0, 0);
  };


  return (
    <div className={styles.footerBasic}>
      <footer>
        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
          <li className="nav-item">
            <Link
              to="/"
              onClick={scrollTop}
              className="nav-link px-2 text-muted"
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/portfolio"
              onClick={scrollTop}
              className="nav-link px-2 text-muted"
            >
              Portfolio
            </Link>
          </li>

          <li className="nav-item">
            <Link
              to="/about"
              onClick={scrollTop}
              className="nav-link px-2 text-muted"
            >
              Sobre Mi
            </Link>
          </li>
        </ul>
        <div className="container">
          <div className="d-flex  flex-column flex-md-row flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
            <div className="col-md-4 d-flex justify-content-between align-items-center">
              <span className="mb-3 mb-md-0 text-muted">
                {" "}
               &copy; ntchvergara@gmail.com {new Date().getFullYear()}{" "}
              </span>
              <span className="mb-3 mb-md-0 text-muted">
                <Link to="/login" onClick={scrollTop} className="fs-4">
                  {" "}
                  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAAbhJREFUWEftl+0xBEEQht+LAJEgAkSACBABMiACRIAIEMERAaEQAfVUzajb3fnonltXq+r6z/24numnP6d3ponJbGI8WgPVMrJshPYlbUjaCYY+JH1KeqsZzv3fAgTEuaSjglGgXiXdhV8znweIKNxIAsgjgF1KInpVsQJdBJjqhQWFM0kPtQssQLchRbW7LP8DBFhWakCnku4tlhw6xUiVgKiZd4chj+purqZKQBThtseKQ5dCP0jp54Bo6SeDAcLfmlKAAOtIDuhZ0qEBiPOklosZkB55Sc2yHNC38eZ4fjNAeVLM8NyyRIjBN3cCRXXa+sR4FrVB2lIRIgWlZ2HR3lXCuGdUHEuiPH6lNoccznZUrXV1Lanj1F8CkXZqqyQmILyzdBiGuLAvo6dsckWNxy1tT4riomapva9USscajJZ66UO6BqM1bSt7OvCG52DPEvsGHXbu5Ob5r9YPHPe0sDVQzQtaNDDmCvsYnMzCWyf1pJb86A0zhmh5C50CxqFRP4MWQ0x3YCB+tabCz9CjS3FgsBWWis2astwdQPGA9j+lXRCrWD+sHTfQWzZCzYZzB9dAtZD+AM2xSiV8KS4MAAAAAElFTkSuQmCC" alt="imagen-footer" />
                </Link>{" "}
              </span>
            </div>

            <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
              <li className="ms-3">
                <a
                  href="https://www.linkedin.com/in/natacha-vergara/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <box-icon type="logo" name="instagram"></box-icon>
                </a>
              </li>

              <li className="ms-3">
                {" "}
                <a
                  href="https://github.com/NatachaVergara"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <box-icon type="logo" name="github"></box-icon>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
