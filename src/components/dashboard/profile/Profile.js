import * as React from 'react';
import { Formik, Form } from 'formik';
import { profileValidationSchema } from '../../validation/profile.validationSchema';
import TextField from '../../common/textField';

const Profile = () => {
  return (
    <React.Fragment>
      <div className="reset-block">
        {
          // true ? (
          <Formik
            initialValues={{
              password: '',
              confirmPassword: ''
            }}
            validationSchema={profileValidationSchema}
            onSubmit={(values, actions) => {
              console.log('values', values);
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
          // ) : (
          //   <React.Fragment>
          //     <TextField type="password" name="password" placeholder="*******" label="Password" disabled={true} />
          //     <div className="btn-wrapper">
          //       <button className="btn btn--sm btn--green" onClick={() => this.resetPassword()}>
          //         Change Password
          //       </button>
          //     </div>
          //   </React.Fragment>
          // )
        }
      </div>
    </React.Fragment>
  );
};

export default Profile;
