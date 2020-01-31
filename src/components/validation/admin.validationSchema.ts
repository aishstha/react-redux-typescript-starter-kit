import * as Yup from 'yup';

export function createAdminValidationSchema() {
  return Yup.object().shape({
    name: Yup.string()
      .trim()
      .min(2, 'Your name must contain atleast 2 characters.')
      .required('Please enter name.'),
    description: Yup.string()
      .required('Please enter description.')
      .trim()
      .min(4, 'Your description must contain atleast 4 characters.')
  });
}
