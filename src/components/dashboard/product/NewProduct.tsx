import * as React from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col, Table } from 'react-bootstrap';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import { Formik, Field } from 'formik';
import Select from 'react-select';

import { addProduct } from '../../../service/api/product.service';
import { notify } from '../../../utils/notification';
import { messageStatus } from '../../../constants/messageStatus';

interface INewProductProps {
  addProduct: (data: any) => void;
}

interface INewProductState {
  selectedProductOption: any;
}

class NewProduct extends React.Component<INewProductProps, INewProductState> {
  constructor(props: any) {
    super(props);
    this.state = {
      selectedProductOption: null
    };
  }

  componentDidMount() {
    // this.props.getSummary();
  }

  handleFormSubmit = async (values: any, action: any) => {
    const { selectedProductOption } = this.state;
    const { productName, productSize, productIngredients, productBenefits, productNotes } = values;
    const form = new FormData();

    form.append('product_name', productName);
    form.append('product_size', productSize);
    form.append('product_type', selectedProductOption.value);
    form.append('product_ingredients', productIngredients);
    form.append('product_benefits', productBenefits);
    form.append('product_notes', productNotes);

    try {
      await this.props.addProduct(form);
      notify(messageStatus.SUCCESS, 'New product created!');
    } catch (e) {
      notify(messageStatus.ERROR, 'Something went wrong!');
    }
  };

  handleProductTypeChange = (selectedOption: any) => {
    this.setState({ selectedProductOption: selectedOption });
  };

  render() {
    const productTypeOption = [
      { value: 'Chip', label: 'Chip' },
      { value: 'Chocolate Candy', label: 'Chocolate Candy' },
      { value: 'Cookie', label: 'Cookie' },
      { value: 'Dairy Alternative', label: 'Dairy Alternative' },
      { value: 'Drink Milk', label: 'Drink Milk' },
      { value: 'Chip', label: 'Chip' },
      { value: 'Fruit Snack', label: 'Fruit Snack' },
      { value: 'Dry Bakery Blend', label: 'Dry Bakery Blend' },
      { value: 'Meat Alternative', label: 'Meat Alternative' },
      { value: 'Noodle', label: 'Noodle' }
    ];
    return (
      <Container fluid>
        <Row>
          <Col>
            ADD NEW REPORT{' '}
            <div className="form">
              <Formik
                initialValues={{
                  productName: '',
                  productSize: null,
                  productIngredients: '',
                  productBenefits: '',
                  productNotes: ''
                }}
                // validationSchema={createAdminValidationSchema}
                onSubmit={this.handleFormSubmit}
                render={formik => (
                  <form onReset={formik.handleReset} onSubmit={formik.handleSubmit} {...formik}>
                    <Field
                      name="productName"
                      render={(data: any) => (
                        <div>
                          <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                              <InputGroup.Text id="basic-addon1">Product name</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                              //   placeholder="productName"
                              aria-label="productName"
                              aria-describedby="basic-addon1"
                              {...data.field}
                            />
                          </InputGroup>

                          {data.meta.touched && data.meta.error && (
                            <p className="form-group__error-msg validation-error">{data.meta.error}</p>
                          )}
                        </div>
                      )}
                    />
                    <Select
                      placeholder="Product Type"
                      value={this.state.selectedProductOption}
                      onChange={this.handleProductTypeChange}
                      options={productTypeOption}
                    />
                    <br />
                    <Field
                      name="productSize"
                      render={(data: any) => (
                        <div>
                          <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                              <InputGroup.Text id="basic-addon1">Product size</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                              //   placeholder="productSize"
                              aria-label="productSize"
                              aria-describedby="basic-addon1"
                              {...data.field}
                            />
                          </InputGroup>
                          {data.meta.touched && data.meta.error && (
                            <p className="form-group__error-msg validation-error">{data.meta.error}</p>
                          )}
                        </div>
                      )}
                    />
                    <Field
                      name="productIngredients"
                      render={(data: any) => (
                        <div>
                          <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                              <InputGroup.Text id="basic-addon1">Product ingredients</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                              //   placeholder="productIngredients"
                              aria-label="productIngredients"
                              aria-describedby="basic-addon1"
                              {...data.field}
                            />
                          </InputGroup>
                          {data.meta.touched && data.meta.error && (
                            <p className="form-group__error-msg validation-error">{data.meta.error}</p>
                          )}
                        </div>
                      )}
                    />
                    <Field
                      name="productBenefits"
                      render={(data: any) => (
                        <div>
                          <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                              <InputGroup.Text id="basic-addon1">Product benefits</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                              //   placeholder="productBenefits"
                              aria-label="productBenefits"
                              aria-describedby="basic-addon1"
                              {...data.field}
                            />
                          </InputGroup>
                          {data.meta.touched && data.meta.error && (
                            <p className="form-group__error-msg validation-error">{data.meta.error}</p>
                          )}
                        </div>
                      )}
                    />
                    <Field
                      name="productNotes"
                      render={(data: any) => (
                        <div>
                          <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                              <InputGroup.Text id="basic-addon1">Product notes</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                              //   placeholder="productNotes"
                              aria-label="productNotes"
                              aria-describedby="basic-addon1"
                              {...data.field}
                            />
                          </InputGroup>
                          {data.meta.touched && data.meta.error && (
                            <p className="form-group__error-msg validation-error">{data.meta.error}</p>
                          )}
                        </div>
                      )}
                    />

                    <Button type="submit" variant="dark">
                      Add new product
                    </Button>
                  </form>
                )}
              />
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = (store: any) => {
  const {
    router: { location }
  } = store;
  return {
    location
  };
};

const mapDispatchToProps = (dispatch: any) => ({
  addProduct: (data: any) => dispatch(addProduct(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewProduct);
