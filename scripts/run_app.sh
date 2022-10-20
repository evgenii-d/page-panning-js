#!/bin/bash
app_folder=$(dirname $(dirname $(realpath $0)))
script_folder=$(dirname $(realpath $0))

chromium --autoplay-policy=no-user-gesture-required --kiosk "$app_folder/index.html"