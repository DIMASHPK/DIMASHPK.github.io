$(function(){
			/*burger-menu*/
			let burgerButton = $('.burgerButton');
			let burgerMenu = $('.toggleMenu')
			burgerButton.on('click', function(){
					burgerButton.toggleClass('active');
					burgerMenu.toggle(500)
			})
			
			/*burger-menu__navigation*/
			let toggleMenuLi = $('.toggleMenu__ul .toggleMenu__li');
			toggleMenuLi.each(function(){
				$(this).children().on('click', function(e){
						e.preventDefault();
						let section = $(this).data('section');
						let offsetSection  = $(`.${section}`).offset().top;
						console.log(offsetSection)
						$('html, body').animate({
								scrollTop: offsetSection
						},900)
				})
			})
			/*main-slider__slide*/
			$('.main-slider__container').slick({
				prevArrow: '<button class="main-slider__prev-arrow"></button>', 
				nextArrow: '<button class="main-slider__next-arrow"></button>', 
			});

			/*scroll-down*/
			let winodwHeight = $('html body').height();
			let footerOffset = $('footer').outerHeight();
			let scrollDown = winodwHeight - footerOffset;
			let buttonToScroll = $('.main-slider__scroll-down')
			buttonToScroll.on('click', function(){ 
				$('html, body').animate({
					scrollTop: scrollDown
				},900)
			}); 

			/*video-play*/
			let preloaderBg = document.querySelector('.video__preloader');
			let preloader = document.querySelector('.video__preloader-img');
			let preloaderImg = document.querySelector('.video__preloader-table');
			let video = document.querySelector('.video__video');

			preloader.addEventListener('click',function(){
						video.play();
						preloaderBg.style.display = 'none';
						preloader.style.display = 'none';
						preloaderImg.style.display = 'none';
							
			});
		 
			/*our-works__panel*/
			$('.panel__element').each(function(i){
				$(this).attr('data-href', '#tab' + i);
			});

			$('.wrap-works').each(function(i){
				$(this).attr('id', 'tab' + i);
			})

			$('.panel__element').on('click', function(e){
				e.preventDefault();
				$('.panel__element').addClass('active').removeClass('active');
				$(this).addClass('active');
				let tab = $(this).data('href')
				$('.wrap-works').not(tab).animate({opacity: '0'}, 500).removeClass('active');
				$(tab).animate({opacity: '1'}, 500).addClass('active')
			})

			/*popup*/
			$('.work').magnificPopup({
			    items: [
			      {
			        src: '/img/5.jpg'
			      },
			      {
			         src: '../img/1.jpg'
			        
			      },
			      {
			        src: '../img/2.jpg'
			      },
			      {
			        src: '../img/3.jpg'
			      },
			      {
			        src: '../img/4.jpg'
			      },
			      {
			        src: '../img/5.jpg'
			      },
			      {
			        src: '../img/1.jpg'
			      },
			      {
			        src: '../img/2.jpg'
			      },
			      {
			        src: '../img/3.jpg'
			      },
			    ],
			    gallery: {
			      enabled: true
			    },
			    type: 'image'
			});

			/*black-slider*/
			$('.black-slider__container').slick({
				prevArrow: '<button class="main-slider__prev-arrow"></button>', 
				nextArrow: '<button class="main-slider__next-arrow"></button>', 
				slidesToShow: 3,
				slidesToScroll: 2,
				autoplay: true,
				autoplaySpeed: 2000,
				responsive: [
					{
						breakpoint: 991,
						settings: {
						  slidesToShow: 2,
						  slidesToScroll: 2,
						  infinite: true
						},
					},
					{
						breakpoint: 768,
						settings: {
						  slidesToShow: 1,
						  slidesToScroll: 1,
						  infinite: true
						}	
					}
				]
			});

			/*who-we-are__slider*/
			$('.who-we-are__slider').slick({
				dots: true,
				arrows: false,
				autoplay: false,
				autoplaySpeed: 2000,
				responsive: [
				{
					breakpoint: 768,
					settings: {
						autoplay: true
					}

				}
				]
			});

			/*feature__count*/
			let time = 2;
			let end = 1;
			$(window).scroll(function(){
							$('.some-features__header_style-two').each(function(){
								let cPos = $(this).offset().top;
								let windowScroll = $(window).scrollTop();
								if(end < 2){
									if(cPos < windowScroll + 600){
										$('.feature__count').each(function(){
											let i = 1;
											let num = $(this).data('count')
											let step = 1500 * time / num;
											let that = $(this);
											let int = setInterval(function(){
												if(i  < num ){
													that.html(i);
												}else{
													clearInterval(int);
													end++;
												}
												i++;
											}, step)
										})
									}
								}
							})
				})

			/*blog_popup*/
			$('.blog__wrap-img').magnificPopup({
			    items: [
			      {
			        src: '../img/1.jpg'
			      },
			      {
			         src: '../img/2.jpg'
			        
			      },
			      {
			        src: '../img/3.jpg'
			      },
			    ],
			    gallery: {
			      enabled: true
			    },
			    type: 'image'
			});


			/*validator_form*/
			let inputs = document.querySelectorAll('.form__input');
			let form = document.querySelector('form');

			form.onsubmit = stopSend;

			function stopSend(e){
					let errorForm = 0;
					for(let i = 0; i < inputs.length; i++){
						if(inputs[i].value == ''){
							errorForm++;
							inputs[i].classList.add('error__input');
							inputs[i].value = 'Заполните поле'
						}
					}

					if(errorForm > 0){
						e.preventDefault()
					}

					for(let i = 0; i < inputs.length; i++){
						inputs[i].oninput = function(){
							if(this.classList.contains('error__input')){
									this.classList.remove('error__input');
							}
						}
					}
				
									
			}
			/*acardion_map*/
			let button = $('.Locate-on-map')
			let map = $('.map')

			button.on('click', function(){
				map.slideToggle(400)
			})
			})
			
