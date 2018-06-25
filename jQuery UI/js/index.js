$(document).ready(function() {
	$(".piezas1").draggable({ revert: "invalid" });
	$(".piezas2").draggable({ revert: "invalid" });

	$("#row_1_col_2").droppable({
		drop: function(event, ui) {
			var row = parseInt($(this).attr("data-row"));
			var col = parseInt($(this).attr("data-col"));
			var row_previus = parseInt(ui.draggable.parent().attr("id").substr(4, 1));
			var col_previus = parseInt(ui.draggable.parent().attr("id").substr(10, 1));
			$(ui.draggable).appendTo($(this));
			if(ui.draggable.hasClass("piezas1")) {
				if((row - 2) == row_previus) {
					col_ = (col_previus > col) ? col_previus - 1 : col_previus + 1;
					div_id = 'row_' + (row - 1) + "_col_" + col_;
					$("#" + div_id).empty();
				}
			} else {
				if((row + 2) == row_previus) {
					col_ = (col_previus > col) ? col_previus - 1 : col_previus + 1;
					div_id = 'row_' + (row + 1) + "_col_" + col_;
					$("#" + div_id).empty();
				}
			}
		},
		accept: function(d) {
			var parentDiv = d.parent().prop('id');
			var row = parseInt(parentDiv.substr(4, 1));
			var col = parseInt(parentDiv.substr(10, 1));
			var row_drop = parseInt($(this).attr("data-row"));
			var col_drop = parseInt($(this).attr("data-col"));
			if (d.hasClass( "piezas1" )) {
				if((row_drop - 2) == row) {
					col_previus = (col > col_drop) ? col_drop + 1 : col_drop - 1;
					div_id = 'row_' + (row_drop - 1) + "_col_" + col_previus;
					return ($("#"+div_id).children().hasClass("piezas2") && ! $(this).children().length > 0 );
				}
				return ((row_drop - 1) == row && (col_drop -1 == col || col_drop + 1 == col) && (! $(this).children().length > 0 ));
			} else {
				if((row_drop + 2) == row) {
					col_previus = (col > col_drop) ? col_drop + 1 : col_drop - 1;
					div_id = 'row_' + (row_drop + 1) + "_col_" + col_previus;
					return ($("#"+div_id).children().hasClass("piezas1") && ! $(this).children().length > 0 );
				}
				return ((row_drop + 1) == row && (col_drop -1 == col || col_drop + 1 == col) && (! $(this).children().length > 0 ));
			}
		}
	});

	$("#row_1_col_4").droppable({
		drop: function(event, ui) {
			var row = parseInt($(this).attr("data-row"));
			var col = parseInt($(this).attr("data-col"));
			var row_previus = parseInt(ui.draggable.parent().attr("id").substr(4, 1));
			var col_previus = parseInt(ui.draggable.parent().attr("id").substr(10, 1));
			$(ui.draggable).appendTo($(this));
			if(ui.draggable.hasClass("piezas1")) {
				if((row - 2) == row_previus) {
					col_ = (col_previus > col) ? col_previus - 1 : col_previus + 1;
					div_id = 'row_' + (row - 1) + "_col_" + col_;
					$("#" + div_id).empty();
				}
			} else {
				if((row + 2) == row_previus) {
					col_ = (col_previus > col) ? col_previus - 1 : col_previus + 1;
					div_id = 'row_' + (row + 1) + "_col_" + col_;
					$("#" + div_id).empty();
				}
			}
		},
		accept: function(d) {
			var parentDiv = d.parent().prop('id');
			var row = parseInt(parentDiv.substr(4, 1));
			var col = parseInt(parentDiv.substr(10, 1));
			var row_drop = parseInt($(this).attr("data-row"));
			var col_drop = parseInt($(this).attr("data-col"));
			if (d.hasClass( "piezas1" )) {
				if((row_drop - 2) == row) {
					col_previus = (col > col_drop) ? col_drop + 1 : col_drop - 1;
					div_id = 'row_' + (row_drop - 1) + "_col_" + col_previus;
					return ($("#"+div_id).children().hasClass("piezas2") && ! $(this).children().length > 0 );
				}
				return ((row_drop - 1) == row && (col_drop -1 == col || col_drop + 1 == col) && (! $(this).children().length > 0 ));
			} else {
				if((row_drop + 2) == row) {
					col_previus = (col > col_drop) ? col_drop + 1 : col_drop - 1;
					div_id = 'row_' + (row_drop + 1) + "_col_" + col_previus;
					return ($("#"+div_id).children().hasClass("piezas1") && ! $(this).children().length > 0 );
				}
				return ((row_drop + 1) == row && (col_drop -1 == col || col_drop + 1 == col) && (! $(this).children().length > 0 ));
			}
		}
	});

	$("#row_1_col_6").droppable({
		drop: function(event, ui) {
			var row = parseInt($(this).attr("data-row"));
			var col = parseInt($(this).attr("data-col"));
			var row_previus = parseInt(ui.draggable.parent().attr("id").substr(4, 1));
			var col_previus = parseInt(ui.draggable.parent().attr("id").substr(10, 1));
			$(ui.draggable).appendTo($(this));
			if(ui.draggable.hasClass("piezas1")) {
				if((row - 2) == row_previus) {
					col_ = (col_previus > col) ? col_previus - 1 : col_previus + 1;
					div_id = 'row_' + (row - 1) + "_col_" + col_;
					$("#" + div_id).empty();
				}
			} else {
				if((row + 2) == row_previus) {
					col_ = (col_previus > col) ? col_previus - 1 : col_previus + 1;
					div_id = 'row_' + (row + 1) + "_col_" + col_;
					$("#" + div_id).empty();
				}
			}
		},
		accept: function(d) {
			var parentDiv = d.parent().prop('id');
			var row = parseInt(parentDiv.substr(4, 1));
			var col = parseInt(parentDiv.substr(10, 1));
			var row_drop = parseInt($(this).attr("data-row"));
			var col_drop = parseInt($(this).attr("data-col"));
			if (d.hasClass( "piezas1" )) {
				if((row_drop - 2) == row) {
					col_previus = (col > col_drop) ? col_drop + 1 : col_drop - 1;
					div_id = 'row_' + (row_drop - 1) + "_col_" + col_previus;
					return ($("#"+div_id).children().hasClass("piezas2") && ! $(this).children().length > 0 );
				}
				return ((row_drop - 1) == row && (col_drop -1 == col || col_drop + 1 == col) && (! $(this).children().length > 0 ));
			} else {
				if((row_drop + 2) == row) {
					col_previus = (col > col_drop) ? col_drop + 1 : col_drop - 1;
					div_id = 'row_' + (row_drop + 1) + "_col_" + col_previus;
					return ($("#"+div_id).children().hasClass("piezas1") && ! $(this).children().length > 0 );
				}
				return ((row_drop + 1) == row && (col_drop -1 == col || col_drop + 1 == col) && (! $(this).children().length > 0 ));
			}
		}
	});

	$("#row_1_col_8").droppable({
		drop: function(event, ui) {
			var row = parseInt($(this).attr("data-row"));
			var col = parseInt($(this).attr("data-col"));
			var row_previus = parseInt(ui.draggable.parent().attr("id").substr(4, 1));
			var col_previus = parseInt(ui.draggable.parent().attr("id").substr(10, 1));
			$(ui.draggable).appendTo($(this));
			if(ui.draggable.hasClass("piezas1")) {
				if((row - 2) == row_previus) {
					col_ = (col_previus > col) ? col_previus - 1 : col_previus + 1;
					div_id = 'row_' + (row - 1) + "_col_" + col_;
					$("#" + div_id).empty();
				}
			} else {
				if((row + 2) == row_previus) {
					col_ = (col_previus > col) ? col_previus - 1 : col_previus + 1;
					div_id = 'row_' + (row + 1) + "_col_" + col_;
					$("#" + div_id).empty();
				}
			}
		},
		accept: function(d) {
			var parentDiv = d.parent().prop('id');
			var row = parseInt(parentDiv.substr(4, 1));
			var col = parseInt(parentDiv.substr(10, 1));
			var row_drop = parseInt($(this).attr("data-row"));
			var col_drop = parseInt($(this).attr("data-col"));
			if (d.hasClass( "piezas1" )) {
				if((row_drop - 2) == row) {
					col_previus = (col > col_drop) ? col_drop + 1 : col_drop - 1;
					div_id = 'row_' + (row_drop - 1) + "_col_" + col_previus;
					return ($("#"+div_id).children().hasClass("piezas2") && ! $(this).children().length > 0 );
				}
				return ((row_drop - 1) == row && (col_drop -1 == col || col_drop + 1 == col) && (! $(this).children().length > 0 ));
			} else {
				if((row_drop + 2) == row) {
					col_previus = (col > col_drop) ? col_drop + 1 : col_drop - 1;
					div_id = 'row_' + (row_drop + 1) + "_col_" + col_previus;
					return ($("#"+div_id).children().hasClass("piezas1") && ! $(this).children().length > 0 );
				}
				return ((row_drop + 1) == row && (col_drop -1 == col || col_drop + 1 == col) && (! $(this).children().length > 0 ));
			}
		}
	});

	$("#row_2_col_1").droppable({
		drop: function(event, ui) {
			var row = parseInt($(this).attr("data-row"));
			var col = parseInt($(this).attr("data-col"));
			var row_previus = parseInt(ui.draggable.parent().attr("id").substr(4, 1));
			var col_previus = parseInt(ui.draggable.parent().attr("id").substr(10, 1));
			$(ui.draggable).appendTo($(this));
			if(ui.draggable.hasClass("piezas1")) {
				if((row - 2) == row_previus) {
					col_ = (col_previus > col) ? col_previus - 1 : col_previus + 1;
					div_id = 'row_' + (row - 1) + "_col_" + col_;
					$("#" + div_id).empty();
				}
			} else {
				if((row + 2) == row_previus) {
					col_ = (col_previus > col) ? col_previus - 1 : col_previus + 1;
					div_id = 'row_' + (row + 1) + "_col_" + col_;
					$("#" + div_id).empty();
				}
			}
		},
		accept: function(d) {
			var parentDiv = d.parent().prop('id');
			var row = parseInt(parentDiv.substr(4, 1));
			var col = parseInt(parentDiv.substr(10, 1));
			var row_drop = parseInt($(this).attr("data-row"));
			var col_drop = parseInt($(this).attr("data-col"));
			if (d.hasClass( "piezas1" )) {
				if((row_drop - 2) == row) {
					col_previus = (col > col_drop) ? col_drop + 1 : col_drop - 1;
					div_id = 'row_' + (row_drop - 1) + "_col_" + col_previus;
					return ($("#"+div_id).children().hasClass("piezas2") && ! $(this).children().length > 0 );
				}
				return ((row_drop - 1) == row && (col_drop -1 == col || col_drop + 1 == col) && (! $(this).children().length > 0 ));
			} else {
				if((row_drop + 2) == row) {
					col_previus = (col > col_drop) ? col_drop + 1 : col_drop - 1;
					div_id = 'row_' + (row_drop + 1) + "_col_" + col_previus;
					return ($("#"+div_id).children().hasClass("piezas1") && ! $(this).children().length > 0 );
				}
				return ((row_drop + 1) == row && (col_drop -1 == col || col_drop + 1 == col) && (! $(this).children().length > 0 ));
			}
		}
	});

	$("#row_2_col_3").droppable({
		drop: function(event, ui) {
			var row = parseInt($(this).attr("data-row"));
			var col = parseInt($(this).attr("data-col"));
			var row_previus = parseInt(ui.draggable.parent().attr("id").substr(4, 1));
			var col_previus = parseInt(ui.draggable.parent().attr("id").substr(10, 1));
			$(ui.draggable).appendTo($(this));
			if(ui.draggable.hasClass("piezas1")) {
				if((row - 2) == row_previus) {
					col_ = (col_previus > col) ? col_previus - 1 : col_previus + 1;
					div_id = 'row_' + (row - 1) + "_col_" + col_;
					$("#" + div_id).empty();
				}
			} else {
				if((row + 2) == row_previus) {
					col_ = (col_previus > col) ? col_previus - 1 : col_previus + 1;
					div_id = 'row_' + (row + 1) + "_col_" + col_;
					$("#" + div_id).empty();
				}
			}
		},
		accept: function(d) {
			var parentDiv = d.parent().prop('id');
			var row = parseInt(parentDiv.substr(4, 1));
			var col = parseInt(parentDiv.substr(10, 1));
			var row_drop = parseInt($(this).attr("data-row"));
			var col_drop = parseInt($(this).attr("data-col"));
			if (d.hasClass( "piezas1" )) {
				if((row_drop - 2) == row) {
					col_previus = (col > col_drop) ? col_drop + 1 : col_drop - 1;
					div_id = 'row_' + (row_drop - 1) + "_col_" + col_previus;
					return ($("#"+div_id).children().hasClass("piezas2") && ! $(this).children().length > 0 );
				}
				return ((row_drop - 1) == row && (col_drop -1 == col || col_drop + 1 == col) && (! $(this).children().length > 0 ));
			} else {
				if((row_drop + 2) == row) {
					col_previus = (col > col_drop) ? col_drop + 1 : col_drop - 1;
					div_id = 'row_' + (row_drop + 1) + "_col_" + col_previus;
					return ($("#"+div_id).children().hasClass("piezas1") && ! $(this).children().length > 0 );
				}
				return ((row_drop + 1) == row && (col_drop -1 == col || col_drop + 1 == col) && (! $(this).children().length > 0 ));
			}
		}
	});

	$("#row_2_col_5").droppable({
		drop: function(event, ui) {
			var row = parseInt($(this).attr("data-row"));
			var col = parseInt($(this).attr("data-col"));
			var row_previus = parseInt(ui.draggable.parent().attr("id").substr(4, 1));
			var col_previus = parseInt(ui.draggable.parent().attr("id").substr(10, 1));
			$(ui.draggable).appendTo($(this));
			if(ui.draggable.hasClass("piezas1")) {
				if((row - 2) == row_previus) {
					col_ = (col_previus > col) ? col_previus - 1 : col_previus + 1;
					div_id = 'row_' + (row - 1) + "_col_" + col_;
					$("#" + div_id).empty();
				}
			} else {
				if((row + 2) == row_previus) {
					col_ = (col_previus > col) ? col_previus - 1 : col_previus + 1;
					div_id = 'row_' + (row + 1) + "_col_" + col_;
					$("#" + div_id).empty();
				}
			}
		},
		accept: function(d) {
			var parentDiv = d.parent().prop('id');
			var row = parseInt(parentDiv.substr(4, 1));
			var col = parseInt(parentDiv.substr(10, 1));
			var row_drop = parseInt($(this).attr("data-row"));
			var col_drop = parseInt($(this).attr("data-col"));
			if (d.hasClass( "piezas1" )) {
				if((row_drop - 2) == row) {
					col_previus = (col > col_drop) ? col_drop + 1 : col_drop - 1;
					div_id = 'row_' + (row_drop - 1) + "_col_" + col_previus;
					return ($("#"+div_id).children().hasClass("piezas2") && ! $(this).children().length > 0 );
				}
				return ((row_drop - 1) == row && (col_drop -1 == col || col_drop + 1 == col) && (! $(this).children().length > 0 ));
			} else {
				if((row_drop + 2) == row) {
					col_previus = (col > col_drop) ? col_drop + 1 : col_drop - 1;
					div_id = 'row_' + (row_drop + 1) + "_col_" + col_previus;
					return ($("#"+div_id).children().hasClass("piezas1") && ! $(this).children().length > 0 );
				}
				return ((row_drop + 1) == row && (col_drop -1 == col || col_drop + 1 == col) && (! $(this).children().length > 0 ));
			}
		}
	});

	$("#row_2_col_7").droppable({
		drop: function(event, ui) {
			var row = parseInt($(this).attr("data-row"));
			var col = parseInt($(this).attr("data-col"));
			var row_previus = parseInt(ui.draggable.parent().attr("id").substr(4, 1));
			var col_previus = parseInt(ui.draggable.parent().attr("id").substr(10, 1));
			$(ui.draggable).appendTo($(this));
			if(ui.draggable.hasClass("piezas1")) {
				if((row - 2) == row_previus) {
					col_ = (col_previus > col) ? col_previus - 1 : col_previus + 1;
					div_id = 'row_' + (row - 1) + "_col_" + col_;
					$("#" + div_id).empty();
				}
			} else {
				if((row + 2) == row_previus) {
					col_ = (col_previus > col) ? col_previus - 1 : col_previus + 1;
					div_id = 'row_' + (row + 1) + "_col_" + col_;
					$("#" + div_id).empty();
				}
			}
		},
		accept: function(d) {
			var parentDiv = d.parent().prop('id');
			var row = parseInt(parentDiv.substr(4, 1));
			var col = parseInt(parentDiv.substr(10, 1));
			var row_drop = parseInt($(this).attr("data-row"));
			var col_drop = parseInt($(this).attr("data-col"));
			if (d.hasClass( "piezas1" )) {
				if((row_drop - 2) == row) {
					col_previus = (col > col_drop) ? col_drop + 1 : col_drop - 1;
					div_id = 'row_' + (row_drop - 1) + "_col_" + col_previus;
					return ($("#"+div_id).children().hasClass("piezas2") && ! $(this).children().length > 0 );
				}
				return ((row_drop - 1) == row && (col_drop -1 == col || col_drop + 1 == col) && (! $(this).children().length > 0 ));
			} else {
				if((row_drop + 2) == row) {
					col_previus = (col > col_drop) ? col_drop + 1 : col_drop - 1;
					div_id = 'row_' + (row_drop + 1) + "_col_" + col_previus;
					return ($("#"+div_id).children().hasClass("piezas1") && ! $(this).children().length > 0 );
				}
				return ((row_drop + 1) == row && (col_drop -1 == col || col_drop + 1 == col) && (! $(this).children().length > 0 ));
			}
		}
	});

	$("#row_3_col_2").droppable({
		drop: function(event, ui) {
			var row = parseInt($(this).attr("data-row"));
			var col = parseInt($(this).attr("data-col"));
			var row_previus = parseInt(ui.draggable.parent().attr("id").substr(4, 1));
			var col_previus = parseInt(ui.draggable.parent().attr("id").substr(10, 1));
			$(ui.draggable).appendTo($(this));
			if(ui.draggable.hasClass("piezas1")) {
				if((row - 2) == row_previus) {
					col_ = (col_previus > col) ? col_previus - 1 : col_previus + 1;
					div_id = 'row_' + (row - 1) + "_col_" + col_;
					$("#" + div_id).empty();
				}
			} else {
				if((row + 2) == row_previus) {
					col_ = (col_previus > col) ? col_previus - 1 : col_previus + 1;
					div_id = 'row_' + (row + 1) + "_col_" + col_;
					$("#" + div_id).empty();
				}
			}
		},
		accept: function(d) {
			var parentDiv = d.parent().prop('id');
			var row = parseInt(parentDiv.substr(4, 1));
			var col = parseInt(parentDiv.substr(10, 1));
			var row_drop = parseInt($(this).attr("data-row"));
			var col_drop = parseInt($(this).attr("data-col"));
			if (d.hasClass( "piezas1" )) {
				if((row_drop - 2) == row) {
					col_previus = (col > col_drop) ? col_drop + 1 : col_drop - 1;
					div_id = 'row_' + (row_drop - 1) + "_col_" + col_previus;
					return ($("#"+div_id).children().hasClass("piezas2") && ! $(this).children().length > 0 );
				}
				return ((row_drop - 1) == row && (col_drop -1 == col || col_drop + 1 == col) && (! $(this).children().length > 0 ));
			} else {
				if((row_drop + 2) == row) {
					col_previus = (col > col_drop) ? col_drop + 1 : col_drop - 1;
					div_id = 'row_' + (row_drop + 1) + "_col_" + col_previus;
					return ($("#"+div_id).children().hasClass("piezas1") && ! $(this).children().length > 0 );
				}
				return ((row_drop + 1) == row && (col_drop -1 == col || col_drop + 1 == col) && (! $(this).children().length > 0 ));
			}
		}
	});

	$("#row_3_col_4").droppable({
		drop: function(event, ui) {
			var row = parseInt($(this).attr("data-row"));
			var col = parseInt($(this).attr("data-col"));
			var row_previus = parseInt(ui.draggable.parent().attr("id").substr(4, 1));
			var col_previus = parseInt(ui.draggable.parent().attr("id").substr(10, 1));
			$(ui.draggable).appendTo($(this));
			if(ui.draggable.hasClass("piezas1")) {
				if((row - 2) == row_previus) {
					col_ = (col_previus > col) ? col_previus - 1 : col_previus + 1;
					div_id = 'row_' + (row - 1) + "_col_" + col_;
					$("#" + div_id).empty();
				}
			} else {
				if((row + 2) == row_previus) {
					col_ = (col_previus > col) ? col_previus - 1 : col_previus + 1;
					div_id = 'row_' + (row + 1) + "_col_" + col_;
					$("#" + div_id).empty();
				}
			}
		},
		accept: function(d) {
			var parentDiv = d.parent().prop('id');
			var row = parseInt(parentDiv.substr(4, 1));
			var col = parseInt(parentDiv.substr(10, 1));
			var row_drop = parseInt($(this).attr("data-row"));
			var col_drop = parseInt($(this).attr("data-col"));
			if (d.hasClass( "piezas1" )) {
				if((row_drop - 2) == row) {
					col_previus = (col > col_drop) ? col_drop + 1 : col_drop - 1;
					div_id = 'row_' + (row_drop - 1) + "_col_" + col_previus;
					return ($("#"+div_id).children().hasClass("piezas2") && ! $(this).children().length > 0 );
				}
				return ((row_drop - 1) == row && (col_drop -1 == col || col_drop + 1 == col) && (! $(this).children().length > 0 ));
			} else {
				if((row_drop + 2) == row) {
					col_previus = (col > col_drop) ? col_drop + 1 : col_drop - 1;
					div_id = 'row_' + (row_drop + 1) + "_col_" + col_previus;
					return ($("#"+div_id).children().hasClass("piezas1") && ! $(this).children().length > 0 );
				}
				return ((row_drop + 1) == row && (col_drop -1 == col || col_drop + 1 == col) && (! $(this).children().length > 0 ));
			}
		}
	});

	$("#row_3_col_6").droppable({
		drop: function(event, ui) {
			var row = parseInt($(this).attr("data-row"));
			var col = parseInt($(this).attr("data-col"));
			var row_previus = parseInt(ui.draggable.parent().attr("id").substr(4, 1));
			var col_previus = parseInt(ui.draggable.parent().attr("id").substr(10, 1));
			$(ui.draggable).appendTo($(this));
			if(ui.draggable.hasClass("piezas1")) {
				if((row - 2) == row_previus) {
					col_ = (col_previus > col) ? col_previus - 1 : col_previus + 1;
					div_id = 'row_' + (row - 1) + "_col_" + col_;
					$("#" + div_id).empty();
				}
			} else {
				if((row + 2) == row_previus) {
					col_ = (col_previus > col) ? col_previus - 1 : col_previus + 1;
					div_id = 'row_' + (row + 1) + "_col_" + col_;
					$("#" + div_id).empty();
				}
			}
		},
		accept: function(d) {
			var parentDiv = d.parent().prop('id');
			var row = parseInt(parentDiv.substr(4, 1));
			var col = parseInt(parentDiv.substr(10, 1));
			var row_drop = parseInt($(this).attr("data-row"));
			var col_drop = parseInt($(this).attr("data-col"));
			if (d.hasClass( "piezas1" )) {
				if((row_drop - 2) == row) {
					col_previus = (col > col_drop) ? col_drop + 1 : col_drop - 1;
					div_id = 'row_' + (row_drop - 1) + "_col_" + col_previus;
					return ($("#"+div_id).children().hasClass("piezas2") && ! $(this).children().length > 0 );
				}
				return ((row_drop - 1) == row && (col_drop -1 == col || col_drop + 1 == col) && (! $(this).children().length > 0 ));
			} else {
				if((row_drop + 2) == row) {
					col_previus = (col > col_drop) ? col_drop + 1 : col_drop - 1;
					div_id = 'row_' + (row_drop + 1) + "_col_" + col_previus;
					return ($("#"+div_id).children().hasClass("piezas1") && ! $(this).children().length > 0 );
				}
				return ((row_drop + 1) == row && (col_drop -1 == col || col_drop + 1 == col) && (! $(this).children().length > 0 ));
			}
		}
	});

	$("#row_3_col_8").droppable({
		drop: function(event, ui) {
			var row = parseInt($(this).attr("data-row"));
			var col = parseInt($(this).attr("data-col"));
			var row_previus = parseInt(ui.draggable.parent().attr("id").substr(4, 1));
			var col_previus = parseInt(ui.draggable.parent().attr("id").substr(10, 1));
			$(ui.draggable).appendTo($(this));
			if(ui.draggable.hasClass("piezas1")) {
				if((row - 2) == row_previus) {
					col_ = (col_previus > col) ? col_previus - 1 : col_previus + 1;
					div_id = 'row_' + (row - 1) + "_col_" + col_;
					$("#" + div_id).empty();
				}
			} else {
				if((row + 2) == row_previus) {
					col_ = (col_previus > col) ? col_previus - 1 : col_previus + 1;
					div_id = 'row_' + (row + 1) + "_col_" + col_;
					$("#" + div_id).empty();
				}
			}
		},
		accept: function(d) {
			var parentDiv = d.parent().prop('id');
			var row = parseInt(parentDiv.substr(4, 1));
			var col = parseInt(parentDiv.substr(10, 1));
			var row_drop = parseInt($(this).attr("data-row"));
			var col_drop = parseInt($(this).attr("data-col"));
			if (d.hasClass( "piezas1" )) {
				if((row_drop - 2) == row) {
					col_previus = (col > col_drop) ? col_drop + 1 : col_drop - 1;
					div_id = 'row_' + (row_drop - 1) + "_col_" + col_previus;
					return ($("#"+div_id).children().hasClass("piezas2") && ! $(this).children().length > 0 );
				}
				return ((row_drop - 1) == row && (col_drop -1 == col || col_drop + 1 == col) && (! $(this).children().length > 0 ));
			} else {
				if((row_drop + 2) == row) {
					col_previus = (col > col_drop) ? col_drop + 1 : col_drop - 1;
					div_id = 'row_' + (row_drop + 1) + "_col_" + col_previus;
					return ($("#"+div_id).children().hasClass("piezas1") && ! $(this).children().length > 0 );
				}
				return ((row_drop + 1) == row && (col_drop -1 == col || col_drop + 1 == col) && (! $(this).children().length > 0 ));
			}
		}
	});

	$("#row_4_col_1").droppable({
		drop: function(event, ui) {
			var row = parseInt($(this).attr("data-row"));
			var col = parseInt($(this).attr("data-col"));
			var row_previus = parseInt(ui.draggable.parent().attr("id").substr(4, 1));
			var col_previus = parseInt(ui.draggable.parent().attr("id").substr(10, 1));
			$(ui.draggable).appendTo($(this));
			if(ui.draggable.hasClass("piezas1")) {
				if((row - 2) == row_previus) {
					col_ = (col_previus > col) ? col_previus - 1 : col_previus + 1;
					div_id = 'row_' + (row - 1) + "_col_" + col_;
					$("#" + div_id).empty();
				}
			} else {
				if((row + 2) == row_previus) {
					col_ = (col_previus > col) ? col_previus - 1 : col_previus + 1;
					div_id = 'row_' + (row + 1) + "_col_" + col_;
					$("#" + div_id).empty();
				}
			}
		},
		accept: function(d) {
			var parentDiv = d.parent().prop('id');
			var row = parseInt(parentDiv.substr(4, 1));
			var col = parseInt(parentDiv.substr(10, 1));
			var row_drop = parseInt($(this).attr("data-row"));
			var col_drop = parseInt($(this).attr("data-col"));
			if (d.hasClass( "piezas1" )) {
				if((row_drop - 2) == row) {
					col_previus = (col > col_drop) ? col_drop + 1 : col_drop - 1;
					div_id = 'row_' + (row_drop - 1) + "_col_" + col_previus;
					return ($("#"+div_id).children().hasClass("piezas2") && ! $(this).children().length > 0 );
				}
				return ((row_drop - 1) == row && (col_drop -1 == col || col_drop + 1 == col) && (! $(this).children().length > 0 ));
			} else {
				if((row_drop + 2) == row) {
					col_previus = (col > col_drop) ? col_drop + 1 : col_drop - 1;
					div_id = 'row_' + (row_drop + 1) + "_col_" + col_previus;
					return ($("#"+div_id).children().hasClass("piezas1") && ! $(this).children().length > 0 );
				}
				return ((row_drop + 1) == row && (col_drop -1 == col || col_drop + 1 == col) && (! $(this).children().length > 0 ));
			}
		}
	});

	$("#row_4_col_3").droppable({
		drop: function(event, ui) {
			var row = parseInt($(this).attr("data-row"));
			var col = parseInt($(this).attr("data-col"));
			var row_previus = parseInt(ui.draggable.parent().attr("id").substr(4, 1));
			var col_previus = parseInt(ui.draggable.parent().attr("id").substr(10, 1));
			$(ui.draggable).appendTo($(this));
			if(ui.draggable.hasClass("piezas1")) {
				if((row - 2) == row_previus) {
					col_ = (col_previus > col) ? col_previus - 1 : col_previus + 1;
					div_id = 'row_' + (row - 1) + "_col_" + col_;
					$("#" + div_id).empty();
				}
			} else {
				if((row + 2) == row_previus) {
					col_ = (col_previus > col) ? col_previus - 1 : col_previus + 1;
					div_id = 'row_' + (row + 1) + "_col_" + col_;
					$("#" + div_id).empty();
				}
			}
		},
		accept: function(d) {
			var parentDiv = d.parent().prop('id');
			var row = parseInt(parentDiv.substr(4, 1));
			var col = parseInt(parentDiv.substr(10, 1));
			var row_drop = parseInt($(this).attr("data-row"));
			var col_drop = parseInt($(this).attr("data-col"));
			if (d.hasClass( "piezas1" )) {
				if((row_drop - 2) == row) {
					col_previus = (col > col_drop) ? col_drop + 1 : col_drop - 1;
					div_id = 'row_' + (row_drop - 1) + "_col_" + col_previus;
					return ($("#"+div_id).children().hasClass("piezas2") && ! $(this).children().length > 0 );
				}
				return ((row_drop - 1) == row && (col_drop -1 == col || col_drop + 1 == col) && (! $(this).children().length > 0 ));
			} else {
				if((row_drop + 2) == row) {
					col_previus = (col > col_drop) ? col_drop + 1 : col_drop - 1;
					div_id = 'row_' + (row_drop + 1) + "_col_" + col_previus;
					return ($("#"+div_id).children().hasClass("piezas1") && ! $(this).children().length > 0 );
				}
				return ((row_drop + 1) == row && (col_drop -1 == col || col_drop + 1 == col) && (! $(this).children().length > 0 ));
			}
		}
	});

	$("#row_4_col_5").droppable({
		drop: function(event, ui) {
			var row = parseInt($(this).attr("data-row"));
			var col = parseInt($(this).attr("data-col"));
			var row_previus = parseInt(ui.draggable.parent().attr("id").substr(4, 1));
			var col_previus = parseInt(ui.draggable.parent().attr("id").substr(10, 1));
			$(ui.draggable).appendTo($(this));
			if(ui.draggable.hasClass("piezas1")) {
				if((row - 2) == row_previus) {
					col_ = (col_previus > col) ? col_previus - 1 : col_previus + 1;
					div_id = 'row_' + (row - 1) + "_col_" + col_;
					$("#" + div_id).empty();
				}
			} else {
				if((row + 2) == row_previus) {
					col_ = (col_previus > col) ? col_previus - 1 : col_previus + 1;
					div_id = 'row_' + (row + 1) + "_col_" + col_;
					$("#" + div_id).empty();
				}
			}
		},
		accept: function(d) {
			var parentDiv = d.parent().prop('id');
			var row = parseInt(parentDiv.substr(4, 1));
			var col = parseInt(parentDiv.substr(10, 1));
			var row_drop = parseInt($(this).attr("data-row"));
			var col_drop = parseInt($(this).attr("data-col"));
			if (d.hasClass( "piezas1" )) {
				if((row_drop - 2) == row) {
					col_previus = (col > col_drop) ? col_drop + 1 : col_drop - 1;
					div_id = 'row_' + (row_drop - 1) + "_col_" + col_previus;
					return ($("#"+div_id).children().hasClass("piezas2") && ! $(this).children().length > 0 );
				}
				return ((row_drop - 1) == row && (col_drop -1 == col || col_drop + 1 == col) && (! $(this).children().length > 0 ));
			} else {
				if((row_drop + 2) == row) {
					col_previus = (col > col_drop) ? col_drop + 1 : col_drop - 1;
					div_id = 'row_' + (row_drop + 1) + "_col_" + col_previus;
					return ($("#"+div_id).children().hasClass("piezas1") && ! $(this).children().length > 0 );
				}
				return ((row_drop + 1) == row && (col_drop -1 == col || col_drop + 1 == col) && (! $(this).children().length > 0 ));
			}
		}
	});

	$("#row_4_col_7").droppable({
		drop: function(event, ui) {
			var row = parseInt($(this).attr("data-row"));
			var col = parseInt($(this).attr("data-col"));
			var row_previus = parseInt(ui.draggable.parent().attr("id").substr(4, 1));
			var col_previus = parseInt(ui.draggable.parent().attr("id").substr(10, 1));
			$(ui.draggable).appendTo($(this));
			if(ui.draggable.hasClass("piezas1")) {
				if((row - 2) == row_previus) {
					col_ = (col_previus > col) ? col_previus - 1 : col_previus + 1;
					div_id = 'row_' + (row - 1) + "_col_" + col_;
					$("#" + div_id).empty();
				}
			} else {
				if((row + 2) == row_previus) {
					col_ = (col_previus > col) ? col_previus - 1 : col_previus + 1;
					div_id = 'row_' + (row + 1) + "_col_" + col_;
					$("#" + div_id).empty();
				}
			}
		},
		accept: function(d) {
			var parentDiv = d.parent().prop('id');
			var row = parseInt(parentDiv.substr(4, 1));
			var col = parseInt(parentDiv.substr(10, 1));
			var row_drop = parseInt($(this).attr("data-row"));
			var col_drop = parseInt($(this).attr("data-col"));
			if (d.hasClass( "piezas1" )) {
				if((row_drop - 2) == row) {
					col_previus = (col > col_drop) ? col_drop + 1 : col_drop - 1;
					div_id = 'row_' + (row_drop - 1) + "_col_" + col_previus;
					return ($("#"+div_id).children().hasClass("piezas2") && ! $(this).children().length > 0 );
				}
				return ((row_drop - 1) == row && (col_drop -1 == col || col_drop + 1 == col) && (! $(this).children().length > 0 ));
			} else {
				if((row_drop + 2) == row) {
					col_previus = (col > col_drop) ? col_drop + 1 : col_drop - 1;
					div_id = 'row_' + (row_drop + 1) + "_col_" + col_previus;
					return ($("#"+div_id).children().hasClass("piezas1") && ! $(this).children().length > 0 );
				}
				return ((row_drop + 1) == row && (col_drop -1 == col || col_drop + 1 == col) && (! $(this).children().length > 0 ));
			}
		}
	});

	$("#row_5_col_2").droppable({
		drop: function(event, ui) {
			var row = parseInt($(this).attr("data-row"));
			var col = parseInt($(this).attr("data-col"));
			var row_previus = parseInt(ui.draggable.parent().attr("id").substr(4, 1));
			var col_previus = parseInt(ui.draggable.parent().attr("id").substr(10, 1));
			$(ui.draggable).appendTo($(this));
			if(ui.draggable.hasClass("piezas1")) {
				if((row - 2) == row_previus) {
					col_ = (col_previus > col) ? col_previus - 1 : col_previus + 1;
					div_id = 'row_' + (row - 1) + "_col_" + col_;
					$("#" + div_id).empty();
				}
			} else {
				if((row + 2) == row_previus) {
					col_ = (col_previus > col) ? col_previus - 1 : col_previus + 1;
					div_id = 'row_' + (row + 1) + "_col_" + col_;
					$("#" + div_id).empty();
				}
			}
		},
		accept: function(d) {
			var parentDiv = d.parent().prop('id');
			var row = parseInt(parentDiv.substr(4, 1));
			var col = parseInt(parentDiv.substr(10, 1));
			var row_drop = parseInt($(this).attr("data-row"));
			var col_drop = parseInt($(this).attr("data-col"));
			if (d.hasClass( "piezas1" )) {
				if((row_drop - 2) == row) {
					col_previus = (col > col_drop) ? col_drop + 1 : col_drop - 1;
					div_id = 'row_' + (row_drop - 1) + "_col_" + col_previus;
					return ($("#"+div_id).children().hasClass("piezas2") && ! $(this).children().length > 0 );
				}
				return ((row_drop - 1) == row && (col_drop -1 == col || col_drop + 1 == col) && (! $(this).children().length > 0 ));
			} else {
				if((row_drop + 2) == row) {
					col_previus = (col > col_drop) ? col_drop + 1 : col_drop - 1;
					div_id = 'row_' + (row_drop + 1) + "_col_" + col_previus;
					return ($("#"+div_id).children().hasClass("piezas1") && ! $(this).children().length > 0 );
				}
				return ((row_drop + 1) == row && (col_drop -1 == col || col_drop + 1 == col) && (! $(this).children().length > 0 ));
			}
		}
	});

	$("#row_5_col_4").droppable({
		drop: function(event, ui) {
			var row = parseInt($(this).attr("data-row"));
			var col = parseInt($(this).attr("data-col"));
			var row_previus = parseInt(ui.draggable.parent().attr("id").substr(4, 1));
			var col_previus = parseInt(ui.draggable.parent().attr("id").substr(10, 1));
			$(ui.draggable).appendTo($(this));
			if(ui.draggable.hasClass("piezas1")) {
				if((row - 2) == row_previus) {
					col_ = (col_previus > col) ? col_previus - 1 : col_previus + 1;
					div_id = 'row_' + (row - 1) + "_col_" + col_;
					$("#" + div_id).empty();
				}
			} else {
				if((row + 2) == row_previus) {
					col_ = (col_previus > col) ? col_previus - 1 : col_previus + 1;
					div_id = 'row_' + (row + 1) + "_col_" + col_;
					$("#" + div_id).empty();
				}
			}
		},
		accept: function(d) {
			var parentDiv = d.parent().prop('id');
			var row = parseInt(parentDiv.substr(4, 1));
			var col = parseInt(parentDiv.substr(10, 1));
			var row_drop = parseInt($(this).attr("data-row"));
			var col_drop = parseInt($(this).attr("data-col"));
			if (d.hasClass( "piezas1" )) {
				if((row_drop - 2) == row) {
					col_previus = (col > col_drop) ? col_drop + 1 : col_drop - 1;
					div_id = 'row_' + (row_drop - 1) + "_col_" + col_previus;
					return ($("#"+div_id).children().hasClass("piezas2") && ! $(this).children().length > 0 );
				}
				return ((row_drop - 1) == row && (col_drop -1 == col || col_drop + 1 == col) && (! $(this).children().length > 0 ));
			} else {
				if((row_drop + 2) == row) {
					col_previus = (col > col_drop) ? col_drop + 1 : col_drop - 1;
					div_id = 'row_' + (row_drop + 1) + "_col_" + col_previus;
					return ($("#"+div_id).children().hasClass("piezas1") && ! $(this).children().length > 0 );
				}
				return ((row_drop + 1) == row && (col_drop -1 == col || col_drop + 1 == col) && (! $(this).children().length > 0 ));
			}
		}
	});

	$("#row_5_col_6").droppable({
		drop: function(event, ui) {
			var row = parseInt($(this).attr("data-row"));
			var col = parseInt($(this).attr("data-col"));
			var row_previus = parseInt(ui.draggable.parent().attr("id").substr(4, 1));
			var col_previus = parseInt(ui.draggable.parent().attr("id").substr(10, 1));
			$(ui.draggable).appendTo($(this));
			if(ui.draggable.hasClass("piezas1")) {
				if((row - 2) == row_previus) {
					col_ = (col_previus > col) ? col_previus - 1 : col_previus + 1;
					div_id = 'row_' + (row - 1) + "_col_" + col_;
					$("#" + div_id).empty();
				}
			} else {
				if((row + 2) == row_previus) {
					col_ = (col_previus > col) ? col_previus - 1 : col_previus + 1;
					div_id = 'row_' + (row + 1) + "_col_" + col_;
					$("#" + div_id).empty();
				}
			}
		},
		accept: function(d) {
			var parentDiv = d.parent().prop('id');
			var row = parseInt(parentDiv.substr(4, 1));
			var col = parseInt(parentDiv.substr(10, 1));
			var row_drop = parseInt($(this).attr("data-row"));
			var col_drop = parseInt($(this).attr("data-col"));
			if (d.hasClass( "piezas1" )) {
				if((row_drop - 2) == row) {
					col_previus = (col > col_drop) ? col_drop + 1 : col_drop - 1;
					div_id = 'row_' + (row_drop - 1) + "_col_" + col_previus;
					return ($("#"+div_id).children().hasClass("piezas2") && ! $(this).children().length > 0 );
				}
				return ((row_drop - 1) == row && (col_drop -1 == col || col_drop + 1 == col) && (! $(this).children().length > 0 ));
			} else {
				if((row_drop + 2) == row) {
					col_previus = (col > col_drop) ? col_drop + 1 : col_drop - 1;
					div_id = 'row_' + (row_drop + 1) + "_col_" + col_previus;
					return ($("#"+div_id).children().hasClass("piezas1") && ! $(this).children().length > 0 );
				}
				return ((row_drop + 1) == row && (col_drop -1 == col || col_drop + 1 == col) && (! $(this).children().length > 0 ));
			}
		}
	});

	$("#row_5_col_8").droppable({
		drop: function(event, ui) {
			var row = parseInt($(this).attr("data-row"));
			var col = parseInt($(this).attr("data-col"));
			var row_previus = parseInt(ui.draggable.parent().attr("id").substr(4, 1));
			var col_previus = parseInt(ui.draggable.parent().attr("id").substr(10, 1));
			$(ui.draggable).appendTo($(this));
			if(ui.draggable.hasClass("piezas1")) {
				if((row - 2) == row_previus) {
					col_ = (col_previus > col) ? col_previus - 1 : col_previus + 1;
					div_id = 'row_' + (row - 1) + "_col_" + col_;
					$("#" + div_id).empty();
				}
			} else {
				if((row + 2) == row_previus) {
					col_ = (col_previus > col) ? col_previus - 1 : col_previus + 1;
					div_id = 'row_' + (row + 1) + "_col_" + col_;
					$("#" + div_id).empty();
				}
			}
		},
		accept: function(d) {
			var parentDiv = d.parent().prop('id');
			var row = parseInt(parentDiv.substr(4, 1));
			var col = parseInt(parentDiv.substr(10, 1));
			var row_drop = parseInt($(this).attr("data-row"));
			var col_drop = parseInt($(this).attr("data-col"));
			if (d.hasClass( "piezas1" )) {
				if((row_drop - 2) == row) {
					col_previus = (col > col_drop) ? col_drop + 1 : col_drop - 1;
					div_id = 'row_' + (row_drop - 1) + "_col_" + col_previus;
					return ($("#"+div_id).children().hasClass("piezas2") && ! $(this).children().length > 0 );
				}
				return ((row_drop - 1) == row && (col_drop -1 == col || col_drop + 1 == col) && (! $(this).children().length > 0 ));
			} else {
				if((row_drop + 2) == row) {
					col_previus = (col > col_drop) ? col_drop + 1 : col_drop - 1;
					div_id = 'row_' + (row_drop + 1) + "_col_" + col_previus;
					return ($("#"+div_id).children().hasClass("piezas1") && ! $(this).children().length > 0 );
				}
				return ((row_drop + 1) == row && (col_drop -1 == col || col_drop + 1 == col) && (! $(this).children().length > 0 ));
			}
		}
	});

	$("#row_6_col_1").droppable({
		drop: function(event, ui) {
			var row = parseInt($(this).attr("data-row"));
			var col = parseInt($(this).attr("data-col"));
			var row_previus = parseInt(ui.draggable.parent().attr("id").substr(4, 1));
			var col_previus = parseInt(ui.draggable.parent().attr("id").substr(10, 1));
			$(ui.draggable).appendTo($(this));
			if(ui.draggable.hasClass("piezas1")) {
				if((row - 2) == row_previus) {
					col_ = (col_previus > col) ? col_previus - 1 : col_previus + 1;
					div_id = 'row_' + (row - 1) + "_col_" + col_;
					$("#" + div_id).empty();
				}
			} else {
				if((row + 2) == row_previus) {
					col_ = (col_previus > col) ? col_previus - 1 : col_previus + 1;
					div_id = 'row_' + (row + 1) + "_col_" + col_;
					$("#" + div_id).empty();
				}
			}
		},
		accept: function(d) {
			var parentDiv = d.parent().prop('id');
			var row = parseInt(parentDiv.substr(4, 1));
			var col = parseInt(parentDiv.substr(10, 1));
			var row_drop = parseInt($(this).attr("data-row"));
			var col_drop = parseInt($(this).attr("data-col"));
			if (d.hasClass( "piezas1" )) {
				if((row_drop - 2) == row) {
					col_previus = (col > col_drop) ? col_drop + 1 : col_drop - 1;
					div_id = 'row_' + (row_drop - 1) + "_col_" + col_previus;
					return ($("#"+div_id).children().hasClass("piezas2") && ! $(this).children().length > 0 );
				}
				return ((row_drop - 1) == row && (col_drop -1 == col || col_drop + 1 == col) && (! $(this).children().length > 0 ));
			} else {
				if((row_drop + 2) == row) {
					col_previus = (col > col_drop) ? col_drop + 1 : col_drop - 1;
					div_id = 'row_' + (row_drop + 1) + "_col_" + col_previus;
					return ($("#"+div_id).children().hasClass("piezas1") && ! $(this).children().length > 0 );
				}
				return ((row_drop + 1) == row && (col_drop -1 == col || col_drop + 1 == col) && (! $(this).children().length > 0 ));
			}
		}
	});
	
	$("#row_6_col_3").droppable({
		drop: function(event, ui) {
			var row = parseInt($(this).attr("data-row"));
			var col = parseInt($(this).attr("data-col"));
			var row_previus = parseInt(ui.draggable.parent().attr("id").substr(4, 1));
			var col_previus = parseInt(ui.draggable.parent().attr("id").substr(10, 1));
			$(ui.draggable).appendTo($(this));
			if(ui.draggable.hasClass("piezas1")) {
				if((row - 2) == row_previus) {
					col_ = (col_previus > col) ? col_previus - 1 : col_previus + 1;
					div_id = 'row_' + (row - 1) + "_col_" + col_;
					$("#" + div_id).empty();
				}
			} else {
				if((row + 2) == row_previus) {
					col_ = (col_previus > col) ? col_previus - 1 : col_previus + 1;
					div_id = 'row_' + (row + 1) + "_col_" + col_;
					$("#" + div_id).empty();
				}
			}
		},
		accept: function(d) {
			var parentDiv = d.parent().prop('id');
			var row = parseInt(parentDiv.substr(4, 1));
			var col = parseInt(parentDiv.substr(10, 1));
			var row_drop = parseInt($(this).attr("data-row"));
			var col_drop = parseInt($(this).attr("data-col"));
			if (d.hasClass( "piezas1" )) {
				if((row_drop - 2) == row) {
					col_previus = (col > col_drop) ? col_drop + 1 : col_drop - 1;
					div_id = 'row_' + (row_drop - 1) + "_col_" + col_previus;
					return ($("#"+div_id).children().hasClass("piezas2") && ! $(this).children().length > 0 );
				}
				return ((row_drop - 1) == row && (col_drop -1 == col || col_drop + 1 == col) && (! $(this).children().length > 0 ));
			} else {
				if((row_drop + 2) == row) {
					col_previus = (col > col_drop) ? col_drop + 1 : col_drop - 1;
					div_id = 'row_' + (row_drop + 1) + "_col_" + col_previus;
					return ($("#"+div_id).children().hasClass("piezas1") && ! $(this).children().length > 0 );
				}
				return ((row_drop + 1) == row && (col_drop -1 == col || col_drop + 1 == col) && (! $(this).children().length > 0 ));
			}
		}
	});

	$("#row_6_col_5").droppable({
		drop: function(event, ui) {
			var row = parseInt($(this).attr("data-row"));
			var col = parseInt($(this).attr("data-col"));
			var row_previus = parseInt(ui.draggable.parent().attr("id").substr(4, 1));
			var col_previus = parseInt(ui.draggable.parent().attr("id").substr(10, 1));
			$(ui.draggable).appendTo($(this));
			if(ui.draggable.hasClass("piezas1")) {
				if((row - 2) == row_previus) {
					col_ = (col_previus > col) ? col_previus - 1 : col_previus + 1;
					div_id = 'row_' + (row - 1) + "_col_" + col_;
					$("#" + div_id).empty();
				}
			} else {
				if((row + 2) == row_previus) {
					col_ = (col_previus > col) ? col_previus - 1 : col_previus + 1;
					div_id = 'row_' + (row + 1) + "_col_" + col_;
					$("#" + div_id).empty();
				}
			}
		},
		accept: function(d) {
			var parentDiv = d.parent().prop('id');
			var row = parseInt(parentDiv.substr(4, 1));
			var col = parseInt(parentDiv.substr(10, 1));
			var row_drop = parseInt($(this).attr("data-row"));
			var col_drop = parseInt($(this).attr("data-col"));
			if (d.hasClass( "piezas1" )) {
				if((row_drop - 2) == row) {
					col_previus = (col > col_drop) ? col_drop + 1 : col_drop - 1;
					div_id = 'row_' + (row_drop - 1) + "_col_" + col_previus;
					return ($("#"+div_id).children().hasClass("piezas2") && ! $(this).children().length > 0 );
				}
				return ((row_drop - 1) == row && (col_drop -1 == col || col_drop + 1 == col) && (! $(this).children().length > 0 ));
			} else {
				if((row_drop + 2) == row) {
					col_previus = (col > col_drop) ? col_drop + 1 : col_drop - 1;
					div_id = 'row_' + (row_drop + 1) + "_col_" + col_previus;
					return ($("#"+div_id).children().hasClass("piezas1") && ! $(this).children().length > 0 );
				}
				return ((row_drop + 1) == row && (col_drop -1 == col || col_drop + 1 == col) && (! $(this).children().length > 0 ));
			}
		}
	});

	$("#row_6_col_7").droppable({
		drop: function(event, ui) {
			var row = parseInt($(this).attr("data-row"));
			var col = parseInt($(this).attr("data-col"));
			var row_previus = parseInt(ui.draggable.parent().attr("id").substr(4, 1));
			var col_previus = parseInt(ui.draggable.parent().attr("id").substr(10, 1));
			$(ui.draggable).appendTo($(this));
			if(ui.draggable.hasClass("piezas1")) {
				if((row - 2) == row_previus) {
					col_ = (col_previus > col) ? col_previus - 1 : col_previus + 1;
					div_id = 'row_' + (row - 1) + "_col_" + col_;
					$("#" + div_id).empty();
				}
			} else {
				if((row + 2) == row_previus) {
					col_ = (col_previus > col) ? col_previus - 1 : col_previus + 1;
					div_id = 'row_' + (row + 1) + "_col_" + col_;
					$("#" + div_id).empty();
				}
			}
		},
		accept: function(d) {
			var parentDiv = d.parent().prop('id');
			var row = parseInt(parentDiv.substr(4, 1));
			var col = parseInt(parentDiv.substr(10, 1));
			var row_drop = parseInt($(this).attr("data-row"));
			var col_drop = parseInt($(this).attr("data-col"));
			if (d.hasClass( "piezas1" )) {
				if((row_drop - 2) == row) {
					col_previus = (col > col_drop) ? col_drop + 1 : col_drop - 1;
					div_id = 'row_' + (row_drop - 1) + "_col_" + col_previus;
					return ($("#"+div_id).children().hasClass("piezas2") && ! $(this).children().length > 0 );
				}
				return ((row_drop - 1) == row && (col_drop -1 == col || col_drop + 1 == col) && (! $(this).children().length > 0 ));
			} else {
				if((row_drop + 2) == row) {
					col_previus = (col > col_drop) ? col_drop + 1 : col_drop - 1;
					div_id = 'row_' + (row_drop + 1) + "_col_" + col_previus;
					return ($("#"+div_id).children().hasClass("piezas1") && ! $(this).children().length > 0 );
				}
				return ((row_drop + 1) == row && (col_drop -1 == col || col_drop + 1 == col) && (! $(this).children().length > 0 ));
			}
		}
	});	

	$("#row_7_col_2").droppable({
		drop: function(event, ui) {
			var row = parseInt($(this).attr("data-row"));
			var col = parseInt($(this).attr("data-col"));
			var row_previus = parseInt(ui.draggable.parent().attr("id").substr(4, 1));
			var col_previus = parseInt(ui.draggable.parent().attr("id").substr(10, 1));
			$(ui.draggable).appendTo($(this));
			if(ui.draggable.hasClass("piezas1")) {
				if((row - 2) == row_previus) {
					col_ = (col_previus > col) ? col_previus - 1 : col_previus + 1;
					div_id = 'row_' + (row - 1) + "_col_" + col_;
					$("#" + div_id).empty();
				}
			} else {
				if((row + 2) == row_previus) {
					col_ = (col_previus > col) ? col_previus - 1 : col_previus + 1;
					div_id = 'row_' + (row + 1) + "_col_" + col_;
					$("#" + div_id).empty();
				}
			}
		},
		accept: function(d) {
			var parentDiv = d.parent().prop('id');
			var row = parseInt(parentDiv.substr(4, 1));
			var col = parseInt(parentDiv.substr(10, 1));
			var row_drop = parseInt($(this).attr("data-row"));
			var col_drop = parseInt($(this).attr("data-col"));
			if (d.hasClass( "piezas1" )) {
				if((row_drop - 2) == row) {
					col_previus = (col > col_drop) ? col_drop + 1 : col_drop - 1;
					div_id = 'row_' + (row_drop - 1) + "_col_" + col_previus;
					return ($("#"+div_id).children().hasClass("piezas2") && ! $(this).children().length > 0 );
				}
				return ((row_drop - 1) == row && (col_drop -1 == col || col_drop + 1 == col) && (! $(this).children().length > 0 ));
			} else {
				if((row_drop + 2) == row) {
					col_previus = (col > col_drop) ? col_drop + 1 : col_drop - 1;
					div_id = 'row_' + (row_drop + 1) + "_col_" + col_previus;
					return ($("#"+div_id).children().hasClass("piezas1") && ! $(this).children().length > 0 );
				}
				return ((row_drop + 1) == row && (col_drop -1 == col || col_drop + 1 == col) && (! $(this).children().length > 0 ));
			}
		}
	});	

	$("#row_7_col_4").droppable({
		drop: function(event, ui) {
			var row = parseInt($(this).attr("data-row"));
			var col = parseInt($(this).attr("data-col"));
			var row_previus = parseInt(ui.draggable.parent().attr("id").substr(4, 1));
			var col_previus = parseInt(ui.draggable.parent().attr("id").substr(10, 1));
			$(ui.draggable).appendTo($(this));
			if(ui.draggable.hasClass("piezas1")) {
				if((row - 2) == row_previus) {
					col_ = (col_previus > col) ? col_previus - 1 : col_previus + 1;
					div_id = 'row_' + (row - 1) + "_col_" + col_;
					$("#" + div_id).empty();
				}
			} else {
				if((row + 2) == row_previus) {
					col_ = (col_previus > col) ? col_previus - 1 : col_previus + 1;
					div_id = 'row_' + (row + 1) + "_col_" + col_;
					$("#" + div_id).empty();
				}
			}
		},
		accept: function(d) {
			var parentDiv = d.parent().prop('id');
			var row = parseInt(parentDiv.substr(4, 1));
			var col = parseInt(parentDiv.substr(10, 1));
			var row_drop = parseInt($(this).attr("data-row"));
			var col_drop = parseInt($(this).attr("data-col"));
			if (d.hasClass( "piezas1" )) {
				if((row_drop - 2) == row) {
					col_previus = (col > col_drop) ? col_drop + 1 : col_drop - 1;
					div_id = 'row_' + (row_drop - 1) + "_col_" + col_previus;
					return ($("#"+div_id).children().hasClass("piezas2") && ! $(this).children().length > 0 );
				}
				return ((row_drop - 1) == row && (col_drop -1 == col || col_drop + 1 == col) && (! $(this).children().length > 0 ));
			} else {
				if((row_drop + 2) == row) {
					col_previus = (col > col_drop) ? col_drop + 1 : col_drop - 1;
					div_id = 'row_' + (row_drop + 1) + "_col_" + col_previus;
					return ($("#"+div_id).children().hasClass("piezas1") && ! $(this).children().length > 0 );
				}
				return ((row_drop + 1) == row && (col_drop -1 == col || col_drop + 1 == col) && (! $(this).children().length > 0 ));
			}
		}
	});	

	$("#row_7_col_6").droppable({
		drop: function(event, ui) {
			var row = parseInt($(this).attr("data-row"));
			var col = parseInt($(this).attr("data-col"));
			var row_previus = parseInt(ui.draggable.parent().attr("id").substr(4, 1));
			var col_previus = parseInt(ui.draggable.parent().attr("id").substr(10, 1));
			$(ui.draggable).appendTo($(this));
			if(ui.draggable.hasClass("piezas1")) {
				if((row - 2) == row_previus) {
					col_ = (col_previus > col) ? col_previus - 1 : col_previus + 1;
					div_id = 'row_' + (row - 1) + "_col_" + col_;
					$("#" + div_id).empty();
				}
			} else {
				if((row + 2) == row_previus) {
					col_ = (col_previus > col) ? col_previus - 1 : col_previus + 1;
					div_id = 'row_' + (row + 1) + "_col_" + col_;
					$("#" + div_id).empty();
				}
			}
		},
		accept: function(d) {
			var parentDiv = d.parent().prop('id');
			var row = parseInt(parentDiv.substr(4, 1));
			var col = parseInt(parentDiv.substr(10, 1));
			var row_drop = parseInt($(this).attr("data-row"));
			var col_drop = parseInt($(this).attr("data-col"));
			if (d.hasClass( "piezas1" )) {
				if((row_drop - 2) == row) {
					col_previus = (col > col_drop) ? col_drop + 1 : col_drop - 1;
					div_id = 'row_' + (row_drop - 1) + "_col_" + col_previus;
					return ($("#"+div_id).children().hasClass("piezas2") && ! $(this).children().length > 0 );
				}
				return ((row_drop - 1) == row && (col_drop -1 == col || col_drop + 1 == col) && (! $(this).children().length > 0 ));
			} else {
				if((row_drop + 2) == row) {
					col_previus = (col > col_drop) ? col_drop + 1 : col_drop - 1;
					div_id = 'row_' + (row_drop + 1) + "_col_" + col_previus;
					return ($("#"+div_id).children().hasClass("piezas1") && ! $(this).children().length > 0 );
				}
				return ((row_drop + 1) == row && (col_drop -1 == col || col_drop + 1 == col) && (! $(this).children().length > 0 ));
			}
		}
	});	

	$("#row_7_col_8").droppable({
		drop: function(event, ui) {
			var row = parseInt($(this).attr("data-row"));
			var col = parseInt($(this).attr("data-col"));
			var row_previus = parseInt(ui.draggable.parent().attr("id").substr(4, 1));
			var col_previus = parseInt(ui.draggable.parent().attr("id").substr(10, 1));
			$(ui.draggable).appendTo($(this));
			if(ui.draggable.hasClass("piezas1")) {
				if((row - 2) == row_previus) {
					col_ = (col_previus > col) ? col_previus - 1 : col_previus + 1;
					div_id = 'row_' + (row - 1) + "_col_" + col_;
					$("#" + div_id).empty();
				}
			} else {
				if((row + 2) == row_previus) {
					col_ = (col_previus > col) ? col_previus - 1 : col_previus + 1;
					div_id = 'row_' + (row + 1) + "_col_" + col_;
					$("#" + div_id).empty();
				}
			}
		},
		accept: function(d) {
			var parentDiv = d.parent().prop('id');
			var row = parseInt(parentDiv.substr(4, 1));
			var col = parseInt(parentDiv.substr(10, 1));
			var row_drop = parseInt($(this).attr("data-row"));
			var col_drop = parseInt($(this).attr("data-col"));
			if (d.hasClass( "piezas1" )) {
				if((row_drop - 2) == row) {
					col_previus = (col > col_drop) ? col_drop + 1 : col_drop - 1;
					div_id = 'row_' + (row_drop - 1) + "_col_" + col_previus;
					return ($("#"+div_id).children().hasClass("piezas2") && ! $(this).children().length > 0 );
				}
				return ((row_drop - 1) == row && (col_drop -1 == col || col_drop + 1 == col) && (! $(this).children().length > 0 ));
			} else {
				if((row_drop + 2) == row) {
					col_previus = (col > col_drop) ? col_drop + 1 : col_drop - 1;
					div_id = 'row_' + (row_drop + 1) + "_col_" + col_previus;
					return ($("#"+div_id).children().hasClass("piezas1") && ! $(this).children().length > 0 );
				}
				return ((row_drop + 1) == row && (col_drop -1 == col || col_drop + 1 == col) && (! $(this).children().length > 0 ));
			}
		}
	});

	$("#row_8_col_1").droppable({
		drop: function(event, ui) {
			var row = parseInt($(this).attr("data-row"));
			var col = parseInt($(this).attr("data-col"));
			var row_previus = parseInt(ui.draggable.parent().attr("id").substr(4, 1));
			var col_previus = parseInt(ui.draggable.parent().attr("id").substr(10, 1));
			$(ui.draggable).appendTo($(this));
			if(ui.draggable.hasClass("piezas1")) {
				if((row - 2) == row_previus) {
					col_ = (col_previus > col) ? col_previus - 1 : col_previus + 1;
					div_id = 'row_' + (row - 1) + "_col_" + col_;
					$("#" + div_id).empty();
				}
			} else {
				if((row + 2) == row_previus) {
					col_ = (col_previus > col) ? col_previus - 1 : col_previus + 1;
					div_id = 'row_' + (row + 1) + "_col_" + col_;
					$("#" + div_id).empty();
				}
			}
		},
		accept: function(d) {
			var parentDiv = d.parent().prop('id');
			var row = parseInt(parentDiv.substr(4, 1));
			var col = parseInt(parentDiv.substr(10, 1));
			var row_drop = parseInt($(this).attr("data-row"));
			var col_drop = parseInt($(this).attr("data-col"));
			if (d.hasClass( "piezas1" )) {
				if((row_drop - 2) == row) {
					col_previus = (col > col_drop) ? col_drop + 1 : col_drop - 1;
					div_id = 'row_' + (row_drop - 1) + "_col_" + col_previus;
					return ($("#"+div_id).children().hasClass("piezas2") && ! $(this).children().length > 0 );
				}
				return ((row_drop - 1) == row && (col_drop -1 == col || col_drop + 1 == col) && (! $(this).children().length > 0 ));
			} else {
				if((row_drop + 2) == row) {
					col_previus = (col > col_drop) ? col_drop + 1 : col_drop - 1;
					div_id = 'row_' + (row_drop + 1) + "_col_" + col_previus;
					return ($("#"+div_id).children().hasClass("piezas1") && ! $(this).children().length > 0 );
				}
				return ((row_drop + 1) == row && (col_drop -1 == col || col_drop + 1 == col) && (! $(this).children().length > 0 ));
			}
		}
	});

	$("#row_8_col_3").droppable({
		drop: function(event, ui) {
			var row = parseInt($(this).attr("data-row"));
			var col = parseInt($(this).attr("data-col"));
			var row_previus = parseInt(ui.draggable.parent().attr("id").substr(4, 1));
			var col_previus = parseInt(ui.draggable.parent().attr("id").substr(10, 1));
			$(ui.draggable).appendTo($(this));
			if(ui.draggable.hasClass("piezas1")) {
				if((row - 2) == row_previus) {
					col_ = (col_previus > col) ? col_previus - 1 : col_previus + 1;
					div_id = 'row_' + (row - 1) + "_col_" + col_;
					$("#" + div_id).empty();
				}
			} else {
				if((row + 2) == row_previus) {
					col_ = (col_previus > col) ? col_previus - 1 : col_previus + 1;
					div_id = 'row_' + (row + 1) + "_col_" + col_;
					$("#" + div_id).empty();
				}
			}
		},
		accept: function(d) {
			var parentDiv = d.parent().prop('id');
			var row = parseInt(parentDiv.substr(4, 1));
			var col = parseInt(parentDiv.substr(10, 1));
			var row_drop = parseInt($(this).attr("data-row"));
			var col_drop = parseInt($(this).attr("data-col"));
			if (d.hasClass( "piezas1" )) {
				if((row_drop - 2) == row) {
					col_previus = (col > col_drop) ? col_drop + 1 : col_drop - 1;
					div_id = 'row_' + (row_drop - 1) + "_col_" + col_previus;
					return ($("#"+div_id).children().hasClass("piezas2") && ! $(this).children().length > 0 );
				}
				return ((row_drop - 1) == row && (col_drop -1 == col || col_drop + 1 == col) && (! $(this).children().length > 0 ));
			} else {
				if((row_drop + 2) == row) {
					col_previus = (col > col_drop) ? col_drop + 1 : col_drop - 1;
					div_id = 'row_' + (row_drop + 1) + "_col_" + col_previus;
					return ($("#"+div_id).children().hasClass("piezas1") && ! $(this).children().length > 0 );
				}
				return ((row_drop + 1) == row && (col_drop -1 == col || col_drop + 1 == col) && (! $(this).children().length > 0 ));
			}
		}
	});

	$("#row_8_col_5").droppable({
		drop: function(event, ui) {
			var row = parseInt($(this).attr("data-row"));
			var col = parseInt($(this).attr("data-col"));
			var row_previus = parseInt(ui.draggable.parent().attr("id").substr(4, 1));
			var col_previus = parseInt(ui.draggable.parent().attr("id").substr(10, 1));
			$(ui.draggable).appendTo($(this));
			if(ui.draggable.hasClass("piezas1")) {
				if((row - 2) == row_previus) {
					col_ = (col_previus > col) ? col_previus - 1 : col_previus + 1;
					div_id = 'row_' + (row - 1) + "_col_" + col_;
					$("#" + div_id).empty();
				}
			} else {
				if((row + 2) == row_previus) {
					col_ = (col_previus > col) ? col_previus - 1 : col_previus + 1;
					div_id = 'row_' + (row + 1) + "_col_" + col_;
					$("#" + div_id).empty();
				}
			}
		},
		accept: function(d) {
			var parentDiv = d.parent().prop('id');
			var row = parseInt(parentDiv.substr(4, 1));
			var col = parseInt(parentDiv.substr(10, 1));
			var row_drop = parseInt($(this).attr("data-row"));
			var col_drop = parseInt($(this).attr("data-col"));
			if (d.hasClass( "piezas1" )) {
				if((row_drop - 2) == row) {
					col_previus = (col > col_drop) ? col_drop + 1 : col_drop - 1;
					div_id = 'row_' + (row_drop - 1) + "_col_" + col_previus;
					return ($("#"+div_id).children().hasClass("piezas2") && ! $(this).children().length > 0 );
				}
				return ((row_drop - 1) == row && (col_drop -1 == col || col_drop + 1 == col) && (! $(this).children().length > 0 ));
			} else {
				if((row_drop + 2) == row) {
					col_previus = (col > col_drop) ? col_drop + 1 : col_drop - 1;
					div_id = 'row_' + (row_drop + 1) + "_col_" + col_previus;
					return ($("#"+div_id).children().hasClass("piezas1") && ! $(this).children().length > 0 );
				}
				return ((row_drop + 1) == row && (col_drop -1 == col || col_drop + 1 == col) && (! $(this).children().length > 0 ));
			}
		}
	});

	$("#row_8_col_7").droppable({
		drop: function(event, ui) {
			var row = parseInt($(this).attr("data-row"));
			var col = parseInt($(this).attr("data-col"));
			var row_previus = parseInt(ui.draggable.parent().attr("id").substr(4, 1));
			var col_previus = parseInt(ui.draggable.parent().attr("id").substr(10, 1));
			$(ui.draggable).appendTo($(this));
			if(ui.draggable.hasClass("piezas1")) {
				if((row - 2) == row_previus) {
					col_ = (col_previus > col) ? col_previus - 1 : col_previus + 1;
					div_id = 'row_' + (row - 1) + "_col_" + col_;
					$("#" + div_id).empty();
				}
			} else {
				if((row + 2) == row_previus) {
					col_ = (col_previus > col) ? col_previus - 1 : col_previus + 1;
					div_id = 'row_' + (row + 1) + "_col_" + col_;
					$("#" + div_id).empty();
				}
			}
		},
		accept: function(d) {
			var parentDiv = d.parent().prop('id');
			var row = parseInt(parentDiv.substr(4, 1));
			var col = parseInt(parentDiv.substr(10, 1));
			var row_drop = parseInt($(this).attr("data-row"));
			var col_drop = parseInt($(this).attr("data-col"));
			if (d.hasClass( "piezas1" )) {
				if((row_drop - 2) == row) {
					col_previus = (col > col_drop) ? col_drop + 1 : col_drop - 1;
					div_id = 'row_' + (row_drop - 1) + "_col_" + col_previus;
					return ($("#"+div_id).children().hasClass("piezas2") && ! $(this).children().length > 0 );
				}
				return ((row_drop - 1) == row && (col_drop -1 == col || col_drop + 1 == col) && (! $(this).children().length > 0 ));
			} else {
				if((row_drop + 2) == row) {
					col_previus = (col > col_drop) ? col_drop + 1 : col_drop - 1;
					div_id = 'row_' + (row_drop + 1) + "_col_" + col_previus;
					return ($("#"+div_id).children().hasClass("piezas1") && ! $(this).children().length > 0 );
				}
				return ((row_drop + 1) == row && (col_drop -1 == col || col_drop + 1 == col) && (! $(this).children().length > 0 ));
			}
		}
	});

	$("#row_9_col_2").droppable({
		drop: function(event, ui) {
			var row = parseInt($(this).attr("data-row"));
			var col = parseInt($(this).attr("data-col"));
			var row_previus = parseInt(ui.draggable.parent().attr("id").substr(4, 1));
			var col_previus = parseInt(ui.draggable.parent().attr("id").substr(10, 1));
			$(ui.draggable).appendTo($(this));
			if(ui.draggable.hasClass("piezas1")) {
				if((row - 2) == row_previus) {
					col_ = (col_previus > col) ? col_previus - 1 : col_previus + 1;
					div_id = 'row_' + (row - 1) + "_col_" + col_;
					$("#" + div_id).empty();
				}
			} else {
				if((row + 2) == row_previus) {
					col_ = (col_previus > col) ? col_previus - 1 : col_previus + 1;
					div_id = 'row_' + (row + 1) + "_col_" + col_;
					$("#" + div_id).empty();
				}
			}
		},
		accept: function(d) {
			var parentDiv = d.parent().prop('id');
			var row = parseInt(parentDiv.substr(4, 1));
			var col = parseInt(parentDiv.substr(10, 1));
			var row_drop = parseInt($(this).attr("data-row"));
			var col_drop = parseInt($(this).attr("data-col"));
			if (d.hasClass( "piezas1" )) {
				if((row_drop - 2) == row) {
					col_previus = (col > col_drop) ? col_drop + 1 : col_drop - 1;
					div_id = 'row_' + (row_drop - 1) + "_col_" + col_previus;
					return ($("#"+div_id).children().hasClass("piezas2") && ! $(this).children().length > 0 );
				}
				return ((row_drop - 1) == row && (col_drop -1 == col || col_drop + 1 == col) && (! $(this).children().length > 0 ));
			} else {
				if((row_drop + 2) == row) {
					col_previus = (col > col_drop) ? col_drop + 1 : col_drop - 1;
					div_id = 'row_' + (row_drop + 1) + "_col_" + col_previus;
					return ($("#"+div_id).children().hasClass("piezas1") && ! $(this).children().length > 0 );
				}
				return ((row_drop + 1) == row && (col_drop -1 == col || col_drop + 1 == col) && (! $(this).children().length > 0 ));
			}
		}
	});

	$("#row_9_col_4").droppable({
		drop: function(event, ui) {
			var row = parseInt($(this).attr("data-row"));
			var col = parseInt($(this).attr("data-col"));
			var row_previus = parseInt(ui.draggable.parent().attr("id").substr(4, 1));
			var col_previus = parseInt(ui.draggable.parent().attr("id").substr(10, 1));
			$(ui.draggable).appendTo($(this));
			if(ui.draggable.hasClass("piezas1")) {
				if((row - 2) == row_previus) {
					col_ = (col_previus > col) ? col_previus - 1 : col_previus + 1;
					div_id = 'row_' + (row - 1) + "_col_" + col_;
					$("#" + div_id).empty();
				}
			} else {
				if((row + 2) == row_previus) {
					col_ = (col_previus > col) ? col_previus - 1 : col_previus + 1;
					div_id = 'row_' + (row + 1) + "_col_" + col_;
					$("#" + div_id).empty();
				}
			}
		},
		accept: function(d) {
			var parentDiv = d.parent().prop('id');
			var row = parseInt(parentDiv.substr(4, 1));
			var col = parseInt(parentDiv.substr(10, 1));
			var row_drop = parseInt($(this).attr("data-row"));
			var col_drop = parseInt($(this).attr("data-col"));
			if (d.hasClass( "piezas1" )) {
				if((row_drop - 2) == row) {
					col_previus = (col > col_drop) ? col_drop + 1 : col_drop - 1;
					div_id = 'row_' + (row_drop - 1) + "_col_" + col_previus;
					return ($("#"+div_id).children().hasClass("piezas2") && ! $(this).children().length > 0 );
				}
				return ((row_drop - 1) == row && (col_drop -1 == col || col_drop + 1 == col) && (! $(this).children().length > 0 ));
			} else {
				if((row_drop + 2) == row) {
					col_previus = (col > col_drop) ? col_drop + 1 : col_drop - 1;
					div_id = 'row_' + (row_drop + 1) + "_col_" + col_previus;
					return ($("#"+div_id).children().hasClass("piezas1") && ! $(this).children().length > 0 );
				}
				return ((row_drop + 1) == row && (col_drop -1 == col || col_drop + 1 == col) && (! $(this).children().length > 0 ));
			}
		}
	});

	$("#row_9_col_6").droppable({
		drop: function(event, ui) {
			var row = parseInt($(this).attr("data-row"));
			var col = parseInt($(this).attr("data-col"));
			var row_previus = parseInt(ui.draggable.parent().attr("id").substr(4, 1));
			var col_previus = parseInt(ui.draggable.parent().attr("id").substr(10, 1));
			$(ui.draggable).appendTo($(this));
			if(ui.draggable.hasClass("piezas1")) {
				if((row - 2) == row_previus) {
					col_ = (col_previus > col) ? col_previus - 1 : col_previus + 1;
					div_id = 'row_' + (row - 1) + "_col_" + col_;
					$("#" + div_id).empty();
				}
			} else {
				if((row + 2) == row_previus) {
					col_ = (col_previus > col) ? col_previus - 1 : col_previus + 1;
					div_id = 'row_' + (row + 1) + "_col_" + col_;
					$("#" + div_id).empty();
				}
			}
		},
		accept: function(d) {
			var parentDiv = d.parent().prop('id');
			var row = parseInt(parentDiv.substr(4, 1));
			var col = parseInt(parentDiv.substr(10, 1));
			var row_drop = parseInt($(this).attr("data-row"));
			var col_drop = parseInt($(this).attr("data-col"));
			if (d.hasClass( "piezas1" )) {
				if((row_drop - 2) == row) {
					col_previus = (col > col_drop) ? col_drop + 1 : col_drop - 1;
					div_id = 'row_' + (row_drop - 1) + "_col_" + col_previus;
					return ($("#"+div_id).children().hasClass("piezas2") && ! $(this).children().length > 0 );
				}
				return ((row_drop - 1) == row && (col_drop -1 == col || col_drop + 1 == col) && (! $(this).children().length > 0 ));
			} else {
				if((row_drop + 2) == row) {
					col_previus = (col > col_drop) ? col_drop + 1 : col_drop - 1;
					div_id = 'row_' + (row_drop + 1) + "_col_" + col_previus;
					return ($("#"+div_id).children().hasClass("piezas1") && ! $(this).children().length > 0 );
				}
				return ((row_drop + 1) == row && (col_drop -1 == col || col_drop + 1 == col) && (! $(this).children().length > 0 ));
			}
		}
	});

	$("#row_9_col_8").droppable({
		drop: function(event, ui) {
			var row = parseInt($(this).attr("data-row"));
			var col = parseInt($(this).attr("data-col"));
			var row_previus = parseInt(ui.draggable.parent().attr("id").substr(4, 1));
			var col_previus = parseInt(ui.draggable.parent().attr("id").substr(10, 1));
			$(ui.draggable).appendTo($(this));
			if(ui.draggable.hasClass("piezas1")) {
				if((row - 2) == row_previus) {
					col_ = (col_previus > col) ? col_previus - 1 : col_previus + 1;
					div_id = 'row_' + (row - 1) + "_col_" + col_;
					$("#" + div_id).empty();
				}
			} else {
				if((row + 2) == row_previus) {
					col_ = (col_previus > col) ? col_previus - 1 : col_previus + 1;
					div_id = 'row_' + (row + 1) + "_col_" + col_;
					$("#" + div_id).empty();
				}
			}
		},
		accept: function(d) {
			var parentDiv = d.parent().prop('id');
			var row = parseInt(parentDiv.substr(4, 1));
			var col = parseInt(parentDiv.substr(10, 1));
			var row_drop = parseInt($(this).attr("data-row"));
			var col_drop = parseInt($(this).attr("data-col"));
			if (d.hasClass( "piezas1" )) {
				if((row_drop - 2) == row) {
					col_previus = (col > col_drop) ? col_drop + 1 : col_drop - 1;
					div_id = 'row_' + (row_drop - 1) + "_col_" + col_previus;
					return ($("#"+div_id).children().hasClass("piezas2") && ! $(this).children().length > 0 );
				}
				return ((row_drop - 1) == row && (col_drop -1 == col || col_drop + 1 == col) && (! $(this).children().length > 0 ));
			} else {
				if((row_drop + 2) == row) {
					col_previus = (col > col_drop) ? col_drop + 1 : col_drop - 1;
					div_id = 'row_' + (row_drop + 1) + "_col_" + col_previus;
					return ($("#"+div_id).children().hasClass("piezas1") && ! $(this).children().length > 0 );
				}
				return ((row_drop + 1) == row && (col_drop -1 == col || col_drop + 1 == col) && (! $(this).children().length > 0 ));
			}
		}
	});
});