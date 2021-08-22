# stubquery.js
super reduced / micro / mini jquery pseudo "clone"

I concocted this (please note that it's only a draft that can be used as a starting point)

and the usage is really similar to jquery

•••••• inside $() you can do "#divid" or ".class" or ",class" 
•••• the ",class" will return the first of the this class => usefull for appendto...

$().html();
$().html("new content");
$().append("new content");
$().prepend("new content");

$("#tomove").appendTo("#newid");   ===>>> stubappento(',ap','#message2');

$().val();
$().val("new val");

$().hide();
$().show();
$().remove();                               
$().toggle();
// for slideToggle simply add style="transition:height 1s;" to the desired divs or add is a class in your .css .transitheight1{transition:height 1s;}

$().attr("a");
$().attr("src","new src");

$().each ===>>>     $('.bees').forEach(function(a,b){a.hide();});

$().css
$().width
$().height

$().addClass
$().removeClass

$().on("focus",function(){});

$().oninput() ====>>>>>> onclick="$(this).on('input',function(){});"

$().focus()
$().change()
$().click()

$().keyup(function(event) {}); ====>>> window.onkeyup = funcname; —— https://developer.mozilla.org/en-US/docs/Web/API/Document/keydown_event
$().keydown(function(event) {}); ====>>> window.onkeydown = funcname; 

$().prop("disabled", true); ====>>>>>> $('#id').disable()

$().length ••••••••••••••••••••••••••>>>>>>      $('#ap4ee')?.length()

$()[0].play(); OR .get[0].play =====>>>> $('#audio').play();
$()[0].pause(); =====>>>> $('#audio').pause();



/// LAST NOTE : my ajax version is here https://github.com/jintor/stubajax
