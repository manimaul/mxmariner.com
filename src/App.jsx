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
        if (value != null) {
            this.currentItem = parseInt(value);
        }
    }

    getCurrentPage() {
        switch (this.currentItem) {
            case 0: // General Information
                return (
                    <div className="container">
                        <h3><strong>{this.listItems[this.currentItem]}</strong></h3>
                        <h5>MX Mariner is a basic chart plotting program for Android.</h5>
                        <div className="row standard_margin_top_bottom">
                            <li>There are 3 map modes: Offline Raster Charts, Road map, and Satellite
                            </li>
                            <li>Raster Chart mode works 100% offline (after initial one time
                                chart region download)
                            </li>
                            <li>Road map mode requires an internet / data connection</li>
                            <li>Satellite mode requires an internet / data connection</li>
                            <li>ActiveCaptain interactive cruising guidebook</li>
                            <li>Create and navigate routes and points</li>
                            <li>Create and view tracks</li>
                            <li>Measure tool</li>
                            <li>Configurable units of measure and "World Magnetic Model"</li>
                        </div>
                        <div className="row">
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
                        <h3><strong>{this.listItems[this.currentItem]}</strong></h3>
                        <li>Menu Button --&gt; Settings --&gt; Install Charts
                            <br /> **The Menu Button is the 3 horizontal lines on the top, left part of the screen when
                            viewing the map / chart.
                        </li>
                        <li>LINZ and Brazilian Navy raster charts are divided into 2 regions.
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
                        <li>It's recommend to download regions when connected to wifi or 4g.</li>
                        <li>Pushing the back button during the download process will cancel the download.</li>
                        <li>The download can be resumed at a later time if you cancel.</li>
                        <li>Pushing the home button on your device allow you to do other task while the download
                            continues.
                        </li>
                    </div>
                );
            case 2: // Uninstalling Chart Regions
                return (
                    <div className="container">
                        <h3><strong>{this.listItems[this.currentItem]}</strong></h3>
                        <li>Menu Button --&gt; Settings --&gt; Install Charts
                            <br /> **The Menu Button is the 3 horizontal lines on the top, left part of the screen when
                            viewing the map / chart.
                        </li>
                        <li>Long press on an installed or partially downloaded region and choose "OK" to delete it.</li>
                        <li>Deleted regions are completely removed from device SD Card.</li>
                    </div>
                );
            case 3: // Updating Chart Regions
                return (
                    <div className="container">
                        <h3><strong>{this.listItems[this.currentItem]}</strong></h3>
                        <li>Menu Button --&gt; Settings --&gt; Install Charts
                            <br /> **The Menu Button is the 3 horizontal lines on the top, left part of the screen when
                            viewing the map / chart.
                        </li>
                        <li>When an updated region file is available for an an installed region, the region will be
                            labeled with an &quot;update available&quot; tag in yellow.
                        </li>
                        <li>Tap on the region in the menu to download the update.</li>
                    </div>
                );
            case 4: // Configuring Storage
                return (
                    <div className="container">
                        <h3><strong>{this.listItems[this.currentItem]}</strong></h3>
                        <li>Menu Button--&gt; Settings --&gt; Storage
                            <br /> **The Menu Button is the 3 horizontal lines on the top, left part of the screen when
                            viewing the map / chart.
                        </li>
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
                    <div className="container">
                        <h3><strong>{this.listItems[this.currentItem]}</strong></h3>
                        <li>The chart/map display settings can be quickly changed by pressing Menu Button --&gt; Display</li>
                        <li>The Map Type (Raster Charts, Road map, Satellite) can be quickly changed using the Map Type
                            drop down.
                        </li>
                    </div>
                );
            case 6: // Sensor Options - Ship & Map Presentation
                return (
                    <div className="container">
                        <h3><strong>{this.listItems[this.currentItem]}</strong></h3>
                        <li>GPS Course Predictor - When checked a red predictor line extends out from ship on chart in
                            the direction of the curent course over ground. The line length is relative to speed over
                            ground.
                        </li>
                        <li>Compass Heading Predictor - When checked an orange predicor line extends out from ship on
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
                    </div>
                );
            case 7:    // Cart Panning, Zooming, Measuring
                return (
                    <div className="container">
                        <h3><strong>{this.listItems[this.currentItem]}</strong></h3>
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
                        <li>Zoom buttons can be turned on/off in: Menu Button --&gt; Settings
                            --&gt; View --&gt; Zoom Buttons
                        </li>
                    </div>
                );
            case 8:    // GPS follow
                return (
                    <div className="container">
                        <h3><strong>{this.listItems[this.currentItem]}</strong></h3>
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
                        <li>When gps has speed and course, position is indicated by red
                            ship
                            <img className="btn_img" src="images/ship.png"/>
                            oriented according to present course.**
                        </li>
                        <li>When gps has no speed and course, position is indicated by red circle.**
                            <img src="images/circle.png"/></li>
                        <li>When gps has not received a fix for 3 seconds position indicator becomes greyed
                            <img src="images/shipgrey.png"/>
                            <img src="images/circlegrey.png"/>
                        </li>
                        <li>When gps accuracy is low, approximate error is indicated in
                            chart view by semi-transparent grey circle around approximate
                            position.
                        </li>
                        <br />
                        **Ship orientation will orientate towards heading if
                        "Heading" is selected in the "Orientation Mode" under the sensor
                        options.
                    </div>
                );
            case 9:    // Measure Tool
                return (
                    <div className="container">
                        <h3><strong>{this.listItems[this.currentItem]}</strong></h3>
                        <li>Push the extra tools button <img className="btn_img" src="images/tools.png"/> to show the extra tool buttons.
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
                        <h3><strong>{this.listItems[this.currentItem]}</strong></h3>
                        <li>Menu Button --&gt; Settings --&gt; Units</li>
                        <li>Position (latitude, longitude) can be displayed as Degrees, Degrees Minutes, Degrees Minutes
                            seconds
                        </li>
                        <li>Speed can be displayed as Knots, Mph, Kph</li>
                        <li>Distance can be displayed as Nautical, Statute, Metric</li>
                        <li>Bearing and Course can be displayed as True or Magnetic Magnetic bearings are calculated
                            using the World Magnetic Model courtesy of the US National Geospacial Intelligence Agency
                        </li>
                    </div>
                );
            case 11:    // Adding Waypoints
                return (
                    <div className="container">
                        <h3><strong>{this.listItems[this.currentItem]}</strong></h3>
                        <li>Push the extra tools button <img className="btn_img" src="images/tools.png"/> to show the extra tool buttons.
                        </li>
                        <li>Pan/Zoom the chart to where you would like to place your waypoint OR push the gps follow
                            button to place a waypoint at your current position.
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
                        <h3><strong>{this.listItems[this.currentItem]}</strong></h3>
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
                        <li>Select <strong>Activate</strong> to naviagate to a waypoint.</li>
                        <li>Once a waypoint is activated bearing and range will be shown on the heads up display below
                            speed and course
                        </li>
                        <br />
                        <li>Select <strong>Details</strong> to bring up a dialog and view or change a waypoint icon,
                            name, description or coordinates.
                            <li>Select <strong>Move</strong> to drag a waypoint to a new location on the map.</li>
                            <li>Pan the map and use the small <img width="16" height="16" src="images/drop.png"/> button to drop the waypoint
                                where the cursor lies or the small <img width="16" height="16" src="images/done.png"/> button to cancel.
                            </li>
                            <div className="row standard_margin_top_bottom">
                                <div className="col-xs-6 col-md-4">
                                    <LazyLoad height={"100%"}>
                                        <img className="img-responsive" src="images/waypoint_move-nq8.png"/>
                                    </LazyLoad>
                                </div>
                            </div>
                            <li>Select <strong>Hide</strong> to hide the waypoint.</li>
                            <li>Select <strong>Delete</strong> to delete the waypoint.</li>
                            <li>Note: hidden waypoints can be unhidden using the "Marks
                                Manager"
                            </li>
                        </li>
                    </div>
                );
            case 13:    // Recording A Track
                return (
                    <div className="container">
                        <h3><strong>{this.listItems[this.currentItem]}</strong></h3>
                        <li>Note: GPS must have a position lock for Track recording to start</li>
                        <li>Push the extra tools button
                            <img className="btn_img" src="images/menu.png"/>
                            to show the extra tool buttons.
                        </li>
                        <li>Push the Track button
                            <img className="btn_img" src="images/trackoff.png"/>
                            and choose "Yes" when presented with "Start recording track?" dialog.
                        </li>
                        <li>Track button will indicate tracking is in progress by turning red.
                            <img className="btn_img" src="images/trackon.png"/></li>
                        <li>Stop tracking by pushing the Track button a second time. You will be presented with a dialog
                            where you can add a name and description to your track or discard your track.
                        </li>
                    </div>
                );
            case 14:    // Working with Tracks
                return (
                    <div className="container">
                        <h3><strong>{this.listItems[this.currentItem]}</strong></h3>
                        <li>Tap on the track icon on the map and an action dialog will be
                            presented.
                        </li>
                        <img src="images/trackstart.png"/>
                        <br />
                        <br />
                        <li>You can choose details, hide or delete the selected track.</li>
                        <li>Select <strong>Details</strong> to bring up a dialog and view or change a track name and
                            description.
                            <br />
                            <li>Select <strong>Hide</strong> to hide the track.</li>
                            <br />
                            <li>Select <strong>Delete</strong> to delete the track.</li>
                            <li>Note: hidden tracks can be unhidden using the "Marks
                                Manager"
                            </li>
                        </li>
                    </div>
                );
            case 15:    // Adding Routes
                return (
                    <div className="container">
                        <h3><strong>{this.listItems[this.currentItem]}</strong></h3>
                        <li>Push the extra tools button
                            <img className="btn_img" src="images/menu.png"/>
                            to show the extra tool buttons.
                        </li>
                        <li>Pan/Zoom the chart to where you would like to start your route.</li>
                        <li>Next, push the route button to start creating a new route.
                            <img className="btn_img" src="images/route.png"/>
                        </li>
                        <li>Pan/zoom the chart and push the route button
                            <img className="btn_img" src="images/route.png"/>
                            again for each point you want to place in the route.
                            <img src="images/routestart.png"/>
                        </li>
                        <li>Pan/zoom the chart to the last point in the route and finish
                            the route by pushing the return button.
                            <img src="images/done.png"/> A dialog will be presented where you can add route details,
                            save or
                            discard route.
                        </li>
                    </div>
                );
            case 16:    // Working with Routes
                return (
                    <div className="container">
                        <h3><strong>{this.listItems[this.currentItem]}</strong></h3>
                        <li>Tap on the route icon on the map and an action dialog will be
                            presented.
                        </li>
                        <img src="images/routestart.png"/>
                        <br />
                        <br />
                        <li>You can choose activate, details, edit points, extend, hide or delete the selected route.
                        </li>
                        <br />
                        <li>Select <strong>Activate</strong> to naviagate along a route.</li>
                        <li>Once a route is activated, bearing and range will be shown on the heads up display below
                            speed and course. A dashed blue course line will also be drawn on the map to the next
                            best point along the route according to current position and course. Deactivate a route by
                            tapping on route icon and choosing deactivate. OR Routes can also be deactivated by pushing
                            the
                            <img className="btn_img" src="images/done.png"/>
                            button on the heads up display.
                        </li>
                        <img src="images/rte_active.png"/>
                        <br />
                        <li>Select <strong>Details</strong> to bring up a dialog and view or change a route name,
                            description, departure information and plan speed.
                            <br />
                            <li>Select <strong>Edit Points</strong> to put the route into edit mode where you can then
                                Move, Insert and Delete individual route points. See <strong>Route Edit Points
                                    Mode</strong> below. The large <img className="btn_img" src="images/done.png"/>
                                button
                                returns
                                the route to normal mode.
                            </li>
                            <br />
                            <li>Select <strong>Extend</strong> to add additional point(s) to the end of a route. The
                                <img className="btn_img" src="images/done.png"/> button finishes the route extension.
                                <br />
                                <li>Select <strong>Hide</strong> to hide the route.</li>
                                <br />
                                <li>Select <strong>Delete</strong> to delete the route.</li>
                                <li>Note: hidden routes can be unhidden using the "Marks
                                    Manager"
                                </li>
                            </li>
                        </li>
                    </div>
                );
            case 17:    // Route Edit Points Mode
                return (
                    <div className="container">
                        <h3><strong>{this.listItems[this.currentItem]}</strong></h3>
                        <li>Note: see <strong>Working With Routes</strong> to learn how to put a route into and out of
                            edit point mode.
                        </li>
                        <li>When a route is in edit mode all points in the route will display an icon: <img
                            src="images/routeedit.png"/> which can be tapped. When tapped, a route point can be moved,
                            inserted after, or deleted.
                        </li>
                        <br />
                        <li>Select <strong>Move</strong> to move route point: Pan the map and use the small <img
                            height="16" width="16" className="btn_img" src="images/drop.png"/> button to drop the route
                            point where
                            the cursor lies or the small <img height="16" width="16" className="btn_img"
                                                              src="images/done.png"/>
                            button to cancel the move.
                        </li>
                        <img src="images/rte_point_move_.png"/>
                        <br />
                        <li>Select <strong>Insert After</strong> to insert a new route point between the selected one
                            and next route point.
                        </li>
                        <br />
                        <li>Select <strong>Delete</strong> to delete the selected route point.</li>
                    </div>
                );
            case 18:    // Marks Manager
                return (
                    <div className="container">
                        <h3><strong>{this.listItems[this.currentItem]}</strong></h3>
                        <li>Use the Marks Manager to manage marks: Waypoints, Tracks and GPX Backups</li>
                        <li>Menu Button --&gt; Settings --&gt; Marks Manager gets you to the Marks Manager
                            <br />
                            <br />
                            <h4>Waypoints Tab</h4>
                            <img className="shot" src="images/mm_wpts.png"/>
                            <br />
                            <br />
                            <li>The list of waypoints can be sorted by name or distance from your last gps position by
                                pushing Menu Button--&gt;Sort By Name or Menu Button--&gt;Sort By Distance
                            </li>
                            <li>Waypoints can be shown or hidden in map/chart view by tapping on the waypoint(s) you
                                would like to show or hide so that a green check mark is next to them.
                                <img src="images/check.png"/>
                                Then pushing Menu Button--&gt;Toggle Selected Visibility. The waypoint icon will
                                indicate if it is hidden in the list with this icon:
                                <img src="images/hidden.png"/>
                            </li>
                            <li>Waypoints can be deleted by tapping on the waypoint(s) you would like to delete so that
                                a green check mark is next to them. Then pushing Menu Button--&gt;Delete Selected. Push
                                the "Yes" or "No button to confirm or decline deleting the selected waypoints.
                            </li>
                            <li>Individual waypoints can be viewed by long pressing on the desired waypoint icon until
                                an action dialog is presented. Choose "Zoom To" to view the waypoint. You will be
                                brought back to the map/chart view showing the waypoint. Of course now that waypoint can
                                now be edited by tapping on it in map/chart view.
                                <br />
                                <br />
                            </li>
                            <h4>Tracks Tab</h4>
                            <img className="shot" src="images/mm_trk.png"/>
                            <li>The list of tracks can be sorted by name or date by pushing Menu Button--&gt;Sort By
                                Name or Menu Button--&gt;Sort By Date
                            </li>
                            <li>Tracks can be shown or hidden in map/chart view by tapping on the tracks(s) you
                                would like to show or hide so that a green check mark is next to them.
                                <img src="images/check.png"/>
                                Then pushing Menu Button--&gt;Toggle Selected Visibility. The track icon will
                                indicate if it is hidden in the list with this icon:
                                <img src="images/hidden.png"/>
                            </li>
                            <li>Tracks can be deleted by tapping on the tracks(s) you would like to delete so that a
                                green check mark is next to them. Then
                                pushing Menu Button--&gt;Delete Selected. Push the "Yes" or "No button to confirm or
                                decline deleting the selected tracks.
                            </li>
                            <li>Individual tracks can be viewed by long pressing on the desired track icon until an
                                action dialog is presented. Choose "Zoom To" to view the track. You will be brought
                                back to the map/chart view showing the track start point.
                            </li>
                            <li>Individual tracks can be edited by long pressing on the desired track icon untul an
                                action dialog is presented. Choose "Edit" to edit the track. You will be presented
                                with a dialog where you can edit the track name and description.
                                <br />
                                <br />
                            </li>

                            <h4>Routes Tab</h4>
                            <img className="shot" src="images/mm_rtes.png"/>
                            <li>Routes can be shown or hidden in map/chart view by tapping on the route(s) you
                                would like to show or hide so that a green check mark is next to them.
                                <img src="images/check.png"/>
                                Then pushing Menu Button--&gt;Toggle Selected Visibility. The route icon will
                                indicate if it is hidden in the list with this icon:
                                <img src="images/hidden.png"/>
                            </li>
                            <li>Routes can be deleted by tapping on the route(s) you would like to delete so
                                that a green check mark is next to them. Then pushing Menu Button--&gt;Delete
                                Selected. Push the "Yes" or "No button to confirm or decline deleting the
                                selected routes.
                            </li>
                            <li>Individual routes can be viewed by long pressing on the desired waypoint icon
                                until an action dialog is presented. Choose "Zoom To" to view the waypoint. You
                                will be brought back to the map/chart view showing the waypoint. Of course now
                                that waypoint can now be edited by tapping on it in map/chart view.
                                <br />
                                <br />
                            </li>

                            <h4>GPX Backups Tab</h4>
                            <img className="shot" src="images/mm_gpx.png"/>
                            <li>All waypoints and tracks can be backed up to a GPX file by pushing Menu
                                Button--&gt;Create new GPX/Backup.
                            </li>
                            <li>GPXs can be deleted by tapping on the GPX(s) you would like to delete so
                                that a green check mark is next to them.
                                <img src="images/check.png"/>
                                Then pushing Menu Button--&gt;Delete Selected. Push the "Yes" or "No button
                                to confirm or decline deleting the selected GPXs.
                            </li>
                            <li>Individual GPX Backups can be imported by long pressing on the desired GPX
                                icon until an action dialog is presented. Choose "Import" and a second
                                confirmation dialog will be presented showing the number of waypoints and
                                tracks in the GPX file. Confirm or decline import by pushing "Yes" or "No".
                                A progress dialog will be shown as the GPX is imported. NOTE: Duplicate
                                waypoints and tracks will be skipped. After the import finishes a results
                                dialog will indicate how many items were imported and how many were skipped
                                because they already existed or were duplicates.
                            </li>
                            <li>Individual GPX Backup files can be sent (via Email or Bluetooth for example)
                                by long pressing on the desired GPX icon until an action dialog is
                                presented. Choose "Send" and a menu will be presented with various "Send"
                                options.
                            </li>
                            <li>To bring GPX files in from external programs simply open the file from an
                                external app (email client, file browser, etc) and choose MX Mariner in the
                                presented menu to open the gpx file with. This will bring you straight to
                                the "Marks Manager" with the new gpx file in the menu.**
                            </li>
                            <li>If your device does not recognize the gpx file type (MX Mariner is not
                                listed), you can manually copy your gpx file to the &lt;storage&gt;
                                /mxmariner/gpx directory.
                            </li>
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
                <li className="previous"><a onClick={this.handleClickPrevious.bind(this)}><span
                    aria-hidden="true">&larr;</span> Previous</a></li>
            )
        }
    }

    getNextLink() {
        if (manualState.getCurrentItem() < (manualState.getItems().length - 1)) {
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