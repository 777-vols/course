let comnts = [];
loadComments();

document.getElementById('comment-add').onclick = function () {
	let commentName = document.getElementById('comment-name');
	let commentBody = document.getElementById('comment-body');
	let commentEmail = document.getElementById('comment-email');

	let comment = {
		name: commentName.value,
		body: commentBody.value,
		email: commentEmail.value,
		time: Math.floor(Date.now() / 1000)
	}

	commentName.value = '';
	commentBody.value = '';
	commentEmail.value = '';

	if (comment.name.length > 0 && comment.body.length > 0 && comment.email.length > 0) {
		comnts.push(comment);
	}
	else {
		alert("Please fill in all the input fields. Try again!");
	}

	saveComments();
	showComments();
}

function saveComments() {
	localStorage.setItem('comnts', JSON.stringify(comnts));
}

function loadComments() {
	if (localStorage.getItem('comnts')) comnts = JSON.parse(localStorage.getItem('comnts'));
	showComments();
}

function showComments() {
	let commentField = document.getElementById('comment-field');
	let out = '';
	comnts.forEach(function (item) {
		out += `<div class="commment_out_time"><p class="com_into"><em>${timeConverter(item.time)}</em></p></div>`;
		out += `<div class="commment_out_name"><p class="com_into">${item.name}</p></div>`;
		out += `<div class="commment_out_email"><p class="com_into">${item.email}</p></div>`;
		out += `<div class="commment_out_body"><p class="com_into">${item.body}</p></div>`;
	});
	commentField.innerHTML = out;
}

function timeConverter(UNIX_timestamp) {
	var a = new Date(UNIX_timestamp * 1000);
	var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
	var year = a.getFullYear();
	var month = months[a.getMonth()];
	var date = a.getDate();
	var hour = a.getHours();
	var min = a.getMinutes();
	var sec = a.getSeconds();
	var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec;
	return time;
}

// delete comnts[1];
console.log(comnts);