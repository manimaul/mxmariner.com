'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Link, hashHistory} from 'react-router'
import LazyLoad from 'react-lazyload';

class ManualState {
    constructor() {
        this.listItems = [
            "General Information",
            "Installing Chart Regions",
            "Uninstalling Chart Regions",
            "Updating Chart Regions",
            "Configuring Storage",
            "Map Display Type:",
            "Sensor Options - Ship & Map Presentation",
            "Chart Panning, Zooming, Measuring",
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

    // getCurrentItem() {
    //     return this.currentItem;
    // }

    // setCurrentItem(value) {
    //     if (value != null) {
    //         this.currentItem = parseInt(value);
    //     }
    // }

    getMenuButtonCopy() {
        return (
            <div>
                <div className="note">Note: The Menu Button is the 3 horizontal lines on the top, left part
                    of the screen when viewing the map / chart.
                </div>
                <div className="row standard_margin_bottom">
                    <div className="col-xs-3 col-md-2">
                        <LazyLoad height={"100%"}>
                            <img className="img-responsive" src="images/menu_clip-nq8.png"/>
                        </LazyLoad>
                    </div>
                </div>
            </div>
        );
    }

    getCurrentPage(currentItem) {
        switch (currentItem) {
            case 0: // General Information
                return (
                    <div className="container">
                        <h3><strong>{this.listItems[currentItem]}</strong></h3>
                        <h5>MX Mariner is a basic chart plotting program for Android.</h5>
                        <div className="row standard_margin_top_bottom">
                            <ul>
                                <li>There are 3 map modes: Offline Raster Charts, Road map, and Satellite</li>
                                <li>Raster Chart mode works 100% offline (after initial one time chart region
                                    download)
                                </li>
                                <li>Road map mode requires an internet / data connection</li>
                                <li>Satellite mode requires an internet / data connection</li>
                                <li>ActiveCaptain interactive cruising guidebook</li>
                                <li>Create and navigate routes and points</li>
                                <li>Create and view tracks</li>
                                <li>Measure tool</li>
                                <li>Configurable units of measure and "World Magnetic Model"</li>
                            </ul>
                        </div>
                        <div className="row standard_margin_bottom">
                            <div className="col-xs-6 col-md-4">
                                <LazyLoad height={"100%"}>
                                    <img className="img-responsive" src="images/all-nq8.png"/>
                                </LazyLoad>
                            </div>
                        </div>
                    </div>
                );
            case 1: // Installing Chart Regions
                return (
                    <div className="container">
                        <h3><strong>{this.listItems[currentItem]}</strong></h3>
                        <ul>
                            <li>Menu Button --&gt; Settings --&gt; Install Charts</li>
                            {this.getMenuButtonCopy()}
                            <div className="row standard_margin_top_bottom">
                                <div className="col-xs-6 col-md-4">
                                    <LazyLoad height={"100%"}>
                                        <img className="img-responsive" src="images/chart_list-nq8.png"/>
                                    </LazyLoad>
                                </div>
                            </div>
                            <li>LINZ and Brazilian Navy raster charts are divided into 2 regions.
                            </li>
                            <li>NOAA USA raster charts are divided into 20 regions</li>
                            <li>UK raster charts are divided into 4 regions.</li>
                            <div className="note">Note: Each UK region is available as an in-app purchase. Each region
                                can be downloaded and/or updated for 1year after purchase.
                            </div>
                            <li>Regions range in size from 80 to 500MB</li>
                            <li>The regions will be stored in the &lt;storage&gt;/mxmariner directory on your device. On
                                some android devices, this directory is an SD Card while others it is built in storage.
                                You will need adequate storage space to download the chart regions you want to use.
                            </li>
                            <li>Simply tap on the region you would like to download to your device.</li>
                            <li>It's recommend to download regions when connected to wifi or 4g.</li>
                            <li>Pushing the back button during the download process will cancel the download.</li>
                            <li>The download can be resumed at a later time if you cancel.</li>
                            <li>Your download will continue if the screen is turned off or if you start other apps.
                            </li>
                            <div className="row standard_margin_top_bottom">
                                <div className="col-xs-6 col-md-4">
                                    <LazyLoad height={"100%"}>
                                        <img className="img-responsive" src="images/chart_download-nq8.png"/>
                                    </LazyLoad>
                                </div>
                            </div>
                        </ul>
                    </div>
                );
            case 2: // Uninstalling Chart Regions
                return (
                    <div className="container">
                        <h3><strong>{this.listItems[currentItem]}</strong></h3>
                        <li>Menu Button --&gt; Settings --&gt; Install Charts</li>
                        {this.getMenuButtonCopy()}
                        <li>Long press on an installed or partially downloaded region and choose "OK" to delete it.</li>
                        <li>Deleted regions are completely removed from the device.</li>
                        <div className="row standard_margin_top_bottom">
                            <div className="col-xs-6 col-md-4">
                                <LazyLoad height={"100%"}>
                                    <img className="img-responsive" src="images/chart_delete-nq8.png"/>
                                </LazyLoad>
                            </div>
                        </div>
                    </div>
                );
            case 3: // Updating Chart Regions
                return (
                    <div className="container">
                        <h3><strong>{this.listItems[currentItem]}</strong></h3>
                        <li>Menu Button --&gt; Settings --&gt; Install Charts</li>
                        {this.getMenuButtonCopy()}
                        <li>When an updated region file is available for an an installed region, the region will be
                            labeled with an &quot;update available&quot; tag in yellow.
                        </li>
                        <li>Tap on the region in the menu to download the update.</li>
                        <div className="row standard_margin_top_bottom">
                            <div className="col-xs-6 col-md-4">
                                <LazyLoad height={"100%"}>
                                    <img className="img-responsive" src="images/chart_list-nq8.png"/>
                                </LazyLoad>
                            </div>
                        </div>
                        <div className="row standard_margin_top_bottom">
                            <div className="col-xs-6 col-md-4">
                                <LazyLoad height={"100%"}>
                                    <img className="img-responsive" src="images/chart_download-nq8.png"/>
                                </LazyLoad>
                            </div>
                        </div>
                    </div>
                );
            case 4: // Configuring Storage
                return (
                    <div className="container">
                        <h3><strong>{this.listItems[currentItem]}</strong></h3>
                        <li>Menu Button--&gt; Settings --&gt; Storage</li>
                        {this.getMenuButtonCopy()}
                        <li>This will configure which storage device (e.g. an external SD Card) MX Mariner stores data
                            to.
                        </li>
                        <li>Selecting a different storage device here will also move existing MX Mariner chart and GPX
                            data to the new specified location.
                        </li>
                    </div>
                );
            case 5: // Map Display Type
                return (
                    <div className="container">
                        <h3><strong>{this.listItems[currentItem]}</strong></h3>
                        <li>The chart/map display settings can be quickly changed by pressing Menu Button and the map
                            type (Raster Charts, Road map, Satellite) can be quickly changed using the map yype drop
                            down.
                        </li>
                        <div className="row standard_margin_top_bottom">
                            <div className="col-xs-6 col-md-4">
                                <LazyLoad height={"100%"}>
                                    <img className="img-responsive" src="images/drawer_map_type-nq8.png"/>
                                </LazyLoad>
                            </div>
                        </div>
                        {this.getMenuButtonCopy()}
                    </div>
                );
            case 6: // Sensor Options - Ship & Map Presentation
                return (
                    <div className="container">
                        <h3><strong>{this.listItems[currentItem]}</strong></h3>
                        <li>Menu Button--&gt; Settings --&gt; Sensors</li>
                        {this.getMenuButtonCopy()}
                        <li>GPS Course Predictor - When checked a red predictor line extends out from ship on chart in
                            the direction of the current course over ground. The line length is relative to speed over
                            ground.
                        </li>
                        <li>Compass Heading Predictor - When checked an orange predictor line extends out from ship on
                            the chart relative to your current azimuth.
                        </li>
                        <li>Orientation Mode - This setting gives you two options, course or heading. The selected
                            option will be the direction the ship will face on the chart and the direction the chart
                            will be rotated when in head/course up mode.
                        </li>
                        <li>GPS Power Save Mode - When checked, MX Mariner will stop listening to location updates from
                            your GPS 30 seconds after leaving the view of the chart. This saves battery consumption at a
                            trade off of requiring a longer time to establish a position lock when back in chart view.
                        </li>
                        <li>Bluetooth GPS - Check this if you are using a bluetooth gps or other "mock location"
                            provider.
                        </li>
                        <div className="row standard_margin_top_bottom">
                            <div className="col-xs-6 col-md-4">
                                <LazyLoad height={"100%"}>
                                    <img className="img-responsive" src="images/sensors-nq8.png"/>
                                </LazyLoad>
                            </div>
                        </div>
                    </div>
                );
            case 7:    // Chart Panning, Zooming, Measuring
                return (
                    <div className="container">
                        <h3><strong>{this.listItems[currentItem]}</strong></h3>
                        <li>Zoom chart by using zoom buttons
                            <img className="btn_img" src="images/zoomin.png"/>
                            &nbsp;
                            <img className="btn_img" src="images/zoomout.png"/>
                            or pinch to zoom with fingers
                        </li>
                        <li>Zoom to location by double tapping on chart</li>
                        <li>Pan chart by dragging chart with fingers</li>
                        <li>When gps position is available a bearing, distance and position measure tool will appear
                            automatically when touching and/or panning chart.
                        </li>
                        <li>Zoom buttons can be turned on/off in: Menu Button --&gt; Settings --&gt; View --&gt; Zoom
                            Buttons
                        </li>
                        {this.getMenuButtonCopy()}
                    </div>
                );
            case 8:    // GPS follow
                return (
                    <div className="container">
                        <h3><strong>{this.listItems[currentItem]}</strong></h3>
                        <ul>
                            <li>Enable location on your device Settings --&gt; Location &amp; Security --&gt; Use GPS
                                satellites (checked)
                            </li>
                            <li>Enable gps follow (north up) by pushing the follow button.
                                <img className="btn_img" src="images/followde.png"/></li>
                            <li>The follow button will turn red with the ship angled indicating follow mode is north up.
                                <img className="btn_img" src="images/follownu.png"/></li>
                            <li>Enable gps follow (head/course up) by pushing the follow button
                                a second time.
                            </li>
                            <li>The follow button ship will angle straight up indicating follow
                                mode is course or head up.
                                <img className="btn_img" src="images/followhu.png"/></li>
                            <li>Disengage gps follow by panning the chart.</li>
                            <li>Follow button will switch back to white when follow is disengaged.
                                <img className="btn_img" src="images/followde.png"/>
                            </li>
                            <li>When gps has speed and course, position is indicated by red ship
                                <img className="btn_img" src="images/ship.png"/> oriented according to present course.
                            </li>
                            <ul>
                                <li>Ship orientation will orientate towards heading if "Heading" is selected in the
                                    "Orientation Mode" under the sensor options.
                                </li>
                            </ul>
                            <li>When gps has no speed and course, position is indicated by red circle.
                                <img src="images/circle.png"/></li>
                            <li>When gps has not received a fix for 3 seconds position indicator becomes greyed
                                <img src="images/shipgrey.png"/>
                                <img src="images/circlegrey.png"/>
                            </li>
                            <li>When gps accuracy is low, approximate error is indicated in
                                chart view by semi-transparent grey circle around approximate
                                position.
                            </li>
                        </ul>
                    </div>
                );
            case 9:    // Measure Tool
                return (
                    <div className="container">
                        <h3><strong>{this.listItems[currentItem]}</strong></h3>
                        <li>Push the extra tools button <img className="btn_img" src="images/tools.png"/> to show the
                            extra tool buttons.
                        </li>
                        <li>Pan/Zoom the chart to where you would like to start your
                            measurement.
                        </li>
                        <li>Next, push the measure button.

                            <img className="btn_img" src="images/measure.png"/>
                        </li>
                        <li>Pan/Zoom the chart to where you would like to measure to.</li>
                        <div className="row standard_margin_top_bottom">
                            <div className="col-xs-6 col-md-4">
                                <LazyLoad height={"100%"}>
                                    <img className="img-responsive" src="images/measure-nq8.png"/>
                                </LazyLoad>
                            </div>
                        </div>
                        <li>Finish measuring by pushing the return button
                            <img className="btn_img" src="images/done.png"/></li>
                    </div>
                );
            case 10:    // Units of measure
                return (
                    <div className="container">
                        <h3><strong>{this.listItems[currentItem]}</strong></h3>
                        <li>Menu Button --&gt; Settings --&gt; Units</li>
                        {this.getMenuButtonCopy()}
                        <div className="row standard_margin_top_bottom">
                            <div className="col-xs-6 col-md-4">
                                <LazyLoad height={"100%"}>
                                    <img className="img-responsive" src="images/units-nq8.png"/>
                                </LazyLoad>
                            </div>
                        </div>
                        <li>Position (latitude, longitude) can be displayed as Degrees, Degrees Minutes, Degrees Minutes
                            seconds
                        </li>
                        <div className="row standard_margin_top_bottom">
                            <div className="col-xs-6 col-md-4">
                                <LazyLoad height={"100%"}>
                                    <img className="img-responsive" src="images/units_pos-nq8.png"/>
                                </LazyLoad>
                            </div>
                        </div>
                        <li>Speed can be displayed as Knots, Mph, Kph</li>
                        <div className="row standard_margin_top_bottom">
                            <div className="col-xs-6 col-md-4">
                                <LazyLoad height={"100%"}>
                                    <img className="img-responsive" src="images/units_spd-nq8.png"/>
                                </LazyLoad>
                            </div>
                        </div>
                        <li>Distance can be displayed as Nautical, Statute, Metric</li>
                        <div className="row standard_margin_top_bottom">
                            <div className="col-xs-6 col-md-4">
                                <LazyLoad height={"100%"}>
                                    <img className="img-responsive" src="images/units_dist-nq8.png"/>
                                </LazyLoad>
                            </div>
                        </div>
                        <li>Bearing and Course can be displayed as True or Magnetic Magnetic bearings are calculated
                            using the World Magnetic Model courtesy of the US National Geospacial Intelligence Agency
                        </li>
                        <div className="row standard_margin_top_bottom">
                            <div className="col-xs-6 col-md-4">
                                <LazyLoad height={"100%"}>
                                    <img className="img-responsive" src="images/units_brng_course-nq8.png"/>
                                </LazyLoad>
                            </div>
                        </div>
                    </div>
                );
            case 11:    // Adding Waypoints
                return (
                    <div className="container">
                        <h3><strong>{this.listItems[currentItem]}</strong></h3>
                        <li>Push the extra tools button <img className="btn_img" src="images/tools.png"/> to show the
                            extra tool buttons.
                        </li>
                        <li>Pan/Zoom the chart to where you would like to place your waypoint OR push the gps follow
                            <img className="btn_img" src="images/followde.png"/> button to place a waypoint at your
                            current position.
                        </li>
                        <li>Next, push the add waypoint button.
                            <img className="btn_img" src="images/waypoint.png"/></li>
                        <li>You are then presented with a dialog where you can name your
                            waypoint, add a description, change the icon, or change the
                            latitude/longitude
                        </li>
                        <div className="row standard_margin_top_bottom">
                            <div className="col-xs-6 col-md-4">
                                <LazyLoad height={"100%"}>
                                    <img className="img-responsive" src="images/waypoint_dialog-nq8.png"/>
                                </LazyLoad>
                            </div>
                        </div>
                        <li>Push Save and the map will be centered on the new waypoint.</li>
                    </div>
                );
            case 12:    // Working with Waypoints
                return (
                    <div className="container">
                        <h3><strong>{this.listItems[currentItem]}</strong></h3>
                        <li>Tap on the waypoint icon on the map and an action dialog will be
                            presented.
                        </li>
                        <div className="row standard_margin_top_bottom">
                            <div className="col-xs-6 col-md-4">
                                <LazyLoad height={"100%"}>
                                    <img className="img-responsive" src="images/waypoint_action_dialog-nq8.png"/>
                                </LazyLoad>
                            </div>
                        </div>
                        <li>You can choose activate, details, move, hide or delete the selected waypoint.</li>
                        <li>Select <strong>Activate</strong> to navigate to a waypoint.</li>
                        <li>Once a waypoint is activated bearing and range will be shown on the heads up display below
                            speed and course
                        </li>
                        <li>Select <strong>Details</strong> to bring up a dialog and view or change a waypoint icon,
                            name, description or coordinates.
                            <li>Select <strong>Move</strong> to drag a waypoint to a new location on the map.</li>
                            <li>Pan the map and use the small <img className="map_point" src="images/drop.png"/> button
                                to drop the waypoint
                                where the cursor lies or the small
                                <img className="map_point" src="images/done.png"/>&nbsp;
                                button to cancel.
                            </li>
                            <div className="row standard_margin_top_bottom">
                                <div className="col-xs-6 col-md-4">
                                    <LazyLoad height={"100%"}>
                                        <img className="img-responsive" src="images/waypoint_move-nq8.png"/>
                                    </LazyLoad>
                                </div>
                            </div>
                            <li>Select <strong>Hide</strong> to hide the waypoint from the map/chart.</li>
                            <li>Select <strong>Delete</strong> to delete the waypoint from the map/chart and persisted
                                storage.
                            </li>
                            <div className="note">Note: hidden waypoints can be unhidden using the "Marks Manager"
                            </div>
                        </li>
                    </div>
                );
            case 13:    // Recording A Track
                return (
                    <div className="container">
                        <h3><strong>{this.listItems[currentItem]}</strong></h3>
                        <div className="note">Note: GPS must have a position lock for Track recording to start</div>
                        <li>Push the extra tools button <img className="btn_img" src="images/tools.png"/> to show the
                            extra tool buttons.
                        </li>
                        <li>Push the Track button
                            <img className="btn_img" src="images/trackoff.png"/>
                            and choose "Yes" when presented with "Start recording track?" dialog.
                        </li>
                        <li>Track button will indicate tracking is in progress by turning orange. <img
                            className="btn_img" src="images/trackon.png"/>
                        </li>
                        <li>Stop tracking by pushing the Track button a second time. You will be presented with a dialog
                            where you can add a name and description to your track or discard your track.
                        </li>
                    </div>
                );
            case 14:    // Working with Tracks
                return (
                    <div className="container">
                        <h3><strong>{this.listItems[currentItem]}</strong></h3>
                        <li>Tap on the track icon <img className="map_point" src="images/trackstart.png"/> on the map
                            and an action dialog will be
                            presented.
                        </li>
                        <div className="row standard_margin_top_bottom">
                            <div className="col-xs-6 col-md-4">
                                <LazyLoad height={"100%"}>
                                    <img className="img-responsive" src="images/track_action_dialog-nq8.png"/>
                                </LazyLoad>
                            </div>
                        </div>
                        <li>You can choose details, hide or delete the selected track.</li>
                        <li>Select <strong>Details</strong> to bring up a dialog and view or change a track name and
                            description.
                            <li>Select <strong>Hide</strong> to hide the track from the map/chart.</li>
                            <li>Select <strong>Delete</strong> to delete the track from the map/chart and persisted
                                storage.
                            </li>
                            <div className="note">Note: hidden tracks can be unhidden using the "Marks Manager"
                            </div>
                        </li>
                    </div>
                );
            case 15:    // Adding Routes
                return (
                    <div className="container">
                        <h3><strong>{this.listItems[currentItem]}</strong></h3>
                        <li>Push the extra tools button <img className="btn_img" src="images/tools.png"/> to show the
                            extra tool buttons.
                        </li>
                        <li>Pan/Zoom the chart to where you would like to start your route.</li>
                        <li>Next, push the route button to start creating a new route.
                            <img className="btn_img" src="images/route.png"/>
                        </li>
                        <li>Pan/zoom the chart and push the route
                            button<img className="btn_img" src="images/route.png"/> again for each point you want to
                            place in the route. <img className="map_point" src="images/routestart.png"/>
                        </li>
                        <li>Pan/zoom the chart to the last point in the route and finish the route by pushing the return
                            button. <img className="map_point" src="images/done.png"/> A dialog will be presented where
                            you can add route details, save or discard route.
                        </li>
                    </div>
                );
            case 16:    // Working with Routes
                return (
                    <div className="container">
                        <h3><strong>{this.listItems[currentItem]}</strong></h3>
                        <ul>
                            <li>Tap on the route <img className="map_point" src="images/routestart.png"/> icon on the
                                map and an action dialog will be presented.
                            </li>
                            <div className="row standard_margin_top_bottom">
                                <div className="col-xs-6 col-md-4">
                                    <LazyLoad height={"100%"}>
                                        <img className="img-responsive" src="images/route_action_dialog-nq8.png"/>
                                    </LazyLoad>
                                </div>
                            </div>
                            <li>You can choose Activate, Details, Edit Points, Reverse, Extend, Hide or Delete the
                                selected route.
                            </li>
                            <li>Select <strong>Activate</strong> to navigate along a route.
                                <li>Once a route is activated, bearing and range will be shown on the heads up display
                                    below speed and course. A dashed blue course line will also be drawn on the map to
                                    the next best point along the route according to current position and course.
                                    Deactivate a route by tapping on route icon and choosing deactivate OR Routes can
                                    also be deactivated by pushing the&nbsp;
                                    <img className="map_point" src="images/done.png"/> button on the heads up display.
                                </li>
                                <div className="row standard_margin_top_bottom">
                                    <div className="col-xs-6 col-md-4">
                                        <LazyLoad height={"100%"}>
                                            <img className="img-responsive" src="images/route-nq8.png"/>
                                        </LazyLoad>
                                    </div>
                                </div>
                            </li>
                            <li>Select <strong>Details</strong> to bring up a dialog and view or change a route name,
                                description, departure information and plan speed.
                            </li>
                            <li>Select <strong>Edit Points</strong> to put the route into edit mode where you can then
                                move, insert or delete individual route points.
                            </li>
                            <ul>
                                <li>See: <Link to={"/manual/17"} href="">Route Edit Points Mode</Link></li>
                            </ul>
                            <div className="note">Note: The large
                                &nbsp;<img className="map_point" src="images/done.png"/>&nbsp;
                                button returns the route to normal mode.
                            </div>

                            <li>Select <strong>Extend</strong> to add additional point(s) to the end of a route. The
                                &nbsp;<img className="map_point" src="images/done.png"/> button finishes the route
                                extension.
                            </li>
                            <li>Select <strong>Hide</strong> to hide the route.</li>
                            <li>Select <strong>Delete</strong> to delete the route.</li>
                            <li>Note: hidden routes can be unhidden using the "Marks Manager"</li>
                        </ul>
                    </div>
                );
            case 17:    // Route Edit Points Mode
                return (
                    <div className="container">
                        <h3><strong>{this.listItems[currentItem]}</strong></h3>
                        <div className="note">Note: see <Link to={"/manual/16"} href="">Working with Routes</Link> to
                            learn how to put a route into and out of edit point mode.
                        </div>
                        <li>When a route is in edit mode all points in the route will display an icon:
                            &nbsp;<img className="map_point" src="images/routeedit.png"/> which can be tapped. When
                            tapped, a route point can be moved, inserted after, or deleted.
                        </li>
                        <div className="row standard_margin_top_bottom">
                            <div className="col-xs-6 col-md-4">
                                <LazyLoad height={"100%"}>
                                    <img className="img-responsive" src="images/route_edit_action_dialog-nq8.png"/>
                                </LazyLoad>
                            </div>
                        </div>
                        <li>Select <strong>Move</strong> to move route point: Pan the map and use the small
                            &nbsp;<img className="map_point" src="images/drop.png"/> button to drop the route point
                            where the cursor lies or the small <img className="map_point" src="images/done.png"/> button
                            to cancel the move.
                        </li>
                        <div className="row standard_margin_top_bottom">
                            <div className="col-xs-6 col-md-4">
                                <LazyLoad height={"100%"}>
                                    <img className="img-responsive" src="images/route_edit-nq8.png"/>
                                </LazyLoad>
                            </div>
                        </div>
                        <li>Select <strong>Insert After</strong> to insert a new route point between the selected one
                            and next route point.
                        </li>
                        <li>Select <strong>Delete</strong> to delete the selected route point.</li>
                    </div>
                );
            case 18:    // Marks Manager
                return (
                    <div className="container">
                        <h3><strong>{this.listItems[currentItem]}</strong></h3>
                        <li>Use the Marks Manager to manage marks: Waypoints, Tracks and GPX Backups</li>
                        <li>Menu Button --&gt; Settings --&gt; Marks Manager gets you to the Marks Manager
                            {this.getMenuButtonCopy()}
                            <h3>Waypoints Tab</h3>
                            <div className="row standard_margin_top_bottom">
                                <div className="col-xs-6 col-md-4">
                                    <LazyLoad height={"100%"}>
                                        <img className="img-responsive" src="images/mm_wpts-nq8.png"/>
                                    </LazyLoad>
                                </div>
                                <div className="col-xs-6 col-md-4">
                                    <LazyLoad height={"100%"}>
                                        <img className="img-responsive" src="images/mm_wpts_action_dialog-nq8.png"/>
                                    </LazyLoad>
                                </div>
                            </div>
                            <li>Pushing the Menu Button <img className="btn_img" src="images/mainmenu.png"/> allows you
                                to:
                            </li>
                            <ul>
                                <li><strong>Toggle selected:</strong> toggles all items current selection state
                                    &nbsp;<img className="map_point" src="images/check.png"/></li>
                                <li><strong>Clear selected:</strong> clears all the selection checkboxes</li>
                                <li><strong>Toggle selected hidden or shown:</strong> toggles the hidden/shown state of
                                    all items that have a selection check mark.
                                    <img className="map_point" src="images/check.png"/>
                                </li>
                                <div className="note">Note: Currently hidden items will be indicated by
                                    &nbsp;<img className="map_point" src="images/hidden.png"/></div>
                                <li><strong>Sort by name:</strong> Sorts the entire list by name.</li>
                                <li><strong>Sort by distance:</strong> Sorts the entire list by distance.</li>
                                <li><strong>Delete selected:</strong> Deletes all items that have a selection check
                                    mark. <img className="map_point" src="images/check.png"/></li>
                            </ul>
                            <li>Individual waypoints can be viewed by long pressing on them and choosing <strong>Go to
                                mark and set shown.</strong>
                            </li>
                            <div className="row standard_margin_top_bottom">
                                <div className="col-xs-6 col-md-4">
                                    <LazyLoad height={"100%"}>
                                        <img className="img-responsive" src="images/mm_wpt_lp_ad-nq8.png"/>
                                    </LazyLoad>
                                </div>
                            </div>
                            <h4>Tracks Tab</h4>
                            <div className="row standard_margin_top_bottom">
                                <div className="col-xs-6 col-md-4">
                                    <LazyLoad height={"100%"}>
                                        <img className="img-responsive" src="images/mm_trk-nq8.png"/>
                                    </LazyLoad>
                                </div>
                                <div className="col-xs-6 col-md-4">
                                    <LazyLoad height={"100%"}>
                                        <img className="img-responsive" src="images/mm_trk_action_dialog-nq8.png"/>
                                    </LazyLoad>
                                </div>
                            </div>
                            <li>Pushing the Menu Button <img className="btn_img" src="images/mainmenu.png"/> allows you
                                to:
                            </li>
                            <ul>
                                <li><strong>Toggle selected:</strong> toggles all items current selection state
                                    &nbsp;<img className="map_point" src="images/check.png"/></li>
                                <li><strong>Clear selected:</strong> clears all the selection checkboxes</li>
                                <li><strong>Toggle selected hidden or shown:</strong> toggles the hidden/shown state of
                                    all items that have a selection check mark.
                                    <img className="map_point" src="images/check.png"/>
                                </li>
                                <div className="note">Note: Currently hidden items will be indicated by
                                    &nbsp;<img className="map_point" src="images/hidden.png"/></div>
                                <li><strong>Sort by name:</strong> Sorts the entire list by name.</li>
                                <li><strong>Sort by date:</strong> Sorts the entire list by date.</li>
                                <li><strong>Delete selected:</strong> Deletes all items that have a selection check
                                    mark. <img className="map_point" src="images/check.png"/></li>
                            </ul>
                            <li>Individual tracks can be viewed by long pressing on them and choosing <strong>Go to
                                mark and set shown.</strong>
                            </li>
                            <li>Individual track details can be edited by long pressing on them and choosing <strong>Edit</strong>
                            </li>
                            <div className="row standard_margin_top_bottom">
                                <div className="col-xs-6 col-md-4">
                                    <LazyLoad height={"100%"}>
                                        <img className="img-responsive" src="images/mm_trk_lp_ad-nq8.png"/>
                                    </LazyLoad>
                                </div>
                                <div className="col-xs-6 col-md-4">
                                    <LazyLoad height={"100%"}>
                                        <img className="img-responsive" src="images/mm_trk_lp_edit-nq8.png"/>
                                    </LazyLoad>
                                </div>
                            </div>
                            <h3>Routes Tab</h3>
                            <div className="row standard_margin_top_bottom">
                                <div className="col-xs-6 col-md-4">
                                    <LazyLoad height={"100%"}>
                                        <img className="img-responsive" src="images/mm_rte-nq8.png"/>
                                    </LazyLoad>
                                </div>
                                <div className="col-xs-6 col-md-4">
                                    <LazyLoad height={"100%"}>
                                        <img className="img-responsive" src="images/mm_rte_action_dialog-nq8.png"/>
                                    </LazyLoad>
                                </div>
                                <div className="col-xs-6 col-md-4">
                                    <LazyLoad height={"100%"}>
                                        <img className="img-responsive" src="images/mm_rte_lp_ad-nq8.png"/>
                                    </LazyLoad>
                                </div>
                            </div>
                            <li>Pushing the Menu Button <img className="btn_img" src="images/mainmenu.png"/> allows you
                                to:
                            </li>
                            <ul>
                                <li><strong>Toggle selected:</strong> toggles all items current selection state
                                    &nbsp;<img className="map_point" src="images/check.png"/></li>
                                <li><strong>Clear selected:</strong> clears all the selection checkboxes</li>
                                <li><strong>Toggle selected hidden or shown:</strong> toggles the hidden/shown state of
                                    all items that have a selection check mark.
                                    <img className="map_point" src="images/check.png"/>
                                </li>
                                <div className="note">Note: Currently hidden items will be indicated by
                                    &nbsp;<img className="map_point" src="images/hidden.png"/></div>
                                <li><strong>Delete selected:</strong> Deletes all items that have a selection check
                                    mark. <img className="map_point" src="images/check.png"/></li>
                            </ul>
                            <li>Individual routes can be viewed by long pressing on them and choosing <strong>Go to
                                mark and set shown.</strong>
                            </li>
                            <div className="row standard_margin_top_bottom">
                                <div className="col-xs-6 col-md-4">
                                    <LazyLoad height={"100%"}>
                                        <img className="img-responsive" src="images/mm_rte_lp_ad-nq8.png"/>
                                    </LazyLoad>
                                </div>
                            </div>
                            <h3>GPX Backups Tab</h3>
                            <div className="row standard_margin_top_bottom">
                                <div className="col-xs-6 col-md-4">
                                    <LazyLoad height={"100%"}>
                                        <img className="img-responsive" src="images/mm_gpx-nq8.png"/>
                                    </LazyLoad>
                                </div>
                                <div className="col-xs-6 col-md-4">
                                    <LazyLoad height={"100%"}>
                                        <img className="img-responsive" src="images/mm_gpx_action_dialog-nq8.png"/>
                                    </LazyLoad>
                                </div>
                                <div className="col-xs-6 col-md-4">
                                    <LazyLoad height={"100%"}>
                                        <img className="img-responsive" src="images/mm_gpx_lp_ad-nq8.png"/>
                                    </LazyLoad>
                                </div>
                            </div>
                            <li>Pushing the Menu Button <img className="btn_img" src="images/mainmenu.png"/> allows you
                                to:
                            </li>
                            <ul>
                                <li><strong>Toggle selected:</strong> toggles all items current selection state
                                    &nbsp;<img className="map_point" src="images/check.png"/></li>
                                <li><strong>Clear selected:</strong> clears all the selection checkboxes</li>
                                <li><strong>Create new GPX/Backup:</strong> backs up all waypoints, tracks and routes to
                                    a GPX file. <img className="map_point" src="images/check.png"/>
                                </li>
                                <div className="note">Note: Currently hidden items will be indicated by
                                    &nbsp;<img className="map_point" src="images/hidden.png"/></div>
                                <li><strong>Delete selected:</strong> Deletes all items that have a selection check
                                    mark. <img className="map_point" src="images/check.png"/></li>
                            </ul>
                            <li>All waypoints and tracks can be backed up to a GPX file by pushing Menu
                                Button--&gt;Create new GPX/Backup.
                            </li>
                            <li>Individual GPX Backups can be imported by long pressing on the desired GPX item and
                                choosing <strong>Import</strong>.
                            </li>
                            <li>Individual GPX Backups can be sent (via Email or Bluetooth for example)
                                by long pressing on the desired GPX item and choosing <strong>Send</strong>.
                            </li>
                            <li>Individual GPX Backups can be renamed by long pressing on the desired GPX item and
                                choosing <strong>Rename</strong>.
                            </li>
                            <li>Individual GPX Backups can be restored by long pressing on the desired GPX item and
                                choosing <strong>Import</strong>. This will import all waypoints, tracks and routes in
                                the GPX file.
                            </li>
                            <div className="row standard_margin_top_bottom">
                                <div className="col-xs-6 col-md-4">
                                    <LazyLoad height={"100%"}>
                                        <img className="img-responsive" src="images/mm_gpx_lp_ad-nq8.png"/>
                                    </LazyLoad>
                                </div>
                            </div>
                        </li>
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
    }

    componentDidMount() {
        console.log("componentDidMount()")
    }

    componentWillUnmount() {
        console.log("componentWillUnmount()")
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
        hashHistory.push("/manual/" + index);
    }

    getCurrentItem() {
        if (this.props.params && this.props.params.sectionId != null) {
            return parseInt(this.props.params.sectionId);
        }
        return 0;
    }

    handleClickNext() {
        this.handleClick(this.getCurrentItem() + 1)
    }

    handleClickPrevious() {
        this.handleClick(this.getCurrentItem() - 1)
    }

    getPreviousLink() {
        if (this.getCurrentItem() == 0) {
            return (
                <li className="previous disabled"><a><span aria-hidden="true">&larr;</span> Previous</a></li>
            )
        } else {
            return (
                <li className="previous"><a onClick={this.handleClickPrevious.bind(this)}><span
                    aria-hidden="true">&larr;</span> Previous</a></li>
            )
        }
    }

    getNextLink() {
        if (this.getCurrentItem() < (manualState.getItems().length - 1)) {
            return (
                <li className="next"><a onClick={this.handleClickNext.bind(this)}>Next <span
                    aria-hidden="true">&rarr;</span></a></li>
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
                        <select className="form-control" value={this.getCurrentItem()}
                                onChange={this.handleChange.bind(this)}>
                            {manualState.getItems().map(this.makeItem)}
                        </select>
                    </div>
                    <nav aria-label="Page">
                        <ul className="pager">
                            {this.getPreviousLink()}
                            {this.getNextLink()}
                        </ul>
                    </nav>
                    <div className="jumbotron">
                        {manualState.getCurrentPage(this.getCurrentItem())}
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