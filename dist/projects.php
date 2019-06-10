<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>test</title>
	<meta name="description" content="Site about web-devolp and web-design">
	<link rel="stylesheet" href="css/foundation.css">
	<link rel="stylesheet" href="css/slick.css">
	<link rel="stylesheet" href="css/slick-theme.css">
	<link rel="stylesheet" href="css/style.css">
</head>
<body>
	<header>
		<?php include('header.php'); ?>
	</header>

	<main>
		<div class="slick-slider">
			<div class="slick-slider-slide">
				<div class="row">	
						<div class="columns large-5">
							<h1 class="header">Light Breakfast</h1>
							<p class="txt-site frst-txt">
								Light his can't a creeping. Be, bring blessed night. Replenish 
								blessed creature good. Saw earth every creepeth lights day, 
								divided abundantly form. In. Said given lights. Sixth the male. 
								Upon their multiply. Kind beast. Him tree upon.
							</p>	
							<p class="txt-site scnd-txt"> 
								Cattle. Dominion day herb she'd creeping divide darkness. 
								Which. Subdue had.
							</p>
							<p class="txt-site"><strong>Client:</strong>Emma Morris</p>
							<p class="txt-site"><strong>Date:</strong> 25.06.2017</p>
							<p class="txt-site"><strong>Share:</strong>Facebook, Twitter, Pinterest</p>
						</div>
						<div class="columns large-6 large-offset-1">
							<img src="img/projects/3.png" alt="">	
						</div>
				</div>
			</div>
			<div class="slick-slider-slide">
				<div class="row">	
						<div class="columns large-5">
							<h1 class="header">Light Breakfast</h1>
							<p class="txt-site frst-txt">
								Light his can't a creeping. Be, bring blessed night. Replenish 
								blessed creature good. Saw earth every creepeth lights day, 
								divided abundantly form. In. Said given lights. Sixth the male. 
								Upon their multiply. Kind beast. Him tree upon.
							</p>	
							<p class="txt-site scnd-txt"> 
								Cattle. Dominion day herb she'd creeping divide darkness. 
								Which. Subdue had.
							</p>
							<p class="txt-site"><strong>Client:</strong>Emma Morris</p>
							<p class="txt-site"><strong>Date:</strong> 25.06.2017</p>
							<p class="txt-site"><strong>Share:</strong>Facebook, Twitter, Pinterest</p>
						</div>
						<div class="columns large-6 large-offset-1">
							<img src="img/projects/4.png" alt="">
						</div>
				</div>
			</div>
			<div class="slick-slider-slide">
				<div class="row">	
						<div class="columns large-5">
							<h1 class="header">Light Breakfast</h1>
							<p class="txt-site frst-txt">
								Light his can't a creeping. Be, bring blessed night. Replenish 
								blessed creature good. Saw earth every creepeth lights day, 
								divided abundantly form. In. Said given lights. Sixth the male. 
								Upon their multiply. Kind beast. Him tree upon.
							</p>	
							<p class="txt-site scnd-txt"> 
								Cattle. Dominion day herb she'd creeping divide darkness. 
								Which. Subdue had.
							</p>
							<p class="txt-site"><strong>Client:</strong>Emma Morris</p>
							<p class="txt-site"><strong>Date:</strong> 25.06.2017</p>
							<p class="txt-site"><strong>Share:</strong>Facebook, Twitter, Pinterest</p>
						</div>
						<div class="columns large-6 large-offset-1">
							<img src="img/projects/5.png" alt="">
						</div>
				</div>
			</div>
		</div>
		<section class="arrows">
			<div class="row">
				<div class="columns large-2 small-3">
					<button class="prev" type="button" style="margin-top: 10px; width: 100; height: 100">
							<img class="arrows-prv" src="img/projects/1.png" alt="">
							<p>previous project</p>
					</button>
				</div>
				<div class="columns large-2 large-offset-8 small-offset-7 align-self-right">
					<button class="next" type="button" style="margin-top: 10px; width: 100; height: 100">
							<p>next project</p>
							<img class="arrows-nxt" src="img/projects/2.png" alt="">
					</button>
				</div>	
			</div>
		</section>
	</main>

	<?php include('footer.php'); ?>

	<script src="jquery/foundation.js"></script>
	<script src="jquery/what-input.js"></script>
	<script src="jquery/jquery.js"></script>
	<script src="jquery/fotorama.js"></script>
	<script src="jquery/slick.js"></script>
	<script>
		$(document).ready(function(){
		  $('.slick-slider').slick({
		    prevArrow: $('.prev'),
		    nextArrow: $('.next')
		  });
		});
	</script>
</body>
</html>