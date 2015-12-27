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
