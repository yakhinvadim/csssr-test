import noUiSlider from 'nouislider';

const slider = document.getElementById('nouislider');

noUiSlider.create(slider, {
	start: [4],
	step: 1,
	range: {
		min: 0,
		max: 10
	}
});
