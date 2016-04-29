import React from 'react'
import styles from './styles.css'
import ParkRunList from '../ParkRunList'


class ParkRunBoards extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: [] }
  }  
  
 componentDidMount()
 {

    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({data: data.parkrun});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  }
  render() {
    return (
        <ParkRunList data={this.state.data} />
    );
  }
  
  }


export default ParkRunBoards;