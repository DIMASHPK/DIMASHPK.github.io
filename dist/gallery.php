<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>test</title>
	<link rel="stylesheet" href="css/foundation.css">
	<meta name="description" content="Site about web-devolp and web-design">
	<link rel="stylesheet" href="css/magnific-popup.css">
	<link rel="stylesheet" href="css/style.css">
</head>
<body>
	<header>
		<?php include('header.php'); ?>	
	</header>

	<main>
		<section class="graphic-designer">
			<div class="row align-center">
				<div class="graphic-designer-inner">
					<h1 class="header">UI/UX & Graphic Designer</h1>
					<p class="txt">
						I am a Graphic & Web Designer based in New York, specializing 
						<br>in User Interface Design and Development.
					</p>
				</div>
			</div>
		</section>

		<section class="gallery">
			<div class="row	gallery-zoom align-center">
					<div class="columns large-3 small-4  no-mp">
								<a href="img/gallery/1.jpg" data-source="http://500px.com/photo/32736307"	>
									<img src="img/gallery/1.jpg">
								</a>
						</div>
					<div class="columns large-3 small-4  no-mp">
						<a href="img/gallery/2.jpg" data-source="http://500px.com/photo/32736307" title="Into The Blue" style="width:193px;height:125px;">
							<img src="img/gallery/2.jpg" width="193" height="125">
						</a>
					</div>
					<div class="columns large-3 small-4 no-mp">
						<a href="img/gallery/3.jpg" data-source="http://500px.com/photo/32736307" title="Into The Blue" style="width:193px;height:125px;">
							<img src="img/gallery/3.jpg" width="193" height="125">
						</a>
					</div>
					<div class="columns large-3 small-4 no-mp">
						<a href="img/gallery/4.jpg" data-source="http://500px.com/photo/32736307" title="Into The Blue" style="width:193px;height:125px;">
							<img src="img/gallery/4.jpg" width="193" height="125">
						</a>
					</div>
					<div class="columns large-3 small-4 no-mp">
						<a href="img/gallery/5.jpg" data-source="http://500px.com/photo/32736307" title="Into The Blue" style="width:193px;height:125px;">
							<img src="img/gallery/5.jpg" width="193" height="125">
						</a>
					</div>
					<div class="columns large-3 small-4 no-mp">
						<a href="img/gallery/6.jpg" data-source="http://500px.com/photo/32736307" title="Into The Blue" style="width:193px;height:125px;">
							<img src="img/gallery/6.jpg" width="193" height="125">
						</a>
					</div>
					<div class="columns large-3 small-4 no-mp">
						<a href="img/gallery/7.jpg" data-source="http://500px.com/photo/32736307" title="Into The Blue" style="width:193px;height:125px;">
							<img src="img/gallery/7.jpg" width="193" height="125">
						</a>
					</div>
					<div class="columns large-3 small-4 no-mp">
						<a href="img/gallery/8.jpg" data-source="http://500px.com/photo/32736307" title="Into The Blue" style="width:193px;height:125px;">
							<img src="img/gallery/8.jpg" width="193" height="125">
						</a>
					</div>
					<div class="columns large-3 small-4 no-mp">
						<a href="img/gallery/9.jpg" data-source="http://500px.com/photo/32736307" title="Into The Blue" style="width:193px;height:125px;">
							<img src="img/gallery/9.jpg" width="193" height="125">
						</a>
					</div>
					<div class="columns large-3 small-4 no-mp">
						<a href="img/gallery/10.jpg" data-source="http://500px.com/photo/32736307" title="Into The Blue" style="width:193px;height:125px;">
							<img src="img/gallery/10.jpg" width="193" height="125">
						</a>
					</div>
					<div class="columns large-3 no-mp">
						<a href="img/gallery/11.jpg" data-source="http://500px.com/photo/32736307" title="Into The Blue" style="width:193px;height:125px;">
							<img src="img/gallery/11.jpg" width="193" height="125">
						</a>
					</div>
					<div class="columns large-3 no-mp">
						<a href="img/gallery/12.jpg" data-source="http://500px.com/photo/32736307" title="Into The Blue" style="width:193px;height:125px;">
							<img src="img/gallery/12.jpg" width="193" height="125">
						</a>
					</div>
			</div>	
			</div>
		</section>
	</main>

	<?php include('footer.php'); ?>

	<script src="jquery/foundation.js"></script>
	<script src="jquery/what-input.js"></script>
	<script src="jquery/jquery.js"></script>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
	<script src="jquery/jquery.magnific-popup.min.js"></script>
	<script>
		$(document).ready(function() {
			$('.gallery-zoom').magnificPopup({
				delegate: 'a',
				type: 'image',
				closeOnContentClick: false,
				closeBtnInside: false,
				mainClass: 'mfp-with-zoom mfp-img-mobile',
				image: {
					verticalFit: false,
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