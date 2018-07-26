import React from "react";
import './icon.css';
import {Link} from 'react-router-dom';
import {Menu, Hero, Footer} from "./App";
import mxmariner_logo_nq8 from './images/mxmariner_logo_nq8.png';
import mm_gpx_lp_ad_nq8 from './images/mm_gpx_lp_ad_nq8.png';
import drop from './images/drop.png';
import units_spd_nq8 from './images/units_spd_nq8.png';
import shipgrey from './images/shipgrey.png';
import drawer_map_type_nq8 from './images/drawer_map_type_nq8.png';
import mm_wpt_lp_ad_nq8 from './images/mm_wpt_lp_ad_nq8.png';
import track_action_dialog_nq8 from './images/track_action_dialog_nq8.png';
import done from './images/done.png';
import mm_wpts_action_dialog_nq8 from './images/mm_wpts_action_dialog_nq8.png';
import measure from './images/measure.png';
import ship from './images/ship.png';
import tools from './images/tools.png';
import check from './images/check.png';
import mm_trk_action_dialog_nq8 from './images/mm_trk_action_dialog_nq8.png';
import units_dist_nq8 from './images/units_dist_nq8.png';
import menu_clip_nq8 from './images/menu_clip_nq8.png';
import routestart from './images/routestart.png';
import chart_delete_nq8 from './images/chart_delete_nq8.png';
import waypoint_action_dialog_nq8 from './images/waypoint_action_dialog_nq8.png';
import trackon from './images/trackon.png';
import waypoint from './images/waypoint.png';
import mm_gpx_nq8 from './images/mm_gpx_nq8.png';
import route_edit_nq8 from './images/route_edit_nq8.png';
import circle from './images/circle.png';
import routeedit from './images/routeedit.png';
import circlegrey from './images/circlegrey.png';
import mm_rte_nq8 from './images/mm_rte_nq8.png';
import mm_gpx_action_dialog_nq8 from './images/mm_gpx_action_dialog_nq8.png';
import followde from './images/followde.png';
import chart_list_nq8 from './images/chart_list_nq8.png';
import sensors_nq8 from './images/sensors_nq8.png';
import followhu from './images/followhu.png';
import mainmenu from './images/mainmenu.png';
import units_brng_course_nq8 from './images/units_brng_course_nq8.png';
import trackoff from './images/trackoff.png';
import route_nq8 from './images/route_nq8.png';
import placeholder from './images/placeholder.jpg';
import hidden from './images/hidden.png';
import zoomin from './images/zoomin.png';
import mm_rte_action_dialog_nq8 from './images/mm_rte_action_dialog_nq8.png';
import trackstart from './images/trackstart.png';
import all_nq8 from './images/all_nq8.png';
import measure_nq8 from './images/measure_nq8.png';
import follownu from './images/follownu.png';
import route_edit_action_dialog_nq8 from './images/route_edit_action_dialog_nq8.png';
import mm_rte_lp_ad_nq8 from './images/mm_rte_lp_ad_nq8.png';
import units_nq8 from './images/units_nq8.png';
import route from './images/route.png';
import waypoint_dialog_nq8 from './images/waypoint_dialog_nq8.png';
import mm_wpts_nq8 from './images/mm_wpts_nq8.png';
import zoomout from './images/zoomout.png';
import route_action_dialog_nq8 from './images/route_action_dialog_nq8.png';
import chart_download_nq8 from './images/chart_download_nq8.png';
import mm_trk_lp_ad_nq8 from './images/mm_trk_lp_ad_nq8.png';
import mm_trk_nq8 from './images/mm_trk_nq8.png';
import waypoint_move_nq8 from './images/waypoint_move_nq8.png';
import units_pos_nq8 from './images/units_pos_nq8.png';
import mm_trk_lp_edit_nq8 from './images/mm_trk_lp_edit_nq8.png';

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

    getMenuButtonCopy() {
        return (
            <div>
                <div className="note">Note: The Menu Button is the 3 horizontal lines on the top, left part
                    of the screen when viewing the map / chart.
                </div>
                <div className="row standard_margin_bottom">
                    <div className="col-xs-3 col-md-2">
                        <img className="img-responsive" src={menu_clip_nq8}/>
                    </div>
                </div>
            </div>
        );
    }

    getCurrentPage(currentItem) {
        let index = parseInt(currentItem) - 1;
        switch (currentItem) {
            case 1: // General Information
                return (
                    <div className="container">
                        <h3><strong>{this.listItems[index]}</strong></h3>
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
                                <img className="img-responsive" src={all_nq8}/>
                            </div>
                        </div>
                    </div>
                );
            case 2: // Installing Chart Regions
                return (
                    <div className="container">
                        <h3><strong>{this.listItems[index]}</strong></h3>
                        <ul>
                            <li>Menu Button --&gt; Settings --&gt; Install Charts</li>
                            {this.getMenuButtonCopy()}
                            <div className="row standard_margin_top_bottom">
                                <div className="col-xs-6 col-md-4">
                                    <img className="img-responsive" src={chart_list_nq8}/>
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
                                    <img className="img-responsive" src={chart_download_nq8}/>
                                </div>
                            </div>
                        </ul>
                    </div>
                );
            case 3: // Uninstalling Chart Regions
                return (
                    <div className="container">
                        <h3><strong>{this.listItems[index]}</strong></h3>
                        <li>Menu Button --&gt; Settings --&gt; Install Charts</li>
                        {this.getMenuButtonCopy()}
                        <li>Long press on an installed or partially downloaded region and choose "OK" to delete it.</li>
                        <li>Deleted regions are completely removed from the device.</li>
                        <div className="row standard_margin_top_bottom">
                            <div className="col-xs-6 col-md-4">
                                <img className="img-responsive"  src={chart_delete_nq8}/>
                            </div>
                        </div>
                    </div>
                );
            case 4: // Updating Chart Regions
                return (
                    <div className="container">
                        <h3><strong>{this.listItems[index]}</strong></h3>
                        <li>Menu Button --&gt; Settings --&gt; Install Charts</li>
                        {this.getMenuButtonCopy()}
                        <li>When an updated region file is available for an an installed region, the region will be
                            labeled with an &quot;update available&quot; tag in yellow.
                        </li>
                        <li>Tap on the region in the menu to download the update.</li>
                        <div className="row standard_margin_top_bottom">
                            <div className="col-xs-6 col-md-4">
                                <img className="img-responsive" src={chart_list_nq8}/>
                            </div>
                        </div>
                        <div className="row standard_margin_top_bottom">
                            <div className="col-xs-6 col-md-4">
                                <img className="img-responsive" src={chart_download_nq8}/>
                            </div>
                        </div>
                    </div>
                );
            case 5: // Configuring Storage
                return (
                    <div className="container">
                        <h3><strong>{this.listItems[index]}</strong></h3>
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
            case 6: // Map Display Type
                return (
                    <div className="container">
                        <h3><strong>{this.listItems[index]}</strong></h3>
                        <li>The chart/map display settings can be quickly changed by pressing Menu Button and the map
                            type (Raster Charts, Road map, Satellite) can be quickly changed using the map yype drop
                            down.
                        </li>
                        <div className="row standard_margin_top_bottom">
                            <div className="col-xs-6 col-md-4">
                                <img className="img-responsive" src={drawer_map_type_nq8}/>
                            </div>
                        </div>
                        {this.getMenuButtonCopy()}
                    </div>
                );
            case 7: // Sensor Options - Ship & Map Presentation
                return (
                    <div className="container">
                        <h3><strong>{this.listItems[index]}</strong></h3>
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
                                <img className="img-responsive" src={sensors_nq8}/>
                            </div>
                        </div>
                    </div>
                );
            case 8:    // Chart Panning, Zooming, Measuring
                return (
                    <div className="container">
                        <h3><strong>{this.listItems[index]}</strong></h3>
                        <li>Zoom chart by using zoom buttons
                            <img className="btn_img" src={zoomin}/>
                            &nbsp;
                            <img className="btn_img" src={zoomout}/>
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
            case 9:    // GPS follow
                return (
                    <div className="container">
                        <h3><strong>{this.listItems[index]}</strong></h3>
                        <ul>
                            <li>Enable location on your device Settings --&gt; Location &amp; Security --&gt; Use GPS
                                satellites (checked)
                            </li>
                            <li>Enable gps follow (north up) by pushing the follow button.
                                <img className="btn_img" src={followde}/></li>
                            <li>The follow button will turn red with the ship angled indicating follow mode is north up.
                                <img className="btn_img" src={follownu}/></li>
                            <li>Enable gps follow (head/course up) by pushing the follow button
                                a second time.
                            </li>
                            <li>The follow button ship will angle straight up indicating follow
                                mode is course or head up.
                                <img className="btn_img" src={followhu}/></li>
                            <li>Disengage gps follow by panning the chart.</li>
                            <li>Follow button will switch back to white when follow is disengaged.
                                <img className="btn_img" src={followde}/>
                            </li>
                            <li>When gps has speed and course, position is indicated by red ship
                                <img className="btn_img" src={ship}/> oriented according to present course.
                            </li>
                            <ul>
                                <li>Ship orientation will orientate towards heading if "Heading" is selected in the
                                    "Orientation Mode" under the sensor options.
                                </li>
                            </ul>
                            <li>When gps has no speed and course, position is indicated by red circle.
                                <img src={circle}/></li>
                            <li>When gps has not received a fix for 3 seconds position indicator becomes greyed
                                <img src={shipgrey}/>
                                <img src={circlegrey}/>
                            </li>
                            <li>When gps accuracy is low, approximate error is indicated in
                                chart view by semi-transparent grey circle around approximate
                                position.
                            </li>
                        </ul>
                    </div>
                );
            case 10:    // Measure Tool
                return (
                    <div className="container">
                        <h3><strong>{this.listItems[index]}</strong></h3>
                        <li>Push the extra tools button <img className="btn_img" src={tools}/> to show the
                            extra tool buttons.
                        </li>
                        <li>Pan/Zoom the chart to where you would like to start your
                            measurement.
                        </li>
                        <li>Next, push the measure button.

                            <img className="btn_img" src={measure}/>
                        </li>
                        <li>Pan/Zoom the chart to where you would like to measure to.</li>
                        <div className="row standard_margin_top_bottom">
                            <div className="col-xs-6 col-md-4">
                                <img className="img-responsive" src={measure_nq8}/>
                            </div>
                        </div>
                        <li>Finish measuring by pushing the return button
                            <img className="btn_img" src={done}/></li>
                    </div>
                );
            case 11:    // Units of measure
                return (
                    <div className="container">
                        <h3><strong>{this.listItems[index]}</strong></h3>
                        <li>Menu Button --&gt; Settings --&gt; Units</li>
                        {this.getMenuButtonCopy()}
                        <div className="row standard_margin_top_bottom">
                            <div className="col-xs-6 col-md-4">
                                <img className="img-responsive" src={units_nq8}/>
                            </div>
                        </div>
                        <li>Position (latitude, longitude) can be displayed as Degrees, Degrees Minutes, Degrees Minutes
                            seconds
                        </li>
                        <div className="row standard_margin_top_bottom">
                            <div className="col-xs-6 col-md-4">
                                <img className="img-responsive" src={units_pos_nq8}/>
                            </div>
                        </div>
                        <li>Speed can be displayed as Knots, Mph, Kph</li>
                        <div className="row standard_margin_top_bottom">
                            <div className="col-xs-6 col-md-4">
                                <img className="img-responsive" src={units_spd_nq8}/>
                            </div>
                        </div>
                        <li>Distance can be displayed as Nautical, Statute, Metric</li>
                        <div className="row standard_margin_top_bottom">
                            <div className="col-xs-6 col-md-4">
                                <img className="img-responsive" src={units_dist_nq8}/>
                            </div>
                        </div>
                        <li>Bearing and Course can be displayed as True or Magnetic Magnetic bearings are calculated
                            using the World Magnetic Model courtesy of the US National Geospacial Intelligence Agency
                        </li>
                        <div className="row standard_margin_top_bottom">
                            <div className="col-xs-6 col-md-4">
                                <img className="img-responsive" src={units_brng_course_nq8}/>
                            </div>
                        </div>
                    </div>
                );
            case 12:    // Adding Waypoints
                return (
                    <div className="container">
                        <h3><strong>{this.listItems[index]}</strong></h3>
                        <li>Push the extra tools button <img className="btn_img" src={tools}/> to show the
                            extra tool buttons.
                        </li>
                        <li>Pan/Zoom the chart to where you would like to place your waypoint OR push the gps follow
                            <img className="btn_img" src={followde}/> button to place a waypoint at your
                            current position.
                        </li>
                        <li>Next, push the add waypoint button.
                            <img className="btn_img" src={waypoint}/></li>
                        <li>You are then presented with a dialog where you can name your
                            waypoint, add a description, change the icon, or change the
                            latitude/longitude
                        </li>
                        <div className="row standard_margin_top_bottom">
                            <div className="col-xs-6 col-md-4">
                                <img className="img-responsive" src={waypoint_dialog_nq8}/>
                            </div>
                        </div>
                        <li>Push Save and the map will be centered on the new waypoint.</li>
                    </div>
                );
            case 13:    // Working with Waypoints
                return (
                    <div className="container">
                        <h3><strong>{this.listItems[index]}</strong></h3>
                        <li>Tap on the waypoint icon on the map and an action dialog will be
                            presented.
                        </li>
                        <div className="row standard_margin_top_bottom">
                            <div className="col-xs-6 col-md-4">
                                <img className="img-responsive" src={waypoint_action_dialog_nq8}/>
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
                            <li>Pan the map and use the small <img className="map_point" src={drop}/> button
                                to drop the waypoint
                                where the cursor lies or the small
                                <img className="map_point" src={done}/>&nbsp;
                                button to cancel.
                            </li>
                            <div className="row standard_margin_top_bottom">
                                <div className="col-xs-6 col-md-4">
                                    <img className="img-responsive" src={waypoint_move_nq8}/>
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
            case 14:    // Recording A Track
                return (
                    <div className="container">
                        <h3><strong>{this.listItems[index]}</strong></h3>
                        <div className="note">Note: GPS must have a position lock for Track recording to start</div>
                        <li>Push the extra tools button <img className="btn_img" src={tools}/> to show the
                            extra tool buttons.
                        </li>
                        <li>Push the Track button
                            <img className="btn_img" src={trackoff}/>
                            and choose "Yes" when presented with "Start recording track?" dialog.
                        </li>
                        <li>Track button will indicate tracking is in progress by turning orange. <img
                            className="btn_img" src={trackon}/>
                        </li>
                        <li>Stop tracking by pushing the Track button a second time. You will be presented with a dialog
                            where you can add a name and description to your track or discard your track.
                        </li>
                    </div>
                );
            case 15:    // Working with Tracks
                return (
                    <div className="container">
                        <h3><strong>{this.listItems[index]}</strong></h3>
                        <li>Tap on the track icon <img className="map_point" src={trackstart}/> on the map
                            and an action dialog will be
                            presented.
                        </li>
                        <div className="row standard_margin_top_bottom">
                            <div className="col-xs-6 col-md-4">
                                <img className="img-responsive" src={track_action_dialog_nq8}/>
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
            case 16:    // Adding Routes
                return (
                    <div className="container">
                        <h3><strong>{this.listItems[index]}</strong></h3>
                        <li>Push the extra tools button <img className="btn_img" src={tools}/> to show the
                            extra tool buttons.
                        </li>
                        <li>Pan/Zoom the chart to where you would like to start your route.</li>
                        <li>Next, push the route button to start creating a new route.
                            <img className="btn_img" src={route}/>
                        </li>
                        <li>Pan/zoom the chart and push the route
                            button<img className="btn_img" src={route}/> again for each point you want to
                            place in the route. <img className="map_point" src={routestart}/>
                        </li>
                        <li>Pan/zoom the chart to the last point in the route and finish the route by pushing the return
                            button. <img className="map_point" src={done}/> A dialog will be presented where
                            you can add route details, save or discard route.
                        </li>
                    </div>
                );
            case 17:    // Working with Routes
                return (
                    <div className="container">
                        <h3><strong>{this.listItems[index]}</strong></h3>
                        <ul>
                            <li>Tap on the route <img className="map_point" src={routestart}/> icon on the
                                map and an action dialog will be presented.
                            </li>
                            <div className="row standard_margin_top_bottom">
                                <div className="col-xs-6 col-md-4">
                                    <img className="img-responsive" src={route_action_dialog_nq8}/>
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
                                    <img className="map_point" src={done}/> button on the heads up display.
                                </li>
                                <div className="row standard_margin_top_bottom">
                                    <div className="col-xs-6 col-md-4">
                                        <img className="img-responsive" src={route_nq8}/>
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
                                &nbsp;<img className="map_point" src={done}/>&nbsp;
                                button returns the route to normal mode.
                            </div>

                            <li>Select <strong>Extend</strong> to add additional point(s) to the end of a route. The
                                &nbsp;<img className="map_point" src={done}/> button finishes the route
                                extension.
                            </li>
                            <li>Select <strong>Hide</strong> to hide the route.</li>
                            <li>Select <strong>Delete</strong> to delete the route.</li>
                            <li>Note: hidden routes can be unhidden using the "Marks Manager"</li>
                        </ul>
                    </div>
                );
            case 18:    // Route Edit Points Mode
                return (
                    <div className="container">
                        <h3><strong>{this.listItems[index]}</strong></h3>
                        <div className="note">Note: see <Link to={"/manual/16"} href="">Working with Routes</Link> to
                            learn how to put a route into and out of edit point mode.
                        </div>
                        <li>When a route is in edit mode all points in the route will display an icon:
                            &nbsp;<img className="map_point" src={routeedit}/> which can be tapped. When
                            tapped, a route point can be moved, inserted after, or deleted.
                        </li>
                        <div className="row standard_margin_top_bottom">
                            <div className="col-xs-6 col-md-4">
                                <img className="img-responsive" src={route_edit_action_dialog_nq8}/>
                            </div>
                        </div>
                        <li>Select <strong>Move</strong> to move route point: Pan the map and use the small
                            &nbsp;<img className="map_point" src={drop}/> button to drop the route point
                            where the cursor lies or the small <img className="map_point" src={done}/> button
                            to cancel the move.
                        </li>
                        <div className="row standard_margin_top_bottom">
                            <div className="col-xs-6 col-md-4">
                                <img className="img-responsive" src={route_edit_nq8}/>
                            </div>
                        </div>
                        <li>Select <strong>Insert After</strong> to insert a new route point between the selected one
                            and next route point.
                        </li>
                        <li>Select <strong>Delete</strong> to delete the selected route point.</li>
                    </div>
                );
            case 19:    // Marks Manager
                return (
                    <div className="container">
                        <h3><strong>{this.listItems[index]}</strong></h3>
                        <li>Use the Marks Manager to manage marks: Waypoints, Tracks and GPX Backups</li>
                        <li>Menu Button --&gt; Settings --&gt; Marks Manager gets you to the Marks Manager
                            {this.getMenuButtonCopy()}
                            <h3>Waypoints Tab</h3>
                            <div className="row standard_margin_top_bottom">
                                <div className="col-xs-6 col-md-4">
                                    <img className="img-responsive" src={mm_wpts_nq8}/>
                                </div>
                                <div className="col-xs-6 col-md-4">
                                    <img className="img-responsive" src={mm_wpts_action_dialog_nq8}/>
                                </div>
                            </div>
                            <li>Pushing the Menu Button <img className="btn_img" src={mainmenu}/> allows you
                                to:
                            </li>
                            <ul>
                                <li><strong>Toggle selected:</strong> toggles all items current selection state
                                    &nbsp;<img className="map_point" src={check}/></li>
                                <li><strong>Clear selected:</strong> clears all the selection checkboxes</li>
                                <li><strong>Toggle selected hidden or shown:</strong> toggles the hidden/shown state of
                                    all items that have a selection check mark.
                                    <img className="map_point" src={check}/>
                                </li>
                                <div className="note">Note: Currently hidden items will be indicated by
                                    &nbsp;<img className="map_point" src={hidden}/></div>
                                <li><strong>Sort by name:</strong> Sorts the entire list by name.</li>
                                <li><strong>Sort by distance:</strong> Sorts the entire list by distance.</li>
                                <li><strong>Delete selected:</strong> Deletes all items that have a selection check
                                    mark. <img className="map_point" src={check}/></li>
                            </ul>
                            <li>Individual waypoints can be viewed by long pressing on them and choosing <strong>Go to
                                mark and set shown.</strong>
                            </li>
                            <div className="row standard_margin_top_bottom">
                                <div className="col-xs-6 col-md-4">
                                    <img className="img-responsive" src={mm_wpt_lp_ad_nq8}/>
                                </div>
                            </div>
                            <h4>Tracks Tab</h4>
                            <div className="row standard_margin_top_bottom">
                                <div className="col-xs-6 col-md-4">
                                    <img className="img-responsive" src={mm_trk_nq8}/>
                                </div>
                                <div className="col-xs-6 col-md-4">
                                    <img className="img-responsive" src={mm_trk_action_dialog_nq8}/>
                                </div>
                            </div>
                            <li>Pushing the Menu Button <img className="btn_img" src={mainmenu}/> allows you
                                to:
                            </li>
                            <ul>
                                <li><strong>Toggle selected:</strong> toggles all items current selection state
                                    &nbsp;<img className="map_point" src={check}/></li>
                                <li><strong>Clear selected:</strong> clears all the selection checkboxes</li>
                                <li><strong>Toggle selected hidden or shown:</strong> toggles the hidden/shown state of
                                    all items that have a selection check mark.
                                    <img className="map_point" src={check}/>
                                </li>
                                <div className="note">Note: Currently hidden items will be indicated by
                                    &nbsp;<img className="map_point" src={hidden}/></div>
                                <li><strong>Sort by name:</strong> Sorts the entire list by name.</li>
                                <li><strong>Sort by date:</strong> Sorts the entire list by date.</li>
                                <li><strong>Delete selected:</strong> Deletes all items that have a selection check
                                    mark. <img className="map_point" src={check}/></li>
                            </ul>
                            <li>Individual tracks can be viewed by long pressing on them and choosing <strong>Go to
                                mark and set shown.</strong>
                            </li>
                            <li>Individual track details can be edited by long pressing on them and
                                choosing <strong>Edit</strong>
                            </li>
                            <div className="row standard_margin_top_bottom">
                                <div className="col-xs-6 col-md-4">
                                    <img className="img-responsive" src={mm_trk_lp_ad_nq8}/>
                                </div>
                                <div className="col-xs-6 col-md-4">
                                    <img className="img-responsive" src={mm_trk_lp_edit_nq8}/>
                                </div>
                            </div>
                            <h3>Routes Tab</h3>
                            <div className="row standard_margin_top_bottom">
                                <div className="col-xs-6 col-md-4">
                                    <img className="img-responsive" src={mm_rte_nq8}/>
                                </div>
                                <div className="col-xs-6 col-md-4">
                                    <img className="img-responsive" src={mm_rte_action_dialog_nq8}/>
                                </div>
                                <div className="col-xs-6 col-md-4">
                                    <img className="img-responsive" src={mm_rte_lp_ad_nq8}/>
                                </div>
                            </div>
                            <li>Pushing the Menu Button <img className="btn_img" src={mainmenu}/> allows you
                                to:
                            </li>
                            <ul>
                                <li><strong>Toggle selected:</strong> toggles all items current selection state
                                    &nbsp;<img className="map_point" src={check}/></li>
                                <li><strong>Clear selected:</strong> clears all the selection checkboxes</li>
                                <li><strong>Toggle selected hidden or shown:</strong> toggles the hidden/shown state of
                                    all items that have a selection check mark.
                                    <img className="map_point" src={check}/>
                                </li>
                                <div className="note">Note: Currently hidden items will be indicated by
                                    &nbsp;<img className="map_point" src={hidden}/></div>
                                <li><strong>Delete selected:</strong> Deletes all items that have a selection check
                                    mark. <img className="map_point" src={check}/></li>
                            </ul>
                            <li>Individual routes can be viewed by long pressing on them and choosing <strong>Go to
                                mark and set shown.</strong>
                            </li>
                            <div className="row standard_margin_top_bottom">
                                <div className="col-xs-6 col-md-4">
                                    <img className="img-responsive" src={mm_rte_lp_ad_nq8}/>
                                </div>
                            </div>
                            <h3>GPX Backups Tab</h3>
                            <div className="row standard_margin_top_bottom">
                                <div className="col-xs-6 col-md-4">
                                    <img className="img-responsive" src={mm_gpx_nq8}/>
                                </div>
                                <div className="col-xs-6 col-md-4">
                                    <img className="img-responsive" src={mm_gpx_action_dialog_nq8}/>
                                </div>
                                <div className="col-xs-6 col-md-4">
                                    <img className="img-responsive" src={mm_gpx_lp_ad_nq8}/>
                                </div>
                            </div>
                            <li>Pushing the Menu Button <img className="btn_img" src={mainmenu}/> allows you
                                to:
                            </li>
                            <ul>
                                <li><strong>Toggle selected:</strong> toggles all items current selection state
                                    &nbsp;<img className="map_point" src={check}/></li>
                                <li><strong>Clear selected:</strong> clears all the selection checkboxes</li>
                                <li><strong>Create new GPX/Backup:</strong> backs up all waypoints, tracks and routes to
                                    a GPX file. <img className="map_point" src={check}/>
                                </li>
                                <div className="note">Note: Currently hidden items will be indicated by
                                    &nbsp;<img className="map_point" src={hidden}/></div>
                                <li><strong>Delete selected:</strong> Deletes all items that have a selection check
                                    mark. <img className="map_point" src={check}/></li>
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
                                    <img className="img-responsive" src={mm_gpx_lp_ad_nq8}/>
                                </div>
                            </div>
                        </li>
                    </div>
                );
        }
    }
}

var manualState = new ManualState();

class Placeholder extends React.Component {
    render() {
        return (
            <div>
                <img className="img-responsive" src={placeholder}/>
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
        let index = parseInt(event.target.value);
        this.handleClick(index + 1);
    };

    handleClick(page) {
        // let page = parseInt(index);
        this.props.history.push("/manual/" + page);
    }

    getCurrentItemPage() {
        if (this.props.match && this.props.match.params && this.props.match.params.sectionId != null) {
            return parseInt(this.props.match.params.sectionId);
        }
        return 1;
    }

    getCurrentItemIndex() {
        return this.getCurrentItemPage() - 1;
    }

    handleClickNext() {
        this.handleClick(this.getCurrentItemPage() + 1)
    }

    handleClickPrevious() {
        this.handleClick(this.getCurrentItemPage() - 1)
    }

    getPreviousLink() {
        if (this.getCurrentItemPage() == 1) {
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
        if (this.getCurrentItemPage() < (manualState.getItems().length)) {
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
                <Hero titleImage={mxmariner_logo_nq8}
                      message={"Marine navigation for Android"}/>
                <div className="container standard_margin">
                    <div className="form-group">
                        <label>Section:</label>
                        <select className="form-control" value={this.getCurrentItemIndex()}
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
                        {manualState.getCurrentPage(this.getCurrentItemPage())}
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

export default Manual;