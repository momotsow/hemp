import React, { Component } from 'react'
import CompanyDetails from './CompanyDetails'
import Address from './Address'
import Authorisation from './Authorisation'
import Contact from './Contact'
import Documents from './Documents'
import OfficeOnly from './OfficeOnly'
import Success from './Success'

export default class Signup extends Component {

  state = {
    step: 1,
    email: '',
    username: '', 
    password: '',
    firstName: '',
    lastName: '',
    country: '',
    levelOfEducation: '',
  }

  // go back to previous step
  prevStep = () => {
    const { step } = this.state;
    this.setState({ step: step - 1 });
  }

  // proceed to the next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({ step: step + 1 });
  }

  // Handle fields change
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  }

  render() {
    const { step } = this.state;
    const { email, username, password, firstName, lastName, country, levelOfEducation } = this.state;
    const values = { email, username, password, firstName, lastName, country, levelOfEducation }
    
    switch(step) {
      case 1: 
        return (
          <CompanyDetails
            nextStep={ this.nextStep }
            handleChange={ this.handleChange }
            values={ values }
          />
        )
      case 2: 
        return (
          <Address 
            prevStep={ this.prevStep }
            nextStep={ this.nextStep }
            handleChange={ this.handleChange }
            values={ values }
          />
        )
      case 3: 
          return (
            <Contact
              prevStep={ this.prevStep }
              nextStep={ this.nextStep }
              values={ values }
            />
          )
        case 4: 
        return (
        <Documents
            prevStep={ this.prevStep }
            nextStep={ this.nextStep }
            values={ values }
        />
        )
        case 5: 
        return (
        <Authorisation
            prevStep={ this.prevStep }
            nextStep={ this.nextStep }
            values={ values }
        />
        )
        case 4: 
        return (
        <OfficeOnly
            prevStep={ this.prevStep }
            nextStep={ this.nextStep }
            values={ values }
        />
        )
        case 8: 
          return (
            <Success />
          )
      default: 
          // do nothing
    }
  }
}
