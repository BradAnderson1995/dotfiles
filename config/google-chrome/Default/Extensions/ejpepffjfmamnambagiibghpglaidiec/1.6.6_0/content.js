/*
  A content script that stops Facebook from tracking the webpages you go to.

  Copyright 2010, 2011 Disconnect, Inc.

  This program is free software: you can redistribute it and/or modify it under
  the terms of the GNU General Public License as published by the Free Software
  Foundation, either version 3 of the License, or (at your option) any later
  version.

  This program is distributed in the hope that it will be useful, but WITHOUT
  ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
  FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.

  You should have received a copy of the GNU General Public License along with
  this program. If not, see <http://www.gnu.org/licenses/>.

  Authors (one per line):

    Eason Goodale <eason.goodale@gmail.com>
*/

if (location.href.indexOf('facebook-disconnect') + 1) {
    document.addEventListener("DOMContentLoaded", function() {

      document.getElementById('upgrade').addEventListener('click', function(e) {
        chrome.runtime.sendMessage({message: "upgraded"});
      }, false);

      document.getElementById('current').addEventListener('click', function(e) {
        e.preventDefault();
        chrome.runtime.sendMessage({message: "current"});
        window.location.href = "https://disconnect.me/disconnect/alreadyupgraded";
      }, false);

      document.getElementById('dont').addEventListener('click', function(e) {
        chrome.runtime.sendMessage({message: "dont"});
      }, false);

      var reminder = document.getElementById('reminder').addEventListener('click', function(e) {
        e.preventDefault();
        chrome.runtime.sendMessage({date: new Date()});
        window.location.href = "https://disconnect.me/disconnect/remindmelater";
      }, false);
    });
}
