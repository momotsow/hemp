import React from 'react'
import { Container, Typography, Grid, TextField, Button } from '@material-ui/core'

const CompanyDetails = ({ prevStep, nextStep, handleChange, values }) => {
  const Continue = e => {
    e.preventDefault();
    nextStep();
  }

  return (
    <Container  component="main" maxWidth="xs">
    <div>
      <Typography  component="h1" variant="h5">
       Company Details
      </Typography>
      <form>
        <Grid container spacing={2}>
            {/* email address */}
            <Grid item xs={12}>
              <TextField 
                placeholder="Company Name"
                label="Company Name"
                onChange={handleChange('companyName')}
                defaultValue={values.companyName}
                // variant="outlined"
                autoComplete="companyName"
                fullWidth
              />
            </Grid>
            <br />
            {/* username */}
            <Grid item xs={12}>
              <TextField 
                placeholder="Username"
                label="Username"
                onChange={handleChange('username')}
                defaultValue={values.username}
                // variant="outlined"
                autoComplete="username"
                fullWidth
              />
            </Grid>
            <br />
            {/* password */}
            <Grid item xs={12}>
              <TextField 
                placeholder="Password"
                label="Password"
                onChange={handleChange('password')}
                defaultValue={values.password}
                // variant="outlined"
                autoComplete="password"
                fullWidth
                type="password"
              />
            </Grid>
        </Grid>
        <br />
        <Button 
          onClick={ Continue }
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
        >
          Next
        </Button>
      </form>
    </div>
  </Container>
  )
}

export default CompanyDetails