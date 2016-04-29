import React from 'react'
import styles from './styles.css'
import FitnessItem from '../FitnessItem'


class FitnessList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: [] }
  }
  render() {
    var positionCount=1;  
    var positionNodes = this.props.data.map(function(fitPosition) {
      return (
          
          
          
                <FitnessItem key={fitPosition.page.id} position="01" fundraiser={fitPosition.page.name} fundraiserimage={fitPosition.page.image.small_image_url} distance={Math.round(fitPosition.distance_in_meters/1000)} fundraiserurl={fitPosition.page.url}/>
                
                
      );
    });
    return (
      <ul className={styles.individual}>
        {positionNodes}
      </ul>
    );
  }
  
}


export default FitnessList;