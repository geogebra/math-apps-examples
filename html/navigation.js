function addGithubLink(){
	var filename = window.location.pathname.split("/").slice(-1)[0];
var menu =
'<a href="#" id=drawerToggle class="material-icons">menu</a>'+
'<img alt="GeoGebra" src="logo.svg" class="headerLogo" draggable="false">'+
'<h1 class="siteName">Integration Examples</h1>'+
'<div id=githubLink class="githubLink"><a target="_blank" href="https://github.com/geogebra/math-apps-examples/blob/master/html/'+filename+'">View on GitHub</a></span>';
var menuDiv = document.createElement('div');
menuDiv.className = "sample-toolbar";
menuDiv.innerHTML = menu;
document.body.insertBefore(menuDiv,document.body.children[0]);

}

function addDrawer(){
	var filename = window.location.pathname.split("/").slice(-1)[0];
	var menu =
	'<h4>Basic</h4>'+
	'<ul><li> <a href="basic-dynamic-resources.html">Dynamic Resources</a></li>'+
	'<li> <a href="basic-dynamic-3d-resources.html">Dynamic 3D Resources</a></li>'+
	'<li> <a href="basic-embedding-options.html">Embedding Options</a></li></ul>'+
	'<h4>Plus</h4>'+
	'<ul><li> <a href="plus-dynamic-resources.html">Dynamic Resources</a></li>'+
	'<li> <a href="example-graphing.html">Apps Integration</a></li>'+
	'<li> <a href="example-popup.html">Apps in Popups</a></li></ul>'+
	'<h4>API Integration</h4>'+
    '<ul><li> <a href="example-api-save-state.html">Saving & Loading</a></li>'+
    '<li> <a href="example-api.html">Buttons & Inputs</a></li>'+
    '<li> <a href="example-api-listeners.html">Event Listeners</a></li>'+
    '<li> <a href="example-api-sync.html">Communication between Resources</a></li>'+
	'<li> <a href="example-assess.html">LTI Integration</a></li></ul>'+
	'<h4>Documentation</h4>'+
	'<ul><li><a href="https://www.geogebra.org/manual/en/Reference:Math_Apps_Embedding" target="_blank">Math Apps Embedding<span class="material-icons inline">open_in_new</span></a></li>'+
	'<li><a href="https://www.geogebra.org/manual/en/Reference:JavaScript" target="_blank">JavaScript API<span class="material-icons inline">open_in_new</span></a></li></ul>';

/*https://dev.geogebra.org/examples/html/example-api-listeners.html*/

	var menuDiv = document.createElement('div');
	menuDiv.id="drawer";
	menuDiv.innerHTML = menu;
	document.body.insertBefore(menuDiv,document.body.children[1]);
	
	
	var glassDiv = document.createElement('div');
	glassDiv.id="drawerGlass";
	document.body.insertBefore(glassDiv,document.body.children[1]);
	
	document.getElementById("drawerToggle").addEventListener("click",function(){
        var visible = menuDiv.style.display == "block";
        console.log(visible);
        if(!visible){
            menuDiv.style.display = glassDiv.style.display = "block";
        }else {
            menuDiv.className = glassDiv.className = "animateOut";
            var callback = function(){
                menuDiv.removeEventListener("animationend",callback);
                menuDiv.style.display = glassDiv.style.display = "none";
                menuDiv.className = glassDiv.className = "";
            }
            menuDiv.addEventListener("animationend",callback);
        }
	});
}

function loadNav(){
	insertStyle("https://fonts.googleapis.com/icon?family=Material+Icons");
	addGithubLink();
	addDrawer();
}

function insertStyle(url){
	var styleEl = document.createElement('link');
	styleEl.setAttribute("href",url);
	styleEl.setAttribute("type","text/css");
	styleEl.setAttribute("rel","stylesheet");
	document.getElementsByTagName("head")[0].appendChild(styleEl);
}

insertStyle("navigation.css");


    if (window.addEventListener){
        window.addEventListener('load', loadNav, false);
	}
    else if (window.attachEvent){
        window.attachEvent('onload', loadNav);
	}

