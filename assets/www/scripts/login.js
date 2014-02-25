
$(document).ready(function(){
  $("#page_login_submit").click(function(){
    var name = $('#page_login_name').val();
  if (!name) { alert('Please enter your user name.'); return false; }
  var pass = $('#page_login_pass').val();
  if (!pass) { alert('Please enter your password.'); return false; }
  
  // BEGIN
  $.ajax({
      url: "http://172.118.0.32/drupal_joe/?q=my_services/user/login.json",
      type: 'post',
      data: 'username=' + encodeURIComponent(name) + '&password=' + encodeURIComponent(pass),
      dataType: 'json',
      error: function(XMLHttpRequest, textStatus, errorThrown) {
        alert('page_login_submit - failed to login');
        console.log(JSON.stringify(XMLHttpRequest));
        console.log(JSON.stringify(textStatus));
        console.log(JSON.stringify(errorThrown));
      },
      success: function (data) {
	  sessionStorage.setItem("user", name);
	  //alert(sessionStorage.getItem('user').uid);
       $.mobile.changePage("main.html", "slideup");
      }
  });
  // END
  return false;
  });
});