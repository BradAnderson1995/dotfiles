
function saveOptions() {
  var page_view_allowed = true;
  var prod_view_allowed = true;
  if ( !document.getElementById('page-view-track').checked ) {
    page_view_allowed = false;
  }
  if (! document.getElementById('prod-view-track').checked ) {
    prod_view_allowed = false;
  }
  var settings = {
    page_view_allowed: page_view_allowed,
    prod_view_allowed: prod_view_allowed
  };

  console.log( settings );
  
  window.localStorage.setItem('user_settings', JSON.stringify(settings) );

  var save = document.getElementById('save');
  save.textContent = 'Saving...';
  save.disabled = true;
  setTimeout(function() {
    save.textContent = 'Saved';
    save.disabled = false;
  }, 750);
}


function restoreOptions() {
  var res = window.localStorage.getItem('user_settings');

  console.log(res);
  

  if( res ) { 
    var settings = JSON.parse(res);

    if( settings.page_view_allowed ) {
      document.getElementById('page-view-track').checked = true;
    } else {
      document.getElementById('page-view-track').checked = false;
    } if ( settings.prod_view_allowed ) {
      document.getElementById('prod-view-track').checked = true;
    } else {
      document.getElementById('prod-view-track').checked = false;
    }

  }
}


restoreOptions();
var save = document.getElementById('save')
save.onclick = saveOptions;