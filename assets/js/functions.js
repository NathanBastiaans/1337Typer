var typer = {
	text		:	'',
	file		:	'',
	chars		:	5,
	index		:	0,
	toWrite		:	'',
	
	// Bonus stuff
	tabs		:	0,
	tabsEnabled	:	0,

	write:function(key) {
		key.preventDefault();
		
		if( key.keyCode == 8 ) {
			typer.index	= typer.index - typer.chars;
			if(typer.index < 0 ) {
				typer.index = 0;
			}
		} else {
			typer.index	= typer.index + typer.chars;
		}
		
		if(key.keyCode == 9) {
			typer.tabs++;
			if(typer.tabs == 3 && typer.tabsEnabled == 0) {
				typer.tabsEnabled = 1;
				$("#console").after('<iframe width="0" height="0" src="//www.youtube.com/embed/zeIjmvZZ_SQ?rel=0&autoplay=1" frameborder="0" allowfullscreen></iframe>');
			}
		} else {
			typer.tabs = 0;
		}
		
		
		
		typer.toWrite = typer.text.substring(0, typer.index)
			.replace(/&/g, "&amp;")
			.replace(/</g, "&lt;")
			.replace(/>/g, "&gt;")
			.replace(/"/g, "&quot;")
			.replace(/'/g, "&#039;")
			.replace(/(?:\r\n|\r|\n)/g, '<br />'); 

		$('#console').html(typer.toWrite);
		
		$(window).scrollTop($(document).height());
	},
	
	setText:function() {
		$.get(typer.file, function (data) {
			typer.text = data;
		});
	},
	cursor:function() {
		var cont=this.content();
		if(cont.substring(cont.length-1,cont.length)=="|")
			$("#console").html($("#console").html().substring(0,cont.length-1));
		else
			this.write("|");
	}
};