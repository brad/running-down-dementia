import React from 'react'
import styles from './styles.css'

export default class extends React.Component {  
    
    handleClick(item){
        this.props.onTabClick(item);
    }

    render () {
         
        var items = this.props.items.map(function(item) {
            return <a onClick={this.onClick.bind(this, item)}>{item.title}</a>;
        }.bind(this))
    
  }

}