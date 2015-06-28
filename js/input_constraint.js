$(document).ready(function() {

	// input only integers
	$('body').delegate('input.only_integer','keyup',function(){
		if(!$(this).val().match(/^\-?[0-9]*$/))	// numbers
			remove_last_input(this);
	});

	// input only floats
	$('body').delegate('input.only_float','keyup',function(){
		if(!$(this).val().match(/^\-?[0-9]*[\.,]?[0-9]*$/))	// numbers[.,]numbers
			remove_last_input(this);
	});

	// input phone number
	$('body').delegate('input.only_phone_number','keyup',function(){
		if(!$(this).val().match(/^\+?[0-9 ]*$/))	// +numbers or space
			remove_last_input(this);
	});

	// input zip code
	$('body').delegate('input.only_zip_code','keyup',function(){
		if(!$(this).val().match(/^[0-9]{0,5}$/))	// 5 numbers maximum
			remove_last_input(this);
	});

	// input email
	$('body').delegate('input.only_email','keyup',function(){
		if(!$(this).val().match(/^[a-z0-9\-\.\_]*@?[a-z0-9\-\.]*\.?[0-9a-z]*$/i))	// a-z and 0-9
			remove_last_input(this);
	});

	// input alpha-num
	$('body').delegate('input.only_alpha_num','keyup',function(){
		if(!$(this).val().match(/^[0-9a-z]*$/i))	// a-z and 0-9
			remove_last_input(this);
	});

	// input alpha
	$('body').delegate('input.only_alpha','keyup',function(){
		if(!$(this).val().match(/^[a-z]*$/i))	// a-z
			remove_last_input(this);
	});

	// input alpha majuscule
	$('body').delegate('input.alpha_uppercase','keyup',function(){
        this.value = this.value.toLocaleUpperCase();
		if(!$(this).val().match(/^[a-zA-Z]*$/i))	// a-z
			remove_last_input(this);
	});
    
	// input hex
	$('body').delegate('input.only_hex','keyup',function(){
		if(!$(this).val().match(/^[0-9a-f]*$/i))	// 0-9 a-f
			remove_last_input(this);
	});

	// input oct
	$('body').delegate('input.only_oct','keyup',function(){
		if(!$(this).val().match(/^[0-7]*$/i))	// 0-7
			remove_last_input(this);
	});

	// input chemical element
	$('body').delegate('input.only_from_list','keyup',function(){
		var available_values = $(this).attr('list').split(','); // get le valid values from the 'list' attribut
		var val = $(this).val();
		if (val) { // something to analyse
			var valid_input = false;
			for (var elm in available_values) {
				if (val == available_values[elm].substr(0,val.length)) {
					valid_input = true; break;
				}
			}

			if (!valid_input)
				remove_last_input(this);
		}
	});
    

}); // end of document.ready


function remove_last_input(elm) {
	var val = $(elm).val();
	var cursorPos = elm.selectionStart;
	$(elm).val(	val.substr(0,cursorPos-1) +			// before cursor - 1
				val.substr(cursorPos,val.length)	// after  cursor
	)
	elm.selectionStart = cursorPos-1;				// replace the cursor at the right place
	elm.selectionEnd   = cursorPos-1;
}