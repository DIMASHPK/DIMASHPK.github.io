<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Наш комьюнити</title>
	<meta name="description" content="Описание компании">
	<link rel="preload" href="css/bootstrap.css" as="style" onload="this.rel='stylesheet'">
	<link rel="preload" href="css/slick.css" as="style" onload="this.rel='stylesheet'">
	<link rel="preload" href="css/slick-theme.css" as="style" onload="this.rel='stylesheet'">
	<link rel="preload" href="css/style.css" as="style" onload="this.rel='stylesheet'">
</head>
<body>
	<?php include('blocks.php/preloader.php'); 
	 			include('blocks.php/header.php'); ?>

	<main>
		<section class="aboutUS">
			<div class="container">
				<div class="aboutUS-head">
					<h1 class="HeadOfArticle">Наш комьюнити</h1>
					<p class="article">На данной странице вы можете ознакомиться с описанием нашей компании</p>
				</div>
				<div class="row">
					<div class="col-lg-12">
						<img src="img/aboutus/1.jpg" alt="AboutUS" title="AboutUs">
					</div>
					<div class="col-lg-12">
						<div class="aboutUS-content">
							<h2 class="HeadOfArticle">СПЕЦИАЛИЗИРОВАННЫЙ ИНТЕРНЕТ МАГАЗИН 3Д РУЧЕК</h2>
							<p class="article">Pen3d.com.ua — первый специализированный интернет-магазин 3d ручек в Украине с 2013 года. 
							Мы отбираем только самые качественные и интересные товары, которые могут заинтересовать 
							покупателей. Прежде, чем выпустить в продажу тот или иной продукт, мы проводим тестирование на 
							работоспособность, удобство а также совместимость с расходными материалами.
							Мы работаем только с проверенными производителями и осуществляем свое сотрудничество 
							напрямую, без посредников, поэтому предлагаем вам доступные цены, отличное качество и 
							наиболее выгодные условия приобретения. На все 3D ручки распространяется гарантия 6 
							месяцев. Вопросы по технической поддержке 3D ручек вы можете задать независимо от срока гарантии.
						</p>
						</div>
					</div>
				</div>
			</div>
		</section>
		<?php include('blocks.php/works-slider.php') ?>
		<section class="contacts">
			<div class="container">
				<div class="row">
					<h1 class="HeadOfArticle">Maxporso</h1>
					<p class="article">Все еще задешься вопросом, зачем тебе 3D ручка именно от нас или тревожит еще какой-то вопрос?
					<br>Смело задавай его нам! 
					<br>Жми на кнопку ниже и мы с удовольстивем ответим на все вопросы. 
					<br>Ведь довольный клиент - это именно то ради чего мы здесь</p>
					<a class="button" href="KONTAKTS.html">Задать вопрос</a>
				</div>
			</div>
		</section>
		<?php include('blocks.php/Pen-bestGift.php') ?>
		<div class="Tostore">
			<a class="button" href="3d-pens-buy.php">В магазин</a>
		</div>
	</main>

	<?php include('blocks.php/footer.php'); ?>
	
	<script src="js/jquery3.3.0.min.js"></script>
	<script src="js/bootstrap.min.js"></script>
	<script src="js/slick.min.js"></script>
	<script src="js/preloader.js"></script>
	<script>
		$(document).ready(function() { 
			$('.works-slider').slick({
			  infinite: true,
			  slidesToShow: 3,
			  slidesToScroll: 2,
			  responsive: [
			    {
			       breakpoint: 991,
			       settings: {
			       slidesToShow: 2,
			       slidesToScroll: 1
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
		});	
	</script>
</body>
</html>