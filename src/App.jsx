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

    getSubTitle() {
        if (this.title && this.title.length > 0) {
            if (this.reverseAccent) {
                return (<h1 className="accented">{this.subTitle}</h1>);
            } else {
                return (<h1>{this.subTitle}</h1>);
            }
        } else {
            return (<h1>&nbsp;</h1>)
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
                            <a className="navbar-brand" href="#">MADRONA</a>
                        </div>
                        <div id="navbar" className="collapse navbar-collapse">
                            <ul className="nav navbar-nav">
                                <li><Link to={"/how_we_help"} href="">HOW WE HELP</Link></li>
                                <li><Link to={"/backgound"} href="">OUR BACKGROUND</Link></li>
                                <li><Link to={"/get_in_touch"} href="">GET IN TOUCH</Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

class Body extends React.Component {
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
                <div className="container">
                    <h1>Something</h1>
                    <p>Blah blah</p>
                </div>
                <div className="dark_dark_layer">
                    <div className="container">
                        <h1>Something</h1>
                        <p>Blah blah</p>
                    </div>
                </div>
                <div className="container">
                    <h1>Something</h1>
                    <p>Blah blah</p>
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
                <Hero title={"[SUSTAINABLE]"}
                      subTitle={"SOLUTIONS"}
                      message={"We’re an information technology solutions and service management provider committed to " +
                      "providing results that last."}/>
                <Body/>
                <Footer/>
            </div>
        )
    }
}

class HowWeHelp extends React.Component {
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
                <Hero title={"[TEAM]"}
                      subTitle={"RESULTS"}
                      message={"We believe that great solutions come from great teams."}/>
                <div>TODO:</div>
                <Footer/>
            </div>
        );
    }
}

class Background extends React.Component {
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
                <Hero />
                <div>TODO:</div>
                <Footer/>
            </div>
        );
    }
}

class GetInTouch extends React.Component {
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
                <Hero title={"MAKE"}
                      subTitle={"[CONTACT]"}
                      reverseAccent={true}
                      message={"Get in touch with Madrona Technology Consultants. Don't be afraid, we're cool."}/>
                <div>TODO:</div>
                <Footer/>
            </div>
        );
    }
}

ReactDOM.render((
    <Router history={hashHistory}>
        <Route path="/" component={App}/>
        <Route path="/how_we_help" component={HowWeHelp}/>
        <Route path="/backgound" component={Background}/>
        <Route path="/get_in_touch" component={GetInTouch}/>
    </Router>
), document.getElementById('content'));