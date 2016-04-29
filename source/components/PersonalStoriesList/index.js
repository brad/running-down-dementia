import React from 'react'
import styles from './styles.css'
import PersonalStoryItem from '../PersonalStoriesItem'


class PersonalStoriesList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: [] }
  }
    render() {
        
        var storyImage = '';

        var storyNodes = this.props.data.map(function(storyItems) 
        
        {

            if (storyItems.image.large_image_url.indexOf("missing") > 0)
                { storyImage =  "/assets/img/10stories_nophoto.png";}
            else {storyImage = storyItems.image.large_image_url;}
            return (
                <PersonalStoryItem key={storyItems.id} story={storyItems.story} fundraiser={storyItems.name} fundraiserimage={storyImage} raised={(storyItems.amount.cents/100)} fundraiserurl={storyItems.url}></PersonalStoryItem>
                 );
         });
         
            
     return (
         <div className={styles.stories}>{storyNodes}</div>
      
    );
}
}

export default PersonalStoriesList;