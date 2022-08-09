alert("storefront");
document.onmousemove = event => {
    console.log('hello world');
};
var searchdivnew = document.getElementById("search-term-accessibility-navigation");
		if (searchdivnew) {
			var input16 = searchdivnew.parentElement;
			if (input16) {
				var input15 = input16.parentElement;

				var img8 = document.createElement('img');
				img8.src= "https://bingoimagesv1.s3-us-west-1.amazonaws.com/Search_Up_Arrows.png";
				img8.style.marginLeft = '46.25%';
				img8.style.marginTop = '0.5%';
				img8.style.width = "auto";
				img8.style.height = "150px";
				//input15.insertBefore(img8, input15);
				input16.appendChild(img8);
			}
		}
