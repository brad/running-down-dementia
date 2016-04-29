import React from 'react'
import styles from './styles.css'


class ChallengeSlides extends React.Component {
  constructor(props) {
    super(props);
    this.slideIndex;
  }
  
  carousel()
  {
    var current_slide=0;
    var i;
    var x = document.getElementsByClassName("mySlides");
    
    for (i = 0; i < x.length; i++) {
      
      if (x[i].style.display=="block")
        { 
          current_slide = i;
          x[i].style.display = "none"
          break;
        }  
    }
    
    if ((current_slide+1) < x.length) 
    {
      x[current_slide+1].style.display = "block";  
    }
    else
    {
      x[0].style.display = "block";  
    }    
  }
  
  componentDidMount()
  {
   
    this.carousel();
    setInterval(this.carousel,5000)
  
  }
 
  render() {
    return (    
        
<div className="slides">          

  <div className="mySlides" style={{"display" : "block"}}>
  <div className={styles.iconsBoxContainerTwo}>
        <h3>Are you up for it?</h3>
        <h4>Inspired to do more?</h4>
        <div className={styles.iconsBoxSubContainer}>
            <div className={styles.iconsBoxTwo}><img src="/assets/img/5challenge_icon_moneyman.png" /><br /><span className={styles.iconsSubTextTwo}>Increase the distance and double the pledge for that extra challenge <br />(200km and £200)</span></div>
             <div className={styles.clearBoth}></div>
        </div>
  </div>
  </div>
                                 
  <div className="mySlides" style={{"display" : "none"}} >
 <div className={styles.iconsBoxContainerTwo}>
 <h3>Are you up for it?</h3>
  <h4>Inspired to do more?</h4>
  <div className={styles.iconsBoxSubContainer}>
 <div className={styles.iconsBoxTwo}><img src="/assets/img/5challenge_icon_moneyman.png" /><br /><span  className={styles.iconsSubTextTwo}>Increase the distance and double the pledge for that extra challenge <br />(200km and £200)</span></div>
 <div className={styles.clearBoth}></div>
 </div></div>
 </div>
 
 
 <div className="mySlides" style={{"display" : "none"}} >
  <div className={styles.iconsBoxContainerTwo}>
 <h3>Are you up for it?</h3>
  <h4>Inspired to do more?</h4>
  <div className={styles.iconsBoxSubContainer}>
 <div className={styles.iconsBoxTwo}><img src="/assets/img/5challenge_icon_manuk.png" /><br /><span  className={styles.iconsSubTextTwo}>Aim to run around Britain (960Km) and gather support for research into dementia.</span></div>
  <div className={styles.clearBoth}></div>
 </div></div>
 </div>
  
  <div className="mySlides" style={{"display" : "none"}} >
  <div className={styles.iconsBoxContainerTwo}>
 <h3>Are you up for it?</h3>
  <h4>Inspired to do more?</h4>
  <div className={styles.iconsBoxSubContainer}>
 <div className={styles.iconsBoxTwo}><img src="/assets/img/5challenge_icon_calendar.png" /><br /><span  className={styles.iconsSubTextTwo}>Commit to parkrun every Saturday for the next 5 months (100km) and ask your friends to sponsor you.</span></div>
  <div className={styles.clearBoth}></div>
 </div></div>
 </div>
   
   <div className="mySlides" style={{"display" : "none"}} >
    <div className={styles.iconsBoxContainerTwo}>
 <h3>Are you up for it?</h3>
  <h4>Inspired to do more?</h4>
  <div className={styles.iconsBoxSubContainer}>
 <div className={styles.iconsBoxTwo}><img src="/assets/img/5challenge_icon_mantrophy.png" /><br /><span  className={styles.iconsSubTextTwo}>Who can be the first to a 500km? See yourself climb the leaderboard and raise vital funds.</span></div>
 <div className={styles.clearBoth}></div>
 </div></div>
 </div>
   
   <div className="mySlides" style={{"display" : "none"}} >
        <div className={styles.iconsBoxContainerTwo}>
        <h3>Are you up for it?</h3>
        <h4>Inspired to do more?</h4>
        <div className={styles.iconsBoxSubContainer}>
        <div className={styles.iconsBoxTwo}><img src="/assets/img/5challenge_icon_world.png" /><br /><span  className={styles.iconsSubTextTwo}>All km run will be added to the overall campaign distance total.</span></div>
        <div className={styles.clearBoth}></div>
        </div></div>
   </div>     
       </div>
       
    );
  }
}

export default ChallengeSlides;