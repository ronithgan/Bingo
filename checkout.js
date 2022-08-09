var elem1 = document.getElementsByClassName("rmq-6827400b rmq-e8b5057c rmq-bd8d1a29 rmq-1d4d8c66 rmq-d67cb54d rmq-a53f6637 rmq-36e40f64");
			if (elem1) {
                console.log(elem1.length);
				if (elem1.length > 0) {
					var elem = elem1[0];
					console.log("Found Elem has child nodes");
					var child = elem.firstChild;

					var divd = document.createElement('div'); 
					var img10 = document.createElement('img');
					img10.src = "https://bingoimagesv1.s3-us-west-1.amazonaws.com/Enter_Info_2.png";
					divd.appendChild(img10);
					img10.style.width = "auto";
					img10.style.height = "80px"; 
                    img10.style.marginLeft = '37%';
					if (child) {
						console.log("Found Elem insert before");
						elem.insertBefore(divd, child);
					}
				}
			}


