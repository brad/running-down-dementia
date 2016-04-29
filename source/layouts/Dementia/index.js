import React from 'react'
import styles from './styles.css'


export default class extends React.Component {  
    
    
    
    handleClick(i){
        
        
        $('ul.tabs li').removeClass('current');
		$('.tab-content').removeClass('current');

		$("#nav-tab-"+ i).addClass('current');
		$("#tab-"+ i).addClass('current');
	    
	
    }

    render () {
    return (
        
         
  <div id="dementia" className={styles.dementia}>
 <div className={styles.dementiaContainer}>
 
<div className={styles.tabsContainer}>

  <ul className="tabs">
    <li id="nav-tab-1" className="tab-link current" data-tab={1} onClick={this.handleClick.bind(null,1)}>Dementia is a big problem</li>
    <li id="nav-tab-2" className="tab-link" data-tab={2} onClick={this.handleClick.bind(null,2)}>Let's run it down</li>
  </ul>

  <div id="tab-1" className="tab-content current" >
    <p>Dementia is a condition that robs over 850,000 UK people of their memories and other abilities, and and their loved ones of the independent person they knew.</p>
<div className={styles.iconContainer}>
<h4 className={styles.dementiaHeading}>DEMENTIA, WE HAVE YOU OUTNUMBERED!</h4>
        <div className={styles.iconBox}>
            <div className={styles.iconBoxOneImage}><img src="http://network-pages.s3.amazonaws.com/UK/heroix/alzheimerresearchuk/parkrun/images/4dementia_icon_peoplegreen.png" />
                <br />DEMENTIA
            </div>
            <div className={styles.text}><span className={styles.iconBoxLarge}>850K</span>people affected in the UK</div>
        </div>
        <div className={styles.iconBoxTwo}>
            <div className={styles.iconBoxTwoImage}><img src="http://network-pages.s3.amazonaws.com/UK/heroix/alzheimerresearchuk/parkrun/images/4dementia_icon_peoplebrown.png" />
                <br />PARKRUN
            </div>
            <div className={styles.textTwo}><span className={styles.iconBoxLarge}>+908K</span>UK runners</div>
        </div>
        
        <p>If we challenge ourselves, we have a real opportunity to make a massive difference.</p>
        <div className="clear_both"></div>
        
        </div>
  </div>
  <div id="tab-2" className="tab-content">
<p>Money raised from Running Down Dementia will support Alzheimer’s Research UK’s ambitious risk reduction research. While evidence suggests a healthy lifestyle, particularly in midlife, can help reduce dementia risk, there is still too much we don’t know about how to reduce our chances of developing the condition. We are setting out to answer the big questions in dementia prevention, funding big research ideas that will empower all of us to take control of our own dementia risk.</p>
<div className={styles.iconsContainerTwo}>
        <div className={styles.iconBox}><div className={styles.iconBoxOneImage}><img src="http://network-pages.s3.amazonaws.com/UK/heroix/alzheimerresearchuk/parkrun/images/4dementia_icon_parkrun.png" /></div></div>
        <div className={styles.iconBox}><div className={styles.iconBoxTwoImage}><img src="http://network-pages.s3.amazonaws.com/UK/heroix/alzheimerresearchuk/parkrun/images/4dementia_icon_aruk.png" /></div></div>
        <p>That’s why the Parkrun community is partnering with Alzheimer’s Research UK in <strong>Running Down Dementia</strong> and why we are encouraging YOU to join our movement.</p><p><strong>This is your chance to be part of the vanguard that defeats dementia.</strong></p>
        <div className="clear_both"></div>
        </div>
  </div>



</div>

<div className="clear_both"></div>
</div>
</div>



    )
  }

}