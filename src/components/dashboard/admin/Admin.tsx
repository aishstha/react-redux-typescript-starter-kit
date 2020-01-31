import * as React from "react";
import { connect } from "react-redux";
import Select from "react-select";
import { Formik, Field } from "formik";
import { Container, Row, Col, Table } from "react-bootstrap";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import { createAdminValidationSchema } from "../../validation/admin.validationSchema";
import DatePicker from "react-datepicker";

import { getReports, createReport } from "../../../service/api/admin.service";
import { selectReport } from "../../../actions/admin.actions";
import EditReport from "./EditReport";
import { notify } from "../../../utils/notification";
import { messageStatus } from "../../../constants/messageStatus";
interface IAdminProps {
  selectReport: (id: any) => void;
  createReport: (data: any) => void;
  getReports: () => void;
  reports: any;
  selectedReportId: number;
}

const initialValues = {
  name: "",
  description: ""
};

interface IAdminState {
  emailOptions: any;
  selectedOption: any;
  file: any;
  startDate: any;
}

class Admin extends React.Component<IAdminProps, IAdminState> {
  constructor(props: any) {
    super(props);
    this.state = {
      emailOptions: [],
      selectedOption: null,
      file: "",
      startDate: new Date()
    };
  }

  async componentDidMount() {
    await this.props.getReports();
    this.getEmail();
  }

  getEmail = () => {
    let emailOptions = this.props.reports.map((report: any) => {
      return { label: report.User, value: report.User };
    });

    this.setState({
      emailOptions
    });
  };

  handleEmailChange = (selectedOption: any) => {
    this.setState({ selectedOption });
  };

  handleFormSubmit = async (values: any, action: any) => {
    const { selectedOption, file, startDate } = this.state;
    const { name, description } = values;
    const data = new FormData();
    data.append("file", this.state.file);

    let newReport = {
      // Date: "Nov 1, 2019 10:56 am"
      name: name,
      // PDF: file,
      request: description,
      user: selectedOption.value
    };

    const form = new FormData();
    form.append("name", name);
    form.append("request", description);
    form.append("user", selectedOption.value);
    form.append("date", startDate);

    try {
      await this.props.createReport(form);
      await this.props.getReports();
      notify(messageStatus.SUCCESS, "New report created!");
    } catch (e) {
      notify(messageStatus.ERROR, "Something went wrong!");
    }
  };

  handleFileChange = (event: any) => {
    this.setState({
      file: event.target.files[0]
    });
  };

  handleEdit = (id: any) => {
    this.props.selectReport(id);
  };

  handleDateChange = (date: any) => {
    this.setState({
      startDate: date
    });
  };

  render() {
    console.log("startDate", this.state.startDate);
    const { selectedOption, emailOptions } = this.state;
    const { reports, selectedReportId } = this.props;

    return (
      <div>
        <Container fluid>
          <Row>
            <Col>
              LIST OF ALL REPORTS
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>#</th>
                    <th> Name</th>
                    <th>Request</th>
                    <th>Status</th>
                    <th>Edit</th>
                  </tr>
                </thead>
                <tbody>
                  {reports.length > 0 &&
                    reports.map((report: any, index: number) => {
                      return (
                        <tr>
                          <td> {report.Name}</td>
                          <td>{report.User}</td>
                          <td>{report.Request} </td>
                          <td>{report.Status}</td>
                          <td>
                            <button
                              type="button"
                              onClick={() => this.handleEdit(report.id)}
                            >
                              Edit
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </Table>
            </Col>
          </Row>
          <Row>
            <Col>
              ADD NEW REPORT{" "}
              <div className="form">
                <Formik
                  initialValues={initialValues}
                  validationSchema={createAdminValidationSchema}
                  onSubmit={this.handleFormSubmit}
                  render={formik => (
                    <form
                      onReset={formik.handleReset}
                      onSubmit={formik.handleSubmit}
                      {...formik}
                    >
                      <Select
                        placeholder="Who is this report for"
                        value={selectedOption}
                        onChange={this.handleEmailChange}
                        options={emailOptions}
                      />
                      <br />
                      <Field
                        name="name"
                        render={(data: any) => (
                          <div>
                            <InputGroup className="mb-3">
                              <InputGroup.Prepend>
                                <InputGroup.Text id="basic-addon1">
                                  Name
                                </InputGroup.Text>
                              </InputGroup.Prepend>
                              <FormControl
                                placeholder="Name"
                                aria-label="Name"
                                aria-describedby="basic-addon1"
                                {...data.field}
                              />
                            </InputGroup>

                            {data.meta.touched && data.meta.error && (
                              <p className="form-group__error-msg validation-error">
                                {data.meta.error}
                              </p>
                            )}
                          </div>
                        )}
                      />
                      <Field
                        name="description"
                        render={(data: any) => (
                          <div>
                            <InputGroup className="mb-3">
                              <InputGroup.Prepend>
                                <InputGroup.Text id="basic-addon1">
                                  Description
                                </InputGroup.Text>
                              </InputGroup.Prepend>
                              <FormControl
                                placeholder="Description"
                                aria-label="Description"
                                aria-describedby="basic-addon1"
                                {...data.field}
                              />
                            </InputGroup>
                            {data.meta.touched && data.meta.error && (
                              <p className="form-group__error-msg validation-error">
                                {data.meta.error}
                              </p>
                            )}
                          </div>
                        )}
                      />
                      <input
                        className="csv-input"
                        type="file"
                        name="file"
                        placeholder="Upload a file"
                        onChange={this.handleFileChange}
                      />

                      <DatePicker
                        selected={this.state.startDate}
                        onChange={this.handleDateChange}
                      />

                      <Button type="submit" variant="dark">
                        Create new project
                      </Button>
                    </form>
                  )}
                />
              </div>
            </Col>
            <Col>
              EDIT EXISTING REPORT
              <EditReport key={selectedReportId} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (store: any) => {
  const {
    adminReducer: { reports, selectedReportId }
  } = store;
  return {
    reports,
    selectedReportId
  };
};

const mapDispatchToProps = (dispatch: any) => ({
  getReports: () => dispatch(getReports()),
  createReport: (data: any) => dispatch(createReport(data)),
  selectReport: (id: any) => {
    dispatch(selectReport(id));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Admin);
