function getOS() {
	var OS = "undefinedOS";
	if (navigator.appVersion.indexOf("Win")!=-1) OS={name:"Windows", file: ".exe"};
	if (navigator.appVersion.indexOf("Mac")!=-1) OS={name: "macOS", file: ".dmg"};

	return OS;
}

function latestOSRelease(os) {
	var request = new XMLHttpRequest();
	var latest;
	var operatingSystem = os;
	var url;

	request.onreadystatechange = function() {
		if (request.readyState == 4) {
			latest = JSON.parse(request.response);
			for (let i of latest.assets) {
				if (i.name.indexOf(operatingSystem) !== -1){
					console.log("latestOSRelease: "+ i.browser_download_url);
					url = i.browser_download_url;
				}
			}
		}
	}

	request.open('GET', 'https://api.github.com/repos/meetalva/alva/releases/latest', true);
	request.send(null);

	return url;
}

function generateDownloadLink() {
	var button=document.getElementById("download-btn");
	var buttonText=button.innerHTML;
	var os = getOS();
	var url = latestOSRelease(os.file);
	
	button.href=url;
	button.innerHTML=buttonText + " for " + os.name;
}

window.onload = function(){
	generateDownloadLink();
}
