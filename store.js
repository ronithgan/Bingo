alert("store");

var searchdiv = document.querySelector(".css-14b3tu7-HomeSearch");
		if (searchdiv) {
            console.log("found css term...")
			var input2 = searchdiv.parentElement;
			if (input2) {
				var input = input2.parentElement;


                var img8 = document.createElement('img');
				img8.src= "https://bingoimagesv1.s3-us-west-1.amazonaws.com/search_2.png";
				img8.style.marginLeft = '5%';
				//img8.style.marginTop = '10%';
				img8.style.width = "auto";
				img8.style.height = "60px";
				//input15.insertBefore(img8, input15);
				input2.appendChild(img8);

				var img = document.createElement('img');
				img.src= "https://bingoimagesv1.s3-us-west-1.amazonaws.com/Click_Search_Diagonal_Arrow.png";
				img.style.marginLeft = '36%';
				//img.style.marginTop = '10%';
				img.style.width = "auto";
				img.style.height = "85px";
				//input.insertBefore(img, input2);
				input2.append(img);   

                
                
			}
		}
