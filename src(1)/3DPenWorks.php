<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Выполненные работы</title>
	<meta name="description" content="Работы выполненные с помощью 3Д ручки">
	<link rel="preload" href="css/bootstrap.css" as="style" onload="this.rel='stylesheet'">
	<link rel="preload" href="css/magnific-popup.css" as="style" onload="this.rel='stylesheet'">
	<link rel="preload" href="css/style.css" as="style" onload="this.rel='stylesheet'">
</head>
<body>
	<?php include('blocks.php/preloader.php'); 
	 			include('blocks.php/header.php'); ?>
	
	<main>
		<section class="gallery second">
			<div class="container">
				<div class="HeadOfArticle">Выполненые работы</div>
				<div class="row">
					<div class="col-lg-5">
						<div class="gallery-works">
							<div class="gallery-works-up"></div>
							<a href="img/gallery/1.jpg">
								<img src="img/gallery/1.jpg" class="gallery-work-1" alt="first-Work" title="Статуя Свободы">
							</a>
							<h2>"Статуя свободы"</h2>
						</div>
					</div>
					<div class="col-lg-5 col-lg-offset-2 col-md-offset-0">
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
					<div class="col-lg-5 col-lg-offset-2 col-md-offset-0">
						<div class="gallery-works">
							<div class="gallery-works-up"></div>
							<a href="img/gallery/4.webp"><img src="img/gallery/4.webp" class="gallery-work-4" alt="fourth-work" title="Стрикоза"></a>
							<h2 class="margin">"Стрикоза"</h2>
						</div>
					</div>
					<div class="col-lg-5">
						<div class="gallery-works">
							<div class="gallery-works-up"></div>
							<a href="img/gallery/5.jpg"><img src="img/gallery/5.jpg" class="gallery-work-3" alt="fifth-work" title="Котенок"></a>
							<h2>"Котенок"</h2>
						</div>
					</div>
					<div class="col-lg-5 col-lg-offset-2">
						<div class="gallery-works">
							<div class="gallery-works-up"></div>
							<a href="img/gallery/6.jpg"><img src="img/gallery/6.jpg" class="gallery-work-4" alt="sixth-work" title="Бабочка"></a>
							<h2 class="margin">"Бабочка"</h2>
						</div>
					</div>
					<div class="col-lg-5">
						<div class="gallery-works">
							<div class="gallery-works-up"></div>
							<a href="img/gallery/7.jpg"><img src="img/gallery/7.jpg" class="gallery-work-3" alt="seventh-work" title="Багамол"></a>
							<h2>"Багамол"</h2>
						</div>
					</div>
					<div class="col-lg-5 col-lg-offset-2">
						<div class="gallery-works">
							<div class="gallery-works-up"></div>
							<a href="img/gallery/8.jpg"><img src="img/gallery/8.jpg" class="gallery-work-4" alt="Eighth_work" title="Дракон"></a>
							<h2 class="margin">"Дракон"</h2>
						</div>
					</div>
				</div>
			</div>
		</section>
		<?php include('blocks.php/nav.php'); ?>
	</main>

	<?php include('blocks.php/footer.php'); ?>

	<script src="js/jquery3.3.0.min.js"></script>
	<script src="js/bootstrap.min.js"></script>
	<script src="js/jquery.magnific-popup.min.js"></script>
	<script src="js/preloader.js"></script>
	<script>
		$(document).ready(function() {
			$('.gallery').magnificPopup({
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
		});
	</script>
</body>
</html>