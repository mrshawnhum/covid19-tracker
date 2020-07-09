import React from 'react';

class App extends React.Component {
  async componentDidMount() {
    const fetchedData = await fetchData()

    this.setState({data: fetchedData})
  }
  render() {
    const {data} = this.state;
    return (
      <div className="App">
      <Cards data={this.state.data}/>
      </div>
    );
  }
}

export default App;
