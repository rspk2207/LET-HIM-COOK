const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '9eeab93e74mshd866a9a6cb00f9ap1bdc28jsn8c3f07c53324',
		'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
	}
};

async function fetchapi(url) {
	
}

async function getRecipe(id) {
	let data = null;
	let url = 'https://tasty.p.rapidapi.com/recipes/get-more-info?id='+id;
	await fetch(url, options)
	.then(response => response.json())
	.then(response => {
        data = response;
        //console.log(response);
    })
	.catch(err => console.error(err));
	//console.log('kjasdbnj',`aknxmbzsncjnlckajbka`);
	console.log(data);
	showRecipe(data);
	//createRecipe()
}

async function getRecipeList(from,tag) {
	let url = 'https://tasty.p.rapidapi.com/recipes/list?from=' + from + '&size=10';
	if(tag !== '')
	{
		url += '&tags='+tag;
	}
	fetchapi(url,data);
	console.log(data);
	//console.log('kjasdbnj',`aknxmbzsncjnlckajbka`);
	//document.getElementById('123').innerHTML += '<p class="ahc">'+data.des+'</p>';
	//createRecipe()
}

function showRecipe(data){
	document.getElementById('name').innerHTML += '<div>'+data.name+'</div>';
	document.getElementById('thumbnail_url').innerHTML += `<img src="`+data.thumbnail_url+`" widht="200px" height="200px">`;
	for(let i=0;i<data.instructions.length;i++)
	{
		document.getElementById('instructions').innerHTML += '<li>'+data.instructions[i].display_text+'</li>';
	}
	document.getElementById('ingredients').innerHTML += '';
	for(let i=0;i<data.sections[0].components.length;i++)
	{
		document.getElementById('ingredients').innerHTML += '<li>'+data.sections[0].components[i].raw_text+'</li>';
	}
	document.getElementById('description').innerHTML += '<p>'+data.description+'</p>';
	document.getElementById('yields').innerHTML += '<p>'+data.yields+'</p>';
	/*
	for(let i=0;i<data.nutrition.length;i++)
	{
		document.getElementById('nutrition').innerHTML += '<li>'+data.nutrition[i]+'</li>';
	}
	*/
	for(let i=0;i<data.tags.length;i++)
	{
		document.getElementById('tags').innerHTML += '<li>'+data.tags[i].display_name+'</li>';
		//name also include
	}
	document.getElementById('video_url').innerHTML += '<embed src="'+data.video_url+'">';
}
