import * as Yup from 'yup';

export function loginValidationSchema() {
  return Yup.object().shape({
    // This codes are kept for refrence for better understanding of validaiton schema
    // email: Yup.string()
    //   .email('Please enter valid email address.')
    //   .trim()
    //   .required('Please enter valid email address.')
    //   .matches(
    //     /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    //     `You can't use numbers or special symbols.`
    //   ),
    // url: Yup.string()
    //   .trim()
    //   .required('Please enter account url.')
    //   .matches(/^[A-Za-z.\s_-]+$/, `You can't use numbers or special symbols.`),
    password: Yup.string()
      .trim()
      .min(4, 'Your password must contain atleast 4 characters.')
      .required('Please enter password.'),
    username: Yup.string().required('Please enter user name.')
  });
}
