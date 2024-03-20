document.addEventListener("DOMContentLoaded", () => {
	setInterval(deleteEmptyField, 300);
	deleteEmptyField();
	
	// let toolbarBtns = document.querySelectorAll('.ui-button');
	// for (let btn of toolbarBtns) {
	// 	btn.addEventListener("click", () => setTimeout(deleteEmptyField, 1000));
	// }
});

function deleteEmptyField() {
	let fields = document.querySelectorAll('.wc-cal-event *');
	
	for (let field of fields) {
		if (field.textContent.trim() == "") {
			field.classList.add("empty-field");
		}
	}
	clownSchool();
}

function clownSchool() {
	let desc = document.querySelectorAll('.wc-description');
	
	for (let d of desc) {
		d.innerText = d.innerText.replace("Школа лидеров", "Школа клоунов");
	}
}
