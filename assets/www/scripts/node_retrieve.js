$(document).ready(function(){
	$('#get_node_retrieve').on('click',function(){
	  $.ajax({
		  url: "http://172.118.0.32/drupal_joe/?q=my_services/node/6.json",
		  type: 'get',
		  data: '',
		  dataType: 'json',
		  error: function(XMLHttpRequest, textStatus, errorThrown) {
			//alert('page_node_create_submit - failed to login');
			alert(JSON.stringify(XMLHttpRequest)+'|'+JSON.stringify(textStatus)+'|'+JSON.stringify(errorThrown));
			console.log(JSON.stringify(XMLHttpRequest));
			console.log(JSON.stringify(textStatus));
			console.log(JSON.stringify(errorThrown));
		  },
		  success: function (data) {
		  //alert(data.body);
		   var article='';
		   if(data.title!=null){
				article+=data.title;
		   }
		   if(data.body.und!=null){
				article+=data.body.und[0].value;
		   }
		   $('#node_content').html(article);
		   //$.mobile.changePage("main.html#page_node_retrieve", "slideup");
		  }
	  });
	  return false;

	});
});