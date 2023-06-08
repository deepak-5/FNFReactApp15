import React from 'react';
import NavBar from './NavBar';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faCheck} from '@fortawesome/free-solid-svg-icons';

function LoanPage() {
  return (
    <div className="container">
      <NavBar />
      <div className="row">
        <div className="col-lg-3 col-md-4 col-sm-12">
          <div className="card shadow-sm">
            <div className="card-header bg-primary text-white font-weight-bold">Loan Application</div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <Link to="/PersonalDetails" className="text-primary">
                    <FontAwesomeIcon icon={faCheckCircle} className="mr-2" />
                    Personal Details
                  </Link>
                </li>
                <li className="list-group-item">
                  <Link to="/PropertyDetails" className="text-primary">
                    <FontAwesomeIcon icon={faCheckCircle} className="mr-2" />
                    Property Details
                  </Link>
                </li>
                <li className="list-group-item">
                  <Link to="/Identity" className="text-primary">
                    <FontAwesomeIcon icon={faCheckCircle} className="mr-2" />
                    Identity
                  </Link>
                </li>
                <li className="list-group-item">
                  <Link to="/CreditCard" className="text-primary">
                    <FontAwesomeIcon icon={faCheckCircle} className="mr-2" />
                    Credit Card
                  </Link>
                </li>
                <li className="list-group-item">
                  <Link to="/Assets" className="text-primary">
                    <FontAwesomeIcon icon={faCheckCircle} className="mr-2" />
                    Assets
                  </Link>
                </li>
                <li className="list-group-item">
                  <Link to="/Income" className="text-primary">
                    <FontAwesomeIcon icon={faCheckCircle} className="mr-2" />
                    Income
                  </Link>
                </li>
                <li className="list-group-item">
                  <Link to="/Address" className="text-primary">
                    <FontAwesomeIcon icon={faCheckCircle} className="mr-2" />
                    Address
                  </Link>
                </li>
                <li className="list-group-item">
                  <Link to="/Employee" className="text-primary">
                    <FontAwesomeIcon icon={faCheckCircle} className="mr-2" />
                    Employee
                  </Link>
                </li>
                <li className="list-group-item">
                  <Link to="/Loan" className="text-primary">
                    <FontAwesomeIcon icon={faCheckCircle} className="mr-2" />
                    Loan
                  </Link>
                </li>
                <li className="list-group-item">
                  <Link to="/Investment" className="text-primary">
                    <FontAwesomeIcon icon={faCheckCircle} className="mr-2" />
                    Investment
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-lg-9 col-md-8 col-sm-12">
          <div className="loan-details">
            <h2 className="text-primary text-center mt-4">Welcome to the Loan Application!</h2>
            <p className="text-justify text-muted mb-3">
              Fill out the form on the left to provide us with the necessary information to process your loan application.
            </p>
            <p className="text-justify text-muted mb-3">
              Our team of experts will review your application and contact you with further details and instructions.
            </p>
            <p className="text-justify text-muted mb-3">
              If you have any questions or need assistance, please don't hesitate to reach out to our customer support team.
            </p>
            <h3 className="text-primary text-center mt-4">How it works</h3>
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="card shadow-sm mb-4">
                 
                  <div className="card-body text-center">
                    <h4 className="card-title text-primary">Apply</h4>
                    <p className="card-text text-muted">Fill out our simple and secure online form with your personal and financial details.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="card shadow-sm mb-4">
                 
                  <div className="card-body text-center">
                    <h4 className="card-title text-primary">Approve</h4>
                    <p className="card-text text-muted">Get an instant decision on your loan application and verify your identity online.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="card shadow-sm mb-4">
                  
                  <div className="card-body text-center">
                    <h4 className="card-title text-primary">Receive</h4>
                    <p className="card-text text-muted">Receive your funds directly into your bank account within one or two business day.</p>
                  </div>
                </div>
              </div>
            </div>
            <h3 className="text-primary text-center mt-4">Why choose us</h3>
            <ul class="list-group list-group-horizontal-lg justify-content-center mb-4">
              <li class="list-group-item border-0 bg-transparent"><FontAwesomeIcon icon={faCheck} size="lg" color="#28a745" /> Competitive interest rates</li>
              <li class="list-group-item border-0 bg-transparent"><FontAwesomeIcon icon={faCheck} size="lg" color="#28a745" /> Flexible repayment options</li>
              <li class="list-group-item border-0 bg-transparent"><FontAwesomeIcon icon={faCheck} size="lg" color="#28a745" /> Fast approval process</li>
            </ul>
            

            <h3 className="text-primary text-center mt-4">Ready to apply?</h3>
            <p className="text-center mb-4">Click the button below to start your loan application today!</p>
            <div className="text-center">
              <Link to="/PersonalDetails" className="btn btn-primary btn-lg">Apply Now</Link>
            </div>
          </div>
        </div>
    </div>
    </div>

  );
}

export default LoanPage;
