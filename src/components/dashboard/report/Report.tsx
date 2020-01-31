import * as React from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col, Table } from 'react-bootstrap';

import { getReports, createReport } from '../../../service/api/admin.service';
import { selectReport } from '../../../actions/admin.actions';
import { notify } from '../../../utils/notification';
import { messageStatus } from '../../../constants/messageStatus';
interface IReportProps {
  selectReport: (id: any) => void;
  createReport: (data: any) => void;
  getReports: () => void;
  reports: any;
  selectedReportId: number;
}

interface IReportState {
  emailOptions: any;
  selectedOption: any;
  file: any;
  startDate: any;
}

class Report extends React.Component<IReportProps, IReportState> {
  constructor(props: any) {
    super(props);
    this.state = {
      emailOptions: [],
      selectedOption: null,
      file: '',
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
    data.append('file', this.state.file);

    let newReport = {
      // Date: "Nov 1, 2019 10:56 am"
      name: name,
      // PDF: file,
      request: description,
      user: selectedOption.value
    };

    const form = new FormData();
    form.append('name', name);
    form.append('request', description);
    form.append('user', selectedOption.value);
    form.append('date', startDate);

    try {
      await this.props.createReport(form);
      await this.props.getReports();
      notify(messageStatus.SUCCESS, 'New report created!');
    } catch (e) {
      notify(messageStatus.ERROR, 'Something went wrong!');
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
    const { reports } = this.props;
    return (
      <div>
        <Container fluid>
          <Row>
            <Col>
              REPORTS
              <Table striped bordered hover variant="dark">
                <thead>
                  <tr>
                    <th>Report name</th>
                    <th>Date</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {reports.length > 0 &&
                    reports.map((report: any, index: number) => {
                      return (
                        <tr>
                          <td> {report.Name}</td>
                          <td>{report.Date} </td>
                          <td>{report.Status}</td>
                          <td>
                            <button type="button" onClick={() => this.handleEdit(report.id)}>
                              View Report
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </Table>
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
)(Report);
