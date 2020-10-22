var images = {
	man: {
		heading: 'Man Image',
		description: 'Image of a man.',
		path: 'img/man.jpg'
	},
	wizard: {
		heading: 'Wizard Image',
		description: 'Image of a wizard.',
		path: 'img/wizard.jpg'
	},
	beast: {
		heading: 'Beast Image',
		description: 'Image of a beast.',
		path: 'img/beast.jpg'
	}
};

const showMenu = () => {
	var x = document.getElementById("myTopnav");
	if (x.className === "topnav") {
		x.className += " responsive";
	} else {
		x.className = "topnav";
	}
}

const listItems = () => {
	Object.keys(images).forEach(function (key){
		console.log(images[key]);
		var itemDiv = document.createElement('div');
		var descDiv = document.createElement('div');
		var heading = document.createElement('h4');
		var description = document.createElement('p');
		var path = document.createElement('img');
		itemDiv.className = "list-item"
		descDiv.className = "list-desc"
		path.className = "list-img"
		heading.textContent = images[key].heading;
		description.textContent = images[key].description;
		path.src = images[key].path;
		descDiv.append(heading)
		descDiv.append(description)
		itemDiv.append(path)
		itemDiv.append(descDiv)
		document.getElementById('list-container').append(itemDiv)
	});
}
