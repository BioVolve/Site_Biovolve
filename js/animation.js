$('nav a').click(function(e){ //cria a função ao clicar no componente (nav-list a)
	e.preventDefault(); //impede a função padrão do item
	var id = $(this).attr('href'); //indetifica o id do que estamos selecionando
		targetOffset = $(id).offset().top; //retorna o top e o left do elemento
		//começo da animação

	$('html, body').animate({
		scrollTop: targetOffset
	}, 500);

		console.log(targetOffset);
});

$('footer li').click(function(e){ //cria a função ao clicar no componente (nav-list a)
	e.preventDefault(); //impede a função padrão do item
	var lista = $(this).attr('#'); //indetifica o id do que estamos selecionando
		targetOffset = $(lista).offset(); //retorna o top e o left do elemento
		//começo da animação

	$('html, body').animate({
		scrollTop: targetOffset
	}, 500);

		console.log(targetOffset);
});