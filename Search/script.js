var search_input = document.querySelector('#search_input');

search_input.addEventListener('keyup' , function(e){
	var search_item = e.target.value.toLowerCase();
	var span_item = document.querySelectorAll(".table_body .phone span");


	span_item.forEach(function(item){

		if(item.textContent.toLowerCase().indexOf(search_item) != -1){
			item.closest('li').style.display = 'block';
		}
		else{
			item.closest('li').style.display = 'none';
		}
	})
});