import mxmariner_logo_nq8 from './images/mxmariner_logo_nq8.png'
import sat_nq8 from './images/sat_nq8.png'
import chart_nq8 from './images/chart_nq8.png'
import all_nq8 from './images/all_nq8.png'
import ac_cred_nq8 from './images/ac_cred_nq8.png'
import ac_review_nq8 from './images/ac_review_nq8.png'
import measure_nq8 from './images/measure_nq8.png'
import track_nq8 from './images/track_nq8.png'
import track_detail_nq8 from './images/track_detail_nq8.png'
import route_nq8 from './images/route_nq8.png'
import route_options_nq8 from './images/route_options_nq8.png'
import {sectionHeroStyle, madFooterStyle, vertPaddingStyle} from './style.js';

import React from 'react';
import {Link} from 'react-router-dom'


export class Footer extends React.Component {
    render() {
        return (
            <div style={madFooterStyle}>
                <div style={vertPaddingStyle} className="dark_layer">
                    <div className="container">
                        <p>© {new Date().getFullYear()} MX Mariner</p>
                    </div>
                </div>
            </div>
        );
    }
}

export class Hero extends React.Component {
    constructor(props) {
        super(props);
        this.title = props.title;
        this.titleImage = props.titleImage;
        this.subTitle = props.subTitle;
        this.message = props.message;
        this.reverseAccent = props.reverseAccent === true;
    }

    getTitle() {
        if (this.reverseAccent) {
            return (<h1>{this.title}</h1>)
        } else {
            return (<h1 className="accented">{this.title}</h1>)
        }
    }

    getTitleImage() {
        if (this.titleImage) {
            return (<img className="centered icon" src={this.titleImage}/>)
        }
    }

    getSubTitle() {
        if (this.title && this.title.length > 0) {
            if (this.reverseAccent) {
                return (<h1 className="accented">{this.subTitle}</h1>);
            } else {
                return (<h1>{this.subTitle}</h1>);
            }
        }
    }

    getMessage() {
        if (this.message && this.message.length > 0) {
            return (<p>{this.message}</p>)
        } else {
            return (<h1>&nbsp;</h1>)
        }
    }

    render() {
        return (
            <div style={sectionHeroStyle}>
                <div className="dark_layer">
                    <div className="container hero-heading">
                        {this.getTitle()}
                        {this.getTitleImage()}
                        {this.getSubTitle()}
                        {this.getMessage()}
                    </div>
                </div>
            </div>
        );
    }
}

export class Menu extends React.Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-inverse navbar-fixed-top">
                    <div className="container">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse"
                                    data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"/>
                                <span className="icon-bar"/>
                                <span className="icon-bar"/>
                            </button>
                            <a className="navbar-brand" href="/">MX MARINER</a>
                        </div>
                        <div id="navbar" className="collapse navbar-collapse">
                            <ul className="nav navbar-nav">
                                <li><Link to={"/manual"}>MANUAL</Link></li>
                                <li><a href="https://play.google.com/store/apps/details?id=mx.mariner">DOWNLOAD</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

class Section extends React.Component {
    constructor(props) {
        super(props);
        this.title = props.title;
        this.message = props.message;
        this.imgUrl1 = props.imgUrl1;
        this.imgUrl2 = props.imgUrl2;
        this.isDark = props.isDark === true;
    }

    static image(imageUrl) {
        if (imageUrl) {
            return (
                <img className="img-responsive" src={imageUrl}/>
            )
        }
    }

    render() {
        return (
            <div className={this.isDark ? "dark_dark_layer" : ""}>
                <div className="container standard_margin">
                    <div className={"row" + (this.isDark ? " standard_margin_top_bottom" : "")}>
                        <div className="col-xs-8 col-sm-6 col-md-4">
                            <div className="page-header">
                                <h1>{this.title}</h1>
                            </div>
                            <p>{this.message}</p>
                        </div>
                        <div className="col-xs-6 col-sm-6 col-md-4">
                            {Section.image(this.imgUrl1)}
                        </div>
                        <div className="col-xs-6 col-sm-6 col-md-4">
                            {Section.image(this.imgUrl2)}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

class App extends React.Component {
    render() {
        return (
            <div>
                <Menu/>
                <Hero titleImage={mxmariner_logo_nq8}
                      message={"Marine navigation for Android"}/>

                <Section title="Simplicity"
                         message="MX Mariner is an easy to use mobile marine navigator / chart plotter."
                         imgUrl1={sat_nq8}
                         imgUrl2={chart_nq8}
                         isDark={false}/>

                <Section title="Offline Raster Charts"
                         message="Raster marine charts for United States, New Zealand, Brazil and United Kingdom."
                         imgUrl2={all_nq8}
                         isDark={true}/>

                <Section title="ActiveCaptain"
                         message="Interactive Cruising Guidebook"
                         imgUrl1={ac_cred_nq8}
                         imgUrl2={ac_review_nq8}
                         isDark={false}/>

                <Section title="Measure"
                         message="Simple measure tool with configurable units of measure."
                         imgUrl2={measure_nq8}
                         isDark={true}/>

                <div className="container standard_margin">
                    <div className="row">
                        <div className="col-xs-12 col-md-12">
                            <div className="page-header">
                                <h1>What People Are Saying</h1>
                            </div>
                            <Review reviewDate="Aug. 23, 2016"
                                    reviewName="Henri-Louis Girard"
                                    reviewTitle="Great chartplotter!"
                                    reviewContent="The clean design and general responsiveness of the interface make it a great chart-plotter app. I can't wait to see some additional features, in particular NMEA (via WiFi) integration to get GPS data from the boat (saving battery on the phone/tablet) as well as AIS targets, water speed and wind indications. Thank you for all the good work !"/>
                            <Review reviewDate="Jun. 11, 2016"
                                    reviewName="Matthew Fried"
                                    reviewTitle="Best App for Sailors "
                                    reviewContent="Florida's west coast is shallow! With this app I can explore the coast and bays with a lot more confidence. It uses your phones locator so be aware of battery use."/>
                            <Review reviewDate="Jun. 08, 2016"
                                    reviewName="Moby Richard"
                                    reviewContent="Great chart plotter app with Active Captain My go to navigation app! Would be nice to be able to search active captain database. Also noted that latest update is much fetching and rende chart tiles"/>
                            <Review reviewDate="Jun. 04, 2016"
                                    reviewName="Ben Timby"
                                    reviewContent="Use it as a backup GPS system on my Samsung S5 smart phone while commercial fishing in Sitka, Alaska USA. Works great every time I need it."/>
                        </div>
                    </div>
                </div>

                <Section title="Record"
                         message="Record and view previously laid GPS tracks."
                         imgUrl1={track_nq8}
                         imgUrl2={track_detail_nq8}
                         isDark={true}/>

                <Section title="Points and Routes"
                         message="Create, edit and navigate to points and routes."
                         imgUrl1={route_nq8}
                         imgUrl2={route_options_nq8}
                         isDark={false}/>

                <Footer/>
            </div>
        )
    }
}

class Review extends React.Component {
    constructor(props) {
        super(props);
        this.reviewDate = props.reviewDate;
        this.reviewName = props.reviewName;
        this.reviewContent = props.reviewContent;
    }

    render() {
        return (
            <div>
                <div className="panel panel-default">
                    <div className="panel-heading"><span className="label label-default">{this.reviewDate}</span>
                        &nbsp;{this.reviewName}
                    </div>
                    <div className="panel-body">
                        {this.reviewContent}
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
