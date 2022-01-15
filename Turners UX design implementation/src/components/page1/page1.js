import { Link } from "react-router-dom";
import {
  FcSettings,
  FcAutomotive,
  FcInTransit,
  FcVlc,
  FcCalculator,
  FcIdea,
  FcMindMap,
  FcManager,
  FcBusinessman,
  FcBusinesswoman,
  FcContacts,
} from "react-icons/fc";
import Footer from "./Footer";
import Header from "./Header";

export default function Page1() {
  return (
    <>
      <div className="page-body-grid">
        <div className="page1-body-grid-item page1-section1">
          <Header />
          <div className="page1-body-grid-item1-card">
            <h1>Rest assured and insure your cars with Turners</h1>
            <p>
              Decades in the NZ automotive marketplace represent a brand you can
              depend on. We know cars and we know that New Zealanders love
              driving. Trust us to give you all the freedom you deserve.
            </p>
            <button>
              <Link to="/insurance" className="link">
                GO TO INSURANCE
              </Link>
            </button>
            <div className="icon-container">
              <Link to="/insurance" className="link">
                <FcAutomotive className="icon1" />{" "}
              </Link>
              <Link to="/insurance" className="link">
                <FcInTransit className="icon1" />{" "}
              </Link>
              <Link to="/insurance" className="link">
                <FcVlc className="icon1" />
              </Link>
            </div>
          </div>
        </div>
        <div className="page1-body-grid-item page1-section2">
          <div className="service-introduction">
            <h2>Our Services</h2>

            <div className="service-card-container">
              <div className="service-card">
                <FcSettings className="icon2" />
                <h4>24/7 Support</h4>
                <p>
                  Here for you 24/7. Our support team is available no matter
                  what time you’re driving.
                </p>
              </div>
              <div className="service-card">
                <FcCalculator className="icon2" />
                <h4>Affordable Prices</h4>
                <p>We’re disrupting the market with our competitive options.</p>
              </div>
              <div className="service-card">
                <FcMindMap className="icon2" />
                <h4>Nationwide Branches</h4>
                <p>
                  Across NZ - we’re here to provide localised service and
                  dependability.
                </p>
              </div>
              <div className="service-card">
                <FcIdea className="icon2" />
                <h4>Online Management</h4>
                <p>
                  We know how customers operate, and we provide answers at the
                  click of a button.
                </p>
              </div>
              <div className="service-card">
                <FcManager className="icon2" />
                <h4>Trusted For Years</h4>
                <p>
                  Award winning service, available for generations of NZers.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="page1-body-grid-item page1-section3">
          <div className="page1-section3-card">
            <h2>
              What Our Customers <br />
              Say about us
            </h2>
            <p className="card-name">Jane Doe</p>
            <p className="card-location">Auckland, NZ</p>
            <p>
              “Buying a car was an intimidating prospect for me, let alone
              insuring one.
              <br />
              <br />
              Turners Cars offered me precise solutions and dependable,
              thoughful support throughout my car buying and insuring
              experience”.
            </p>

            <div className="icon-container">
              <FcBusinessman className="icon2" />
              <FcBusinesswoman className="icon2" />
              <FcContacts className="icon2" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
