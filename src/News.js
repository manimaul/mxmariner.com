import React from "react";
import {Footer, Hero, Menu} from "./App";
import mxmariner_logo_nq8 from "./images/mxmariner_logo_nq8.png";
import njord from "./images/njord.png";
import w1 from "./images/sv_waymaker_1.jpeg";
import w2 from "./images/sv_waymaker_2.jpeg";

class News extends React.Component {
    render() {
        return (
            <div>
                <Menu/>
                <Hero titleImage={mxmariner_logo_nq8}
                      message={"Marine navigation for Android"}/>
                <div className="container standard_margin">
                    <div className="page-header">
                        <h1>News</h1>
                        <br />
                        <h4>Future of NOAA Charts and the future of MX Mariner</h4>
                        <p>
                            NOAA announced the <a href="https://nauticalcharts.noaa.gov/charts/noaa-raster-charts.html">sunset of their raster chart products </a>
                            and adoption of ENCs (Vector Electronic Navigation Charts / S57). MX Mariner has also been working on a new ENC chart display technology called Njord <i>(more below on this)</i>.
                            <br />
                            <br />
                            Consequently, I've decided to <strong>temporarily</strong> stop distributing MX Mariner to new users.
                            Existing MX Mariner users can still access the MX Mariner listing on <a href="https://play.google.com/store/apps/details?id=mx.mariner">Google Play</a>.
                            Note that you will need to be logged into your Google account that downloaded MX Mariner in order to view this.
                            <br />
                            <br />
                            Rest assured there will be another release of MX Mariner featuring support for ENC vector charts. However, there is not hard timeline.
                            MX Mariner has always been a fun hobby project of mine and it is also software that I use sailing my own boat <a href="https://www.instagram.com/sv.waymaker/">SV Waymaker</a>.
                        </p>
                        <div className="row">
                            <div className="col-md-4"><img className="img-responsive" src={w2}/></div>
                            <div className="col-md-4"><img className="img-responsive" src={w1}/></div>
                        </div>
                        <p>

                        </p>
                        <br />
                        <h4>Njord - MX Mariner generation 2 core </h4>
                        <h6>Open Source Electronic Navigation Chart Server</h6>
                        <p>
                            After exploring a few options for displaying vector ENCs I decided the best course of action was to develop an open source, web based server technology.
                            The reason for developing this is that there isn't an existing open source option that is portable in the sense of it can be used in the majority of and latest mobile and web platforms.
                            <br />
                            <br />
                            You can preview the new ENC technology at <a href="https://openenc.com/enc">https://openenc.com/enc</a>
                            <img className="img-responsive sm_image" src={njord}/>
                            <br />
                            And you can view the source code and/or participate in development at <a href="https://github.com/manimaul/njord">https://github.com/manimaul/njord</a>
                            <br />
                            <br />
                            Developing Njord is a tedious process that takes a ton of time. Besides the <a href="https://github.com/manimaul/njord/blob/master/docs/DESIGN.md">system design</a> of Njord there is also
                            a lot of research involved for both understanding and interpreting the S52 chart display rules for ENCs. Like other recreational chart plotters, Njord will be inspired by S52 display rules but not attempt to adhere to them strictly.
                            Once Njord 1.0 is released MX Mariner will adopt the technology in it's offline chart capabilities and offer chart regions to download and use completely offline.
                            One difference will be that the next MX Mariner will be available for free on Google Play and chart regions will be available for purchase for a very small fee.
                            <br />
                            <br />
                            Please stay tuned for opportunities to beta test the next MX Mariner when it becomes available.
                            <br />
                            <br />
                            William Kamp
                            <ul>
                                <li><a href="https://github.com/manimaul">Github - @Manimaul</a></li>
                                <li><a href="https://www.instagram.com/sv.waymaker/">Instagram - @SV Waymaker</a></li>
                                <li><a href="https://github.com/manimaul/mxmariner.com">MXMariner.com - Site Source</a></li>
                            </ul>
                        </p>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default News;
