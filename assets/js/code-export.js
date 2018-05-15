var codeToCopyTarget = document.getElementsByClassName("formatted-code"),
	syntaxForm = document.getElementsByClassName("syntax-options")[0],
	codeToCopy = document.getElementsByClassName("code-to-copy")[0],
	revealCodeButton = document.getElementsByClassName("reveal-code-button")[0],
	hideCodeButton = document.getElementsByClassName("hide-code-button")[0],
	showHideIcon = document.getElementsByClassName("show-hide-icon")[0];
	syntaxRadioList = document.getElementsByClassName("syntax-radio");

function onSyntaxChange(target) {
	for (i=0;i<syntaxRadioList.length;i++) {
		syntaxRadioList[i].removeAttribute("checked", "checked");
	}

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