import * as React from 'react';
import { connect } from 'react-redux';
import Select from 'react-select';
import { Formik, Field } from 'formik';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import DatePicker from 'react-datepicker';

import { getReports, createReport, editReport } from '../../../service/api/admin.service';
import { createAdminValidationSchema } from '../../validation/admin.validationSchema';
import { notify } from '../../../utils/notification';
import { messageStatus } from '../../../constants/messageStatus';
// import { createAdminValidationSchema } from '../../validation/admin.validationSchema';

interface IAdminProps {
  createReport: (data: any) => void;
  getReports: () => void;
  reports: any;
  selectedReport: any;
  editReport: (data: any) => void;
}

interface IAdminState {
  emailOptions: any;
  selectedOption: any;
  file: any;
  startDate: any;
}

class EditReport extends React.Component<IAdminProps, IAdminState> {
  constructor(props: any) {
    super(props);
    this.state = {
      emailOptions: [],
      selectedOption: {
        label: this.props.selectedReport.Status,
        value: this.props.selectedReport.Status
      },
      file: '',
      startDate: this.props.selectedReport.date
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
    const { selectedOption, file } = this.state;

    const { name, description } = values;
    const data = new FormData();
    // data.append('file', this.state.file);
    data.append('name', name);
    data.append('request', description);
    data.append('status', selectedOption.label);
    data.append('date', this.state.startDate);
    let newReport = {
      // Date: "Nov 1, 2019 10:56 am"
      name: name,
      // PDF: file,
      request: description
      // User: selectedOption.value
    };

    try {
      await this.props.editReport(data);
      await this.props.getReports();
      notify(messageStatus.SUCCESS, 'Report updated!');
    } catch (e) {
      notify(messageStatus.ERROR, 'Something went wrong!');
    }
  };

  handleFileChange = (event: any) => {
    this.setState({
      file: event.target.files[0]
    });
  };

  handleStatusChange = (selectedOption: any) => {
    this.setState({ selectedOption });
  };

  handleDateChange = (date: any) => {
    this.setState({
      startDate: date
    });
  };

  render() {
    const { selectedOption, emailOptions } = this.state;
    const { reports, selectedReport } = this.props;
    const option = {
      label: selectedReport.Status,
      value: selectedReport.Status
    };

    const statusOptions = [
      { value: 'submitted', label: 'Submitted' },
      { value: 'completed', label: 'Completed' },
      { value: 'received', label: 'Received' },
      { value: 'ready', label: 'Ready' },
      { value: 'processing', label: 'Processing' }
    ];
    return (
      <div>
        <div className="form">
          <Formik
            initialValues={{
              name: selectedReport.Name,
              description: selectedReport.Request,
              id: selectedReport.id,
              user: selectedReport.User
            }}
            validationSchema={createAdminValidationSchema}
            onSubmit={this.handleFormSubmit}
            render={formik => (
              <form onReset={formik.handleReset} onSubmit={formik.handleSubmit} {...formik}>
                <Field
                  name="id"
                  render={(data: any) => (
                    <div>
                      {/* <input type="text" placeholder="id" {...data.field} disabled={true} /> */}
                      <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                          <InputGroup.Text id="basic-addon1">ID</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                          placeholder="ID"
                          aria-label="ID"
                          aria-describedby="basic-addon1"
                          {...data.field}
                          disabled={true}
                        />
                      </InputGroup>

                      {data.meta.touched && data.meta.error && (
                        <p className="form-group__error-msg validation-error">{data.meta.error}</p>
                      )}
                    </div>
                  )}
                />
                <Field
                  name="user"
                  render={(data: any) => (
                    <div>
                      {/* <input type="text" placeholder="id" {...data.field} disabled={true} /> */}
                      <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                          <InputGroup.Text id="basic-addon1">User</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                          placeholder="User"
                          aria-label="User"
                          aria-describedby="basic-addon1"
                          {...data.field}
                          disabled={true}
                        />
                      </InputGroup>

                      {data.meta.touched && data.meta.error && (
                        <p className="form-group__error-msg validation-error">{data.meta.error}</p>
                      )}
                    </div>
                  )}
                />

                <Field
                  name="name"
                  render={(data: any) => (
                    <div>
                      {/* <input type="text" placeholder="name" {...data.field} /> */}
                      <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                          <InputGroup.Text id="basic-addon1">Report name</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                          placeholder="Report name"
                          aria-label="Report name"
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
                  name="description"
                  render={(data: any) => (
                    <div>
                      <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                          <InputGroup.Text id="basic-addon1">Description</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                          placeholder="Description"
                          aria-label="Description"
                          aria-describedby="basic-addon1"
                          {...data.field}
                        />
                      </InputGroup>
                      {/* <input type="text" placeholder="description" {...data.field} /> */}
                      {data.meta.touched && data.meta.error && (
                        <p className="form-group__error-msg validation-error">{data.meta.error}</p>
                      )}
                    </div>
                  )}
                />
                <Select
                  placeholder="Who is this report for"
                  value={selectedOption}
                  onChange={this.handleStatusChange}
                  options={statusOptions}
                />
                <DatePicker selected={this.state.startDate} onChange={this.handleDateChange} />

                <input
                  className="csv-input"
                  type="file"
                  name="file"
                  placeholder="Upload a file"
                  onChange={this.handleFileChange}
                />
                <Button type="submit" variant="dark">
                  Save
                </Button>
              </form>
            )}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (store: any) => {
  const {
    adminReducer: { reports, selectedReport }
  } = store;
  return {
    reports,
    selectedReport
  };
};

const mapDispatchToProps = (dispatch: any) => ({
  getReports: () => dispatch(getReports()),
  createReport: (data: any) => dispatch(createReport(data)),
  editReport: (data: any) => dispatch(editReport(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditReport);
