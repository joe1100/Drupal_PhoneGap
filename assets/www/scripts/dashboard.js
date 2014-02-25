var nid; // 

$('#page_dashboard').on('pageshow',function(){
	$('#user_name').html('user:'+sessionStorage.getItem('user'));
 /* try {
    $.ajax({
      url: "http://192.168.0.101/drupal/?q=my_services/system/connect.json",
      type: 'post',
      dataType: 'json',
      error: function (XMLHttpRequest, textStatus, errorThrown) {
        alert('page_dashboard - failed to system connect');
        console.log(JSON.stringify(XMLHttpRequest));
        console.log(JSON.stringify(textStatus));
        console.log(JSON.stringify(errorThrown));
      },
      success: function (data) {
        var drupal_user = data.user;
		//alert(sessionStorage.getItem('user'));
        if (drupal_user.uid == 0&&sessionStorage.getItem('user')==null) { 
          $('#button_login').show();
          $('#button_logout').hide();
        }
        else {
          $('#button_login').hide();
          $('#button_logout').show();
        }
      }
    });
  }
  catch (error) { alert("page_dashboard - " + error); }
  */
});

$(document).ready(function(){
	$('#button_logout').on("click",function(){
	try {
	 $.ajax({
		 url: "http://172.118.0.32/drupal_joe/?q=my_services/user/logout.json",
		 type: 'post',
		 dataType: 'json',
		 error: function (XMLHttpRequest, textStatus, errorThrown) {
		   alert(JSON.stringify(XMLHttpRequest)+'|'+JSON.stringify(textStatus)+'|'+JSON.stringify(errorThrown));
		   console.log(JSON.stringify(XMLHttpRequest));
		   console.log(JSON.stringify(textStatus));
		   console.log(JSON.stringify(errorThrown));
		 },
		 success: function (data) {
		   alert("You have been logged out.");
		   $.mobile.changePage("login.html",{reloadPage:true},{allowSamePageTranstion:true},{transition:'none'});
		 }
	 });
	}
	catch (error) { alert("button_logout - " + error); }
	return false;
	});
});
