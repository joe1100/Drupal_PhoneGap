$(document).ready(function(){
	$('#page_node_create_submit').on('click',function(){

	  var title = $('#page_node_title').val();
	  if (title==null) { alert('Please enter a title.'); return false; }

	  var body = $('#page_node_body').val();
	  if (body==null) { alert('Please enter a body.'); return false; }

	  // BEGIN: 
	  $.ajax({
		  url: "http://172.118.0.32/drupal_joe/?q=my_services/node/create.json",
		  type: 'post',
		  data: 'node[type]=page&node[title]=' + encodeURIComponent(title) + '&node[language]=und&node[body][und][0][value]=' + encodeURIComponent(body),
		  dataType: 'json',
		  error: function(XMLHttpRequest, textStatus, errorThrown) {
			//alert('page_node_create_submit - failed to login');
			alert(JSON.stringify(XMLHttpRequest)+'|'+JSON.stringify(textStatus)+'|'+JSON.stringify(errorThrown));
			console.log(JSON.stringify(XMLHttpRequest));
			console.log(JSON.stringify(textStatus));
			console.log(JSON.stringify(errorThrown));
		  },
		  success: function (data) {
		   $.mobile.changePage("index.html", "slideup");
		  }
	  });
	  // END: 

	  return false;

	});
});