function toogleNav() {
	var nav = document.getElementById("mySidenav");

	if (nav.style.width === "250px") {
		closeNav();
	} else {
		openNav();
	}
}

/* Set the width of the side navigation to 250px */
function openNav() {
	document.getElementById("mySidenav").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
	document.getElementById("mySidenav").style.width = "0";
}

function myFunction() {
	var dots = document.getElementById("dots"); var moreText = document.getElementById("more"); var btnText = document.getElementById("Btn");
	if (dots.style.display === "none") { dots.style.display = "inline"; btnText.innerHTML = "Read more"; moreText.style.display = "none"; } else { dots.style.display = "none"; btnText.innerHTML = "Read less"; moreText.style.display = "inline"; }
}
function myFunction2() {
	var dots = document.getElementById("dots2"); var moreText = document.getElementById("more2"); var btnText = document.getElementById("Btn2");
	if (dots.style.display === "none") { dots.style.display = "inline"; btnText.innerHTML = "Read more"; moreText.style.display = "none"; } else { dots.style.display = "none"; btnText.innerHTML = "Read less"; moreText.style.display = "inline"; }
}
function myFunction3() {
	var dots = document.getElementById("dots3"); var moreText = document.getElementById("more3"); var btnText = document.getElementById("Btn3");
	if (dots.style.display === "none") { dots.style.display = "inline"; btnText.innerHTML = "Read more"; moreText.style.display = "none"; } else { dots.style.display = "none"; btnText.innerHTML = "Read less"; moreText.style.display = "inline"; }
}
function myFunction4() {
	var dots = document.getElementById("dots4"); var moreText = document.getElementById("more4"); var btnText = document.getElementById("Btn4");
	if (dots.style.display === "none") { dots.style.display = "inline"; btnText.innerHTML = "Read more"; moreText.style.display = "none"; } else { dots.style.display = "none"; btnText.innerHTML = "Read less"; moreText.style.display = "inline"; }
}


// Move to Top



// When the user clicks on the button, scroll to the top of the document
function topFunction() {
	document.body.scrollTop = 0; // For Safari
	document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// Typing Text

var typed = new Typed(".auto-txt", {
	strings: ["Websites", "Web-Designs", "Platforms"],
	typeSpeed: 80,
	backSpeed: 0,
	loop: true
})

let type__ = new Typed(".auto-txt2", {
	strings: ["Wordpress Website", "Corporate Website", "Business Website", "SEO Website"],
	typeSpeed: 80,
	backSpeed: 0,
	loop: true
})

let count = document.querySelector('.count');
let counters = document.querySelectorAll('.counter-item .counter');

// Scroll Animation

let CounterObserver = new IntersectionObserver(
	(entries, observer) => {
		let [entry] = entries;
		if (!entry.isIntersecting) return;

		let speed = 100;
		counters.forEach((counter, index) => {
			function UpdateCounter() {
				const targetNumber = +counter.dataset.target;
				const initialNumber = +counter.innerText;
				const incPerCount = targetNumber / speed;
				if (initialNumber < targetNumber) {
					counter.innerText = Math.ceil(initialNumber + incPerCount);
					setTimeout(UpdateCounter, 20);
				}
			}
			UpdateCounter();

			if (counter.parentElement.style.animation) {
				counter.parentElement.style.animation = '';
			} else {
				counter.parentElement.style.animation = `slide-up 5s ease forwards ${index / counters.length + 5
					}s`;
			}
		});
		observer.unobserve(count);
	},
	{
		root: null,
		threshold: window.innerWidth > 768 ? 0.4 : 0.3,
	}
);

CounterObserver.observe(count);

var galleryThumbs = new Swiper('.gallery-thumbs', {
	effect: 'coverflow',
	grabCursor: true,
	centeredSlides: true,
	slidesPerView: '2',
	// coverflowEffect: {
	//   rotate: 50,
	//   stretch: 0,
	//   depth: 100,
	//   modifier: 1,
	//   slideShadows : true,
	// },

	coverflowEffect: {
		rotate: 0,
		stretch: 0,
		depth: 50,
		modifier: 6,
		slideShadows: false,
	},

});


var galleryTop = new Swiper('.swiper-container.testimonial', {
	speed: 400,
	spaceBetween: 50,
	autoplay: {
		delay: 3000,
		disableOnInteraction: false,
	},
	direction: 'vertical',
	pagination: {
		clickable: true,
		el: '.swiper-pagination',
		type: 'bullets',
	},
	thumbs: {
		swiper: galleryThumbs
	}
});



