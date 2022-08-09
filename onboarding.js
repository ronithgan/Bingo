var choosestorediv = document.getElementsByTagName("rmq-dac42680");
console.log("Console: " + choosestorediv);
for (var i = 0; i < choosestorediv.length; i++) {
    console.log();
   }
console.log(choosestorediv[0]);
		if (choosestorediv)
		{
			var input6 = choosestorediv.parentElement;
			if(input6)
			{
				var input5 = input6.parentElement;

				var img3 = document.createElement('img');
		img3.src = "https://bingoimagesv1.s3-us-west-1.amazonaws.com/Store.png";
		img3.style.width = "auto";
		img3.style.height = "60px"; 
		img3.style.marginRight = '2%';
		//input5.insertBefore(img3, input6);
		input6.appendChild(img3);
		//window.location.reload();
			}
		}