import * as React from 'react';
import { Formik, Form } from 'formik';
import { profileValidationSchema } from '../../validation/profile.validationSchema';
import TextField from '../../common/textField';
import { notify } from '../../../utils/notification';
import { messageStatus } from '../../../constants/messageStatus';
import { confirmationMessage, toastMessage } from '../../../constants/confirmationMessage';

const Profile = () => {
  return (
    <React.Fragment>
      <div className="reset-block">
        {
          <Formik
            initialValues={{
              password: '',
              confirmPassword: ''
            }}
            validationSchema={profileValidationSchema}
            onSubmit={(values, actions) => {
              notify(messageStatus.SUCCESS, toastMessage.loggedOut);
              // this.handleSubmit(values.password);
            }}
            render={({ values, touched, handleChange, handleBlur, errors, dirty, isSubmitting }) => (
              <Form>
                <TextField
                  type="password"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Password"
                  label="Password"
                  errorMessage={errors.password}
                  touchedValue={touched.password}
                />

                <TextField
                  type="password"
                  name="confirmPassword"
                  value={values.confirmPassword}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Confirm Password"
                  label="Confirm Password"
                  errorMessage={errors.confirmPassword}
                  touchedValue={touched.confirmPassword}
                />
                <div className="btn-wrapper">
                  <button className="btn btn--sm btn--green" type="submit">
                    Submit
                  </button>
                </div>
              </Form>
            )}
          />
        }
      </div>
    </React.Fragment>
  );
};

export default Profile;
