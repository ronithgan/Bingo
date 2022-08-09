alert("Items"); // change

document.addEventListener('click', () => alert('Choose number!'));

//var itemdiv = document.getElementsByClassName("item-title item-title-smaller");
var itemdiv = document.getElementsByClassName("col-md-5 itemModalHeader");

console.log(itemdiv);
console.log(itemdiv[0]);

var img2 = document.createElement('img');
		img2.src = "https://bingoimagesv1.s3-us-west-1.amazonaws.com/ScrollDown.png";
		img2.style.width = "auto";
		img2.style.height = "80px";
if (itemdiv)
    itemdiv.appendChild(img2);


		if(itemdiv)
		{
            console.log("Found Elem" + itemdiv);
            if(itemdiv.length > 0)
            {
			var input4 = itemdiv.parentElement;
			if(input4)
			{
				var input3 = input4.parentElement;


				img2 = document.createElement('img');
		img2.src = "https://bingoimagesv1.s3-us-west-1.amazonaws.com/ScrollDown.png";
		img2.style.width = "auto";
		img2.style.height = "80px";
		//img2.style.marginLeft = '20.5%';
		//img2.style.marginTop = '3.5%';
		input3.insertBefore(img2, input4);	
            }
        }
        else
        {
            console.log("else");
            var first = itemdiv[0];
            console.log("Item element has child: " + first);
            var input4 = itemdiv.parentElement;
            console.log(input4);

				img2 = document.createElement('img');
		img2.src = "https://bingoimagesv1.s3-us-west-1.amazonaws.com/ScrollDown.png";
		img2.style.width = "auto";
		img2.style.height = "80px";
		//img2.style.marginLeft = '20.5%';
		//img2.style.marginTop = '3.5%';
		itemdiv.append(img2);
        }
}

