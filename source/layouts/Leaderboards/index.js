import React from 'react'
import styles from './styles.css'
import Leaderboards from '../../components/Leaderboards'
import FitnessBoard from '../../components/FitnessBoard'
import ParkRunBoard from '../../components/ParkRunBoard'

export default class extends React.Component {    
  
    
  tabParkRunClick()
  {
      $( "#tab-individuals" ).removeClass( "current");
      $( "#tab-team" ).removeClass( "current");
      $( "#tab-parkrun").addClass( "current");
      
      $("#tab-parkrun-content").show();
      $("#tab-individuals-content").hide();
      $("#tab-teams-content").hide();
      
  }
  
  
   tabParkRunRaisedClick()
   {
    $( "#tab-parkrun-raised" ).addClass("current");
    $( "#tab-parkrun-distance" ).removeClass("current");

    $("#parkrun-distance-lb").hide();
    $("#parkrun-raised-lb").show();
}

tabParkRunDistanceClick()
{
    $( "#tab-parkrun-distance").addClass("current");
    $( "#tab-parkrun-raised" ).removeClass("current");
    $("#parkrun-distance-lb").show();
    $("#parkrun-raised-lb").hide();
}  
  
  tabTeamClick()
  {
      $( "#tab-individuals" ).removeClass( "current");
      $( "#tab-parkrun" ).removeClass( "current");
      $( "#tab-team").addClass( "current");  
      
     $("#tab-parkrun-content").hide();
    $("#tab-individuals-content").hide();
    $("#tab-teams-content").show();

    
  }
  
  tabTeamRaisedClick()
  {
    $( "#tab-team-raised" ).addClass("current");
    $( "#tab-team-distance" ).removeClass("current");

    $("#team-distance-lb").hide();
    $("#team-raised-lb").show();
  }
  
  tabTeamDistanceClick()
  {
    $( "#tab-team-distance").addClass("current");
    $( "#tab-team-raised" ).removeClass("current");

 
    $("#team-distance-lb").show();
    $("#team-raised-lb").hide();
  }
  
    
  tabIndividualsClick()
  {
        $( "#tab-individuals" ).addClass( "current");
        $( "#tab-parkrun" ).removeClass( "current");
        $( "#tab-team").removeClass( "current");  
        
        
        $("#tab-parkrun-content").hide();
        $("#tab-individuals-content").show();
        $("#tab-teams-content").hide();
  }
 
  tabIndividualsRaisedClick()
  {
    $( "#tab-individuals-raised" ).addClass("current");
    $( "#tab-individuals-distance" ).removeClass("current");
    $("#indiv-distance-lb").hide();
    $("#indiv-raised-lb").show();
  }
  
  tabIndividualsDistanceClick()
  {
    $( "#tab-individuals-distance").addClass("current");
    $( "#tab-individuals-raised" ).removeClass("current");
    $("#indiv-distance-lb").show();
    $("#indiv-raised-lb").hide();
  }
 
 
 
 
  render() {
    return (    
        
            <div id="leaderboards" className={styles.leaderboards}>
            <div className={styles.leaderboardsContainer}>
            

            <div className="tabcontainer">

            <ul className="tabs">
                <li id="tab-parkrun" className="tab-link current" data-tab="tab-3" onClick={this.tabParkRunClick} >Parkruns</li>
                <li id="tab-team" className="tab-link" data-tab="tab-4" onClick={this.tabTeamClick}>Teams</li>
                <li id="tab-individuals"className="tab-link" data-tab="tab-5" onClick={this.tabIndividualsClick}>Individuals</li>
            </ul>
                

            <div id="tab-parkrun-content" className="tab-content current">
                <div className="tabcontainer">

                    <ul className="tabs">
                    <li id="tab-parkrun-distance" className="tab-link current" data-tab="tab-3a" onClick={this.tabParkRunDistanceClick}>Distance</li>
                    <li id="tab-parkrun-raised" className="tab-link" data-tab="tab-3b" onClick={this.tabParkRunRaisedClick}>Raised</li>
                    </ul>

                    <div id="parkrun-distance-lb" className="tab-content current"></div>
                    
                    <div id="parkrun-raised-lb" className="tab-content"><ParkRunBoard url="//network-pages.s3.amazonaws.com/UK/heroix/alzheimerresearchuk/json/parkrunleaderboardraised.jsonp" /></div>

                    <div className={styles.clearBoth}></div>
                </div>

            </div>

                
            <div id="tab-teams-content" className="tab-content">
                <div className="tabcontainer">

                <ul className="tabs">
                    <li id="tab-team-distance" className="tab-link current" data-tab="tab-4a" onClick={this.tabTeamDistanceClick}>Distance</li>
                    <li id="tab-team-raised" className="tab-link" data-tab="tab-4b" onClick={this.tabTeamRaisedClick}>Raised</li>
                </ul>

                <div id="team-distance-lb" className="tab-content current"> <FitnessBoard type="team" limit="10" campaignid="gb-4285" /></div>
                <div id="team-raised-lb" className="tab-content"> <Leaderboards type="team" limit="10" campaignid="gb-4285" /></div> 
            
                <div className={styles.clearBoth}></div>

                </div>

            </div>


            
            <div id="tab-individuals-content" className="tab-content">
                <div className="tabcontainer">

                <ul className="tabs">
                    <li id="tab-individuals-distance" className="tab-link current" data-tab="tab-5a" onClick={this.tabIndividualsDistanceClick}>Distance</li>
                    <li id="tab-individuals-raised" className="tab-link" data-tab="tab-5b" onClick={this.tabIndividualsRaisedClick}>Raised</li>
                </ul>

                <div id="indiv-distance-lb" className="tab-content current"><FitnessBoard type="pages" limit="10" campaignid="gb-4285" /></div>
                <div id="indiv-raised-lb" className="tab-content"> <Leaderboards type="individual" limit="10" campaignid="gb-4285" /></div>
                
                <div className={styles.clearBoth}></div>
                
                </div>

            </div>
            
            </div></div>  
                        

            </div>

       
    );
  }
}
