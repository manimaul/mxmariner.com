import os
import os.path

dir = os.path.abspath(os.path.dirname(__file__))

s = set([
    'menu_clip_nq8',
    'all_nq8',
    'chart_list_nq8',
    'chart_download_nq8',
    'chart_delete_nq8',
    'chart_list_nq8',
    'chart_download_nq8',
    'drawer_map_type_nq8',
    'sensors_nq8',
    'zoomin',
    'zoomout',
    'followde',
    'follownu',
    'followhu',
    'followde',
    'ship',
    'circle',
    'shipgrey',
    'circlegrey',
    'tools',
    'measure',
    'measure_nq8',
    'done',
    'units_nq8',
    'units_pos_nq8',
    'units_spd_nq8',
    'units_dist_nq8',
    'units_brng_course_nq8',
    'tools',
    'followde',
    'waypoint',
    'waypoint_dialog_nq8',
    'waypoint_action_dialog_nq8',
    'drop',
    'done',
    'waypoint_move_nq8',
    'tools',
    'trackoff',
    'trackon',
    'trackstart',
    'track_action_dialog_nq8',
    'tools',
    'route',
    'route',
    'routestart',
    'done',
    'routestart',
    'route_action_dialog_nq8',
    'done',
    'route_nq8',
    'done',
    'done',
    'routeedit',
    'route_edit_action_dialog_nq8',
    'drop',
    'done',
    'route_edit_nq8',
    'mm_wpts_nq8',
    'mm_wpts_action_dialog_nq8',
    'mainmenu',
    'check',
    'check',
    'hidden',
    'check',
    'mm_wpt_lp_ad_nq8',
    'mm_trk_nq8',
    'mm_trk_action_dialog_nq8',
    'mainmenu',
    'check',
    'check',
    'hidden',
    'check',
    'mm_trk_lp_ad_nq8',
    'mm_trk_lp_edit_nq8',
    'mm_rte_nq8',
    'mm_rte_action_dialog_nq8',
    'mm_rte_lp_ad_nq8',
    'mainmenu',
    'check',
    'check',
    'hidden',
    'check',
    'mm_rte_lp_ad_nq8',
    'mm_gpx_nq8',
    'mm_gpx_action_dialog_nq8',
    'mm_gpx_lp_ad_nq8',
    'mainmenu',
    'check',
    'check',
    'hidden',
    'check',
    'mm_gpx_lp_ad_nq8',
    'placeholder',
])

for i in s:
    print(i)
#
# for f in [i for i in os.listdir(dir) if i.endswith('-nq8.png')]:
#     os.rename(os.path.join(dir, f), os.path.join(dir, f.replace('-', '_')))
