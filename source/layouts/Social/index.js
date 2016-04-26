import React from 'react'
import styles from './styles.css'
import Codebird from 'codebird'
import createSocialFeed from '../../jquery.socialfeed.js'

export default class extends React.Component {

  componentWillMount () {
    if (typeof $ !== 'undefined') {
      createSocialFeed($, window, document, Codebird)
      $(document).ready(function() {
        console.log ('Social Feed Start');
        $('.social-slides').socialfeed({
          // INSTAGRAM
            instagram: {
            accounts: ['@everydayhero'],
            limit: 6,
            client_id: '5e56497e60aa405f871b87c5f9791d97',
            access_token: '1665208388.1677ed0.5d34682f050249bcb6bdb57e6e261b1f'
            },
            // FACEBOOK
            facebook: {
            accounts: ['@everydayherouk'],
            limit: 6,
            access_token: '1548275768816213|065e550f03d0cd59791b9259cd7ea1f9'
            },
            // TWITTER
            twitter: {
            accounts: ['@everydayherouk'],
            limit: 6,
            consumer_key: 'moGHDByWhIcKV79XHZakR2axW',
            consumer_secret: 'HL23xjNkzaIi14DADzIlSRm4QvFF42lzYq2Ux0UYYKuq7Fm1Hz',
            },
          // GENERAL SETTINGS
          length: 50,
          show_media: true,
          media_min_width: 100,
          touch:true,
          update_period: 360000,
          template_html: `
                <li class="social-feed-element {{? !it.moderation_passed}}hidden{{?}}" dt-create="{{=it.dt_create}}" social-feed-id="{{=it.id}}">
                <div class='content'>
                <div class="social-image">{{=it.attachment}}</div>
                    <a class="pull-left" href="{{=it.author_link}}" target="_blank">
                    <i class="fa fa-{{=it.social_network}}"></i>
                    <img class="media-object" src="{{=it.author_picture}}">
                    </a>
                    <div class="media-body">
                    <p>
                        <span class="author-title">{{=it.author_name}}</span><br/>
                        <span class="muted pull-right"> {{=it.time_ago}}</span>
                    </p>
                    <div class='text-wrapper'>
                        <p class="social-feed-text">{{=it.text}} <a href="{{=it.link}}" target="_blank" class="read-button">read more</a></p>
                    </div>
                    </div>
                
                </div>
                </li>
                `
        });
      });
      
      console.log ('Social Feed End');
    }
  }

  render () {
    return (
      <section className="social-feed">
            <div id="social" className={styles.social}>
            <div className={styles.socialContainer}>
            <div className={styles.sectionIcon}><img src="assets/img/11social_icon_twitter.png" />
                <h2 className={styles.socialHeading}>#runningdowndementia</h2></div>

            <div className={styles.socialFeedLoader}>
                <i className="fa fa-spin fa-spinner fa-pulse"></i>
                </div>
                <div className="social-feed-wrapper">
                <ul className="slides social-slides"></ul>
                </div>

            </div></div>
            </section>)
  }
}
