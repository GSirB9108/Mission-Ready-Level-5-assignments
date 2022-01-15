/* import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons"; */
import Footer from "../page1/Footer";
import Header from "../page1/Header";
import { Link } from "react-router-dom";

export default function Page2() {
  return (
    <>
      <div className="page-body-grid">
        <div className="page2-body-grid-item page2-section1">
          <Header />
          <div className="page2-body-grid-item1-card">
            <div className="card-container1">
              <h1>
                Get A Personalised Quote In <br />
                Under 5 Minutes
              </h1>
              <p>
                We know time is a valuable commodity to you.
                <br /> Our aim is to reduce the time you spend on <br /> life’s
                paperwork so you can focus on the action.
              </p>
            </div>
            <div className="card-container2">
              <button>MAKE A CLAIM</button>
              <Link to="/progress">
                <button className="btn-get-quote">GET A QUOTE</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="page2-body-grid-item page2-section2">
          <div className="page2-section2-container">
            <h2>Choose The Right Plan For You</h2>
            <div className="page2-section2-card-container">
              <div className="page2-section2-card">
                <h4>Third Party Property Damage</h4>
                <ul>
                  <li>
                    <p>✕ &nbsp; Accidental loss or damage</p>
                  </li>
                  <li>
                    <p>✕ &nbsp; Fire damage</p>
                  </li>
                  <li>
                    <p>✕ &nbsp; Theft or illegal conversion</p>
                  </li>
                  <li>
                    <p className="tick">✓ &nbsp; Legal liability</p>
                  </li>
                  <li>
                    <p className="tick">✓ &nbsp; Vehical removal</p>
                  </li>
                  <li>
                    <p>✕ &nbsp; Transport home</p>
                  </li>
                  <li>
                    <p className="tick">✓ &nbsp; Innocent party protection</p>
                  </li>
                  <li>
                    <p>✕ &nbsp; Replacement vehicle</p>
                  </li>
                  <li>
                    <p>✕ &nbsp; New vehicle option</p>
                  </li>
                  <li>
                    <p>✕ &nbsp; Trailer cover</p>
                  </li>
                  <li>
                    <p>✕ &nbsp; Breakdown service</p>
                  </li>
                </ul>
                <a href="baidu.com">POLICY DOCUMENT</a>
                <a href="baidu.com">LEARN MORE</a>
                <Link to="/progress">
                  <button class="btn-get-quote">GET A QUOTE</button>
                </Link>
              </div>
              <div className="page2-section2-card">
                <h4>Third Party Fire and Theft </h4>
                <ul>
                  <li>
                    <p>✕ &nbsp; Accidental loss or damage</p>
                  </li>
                  <li>
                    <p className="tick">✓ &nbsp; Fire damage</p>
                  </li>
                  <li>
                    <p className="tick">✓ &nbsp; Theft or illegal conversion</p>
                  </li>
                  <li>
                    <p className="tick">✓ &nbsp; Legal liability</p>
                  </li>
                  <li>
                    <p className="tick">✓ &nbsp; Vehical removal</p>
                  </li>
                  <li>
                    <p>✕ &nbsp; Transport home</p>
                  </li>
                  <li>
                    <p className="tick">✓ &nbsp; Innocent party protection</p>
                  </li>
                  <li>
                    <p>✕ &nbsp; Replacement vehicle</p>
                  </li>
                  <li>
                    <p>✕ &nbsp; New vehicle option</p>
                  </li>
                  <li>
                    <p>✕ &nbsp; Trailer cover</p>
                  </li>
                  <li>
                    <p>✕ &nbsp; Breakdown service</p>
                  </li>
                </ul>
                <a href="baidu.com">POLICY DOCUMENT</a>
                <a href="baidu.com">LEARN MORE</a>
                <Link to="/progress">
                  <button class="btn-get-quote">GET A QUOTE</button>
                </Link>
              </div>
              <div className="page2-section2-card">
                <div>
                  <p className="most-popular">Most Popular</p>
                  <h4>Comprehensive</h4>
                </div>
                <ul>
                  <li>
                    <p className="tick">✓ &nbsp; Accidental loss or damage</p>
                  </li>
                  <li>
                    <p className="tick">✓ &nbsp; Fire damage</p>
                  </li>
                  <li>
                    <p className="tick">✓ &nbsp; Theft or illegal conversion</p>
                  </li>
                  <li>
                    <p className="tick">✓ &nbsp; Legal liability</p>
                  </li>
                  <li>
                    <p className="tick">✓ &nbsp; Vehical removal</p>
                  </li>
                  <li>
                    <p className="tick">✓ &nbsp; Transport home</p>
                  </li>
                  <li>
                    <p className="tick">✓ &nbsp; Innocent party protection</p>
                  </li>
                  <li>
                    <p className="tick">✓ &nbsp; Replacement vehicle</p>
                  </li>
                  <li>
                    <p className="tick">✓ &nbsp; New vehicle option</p>
                  </li>
                  <li>
                    <p className="tick">✓ &nbsp; Trailer cover</p>
                  </li>
                  <li>
                    <p className="tick">✓ &nbsp; Breakdown service</p>
                  </li>
                </ul>
                <a href="baidu.com">POLICY DOCUMENT</a>
                <a href="baidu.com">LEARN MORE</a>
                <Link to="/progress">
                  <button class="btn-get-quote">GET A QUOTE</button>
                </Link>
              </div>
              <div className="page2-section2-card add-to-quote">
                <h4>Mechanical Breakdown Insurance add-on</h4>
                <ul>
                  <li>
                    <p className="tick">
                      ✓ &nbsp; Mechanical Breakdown Insurance (MBI) protects you
                      against the cost of unforeseen breakdown{" "}
                    </p>
                  </li>
                  <li>
                    <p className="tick">
                      ✓ &nbsp; Includes parts, labour, towing, AA roadservice &
                      24/7 breakdown assistance, plus accommodation and rental
                      car costs for out of town breakdowns
                    </p>
                  </li>
                </ul>
                <button class="btn-get-quote">
                  <Link to="/progress" className="link">
                    ADD TO QUOTE
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="page2-body-grid-item page2-section3">
          <div className="page2-section3-container">
            <h2>Frequently Asked Questions</h2>
            <div className="page2-section3-card">
              <p>If I need to cancel my policy, can I get a refund?</p>
              <p>How do I make a car insurance claim?</p>
              <p>What insurance policies offer the best cover?</p>
              <p>What if my windscreen or window is damaged?</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
