<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Контакты комьюнити</title>
	<meta name="description" content="Контакты для связи с магазином"> 
	<link rel="preload" href="css/bootstrap.css" as="style" onload="this.rel='stylesheet'">
	<link rel="preload" href="css/slick.css" as="style" onload="this.rel='stylesheet'">
	<link rel="preload" href="css/slick-theme.css" as="style" onload="this.rel='stylesheet'">
	<link rel="preload" href="css/style.css" as="style" onload="this.rel='stylesheet'">
</head>
<body>
	
	<?php include('blocks.php/preloader.php'); 
	 			include('blocks.php/header.php'); ?>

	<main>
		<section class="contactsIcons">
			<div class="container text-center">
				<h1 class="HeadOfArticle">Контактные данные для связи с магазином</h1>
				<div class="row">
					<div class="col-lg-4 col-sm-6">
						<div class="media">
						  <div class="media-left media-middle">
						      <img class="media-object" src="img/icons/smartphone-call.svg" alt="...">
						  </div>
						  <div class="media-body">
						    <h4 class="media-heading">Связаться с нами мы можете по телефону:</h4>
						    <p>Укр - 38 097 521 37 73</p>
						    <p>Рос - 7 495 542-07-46</p>
						  </div>
						</div>
					</div>
					<div class="col-lg-4 col-sm-6">
						<div class="media">
						  <div class="media-left media-middle">
						      <img class="media-object" src="img/icons/chat.svg" alt="...">
						  </div>
						  <div class="media-body">
						    <h4 class="media-heading">Также вы можете отправить нам сообщение по электроной почте</h4>
						    <p>email: information@maxporso.com</p>
						  </div>
						</div>
					</div>
					<div class="col-lg-4 col-sm-12">
						<div class="media">
						  <div class="media-left media-middle">
						      <img class="media-object" src="img/icons/pin.svg" alt="...">
						  </div>
						  <div class="media-body">
						    <h4 class="media-heading">Или найти нас по адрессу:</h4>
						    <p>г. Киев улица Рогнединская 4а</p>
						    <p>г.Москва ул. Войкова 6стр1</p>
						  </div>
						</div>
					</div>
				</div>
			</div>
		</section>
		<section class="form">
			<div class="container">
				<div class="row">
					<div class="col-lg-6">
						<form action="#">
							<h2 class="HeadOfArticle">Задайте нам свой вопрос</h2>
							<label for="name">Ваше имя</label>
							<input class="input" id="name" type="text" placeholder="Ваше имя">
							<label name="email" for="email">Ваше email</label>
							<input class="input" id="email" name="username" type="text" placeholder="Ваш email">
							<label for="message">Сообщение</label>
							<textarea class="input" name="message" id="message" cols="20" rows="10" placeholder="Ваше сообщение"></textarea>
							<button class="button">отправить</button>
						</form>
					</div>
					<div class="col-lg-6 text-center">
						<img class="form-img" src="img/form/1.jpg" alt="">
					</div>
				</div>
			</div>
		</section>
		<?php include('blocks.php/works-slider.php') ?>
		<section class="maps">
			<div class="container text-center">
				<h1 class="HeadOfArticle">Карты</h1>
				<div class="row">
					<div class="col-lg-6">
						<h2 class="HeadOfArticle">г. Киев улица Рогнединская 4а</h1>
						<img src="img/maps/1.png" alt="">
					</div>
					<div class="col-lg-6">
						<h2 class="HeadOfArticle">г.Москва ул. Войкова 6стр1</h1>
						<img src="img/maps/2.png" alt="">
					</div>
				</div>
			</div>
		</section>
	</main>

	<?php include('blocks.php/footer.php') ?>
	
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