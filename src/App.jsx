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

    componentDidMount() {
    }

    componentWillUnmount() {
    }

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

class App extends React.Component {
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
                <div className="container standard_margin">
                    <div className="row">
                        <div className="col-xs-6 col-md-4">
                            <img className="img-responsive" src="images/device-2016-09-24-154353.png"/>
                        </div>
                        <div className="col-xs-12 col-md-8">
                            <div className="page-header">
                                <h1>MX Mariner</h1>
                            </div>
                            <p>
                                MX Mariner is an easy to use mobile marine navigator / chart plotter featuring quilted,
                                offline marine raster charts. Raster marine charts published by NOAA (USA), LINZ
                                (New Zealand) and Brazil Navy are available to install from within MX Mariner as
                                free, downloadable regions. Once downloaded, each marine chart region is available
                                for use offline. When online, a road map or satellite image map is alternatively
                                available. UK chart regions are available for the United Kingdom, Ireland and
                                Channel Islands as in-app purchases. Each UK chart region in-app purchase gives you
                                1 year of free chart updates. UK chart regions in MX Mariner are "derived in part
                                from material obtained from the UK Hydrographic Office". Please see the <Link
                                to={"/charts"} href="">&nbsp;CHARTS&nbsp;</Link> section for more details on offline
                                marine chart regions available for download. MX Mariner is useful for marine
                                navigation featuring a simple heads up display showing speed and course. You have
                                the ability to drop waypoints, record tracks and create routes. Routes can be
                                activated and the heads up display will also show bearing and range to next waypoint
                                below speed and course. All waypoints, tracks and routes can be backed up as GPX
                                files. GPX files can be imported and exported to other programs. MX Mariner also has
                                configurable units of measure for bearings, position, speed and distance. Bearings
                                in MX Mariner can be shown as true or magnetic. Magnetic bearings use the world
                                magnetic model published National Geospatial Intelligence Agency. Speed and
                                distances can be set to Nautical, Statute or Metric. Position can be set to degrees,
                                degrees-minutes or degrees-minutes-seconds. Navigators can also choose to use their
                                device internal magnetometer or GPS course to orientate ship on the marine chart.
                                Optionally, heading and course predictor lines can also be shown on the marine
                                chart. MX Mariner also offers configurable back-light levels suitable for daylight
                                to off-shore night conditions.
                            </p>
                        </div>
                    </div>

                </div>

                <div className="dark_dark_layer">
                    <div className="container standard_margin">
                        <div className="row standard_margin_top_bottom">
                            <div className="col-xs-6 col-md-4">
                                <img className="img-responsive" src="images/device-2016-09-24-154353.png"/>
                            </div>
                            <div className="col-xs-6 col-md-4">
                                <img className="img-responsive" src="images/device-2016-09-24-154353.png"/>
                            </div>
                            <div className="col-xs-6 col-md-4">
                                <img className="img-responsive" src="images/device-2016-09-24-154353.png"/>
                            </div>
                        </div>
                    </div>
                </div>

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