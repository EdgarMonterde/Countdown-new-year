particlesJS('particles-js', 

{
	"particles": {
		"number": {
			"value": 45,
			"density": {
				"enable": true,
				"value_area": 800
			}
		},
		"color": {
			"value": "#F8BF56"
		},
		"shape": {
			"type": "circle",
			"stroke": {
				"width": 0,
				"color": "#000000"
			},
			"polygon": {
				"nb_sides": 5
			},
			"image": {
				"src": "img/github.svg",
				"width": 100,
				"height": 100
			}
		},
		"opacity": {
			"value": 0.5,
			"random": false,
			"anim": {
				"enable": false,
				"speed": 1,
				"opacity_min": 0.1,
				"sync": false
			}
		},
		"size": {
			"value": 10,
			"random": true,
			"anim": {
				"enable": false,
				"speed": 80,
				"size_min": 0.1,
				"sync": false
			}
		},
		"line_linked": {
			"enable": false,
			"distance": 250,
			"color": "#F8BF56",
			"opacity": 0.2,
			"width": 2
		},
		"move": {
			"enable": true,
			"speed": 6,
			"direction": "none",
			"random": false,
			"straight": false,
			"out_mode": "out",
			"bounce": false,
			"attract": {
				"enable": false,
				"rotateX": 600,
				"rotateY": 1200
			}
		}
	},
	"interactivity": {
		"detect_on": "canvas",
		"events": {
			"onhover": {
				"enable": false,
				"mode": "grab"
			},
			"onclick": {
				"enable": true,
				"mode": "repulse"
			},
			"resize": true
		},
		"modes": {
			"grab": {
				"distance": 800,
				"line_linked": {
					"opacity": 1
				}
			},
			"bubble": {
				"distance": 800,
				"size": 80,
				"duration": 2,
				"opacity": 0.8,
				"speed": 3
			},
			"repulse": {
				"distance": 400,
				"duration": 0.4
			},
			"push": {
				"particles_nb": 4
			},
			"remove": {
				"particles_nb": 2
			}
		}
	},
	"retina_detect": true
});