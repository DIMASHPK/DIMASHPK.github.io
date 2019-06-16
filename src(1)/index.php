<!DOCTYPE php>
<php lang="en">
<head>
	<meta charset="UTF-8">
	<title>Стартовая страница</title>
	<meta name="description" content="Главная страница сайта, которая содержит описание всего сайта">
	<link rel="preload" href="css/bootstrap.css" as="style" onload="this.rel='stylesheet'">
	<link rel="preload" href="css/slick.css" as="style" onload="this.rel='stylesheet'">
	<link rel="preload" href="css/slick-theme.css" as="style" onload="this.rel='stylesheet'">
	<link rel="preload" href="css/magnific-popup.css" as="style" onload="this.rel='stylesheet'">
	<link rel="preload" href="css/style.css" as="style" onload="this.rel='stylesheet'">
</head>
<body>
	<?php include('blocks.php/preloader.php'); 
	 			include('blocks.php/header.php'); ?>

	<main>
		<?php include('blocks.php/Pen.php'); ?>
		<section class="aboutPen">
			<div class="container">
				<div class="row">
					<div class="aboutPen-txt">
						<h1 class="HeadOfArticle">Что можно сделать с помощью ручек?</h1>
						<p class="article">Сфера применения 3D ручек безгранична. Многие пользователи ошибочно воспринимают гаджет, 
							как развлекательное устройство. Искусные узоры, оригинальные фигурки и украшения – это всего 
							шь малая часть из того, на что способны аддитивные ручки!
						</p>
						<div class="Frstvideo">
							<img src="video/1.png" alt="">
							<video controls="controls" class="video">
						  	<source src="video/1.mp4" type="video/mp4">
							</video>
						</div>
						
						<a href="pensVeiews.php" class="button">Больше видео?</a>
					</div>
				</div>
			</div>
		</section>
		<?php include('blocks.php/Pen-bestGift.php') ?>
		<section class="catalog">
			<div class="container">
				<div class="row">
					<h1 class="HeadOfArticle">Каталог</h1>
					<div class="slider">
						<div class="slider-element">
							<img src="img/catalog/1.jpg" alt="firstpen" title="Фиолетовая ручка">
							<h2 class="article">3Д ручка Air Pen 2S c LCD дисплеем</h2>
							<a class="button" href="3d-pens-buy.php">заказать</a>
						</div>
						<div class="slider-element">
							<img src="img/catalog/2.jpg" alt="firstpen" title="Голубая ручка">
							<h2 class="article">3Д ручка Air Pen 2S c LCD дисплеем</h2>
							<a class="button" href="3d-pens-buy.php">заказать</a>
						</div>
						<div class="slider-element">
							<img src="img/catalog/3.jpg" alt="firstpen" title="Пурпурная ручка">
							<h2 class="article">3Д ручка Air Pen 2S c LCD дисплеем</h2>
							<a class="button" href="3d-pens-buy.php">заказать</a>
						</div>
						<div class="slider-element">
							<img src="img/catalog/4.jpg" alt="firstpen" title="Камуфляжная ручка">
							<h2 class="article">3Д ручка Air Pen 2S c LCD дисплеем</h2>
							<a class="button" href="3d-pens-buy.php">заказать</a>
						</div>
						</div>
					</div>
					<a class="button catalog-button" href="3d-pens-buy.php">В магащин</a>
				</div>
			</div>
		</section>
		<section class="gallery">
			<div class="container gallery">
				<div class="HeadOfArticle">Выполненые работы</div>
				<div class="row popup">
					<div class="col-lg-5">
						<div class="gallery-works">
							<div class="gallery-works-up"></div>
							<a href="img/gallery/1.jpg">
								<img src="img/gallery/1.jpg" class="gallery-work-1" alt="first-Work" title="Статуя Свободы">
							</a>
							<h2>"Статуя свободы"</h2>
						</div>
					</div>
					<div class="col-lg-5 col-lg-offset-2">
						<div class="gallery-works">
							<div class="gallery-works-up"></div>
							<a href="img/gallery/2.jpg"><img src="img/gallery/2.jpg" class="gallery-work-2" alt="second-Work" title="Олень"></a>
							<h2 class="margin">"Олень"</h2>
						</div>
					</div>
					<div class="col-lg-5">
						<div class="gallery-works">
							<div class="gallery-works-up"></div>
							<a href="img/gallery/3.jpg"><img src="img/gallery/3.jpg" class="gallery-work-3" alt="thire-Work" title="Эйфелева башея"></a>
							<h2>"Эйфелева башня"</h2>
						</div>
					</div>
					<div class="col-lg-5 col-lg-offset-2">
						<div class="gallery-works">
							<div class="gallery-works-up"></div>
							<a href="img/gallery/4.webp"><img src="img/gallery/4.webp" class="gallery-work-4" alt="fourth-work" title="Стрикоза"></a>
							<h2 class="margin">"Стрикоза"</h2>
						</div>
					</div>
				</div>
				<a class="button gallery-btn" href="3DPenWorks.php">Еще работы</a>
			</div>
		</section>	
		<section class="contacts">
			<div class="container">
				<div class="row">
					<h1 class="HeadOfArticle">Нарисуй мечту</h1>
					<p class="article">Все еще задешься вопросом, зачем тебе 3D ручка именно от нас или тревожит еще какой-то вопрос?
					<br>Смело задавай его нам! 
					<br>Жми на кнопку ниже и мы с удовольстивем ответим на все вопросы. 
					<br>Ведь довольный клиент - это именно то ради чего мы здесь</p>
					<a class="button" href="KONTAKTS.php">Задать вопрос</a>
				</div>
			</div>
		</section>
	</main>

	<?php include('blocks.php/footer.php') ?>

	<script src="js/jquery3.3.0.min.js"></script>
	<script src="js/bootstrap.min.js"></script>
	<script src="js/slick.min.js"></script>
	<script src="js/jquery.magnific-popup.min.js"></script>
	<script src="js/preloader.js"></script>
	<script>
		$(document).ready(function() {
			$('.slider').slick({
			  infinite: true,
			   slidesToShow: 3,
			   slidesToScroll: 1,
			   responsive: [
			       {
			         breakpoint: 991,
			         settings: {
			           slidesToShow: 2,
			           slidesToScroll: 2
			         }
			       },
			       {
			         breakpoint: 767,
			         settings: {
			           slidesToShow: 1,
			           slidesToScroll: 1,
			         }
			       }
			       // You can unslick at a given breakpoint now by adding:
			       // settings: "unslick"
			       // instead of a settings object
			     ]
			});


			$('.popup').magnificPopup({
				delegate: 'a',
				type: 'image',
				closeOnContentClick: false,
				closeBtnInside: false,
				mainClass: 'mfp-with-zoom mfp-img-mobile',
				image: {
					verticalFit: true,
					titleSrc: function(item) {
						return item.el.attr('title') + ' &middot; <a class="image-source-link" href="'+item.el.attr('data-source')+'" target="_blank">image source</a>';
					}
				},
				gallery: {
					enabled: true
				},
				zoom: {
					enabled: true,
					duration: 300, // don't foget to change the duration also in CSS
					opener: function(element) {
						return element.find('img');
					}
				}
			});

			$('.Frstvideo').click(function(){
				$(this).children('img').css('display', 'none');
				$(this).children('video').css('display', 'block');
			});
		});		  
	</script>
</body>
</php>