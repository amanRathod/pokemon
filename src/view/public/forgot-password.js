/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import ValidateEmail from '../../util/validation/email';
import FormInputEmail from '../../components/input/email';
import * as ROUTES from '../../constants/routes';
import { UserForgotPassword } from '../../service/auth';

const ForgotPassword = () => {
  const history = useHistory();
  const [state, setState] = useState({
    email: '',
    error1: ''
  });
  const isInputEmpty = state.email === '' || state.error1 !== '';

  const handleChange = (e) => {
    e.persist();
    ValidateEmail({ value: e.target.value, setState });
    setState((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
  };

  const _handleSubmit = async (e) => {
    try {
      e.preventDefault();
      await UserForgotPassword(state);
      state.email = '';
      history.push(ROUTES.LOGIN);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="row h-screen bg-gradient">
      <div className="glass-morphism">
        <form onSubmit={_handleSubmit} className="box2 card-rounded">
          <fieldset>
            <div>
              <div>
                <label htmlFor="email" className="text-blue-fifty">
                  Email
                </label>
              </div>
              <FormInputEmail value={state.email} handleChange={handleChange} />
              {state.error1 && <p className="error">{state.error1}</p>}
            </div>
          </fieldset>
          <button
            disabled={isInputEmpty}
            type="submit"
            className={`btn focus-ring ${isInputEmpty && 'opacity-70 cursor-not-allowed'}`}
            onClick={_handleSubmit}
          >
            Submit
          </button>
          <div className="text-center text-color mt-4 underline">
            <Link to={ROUTES.LOGIN}>Back to login</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
