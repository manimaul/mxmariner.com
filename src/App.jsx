'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Link, hashHistory} from 'react-router'

class Footer extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    render() {
        return (
            <div className="mad_footer">
                <div className="dark_layer">
                    <div className="container">
                        <p>© {new Date().getFullYear()} MX Mariner</p>
                    </div>
                </div>
            </div>
        );
    }
}

class Hero extends React.Component {
    constructor(props) {
        super(props);
        this.title = props.title;
        this.titleImage = props.titleImage;
        this.subTitle = props.subTitle;
        this.message = props.message;
        this.reverseAccent = props.reverseAccent == true;
    }

    componentDidMount() {
    }

    componentWillUnmount() {
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
            <div className="section-hero">
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

class Menu extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {}

    componentWillUnmount() {}

    render() {
        return (
            <div>
                <nav className="navbar navbar-inverse navbar-fixed-top">
                    <div className="container">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse"
                                    data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <a className="navbar-brand" href="#">MX MARINER</a>
                        </div>
                        <div id="navbar" className="collapse navbar-collapse">
                            <ul className="nav navbar-nav">
                                <li><Link to={"/manual"} href="">MANUAL</Link></li>
                                <li><Link to={"/charts"} href="">CHARTS</Link></li>
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
        this.isDark = props.isDark == true;
    }

    componentDidMount() {}

    componentWillUnmount() {}

    render() {
        return (
            <div className={this.isDark ? "dark_dark_layer" : ""}>
                <div className="container standard_margin">
                    <div className={"row" + (this.isDark ? " standard_margin_top_bottom" : "")}>
                        <div className="col-xs-6 col-md-4">
                            <div className="page-header">
                                <h1>{this.title}</h1>
                            </div>
                            <p>{this.message}</p>
                        </div>
                        <div className="col-xs-6 col-md-4">
                            <img className="img-responsive" src={this.imgUrl1}/>
                        </div>
                        <div className="col-xs-6 col-md-4">
                            <img className="img-responsive" src={this.imgUrl2}/>
                        </div>
                    </div>
                </div>
            </div>
            );
    }
}

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {}

    componentWillUnmount() {}

    render() {
        return (
            <div>
                <Menu/>
                <Hero titleImage={"images/mxmariner_logo.png"}
                      message={"Marine navigation for Android"}/>

                <Section title="Simplicity"
                    message="MX Mariner is an easy to use mobile marine navigator / chart plotter."
                    imgUrl1="images/device-2016-09-24-154353.png"
                    imgUrl2="images/device-2016-09-24-154353.png"
                    isDark={false}/>

                <Section title="Offline Raster Charts"
                         message="Raster marine charts for United States, New Zealand, Brazil and United Kingdom."
                         imgUrl1="images/device-2016-09-24-154353.png"
                         imgUrl2="images/device-2016-09-24-154353.png"
                         isDark={true}/>

                <Section title="ActiveCaptain"
                         message="Interactive Cruising Guidebook"
                         imgUrl1="images/device-2016-09-24-154353.png"
                         imgUrl2="images/device-2016-09-24-154353.png"
                         isDark={false}/>

                <Section title="Measure"
                         message="Simple measure tool with configurable units of measure."
                         imgUrl1="images/device-2016-09-24-154353.png"
                         imgUrl2="images/device-2016-09-24-154353.png"
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
                         imgUrl1="images/device-2016-09-24-154353.png"
                         imgUrl2="images/device-2016-09-24-154353.png"
                         isDark={true}/>

                <Section title="Points and Routes"
                         message="Create, edit and navigate to points and routes."
                         imgUrl1="images/device-2016-09-24-154353.png"
                         imgUrl2="images/device-2016-09-24-154353.png"
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

    componentDidMount() {
    }

    componentWillUnmount() {
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

class Manual extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    makeItem(name, index) {
        var label = "(" + (index + 1) + ") " + name;
        return (
            <option selected value={index} label={label}>{name}</option>
        );
    }

    render() {
        var listItems = [
            "General Information",
            "Installing Chart Regions",
            "Uninstalling Chart Regions",
            "Updating Chart Regions",
            "Configuring Storage",
            "Display Settings and Features:",
            "Sensor Options - Ship & Map Presentation",
            "Cart Panning, Zooming, Measuring",
            "GPS follow",
            "Measure Tool",
            "Units of measure",
            "Adding Waypoints",
            "Working with Waypoints",
            "Recording A Track",
            "Working with Tracks",
            "Adding Routes",
            "Working with Routes",
            "Route Edit Points Mode",
            "Marks Manager"].map(this.makeItem);
        return (
            <div>
                <Menu/>
                <Hero titleImage={"images/mxmariner_logo.png"}
                      message={"Marine navigation for Android"}/>
                <div className="container standard_margin">
                    <div className="form-group">
                        <label>Section:</label>
                        <select className="form-control">
                            {listItems}
                        </select>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

class Charts extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    render() {
        return (
            <div>
                <Menu/>
                <Hero titleImage={"images/mxmariner_logo.png"}
                      message={"Marine navigation for Android"}/>
                <div>TODO:</div>
                <Footer/>
            </div>
        );
    }
}

ReactDOM.render((
    <Router history={hashHistory}>
        <Route path="/" component={App}/>
        <Route path="/manual" component={Manual}/>
        <Route path="/charts" component={Charts}/>
    </Router>
), document.getElementById('content'));