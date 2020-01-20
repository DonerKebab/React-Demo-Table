import React from 'react';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.title = "Student list";
    this.state = {
      students: []
    }
  }

  componentDidMount() {
    console.log("componentDidMount");
    let apiUrl = 'https://employee.free.beeceptor.com/employee';
    fetch(apiUrl)
      .then(data => data.json())
      .then(convertedData => {
        this.setState({ students: convertedData });
        console.log('fetched data from API');
      });
  }

  renderTableRow = (row) => {
    return (<tr>
      <td>{row.id}</td>
      <td>{row.name}</td>
      <td>{row.age}</td>
      <td>{row.department}</td>
    </tr>)
  }

  filterTable = () => {
    alert("Filter function");
  }


  render() {
    console.log('call me, render function');
    return (
      <div>
        <div>
          <button onClick={this.filterTable}>Filter</button>
        </div>
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Age</th>
              <th>Department</th>
            </tr>
          </thead>
          <tbody>
            {this.state.students.map(row => { return this.renderTableRow(row) })}
          </tbody>
        </table>

      </div>

    )
  }
}

export default App;
