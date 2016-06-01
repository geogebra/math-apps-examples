function loadNav(){
var filename = window.location.pathname.split("/").slice(-1)[0];
var menu ='<a href="https://www.geogebra.org/manual/en/Reference:Math_Apps_Embedding#Examples">GeoGebra Math Apps</a> | '+
'<a href="https://github.com/geogebra/math-apps-examples/blob/master/html/'+filename+'">View on GitHub</a>';
var style = "body{font-family:'Century Gothic', 'Muli', sans-serif}"
+'button{margin:5px;margin-bottom:20px;}'
+'body>div{max-width:1000px;margin:auto}'
+'#menu{float:left;padding-right:1em}';
var menuDiv = document.createElement('span');
menuDiv.innerHTML = menu;
document.body.insertBefore(menuDiv,document.body.children[0]);
var styleEl = document.createElement('style');
styleEl.innerHTML = style;
document.head.appendChild(styleEl);

}



    if (window.addEventListener){
        window.addEventListener('load', loadNav, false);
	}
    else if (window.attachEvent){
        window.attachEvent('onload', loadNav);
	}

