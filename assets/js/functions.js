var typer = {
	text	:	'',
	file	:	'',
	chars	:	5,
	index	:	0,
	toWrite	:	'',
	
	write:function() {
		typer.index	= typer.index + typer.chars;
		
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
	}
};