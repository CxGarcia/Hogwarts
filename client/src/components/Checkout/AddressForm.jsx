import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

export default function AddressForm () {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Service Details
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} >
          <TextField
            required
            id="name"
            name="name"
            label="Name"
            fullWidth
            autoComplete="given-name"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="email"
            name="email"
            label="Email"
            fullWidth
            autoComplete="email"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="mobile"
            name="mobile"
            label="Mobile"
            fullWidth
            autoComplete="mobile"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="Apartment-size"
            name="Apartment-size"
            label="Apartment-size"
            fullWidth
            autoComplete="Apartment-size"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="rooms"
            name="rooms"
            label="Number of rooms"
            fullWidth
            autoComplete="rooms"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address"
            name="address"
            label="Address"
            fullWidth
            autoComplete="shipping address"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="datetime-local"
            label="Prefered Date & Time"
            type="datetime-local"
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
        <Grid item xs={12} >
          <TextField
            id="info"
            name="info"
            label="Other Information"
            fullWidth
            autoComplete="info"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="Use this address for Upcoming bookings"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
