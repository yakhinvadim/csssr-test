import noUiSlider from 'nouislider';

const javascriptSkill = document.querySelector('.javascript-skill__slider');

noUiSlider.create(javascriptSkill, {
	start: [3],
	step: 1,
	range: {
		min: 0,
		max: 10
	}
});

document.querySelector('.javascript-skill__pip_lvl_beginner').addEventListener('click', function () {
	javascriptSkill.noUiSlider.set(0);
});

document.querySelector('.javascript-skill__pip_lvl_junior').addEventListener('click', function () {
	javascriptSkill.noUiSlider.set(2);
});

document.querySelector('.javascript-skill__pip_lvl_middle').addEventListener('click', function () {
	javascriptSkill.noUiSlider.set(5);
});

document.querySelector('.javascript-skill__pip_lvl_senior').addEventListener('click', function () {
	javascriptSkill.noUiSlider.set(10);
});
