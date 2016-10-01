'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Link, hashHistory} from 'react-router'
import LazyLoad from 'react-lazyload';

class ManualState {
    constructor() {
        this.currentItem = 0;
        this.listItems = [
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
            "Marks Manager"]
    }

    getItems() {
        return this.listItems;
    }

    getCurrentItem() {
        return this.currentItem;
    }

    setCurrentItem(value) {
        this.currentItem = parseInt(value);
    }

    getCurrentPage() {
        switch (this.currentItem) {
            case 0: // General Information
                return (
                    <div>
                        <h3><strong>{this.listItems[this.currentItem]}</strong></h3>
                        <p><img src="img/collage.png"/></p>
                        <li>MX Mariner is a basic chart plotting program for Android.</li>
                        <li>MX Mariner has 3 map modes: Raster Charts, Roadmap, and
                            Satellite
                        </li>
                        <li>Raster Chart mode works 100% offline (after initial one time
                            chart region download)
                        </li>
                        <li>Roadmap mode requires an internet / data connection</li>
                        <li>Satellite mode requires an internet / data connection</li>
                        <li>The screen will stay on when you are in the main chart/map view with GPS follow enabled and
                            will not power off automatically.
                        </li>
                    </div>
                );
            case 1: // Installing Chart Regions
                return (
                    <div>
                        <h3><strong>{this.listItems[this.currentItem]}</strong></h3>
                        <img src="img/coverage2.png"/>
                        <li>Menu Button --&gt; Settings --&gt; Install Charts</li>
                        <img className="shot" src="img/noaa.png"/>&nbsp;&nbsp;&nbsp;<img className="shot"
                                                                                         src="img/ukho.png"/><br />
                        <br />
                        <li>LINZ and Brazilian Navy raster charts are divided into 2
                            regions.
                        </li>
                        <li>NOAA USA raster charts are divided into 20 regions</li>
                        <li>UK raster charts are divided into 4 regions.
                            <br />
                            **UK region note: Each UK region is available as an in-app
                            purchase. Each region can be downloaded and/or updated for 1year
                            after purchase.
                        </li>
                        <li>Regions range in size from 80 to 500MB</li>
                        <li>The regions will be stored in the &lt;storage&gt;/mxmariner directory on your device. On
                            some android devices, this directory is an SD Card while others it is built in storage. You
                            will need adequate storage space to download the chart regions you want to use.
                        </li>
                        <li>Simply tap on the region you would like to download to your device.</li>
                        <img className="shot" src="img/dl_region.png"/>
                        <br />
                        <br />
                        <li>It's recommend to download regions when connected to wifi or 4g.</li>
                        <li>Pushing the back button during the download process will cancel the download.</li>
                        <li>The download can be resumed at a later time if you cancel.</li>
                        <li>Pushing the home button on your device allow you to do other task while the download
                            continues.
                        </li>
                        <img className="shot" src="img/dl_progress.png"/>
                    </div>
                );
            case 2: // Uninstalling Chart Regions
                return (
                    <div>
                        <h3><strong>{this.listItems[this.currentItem]}</strong></h3>
                        <li>Menu Button --&gt; Settings --&gt; Install Charts</li>
                        <li>Long press on an installed or partially downloaded region and choose "OK" to delete it.</li>
                        <li>Deleted regions are completely removed from device SD Card.</li>
                        <img className="shot" src="img/del_region.png"/>
                    </div>
                );
            case 3: // Updating Chart Regions
                return (
                    <div>
                        <h3><strong>{this.listItems[this.currentItem]}</strong></h3>
                        <li>Menu Button --&gt; Settings --&gt; Install Charts</li>
                        <li>When an updated region file is available for an an installed region, the region will be
                            labeled with an &quot;update available&quot; tag in yellow.
                        </li>
                        <li>Tap on the region in the menu to download the update.</li>
                    </div>
                );
            case 4: // Configuring Storage
                return (
                    <div>
                        <h3><strong>{this.listItems[this.currentItem]}</strong></h3>
                        <li>Menu--&gt; Settings --&gt; Storage</li>
                        <li>This will configure which storage device (ex internal or external) MX Mariner stores data
                            to.
                        </li>
                        <li>Selecting a different storage device here will also move existing MX Mariner chart and GPX
                            data to the new specified location.
                        </li>
                    </div>
                );
            case 5: // Display Settings and Features
                return (
                    <div>
                        <h3><strong>{this.listItems[this.currentItem]}</strong></h3>
                        <li>The chart/map display settings can be quickly changed by pressing Menu --&gt; Display</li>
                        <li>The Map Type (Raster Charts, Roadmap, Satellite) can be quickly changed using the Map Type
                            drop down.
                        </li>
                        <img className="shot" src="img/display_maptype.png"/>
                    </div>
                );
        }
    }
}

var manualState = new ManualState();

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

class Section extends React.Component {
    constructor(props) {
        super(props);
        this.title = props.title;
        this.message = props.message;
        this.imgUrl1 = props.imgUrl1;
        this.imgUrl2 = props.imgUrl2;
        this.isDark = props.isDark == true;
    }

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    image(imageUrl) {
        if (imageUrl) {
            return (
                <LazyLoad height={"100%"}>
                    <img className="img-responsive" src={imageUrl}/>
                </LazyLoad>
            )
        }
    }

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
                            {this.image(this.imgUrl1)}
                        </div>
                        <div className="col-xs-6 col-md-4">
                            {this.image(this.imgUrl2)}
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

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    render() {
        return (
            <div>
                <Menu/>
                <Hero titleImage={"images/mxmariner_logo-nq8.png"}
                      message={"Marine navigation for Android"}/>

                <Section title="Simplicity"
                         message="MX Mariner is an easy to use mobile marine navigator / chart plotter."
                         imgUrl1="images/sat-nq8.png"
                         imgUrl2="images/chart-nq8.png"
                         isDark={false}/>

                <Section title="Offline Raster Charts"
                         message="Raster marine charts for United States, New Zealand, Brazil and United Kingdom."
                         imgUrl2="images/all-nq8.png"
                         isDark={true}/>

                <Section title="ActiveCaptain"
                         message="Interactive Cruising Guidebook"
                         imgUrl1="images/ac_cred-nq8.png"
                         imgUrl2="images/ac_review-nq8.png"
                         isDark={false}/>

                <Section title="Measure"
                         message="Simple measure tool with configurable units of measure."
                         imgUrl2="images/measure-nq8.png"
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
                         imgUrl1="images/track-nq8.png"
                         imgUrl2="images/track_detail-nq8.png"
                         isDark={true}/>

                <Section title="Points and Routes"
                         message="Create, edit and navigate to points and routes."
                         imgUrl1="images/route-nq8.png"
                         imgUrl2="images/route_options-nq8.png"
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
        if (this.props.params) {
            manualState.setCurrentItem(this.props.params.sectionId);
        }
    }

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    makeItem(name, index) {
        var label = "(" + (index + 1) + ") " + name;
        return (
            <option key={index} value={index} label={label}>{name}</option>
        );
    }

    handleChange(event) {
        this.handleClick(event.target.value);
    };

    handleClick(index) {
        manualState.setCurrentItem(index);
        hashHistory.push("/manual/" + manualState.getCurrentItem());
    }

    handleClickNext() {
        this.handleClick(manualState.getCurrentItem() + 1)
    }

    handleClickPrevious() {
        this.handleClick(manualState.getCurrentItem() - 1)
    }

    getPreviousLink() {
        if (manualState.getCurrentItem() == 0) {
            return (
                <li className="previous disabled"><a><span aria-hidden="true">&larr;</span> Previous</a></li>
            )
        } else {
            return (
                <li className="previous"><a onClick={this.handleClickPrevious.bind(this)}><span aria-hidden="true">&larr;</span> Previous</a></li>
            )
        }
    }

    getNextLink() {
        if (manualState.getCurrentItem() < (manualState.getItems().length - 1)) {
            return (
                <li className="next"><a onClick={this.handleClickNext.bind(this)}>Next <span aria-hidden="true">&rarr;</span></a></li>
            )
        } else {
            return (
                <li className="next disabled"><a>Next <span aria-hidden="true">&rarr;</span></a></li>
            )
        }
    }

    render() {
        return (
            <div>
                <Menu/>
                <Hero titleImage={"images/mxmariner_logo-nq8.png"}
                      message={"Marine navigation for Android"}/>
                <div className="container standard_margin">
                    <div className="form-group">
                        <label>Section:</label>
                        <select className="form-control" value={manualState.getCurrentItem()}
                                onChange={this.handleChange.bind(this)}>
                            {manualState.getItems().map(this.makeItem)}
                        </select>
                    </div>

                    <div className="jumbotron">
                        {manualState.getCurrentPage()}
                    </div>
                    <nav aria-label="Page">
                        <ul className="pager">
                            {this.getPreviousLink()}
                            {this.getNextLink()}
                        </ul>
                    </nav>
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
                <Hero titleImage={"images/mxmariner_logo-nq8.png"}
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
        <Route path="/manual" component={Manual}>
            <Route path="/manual/:sectionId" component={Manual}/>
        </Route>
        <Route path="/charts" component={Charts}/>
    </Router>
), document.getElementById('content'));