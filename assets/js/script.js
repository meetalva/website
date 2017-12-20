console.log('https://github.com/meetalva/alva/releases/latest/')

function getOS() {
	var button=document.getElementById("download-btn");
	var OSLink="https://github.com/meetalva/alva/releases/download/v0.5.0/";
	var buttonText=button.innerHTML;
	if (navigator.appVersion.indexOf("Win")!=-1) {
		OSLink += "Alva-0.5.0.exe";
		buttonText += " for Windows";
	}
	if (navigator.appVersion.indexOf("Mac")!=-1) {
		OSLink += "Alva-0.5.0.dmg";
		buttonText += " for macOS";
	}
	if (navigator.appVersion.indexOf("X11")!=-1) OSLink="UNIX"; //Unix
	if (navigator.appVersion.indexOf("Linux")!=-1) OSLink="Linux"; //Linux

	console.log(OSLink);
	button.href=OSLink;
	button.innerHTML=buttonText;
}

window.onload = function(){
	getOS();
}
