#!/usr/bin/env bash
xmodmap ~/.xmodmap &
cinnamon-settings-daemon &
gnome-settings-daemon &
gnome-volume-manager &
terminator -l 3split &
dropbox &
# shutter &
exec cinnamon-session
