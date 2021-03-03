import React from 'react';
import Typography from '@material-ui/core/Typography';

export default function PaymentForm () {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Payment method
      </Typography>
      <div className="booking-form">
        <form action="">
          <div className="form-row">
            <div className="col">
              <label htmlFor="name">Name</label>
              <input type="text" className="form-control" placeholder="Name" />
            </div>
          </div>
          <div className="form-row">
            <div className="col">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                className="form-control"
                placeholder="email@example.com"
              />
            </div>
            <div className="col">
              <label htmlFor="phone-number">Phone Number</label>
              <input
                type="text"
                className="form-control"
                placeholder="+039-000-000-00"
              />
            </div>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
}
