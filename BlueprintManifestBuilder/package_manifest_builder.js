

/* Generate guuid

   'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
       var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
       return v.toString(16);
   });
*/

/******* Setup parameters ******/
$("#chooser_container .parameter").draggable({
	revert: "invalid",
	helper: "clone",
	cancel: "",
});

$("#built_els").droppable({
	accept: ".parameter",
	hoverClass: "built_parameter_hover",
	drop:  function(event,ui){
		switch(ui.draggable[0].id)  {
			// Standard Params
			case 'param_string':
				/* TODO - move to custom and apply regex option */
				GenerateGenericParamEl(ui.draggable[0].id,ui.helper,"Free-form string.");
				break;
			case 'param_numeric':
				GenerateGenericParamEl(ui.draggable[0].id,ui.helper,"Numeric string.");
				break;
			case 'param_password':
				GenerateGenericParamEl(ui.draggable[0].id,ui.helper,"Numeric string.");
				break;
			case 'param_network':
				GenerateGenericParamEl(ui.draggable[0].id,ui.helper,"Drop down to select an available network.");
				break;
			case 'param_serverip':
				GenerateGenericParamEl(ui.draggable[0].id,ui.helper,"Drop down to select an available server - both already existing and those scheduled to be built with the current Blueprint.  Returns the IP address of the selected server.");
				break;
			case 'param_server':
				GenerateGenericParamEl(ui.draggable[0].id,ui.helper,"Drop down to select an available server - both already existing and those scheduled to be built with the current Blueprint.  Returns the name selected server.");
				break;

			// System params.  These don't need any el_details
			case 'param_user':
				GenerateSystemParamEl(ui.draggable[0].id,ui.helper,"Include the control portal username that is initiating the deployment.");
				break;
			case 'param_name':
				GenerateSystemParamEl(ui.draggable[0].id,ui.helper,"Include the name of server deployment is executing on.");
				break;
			case 'param_ip':
				GenerateSystemParamEl(ui.draggable[0].id,ui.helper,"Include the IP of server deployment is executing on.");
				break;
			case 'param_serverpassword':
				GenerateSystemParamEl(ui.draggable[0].id,ui.helper,"Include the password for the server on which the deployment is executing.");
				break;

			// Option params
			case 'param_select':
				GenerateOptionParamEl(ui.draggable[0].id,ui.helper,"Select one option from a list of several.");
				break;
			case 'param_option':
				GenerateOptionParamEl(ui.draggable[0].id,ui.helper,"Select zero or more options from a list of several.");
				break;
		};
	},
});



function GenerateGenericParamEl(src_id,example_el,help_text)
{
	el = $("#builder_el_tpl").clone().removeAttr("id").addClass(src_id);
	el.find(".example_field").append(example_el[0].innerHTML);
	el.find(".el_help").prepend(help_text);
	el.appendTo("#built_els");
}


function GenerateSystemParamEl(src_id,example_el,help_text)
{
	el = $("#builder_el_tpl").clone().removeAttr("id").addClass(src_id);
	el.find(".example_field").append(example_el[0].innerHTML);
	el.find(".el_details").remove();
	el.find(".el_help").removeClass("col-md-offset-1").removeClass("col-md-5").addClass("col-md-11").html(help_text);
	el.appendTo("#built_els");
}


function GenerateOptionParamEl(src_id,example_el,help_text)
{
	el = $("#builder_el_tpl").clone().removeAttr("id").addClass(src_id);
	el.find(".example_field").append(example_el[0].innerHTML);
	el.find(".el_help").prepend(help_text);
	el.find(".el_details").append($("#options_tpl").clone().removeAttr("id"));
	el.appendTo("#built_els");
}



/******* Button click handlers  ******/
$("#built_els").on("click",".delete_btn",function(){
	$(this).parents(".builder_el").remove();
}).on("click",".clone_btn",function(){
	$(this).parents(".builder_el").clone().insertAfter($(this).parents(".builder_el"));
}).on("click",".remove_option_btn",function(){
	$(this).parent().remove();
}).on("click",".add_option_btn",function(){
	el = $(this).prev().clone();
	el.find("input").val("");
	el.insertBefore(this);
});


/******* Bootstrap ******/
/*
uuid_el = $("#builder_el_tpl").clone().removeAttr("id");
uuid_el.find(".el_btn_menu").html("");
uuid_el.find(".name_span").html("UUID").show();
uuid_el.find("input.name").removeClass("col-md-2").addClass("col-md-10").val('xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
	var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
	return v.toString(16);
}));
uuid_el.find("input.example_field").remove();
uuid_el.find(".el_details").remove();
uuid_el.find(".el_help").removeClass("col-md-offset-1").removeClass("col-md-5").addClass("col-md-11").html("Each package must have a globally unique 32 character GUID.  A new value has been generated for you.  If this is replacing an existing package place update with your current GUID.  Blueprints connect to Packages using this GUID so to prevent breaking for minior changes reuse the GUID.  Likewise to create a new incompatible package release choose a new GUID.");
uuid_el.appendTo("#built_els").show();

description_el = $("#builder_el_tpl").clone().removeAttr("id");
description_el.find(".el_btn_menu").html("");
description_el.find(".name_span").removeClass("col-md-2").addClass("col-md-12").html("Package Description").show();
description_el.find("input.name").remove();
description_el.find("input.example_field").remove();
description_el.find(".el_help").remove();
description_el.find(".el_details").removeClass("col-md-5").addClass("col-md-12").html("<textarea style='width: 100%; height: 6em;' placeholder='Enter package description'></textarea>");
description_el.appendTo("#built_els");
*/

