<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>test</title>
	<meta name="description" content="Site about web-devolp and web-design">
	<link rel="stylesheet" href="css/foundation.css">
	<link rel="stylesheet" href="css/style.css">
</head>
<body>
	<header>
		<?php include('header.php'); ?>	
	</header>

	<main>
		<section class="designer">
			<div class="row align-center">
				<div class="designer-inner">	
					<h1>Amelia Woods</h1>
					<p>
						I am a Graphic & Web Designer based in New York, specializing 
						<br>in User Interface Design and Development.
					</p>
				</div>
			</div>
		</section>

		<section class="icons">
			<div class="row">
				<div class="columns large-3 small-4 small-offset-1 large-offset-0">
					<div class="icons-inner">
						<img src="img/icons/1.svg" alt="PROJETS COMPLETED">
						<div>
							<p>548</p>
							<p>PROJETS COMPLETED</p>
						</div>
					</div>
				</div>
				<div class="columns large-3 small-4 small-offset-2 large-offset-0">
					<div class="icons-inner">
						<img src="img/icons/2.svg" alt="WORKING HOURS">
						<div>
							<p>1465</p>
							<p>WORKING HOURS</p>
						</div>
					</div>
				</div>
				<div class="columns large-3	small-4 small-offset-1 large-offset-0">
					<div class="icons-inner">
						<img src="img/icons/3.svg" alt="POSITIVE FEEDBACKS">
						<div>
							<p>612</p>
							<p>POSITIVE FEEDBACKS</p>
						</div>
					</div>
				</div>
				<div class="columns large-3	small-4 small-offset-2 large-offset-0">
					<div class="icons-inner">
						<img src="img/icons/4.svg" alt="HAPPY CLIENTS">
						<div>
							<p>735</p>
							<p>HAPPY CLIENTS</p>
						</div>
					</div>
				</div>
			</div>
		</section>

		<section class="about-me">
			<div class="row">
				<div class="columns large-6 about-me-frst">
						<img src="img/about me/avatar.svg" width="544" height="544" alt="about me">
				</div>
				<div class="columns large-6">
					<div class="about-me-block">
						<h1>About me</h1>
						<p>
							Given let waters air sea had you'll, may seed abundantly fish. 
							Were, you'll earth forth winged above brought. Own darkness 
							they're him can't fourth sea place have.
						</p>
						<p>
							So the above May stars cattle fruitful face shall. Tree it, winged. 
							Every signs male firmament us. Morning him.
						</p>
						<img src="img/about us/1.png" alt="">
					</div>
				</div>
			</div>
		</section>

		<section class="need-project">
			<div class="row align-center">
				<div class="need-project-block">
					<h1 class="header">Need a Project?</h1>
					<p class="need-project-block-txt">
						Let us know what you're looking for in an agency. We'll take a look and see 
						<br>if this could be the start of something beautiful.
					</p>
					<button class="btn"><a class="" href="contact.html">LET`S TALK</a></button>
				</div>
			</div>
		</section>
	</main>

	<?php include('footer.php'); ?>

	<script src="jquery/foundation.js"></script>
	<script src="jquery/what-input.js"></script>
	<script src="jquery/jquery.js"></script>
	<script src="jquery/fotorama.js"></script>
</body>
</html>