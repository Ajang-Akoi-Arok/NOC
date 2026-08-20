import React from 'react';
import { Link } from 'react-router-dom';

const DonorCTA = ({ heading, subheading, body, primaryLabel, secondaryLabel, secondaryTo }) => {
  return (
    <section className="donor-cta-section">
      <div className="container">
        <div className="donor-cta-grid">
          <div className="donor-cta-left">
            <span className="donor-cta-eyebrow">{subheading}</span>
            <h2 className="donor-cta-heading">{heading}</h2>
          </div>
          <div className="donor-cta-right">
            <p className="donor-cta-body">{body}</p>
            <div className="donor-cta-buttons">
              <Link to="/donate" className="donor-cta-btn primary">
                {primaryLabel}
              </Link>
              <Link to={secondaryTo} className="donor-cta-btn secondary">{secondaryLabel} &rarr;</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonorCTA;
