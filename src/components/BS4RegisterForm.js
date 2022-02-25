import React from 'react';
import { useState } from 'react';

function BS4RegisterForm(props) {
  const [formValue, setFormValue] = useState({
    firstName: '',
    lastName: '',
    email: '',
    gender: '',
    city: '',
    country: '',
    password: '',
  });
  const [errorValue, setErrorValue] = useState({
    firstName: '',
    lastName: '',
    email: '',
    gender: '',
    city: '',
    country: '',
    password: '',
  });

  function formHandler(e) {
    setFormValue(prevObj => {
      return {
        ...prevObj,
        [e.target.name]: e.target.value,
      };
    });
  }

  function submitHandler(e) {
    e.preventDefault();
  }

  function invalidHandler(e) {
    e.preventDefault();
    setErrorValue(prevErr => {
      return {
        ...prevErr,
        [e.target.name]: e.target.validationMessage,
      };
    });
  }
  function formChangeHandler(e) {
    e.preventDefault();
    setErrorValue(prevErr => {
      return {
        ...prevErr,
        [e.target.name]: e.target.validationMessage,
      };
    });
  }

  function classNameHandler(name) {
    return `${
      errorValue[name] !== ''
        ? 'form-control is-invalid'
        : formValue[name] !== ''
        ? 'form-control is-valid'
        : ''
    } ${'form-control'}`;
  }

  return (
    <>
      <div className="container">
        <br />
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card">
              <header className="card-header">
                <a
                  href="#/"
                  className="float-right btn btn-outline-primary mt-1"
                >
                  Log in
                </a>
                <h4 className="card-title mt-2">Sign up</h4>
              </header>
              <article className="card-body">
                <form
                  onSubmit={submitHandler}
                  onInvalid={invalidHandler}
                  onChange={formChangeHandler}
                >
                  <div className="form-row">
                    <div className="col form-group">
                      <label>First name </label>
                      <input
                        type="text"
                        className={classNameHandler('firstName')}
                        placeholder=""
                        onChange={formHandler}
                        name="firstName"
                        required
                      />
                      {errorValue.firstName !== '' && (
                        <div className="invalid-feedback">
                          {errorValue.firstName}
                        </div>
                      )}
                    </div>
                    <div className="col form-group">
                      <label>Last name</label>
                      <input
                        type="text"
                        className={classNameHandler('lastName')}
                        placeholder=" "
                        name="lastName"
                        onChange={formHandler}
                        required
                      />
                      {errorValue.lastName !== '' && (
                        <div className="invalid-feedback">
                          {errorValue.lastName}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Email address</label>
                    <input
                      type="email"
                      className={classNameHandler('email')}
                      placeholder=""
                      name="email"
                      onChange={formHandler}
                      required
                    />
                    <small className="form-text text-muted">
                      We'll never share your email with anyone else.
                    </small>
                    {errorValue.email !== '' && (
                      <div className="invalid-feedback">{errorValue.email}</div>
                    )}
                  </div>
                  <div className="form-group">
                    <label className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="gender"
                        value="Male"
                        checked={formValue.gender === 'Male'}
                        onChange={formHandler}
                      />
                      <span className="form-check-label">Male</span>
                    </label>
                    <label className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="gender"
                        value="Female"
                        checked={formValue.gender === 'Female'}
                        onChange={formHandler}
                      />
                      <span className="form-check-label"> Female</span>
                    </label>
                  </div>
                  <div className="form-row">
                    <div className="form-group col-md-6">
                      <label>City</label>
                      <input
                        type="text"
                        className={classNameHandler('city')}
                        name="city"
                        onChange={formHandler}
                        required
                      />
                      {errorValue.city !== '' && (
                        <div className="invalid-feedback">
                          {errorValue.city}
                        </div>
                      )}
                    </div>
                    <div className="form-group col-md-6">
                      <label>Country</label>
                      <select
                        id="inputState"
                        className="form-control"
                        name="country"
                        onChange={formHandler}
                      >
                        <option> Choose...</option>
                        <option>Uzbekistan</option>
                        <option>Russia</option>
                        <option>United States</option>
                        <option>India</option>
                        <option>Afganistan</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Create password</label>
                    <input
                      className="form-control"
                      type="password"
                      name="password"
                      onChange={formHandler}
                      required
                      minLength={6}
                    />
                    {errorValue.password !== '' && (
                      <div className="invalid-feedback">
                        {errorValue.password}
                      </div>
                    )}
                  </div>
                  <div className="form-group">
                    <button type="submit" className="btn btn-primary btn-block">
                      Register
                    </button>
                  </div>
                  <small className="text-muted">
                    By clicking the 'Sign Up' button, you confirm that you
                    accept our <br /> Terms of use and Privacy Policy.
                  </small>
                </form>
              </article>
              <div className="border-top card-body text-center">
                Have an account? <a href="#/">Log In</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BS4RegisterForm;
