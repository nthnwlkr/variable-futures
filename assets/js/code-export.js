var codeToCopyTarget = document.getElementsByClassName("formatted-code"),
		syntaxForm = document.getElementsByClassName("syntax-options")[0],
		codeToCopy = document.getElementsByClassName("code-to-copy")[0],
		formattedCodeContainerList = document.getElementsByClassName("formatted-code"),
		revealCodeButton = document.getElementsByClassName("reveal-code-button")[0],
		hideCodeButton = document.getElementsByClassName("hide-code-button")[0],
		showHideIcon = document.getElementsByClassName("show-hide-icon")[0];
		syntaxRadioList = document.getElementsByClassName("syntax-radio");

function onSyntaxChange(target) {
	var selectedSwitch = target.value;
  showHideSyntax(selectedSwitch);
}
function showHideSyntax(target){
	var syntaxToShow = document.getElementsByClassName("syntax-radio " + target)[0];
	// hide all preprocessor formats
	for (i=0;i<formattedCodeContainerList.length;i++) {
		formattedCodeContainerList[i].classList.add("hide");
	}
	// show only selected preprocessor format
	document.getElementsByClassName("formatted-code " + target + "-format")[0].classList.remove("hide");
}
function revealCode(){
	codeToCopy.classList.add("is-open");
	revealCodeButton.classList.add("hide");
	hideCodeButton.classList.remove("hide");
	showHideIcon.classList.add("open");
}
function hideCode(){
	codeToCopy.classList.remove("is-open");
	revealCodeButton.classList.remove("hide");
	hideCodeButton.classList.add("hide");
	showHideIcon.classList.remove("open");
}