let slider = document.getElementById('slider');
let line1 = document.getElementById('line1_id');
let line2 = document.getElementById('line2_id');
let line3 = document.getElementById('line3_id');
let line4 = document.getElementById('line4_id');
let line5 = document.getElementById('line5_id');
let active = document.getElementById('active_id');

line1.onclick = function () {
	slider.style.transform = 'translateX(0)';
	active.style.top = '0px';
}
line2.onclick = function () {
	slider.style.transform = 'translateX(-20%)';
	active.style.top = '80px';
}
line3.onclick = function () {
	slider.style.transform = 'translateX(-40%)';
	active.style.top = '160px';
}
line4.onclick = function () {
	slider.style.transform = 'translateX(-60%)';
	active.style.top = '240px';
}
line5.onclick = function () {
	slider.style.transform = 'translateX(-80%)';
	active.style.top = '320px';
}
