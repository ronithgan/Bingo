
		if (document.body.clientWidth > 1500)
		{
			var within = document.querySelector("div[data-identifier='availability_chooser']");
			if(within){
			within.style.marginRight = "500px";
			}
		}
		
		function append(imgName, qs, w, h, ml) {
			var a1 = document.createElement('img');
			a1.src = imgName;
			var button = document.querySelector(qs);
			a1.style.width = w;
			a1.style.height = h;
			a1.style.marginLeft = ml;
			if (button) {
				var thing = button.parentElement;
				thing.appendChild(a1);
			}	
		}

		
		append('https://ronithimagestrial1.s3-us-west-1.amazonaws.com/cart_3.png', 
			"button[data-identifier='cart_view_button']", "auto", "50px", "3%");

		//SCROLL DOWN FOR MORE
		var storediv = document.querySelector("#store-wrapper");
		if(storediv)
		{
			var input4 = storediv.parentElement;
			if(input4)
			{
				var input3 = input4.parentElement;


				var img2 = document.createElement('img');
		img2.src = "https://bingoimagesv1.s3-us-west-1.amazonaws.com/ScrollDown.png";
		img2.style.width = "auto";
		img2.style.height = "80px";
		img2.style.marginLeft = '20.5%';
		img2.style.marginTop = '3.5%';
		input3.insertBefore(img2, input4);	
			}
		}
		
		
		
		//STORE

		var choosestorediv = document.querySelector("a[data-identifier='storechooser_link']");
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
		input6.appendChild(img3);
			}
		}
		
		//QUANTITY 
		var img4 = document.createElement('img');
		img4.src = "https://bingoimagesv1.s3-us-west-1.amazonaws.com/Select_Quantity.png";
		img4.style.width = "auto";
		img4.style.height = "60px"; 
		img4.style.marginRight = '2%';
		//window.location.reload();

		var instrid = document.querySelector ('#instructions');
		if (instrid) {
			var input8 = instrid.parentElement;
			if(input8)
			{
				var input7 = input8.parentElement;
			}
		}





		//LOGIN WITH NO ACCOUNT
		var img5 = document.createElement('img');
		img5.src = "https://bingoimagesv1.s3-us-west-1.amazonaws.com/Log_In_Up_Arrow.png";
		img5.style.width = "auto";
		img5.style.height = "145px"; 
		img5.style.marginLeft = '91%';
		img5.style.marginBottom = '-3%';
		//window.location.reload();

		var logindiv = document.querySelector ('.css-10j30tx');
		if (logindiv) {
			var input10 = logindiv.parentElement;
			if(input10)
			{
				var input9 = input10.parentElement;
				input10.appendChild(img5);
				//input9.insertBefore(img5, input10);
			}
				
			
		}



		//ADDRESS PICTURE
		var img6 = document.createElement('img');
		img6.src = "https://bingoimagesv1.s3-us-west-1.amazonaws.com/Enter_Address_Diagonal_Arrow.png";
		img6.style.width = "auto";
		img6.style.height = "150px"; 
		//img6.style.marginRight = '30%';
		img6.style.marginTop = '1%';
		//window.location.reload();

		var emaildiv = document.querySelector('#address_line_1');
		//console.log(emaildiv);
		if (emaildiv) {
			var input12 = emaildiv.parentElement;
			if(input12)
			{
				var input11 = input12.parentElement;
				input12.appendChild(img6);
			//	input11.insertBefore(img6, input12);
			}
				
			
		}


		//STORES STORE PAGE -- sample (doesn't work)
		var img7 = document.createElement('img');
		img7.src = "https://bingoimagesv1.s3-us-west-1.amazonaws.com/Enter_Address_Arrow.png";
		img7.style.width = "auto";
		img7.style.height = "60px"; 
		//img6.style.marginLeft = '10%';
		//img6.style.marginBottom = '5%';
		//window.location.reload();

		var checkoutdiv = document.querySelectorAll('button');
		console.log(checkoutdiv);
		//console.log(emaildiv);
		if (checkoutdiv) {
			var input14 = checkoutdiv.parentElement;
			if(input14)
			{
				var input13 = input14.parentElement;
				input14.appendChild(img7);
				//input13.insertBefore(img6, input14);
			}
		}
		

		//EMAIL LOGIN PAGE
		var img9 = document.createElement('img');
		img9.src = "https://bingoimagesv1.s3-us-west-1.amazonaws.com/Enter_Email.png";
		img9.style.width = "auto";
		img9.style.height = "60px"; 
		//var emailnewdiv = document.querySelector('.rmq-3774bba5');
		//var nextDiv = document.querySelectorAll('.rmq-3774bba5');
		var nextDiv = document.getElementById("react-views-container");
		//var nextDiv = document.querySelectorAll('div.rmq-3774bba5');
		if(nextDiv)
		{
			console.log(nextDiv);


			var button = document.querySelector(".credit-card-input-wrapper");
			if (button) {
				var parent = button.parentElement;
				var divd = document.createElement('div'); 
				var img10 = document.createElement('img');
				img10.src = "https://bingoimagesv1.s3-us-west-1.amazonaws.com/Enter_Email.png";
				divd.appendChild(img10);
				img10.style.width = "auto";
				img10.style.height = "40px"; 
				parent.appendChild(divd);
			}
		}
