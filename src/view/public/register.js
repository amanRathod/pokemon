/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import FormInputEmail from '../../components/input/email';
import FormInputPassword from '../../components/input/password';
import FormInputName from '../../components/input/name';
import ValidateEmail from '../../util/validation/email';
import ValidatePassword from '../../util/validation/password';
import ValidateConfirmPassword from '../../util/validation/confirm-password';
import { UserRegister } from '../../service/auth';
import * as ROUTES from '../../constants/routes';

export default function RegisterView() {
  const history = useHistory();
  const [state, setState] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    error1: '',
    error2: '',
    error3: ''
  });
  const isInputEmpty =
    state.fullName === '' ||
    state.email === '' ||
    state.password === '' ||
    state.confirmPassword === '' ||
    state.error1 !== '' ||
    state.error2 !== '' ||
    state.error3 !== '';

  const handleChange = (e) => {
    e.persist();
    switch (e.target.name) {
      case 'email':
        ValidateEmail({ value: e.target.value, setState });
        break;
      case 'password':
        ValidatePassword({ value: e.target.value, setState });
        break;
      case 'confirmPassword':
        ValidateConfirmPassword({ value: e.target.value, setState, password: state.password });
        break;
      default:
        break;
    }
    setState((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
  };

  const _handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await UserRegister(state);
      history.push(ROUTES.LOGIN);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="row h-screen bg-gradient">
      <div className="glass-morphism">
        <form onSubmit={_handleSubmit} className="box2">
          <fieldset>
            <div className="mb-3">
              <div>
                <label htmlFor="fullName" className="text-blue-fifty">
                  Full Name
                </label>
              </div>
              <FormInputName value={state.fullName} handleChange={handleChange} name="fullName" />
            </div>
            <div className="mb-3">
              <div>
                <label htmlFor="email" className="text-blue-fifty">
                  Email
                </label>
              </div>
              <FormInputEmail value={state.email} handleChange={handleChange} />
              {state.error1 && <p className="error -pt-6">{state.error1}</p>}
            </div>
            <div className="mb-3">
              <div>
                <label htmlFor="password" className="text-blue-fifty">
                  Password
                </label>
              </div>
              <FormInputPassword value={state.password} handleChange={handleChange} />
              {state.error2 && <p className="error">{state.error2}</p>}
            </div>
            <div className="mb-3">
              <div>
                <label htmlFor="confirmPassword" className="text-blue-fifty">
                  Confirm Password
                </label>
              </div>
              <input
                type="password"
                name="confirmPassword"
                value={state.confirmPassword}
                className="input-control1"
                onChange={handleChange}
                required
              />
              {state.error3 && <p className="error">{state.error3}</p>}
            </div>
          </fieldset>
          <button
            disabled={isInputEmpty}
            type="submit"
            className={`btn focus-ring ${isInputEmpty && 'opacity-70  cursor-not-allowed'}`}
          >
            Register
          </button>
          <p className="break-normal text-blue-fifty mt-4">
            Already have an account?{' '}
            <Link to={ROUTES.LOGIN} className="text-color ">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
