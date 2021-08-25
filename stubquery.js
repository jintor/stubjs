$ = function () { 
	if ( arguments[0] !== undefined ) {
		stubelement = arguments[0] ;
		if ( typeof stubelement == "string" ) {
			switch ( true ) { 					
				case stubelement == 'body' : return document.querySelector(stubelement); break;
				case stubelement == 'html' : return document.querySelector(stubelement); break;
				case stubelement.charAt(0) == ',' : if( document.querySelectorAll(stubelement.replace(',','.')).length > 0 ) { return document.querySelectorAll(stubelement.replace(',','.'))[0]; } break;
				case stubelement.charAt(0) == '.' : if( document.querySelectorAll(stubelement).length > 0 ) { return Array.from(document.querySelectorAll(stubelement)); } break;
				case stubelement.charAt(0) == '#' : if( document.querySelectorAll(stubelement).length > 0 ) { return document.querySelectorAll(stubelement)[0]; } break;
				default : 	if( document.querySelectorAll(stubelement).length > 0 ) { return document.querySelectorAll(stubelement)[0]; } break;
			}
		} else { return arguments[0]; }
	} 
	return document.querySelectorAll("#emptyelement")[0];
}

function stubappento () { if ( (arguments[0] !== undefined) && (arguments[1] !== undefined) ) { $(arguments[1]).append($(arguments[0]).outerhtml()); $(arguments[0]).remove(); } }
function stubprepento () { if ( (arguments[0] !== undefined) && (arguments[1] !== undefined) ) { $(arguments[1]).prepend($(arguments[0]).outerhtml()); $(arguments[0]).remove(); } }

var setInnerHTML = function(elm, html) {
  elm.innerHTML = html;
  Array.from(elm.querySelectorAll("script")).forEach( oldScript => {
    const newScript = document.createElement("script");
    Array.from(oldScript.attributes).forEach( attr => newScript.setAttribute(attr.name, attr.value) );
    newScript.appendChild(document.createTextNode(oldScript.innerHTML));
    oldScript.parentNode.replaceChild(newScript, oldScript);
  });
}

HTMLElement.prototype.val = function () { if ( arguments[0] !== undefined ) { this.value = arguments[0]; } else { return this.value; } };
HTMLElement.prototype.html = function () { if ( arguments[0] !== undefined ) { setInnerHTML(this,arguments[0]); } else { return this.innerHTML; } };
HTMLElement.prototype.append = function () { if ( arguments[0] !== undefined ) { setInnerHTML(this,(this.innerHTML + arguments[0])); } else { setInnerHTML(this,(this.innerHTML + ' ')); } };
HTMLElement.prototype.prepend = function () { if ( arguments[0] !== undefined ) { setInnerHTML(this,(arguments[0] + this.innerHTML)); } else { setInnerHTML(this,(' ' + this.innerHTML)); } };
HTMLElement.prototype.outerhtml = function () { if ( arguments[0] !== undefined ) { this.outerHTML = arguments[0]; } else { return this.outerHTML; } };

HTMLElement.prototype.attr = function () { if ( arguments[1] !== undefined ) { this.setAttribute(arguments[0],arguments[1]); } else { return this.getAttribute(arguments[0]); } };
HTMLElement.prototype.data = function () { return this.getAttribute('data-' + arguments[0]); };

HTMLElement.prototype.css = function () { 
	if ( typeof arguments[0] == 'object' ) { for ([csskey, cssvalue] of Object.entries(arguments[0])) { this.style[csskey] = cssvalue; } } 
	else { if ( arguments[1] !== undefined ) { this.style[arguments[0]] = arguments[1]; } else { return this.currentStyle ? this.currentStyle[name] : window.getComputedStyle ? window.getComputedStyle(this, null).getPropertyValue(arguments[0]) : null; } }
};

HTMLElement.prototype.remove = function () { this.parentNode.removeChild(this); };
HTMLElement.prototype.hide = function () { this.style.display = 'none'; };
HTMLElement.prototype.show = function () { this.style.display = 'inline-block'; };
HTMLElement.prototype.showblock = function () { this.style.display = 'block'; };
HTMLElement.prototype.toggle = function () { 
	stubtoggle = this.getAttribute('data-stubtoggle');
	if ( stubtoggle === null ) {
		if ( arguments[0] !== undefined ) { displa = arguments[0]; } else { displa = this.css('display'); } 
		log(displa);		
		switch (displa) {
			case 'blockunsee' : displa = 'blockunsee'; break;
			case 'block' : displa = 'blocksee'; break;
			case 'inline-block' : displa = 'inlinesee'; break;
			case 'none' : displa = 'inlineunsee'; break;
			default : displa = 'blocksee'; break;
		}
	} else {
		displa = this.data('stubtoggle');
	}
	switch ( displa) { 
		case 'blockunsee' : this.setAttribute('data-stubtoggle','blocksee'); this.showblock(); break;
		case 'blocksee' : this.setAttribute('data-stubtoggle','blockunsee'); this.hide(); break;
		case 'inlineunsee' : this.setAttribute('data-stubtoggle','inlinesee'); this.show(); break;
		case 'inlinesee' : this.setAttribute('data-stubtoggle','inlineunsee'); this.hide(); break;
	}
};

HTMLElement.prototype.length = function () { return this.innerHTML.length; };
HTMLElement.prototype.width = function () { return this.getBoundingClientRect().width; };
HTMLElement.prototype.height = function () { return this.getBoundingClientRect().height; };
	
HTMLElement.prototype.addClass = function () { this.classList.add(arguments[0]); };
HTMLElement.prototype.removeClass = function () { this.classList.remove(arguments[0]); };

HTMLElement.prototype.disable = function () { this.disabled = true; };
HTMLElement.prototype.change = function () { this.dispatchEvent(new Event('change')); };
HTMLElement.prototype.stubtrigger = function () { this.dispatchEvent(new Event(arguments[0])); };
HTMLElement.prototype.on = function () { this.addEventListener(arguments[0],arguments[1]); };
HTMLElement.prototype.off = function () { this.removeEventListener(arguments[0],arguments[1]); };

Array.prototype.count = function () { return this.length; };
Array.prototype.hide = function () { this.forEach(function(a){a.hide();}); };
Array.prototype.show = function () { this.forEach(function(a){a.show();}); };
Array.prototype.remove = function () { this.forEach(function(a){a.remove();}); };
