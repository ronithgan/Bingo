

//var button = document.getElementsById('root');
//console.log(button[0].tagName);
//button.style.color = 'blue';

/*if (document.href = 'https://www.instacart.com')
	{
		console.log(document.href);
		console.log(document.pathname);
		console.log(document.href);
		document.body.style.backgroundColor = "green";
		var elem = document.getElementById('root');
		elem.style.background = 'green';
	}*/
//document.location.reload();
//if (document.location.href == "https://www.instacart.com/store/safeway/storefront")
	//{

		 //document.querySelector looks for button with label
//a1.style.position = "absolute";
		
		//setInterval(function(){window.location.reload();},1
		//window.location.reload();

		if (document.body.clientWidth > 1500)
		{
			var within = document.querySelector("div[data-identifier='availability_chooser']");
			if(within){
			within.style.marginRight = "500px";
			}
		}
		
//input.insertBefore(img, input2);

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



		/*	function insertBefore(imgName, qs, w, h, ml) {
				var a1 = document.createElement('img');
				a1.src = imgName;
				var button = document.querySelector(qs);
				a1.style.width = w;
				a1.style.height = h;
				a1.style.marginLeft = ml;
				if (button) {
					var p = button.parentElement;
					var gp = thing.parentElement;
					gp.insertBefore(a1, p);
				}	
			}
	
			
			insertBefore('https://ronithimagestrial1.s3-us-west-1.amazonaws.com/cart_3.png', 
				"button[data-identifier='cart_view_button']", "auto", "50px", "3%"); */



			//CART PICTURE
			/*
		var a1 = document.createElement('img');
		a1.src = 'https://ronithimagestrial1.s3-us-west-1.amazonaws.com/cart_3.png';
		var button = document.querySelector("button[data-identifier='cart_view_button']");
		a1.style.width = "auto";
		a1.style.height = "50px";
		a1.style.marginLeft = '3%';
		if (button) {
			var thing = button.parentElement;
			thing.appendChild(a1);
		}
		//window.location.reload();*/



		

		//SEARCH STOREFRONT PAGE

/*

		var searchdiv = document.querySelector(".css-14b3tu7-HomeSearch");
		if (searchdiv) {
			var input2 = searchdiv.parentElement;
			if (input2) {
				var input = input2.parentElement;

				var img = document.createElement('img');
				img.src= "https://bingoimagesv1.s3-us-west-1.amazonaws.com/click_search_2.png";
				img.style.marginLeft = '55%';
				//img.style.marginTop = '10%';
				img.style.width = "auto";
				img.style.height = "60px";
				//input.insertBefore(img, input2);
				input2.append(img);
			}
		}
*/

		//window.location.reload();

		//SEARCH STORE PAGE



		/*var searchdivnew = document.getElementById("search-term-accessibility-navigation");
		if (searchdivnew) {
			var input16 = searchdivnew.parentElement;
			if (input16) {
				var input15 = input16.parentElement;

				var img8 = document.createElement('img');
				img8.src= "https://bingoimagesv1.s3-us-west-1.amazonaws.com/search_2.png";
				img8.style.marginLeft = '0%';
				//img8.style.marginTop = '10%';
				img8.style.width = "auto";
				img8.style.height = "60px";
				//input15.insertBefore(img8, input15);
				input16.appendChild(img8);
			}
		}*/




		//window.location.reload();


	//	var searchdivnew2 = document.querySelector("form[data-identifier='search_input']>button");
	/*
	var searchdivnew2 = document.querySelector("form[data-identifier='search_input']>button");
		if (searchdivnew2) {
			var input16 = searchdivnew2.parentElement;
			if (input16) {
				var input15 = input16.parentElement;

				var img8 = document.createElement('img');
				img8.src= "https://bingoimagesv1.s3-us-west-1.amazonaws.com/search_2.png";
				img8.style.marginLeft = '0%';
				//img8.style.marginTop = '10%';
				img8.style.width = "auto";
				img8.style.height = "60px";
				//input15.insertBefore(img8, input15);
				input16.appendChild(img8);
			}
		}*/
		//window.location.reload();

		


		/*
		//ALTERNATE DOUBLE SEARCH
		var searchdiv = document.querySelector("form[data-identifier='search_input']>input");
		if (searchdiv) {
			var input2 = searchdiv.parentElement;
			if (input2) {
				var input = input2.parentElement;

				var img = document.createElement('img');
				img.src= "https://bingoimagesv1.s3-us-west-1.amazonaws.com/Search_Click_Arrows.png";
				img.style.marginLeft = '68%';
				//img.style.marginTop = '10%';
				img.style.width = "auto";
				img.style.height = "100px";
				input.insertBefore(img, input2);
				//input2.append(img);
			}
		}
		*/

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
		//window.location.reload();
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
		//input5.insertBefore(img3, input6);
		input6.appendChild(img3);
		//window.location.reload();
			}
		}
		
		


		//var input8 = document.querySelectorAll('.rmq-1e186aac').parentElement
		
		//QUANTITY --> fix on first page
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
				//input7.insertBefore(img4, input8);
			}
				
			//input8.appendChild(img4);
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
		//img6.style.marginLeft = '10%';
		//img6.style.marginBottom = '5%';
		//window.location.reload();

		//var emailnewdiv = document.querySelector('.rmq-3774bba5');
		//var nextDiv = document.querySelectorAll('.rmq-3774bba5');
		var nextDiv = document.getElementById("react-views-container");
		//var nextDiv = document.querySelectorAll('div.rmq-3774bba5');
		if(nextDiv)
		{
			console.log(nextDiv);

			/*var elem = nextDiv.childNodes; //nodes of react view container
			var ch2 = elem[0]; //js-app-container-inner
			var ch3 = ch2.childNodes; //nodes of js-app-container-inner
			var ch4 = ch3[1]; //divstyle ="..."
			var ch5 = ch4.childNodes; //3 nodes of divstyle = "..."
			var ch6 = ch5[0]; //empty div element
			var ch7 = ch6.childNodes; //nodes of empty div element
			var ch8 = ch7[0]; //module-renderer
			var ch9 = ch8.childNodes; //nodes of module-renderer
			var ch10 = ch9[0]; //empty div element
			var ch11 = ch10.childNodes; //nodes of empty div element
			var ch12 = ch11[0]; //.rmq-e9fd10a8 class
			ch12.appendChild(img9);

			*/

			/*var elem1 = document.getElementsByClassName("rmq-6827400b rmq-e8b5057c rmq-bd8d1a29 rmq-1d4d8c66 rmq-d67cb54d rmq-a53f6637 rmq-36e40f64");
			if (elem1) {
				console.log("Found Elem" + elem1);
				if (elem1.length > 0) {
					var elem = elem1[0];
					console.log("Found Elem has child nodes");
					var child = elem.firstChild;

					var divd = document.createElement('div'); 
					var img10 = document.createElement('img');
					img10.src = "https://bingoimagesv1.s3-us-west-1.amazonaws.com/Enter_Email.png";
					divd.appendChild(img10);
					img10.style.width = "auto";
					img10.style.height = "40px"; 
					if (child) {
						console.log("Found Elem insert before");
						elem.insertBefore(divd, child);
					}
				}
				//elem.appendChild(divd);
			}*/


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

			//var ch13 = ch12.childNodes;
			//var ch5 = ch4.childNodes;
			//var ch6 = ch5[0];
			//nextDiv.append(img9);
		}
		/*let observer = new MutationObserver(callback);
    
		function callback (mutations) {
			if (nextDiv) {
				nextDiv.appendChild(img9);

				/* var input16 = emailnewdiv.parentElement;
				if(input16)
				{
					var input15 = input16.parentElement;
					input16.appendChild(img9);
					//input15.insertBefore(img9, input16);
				} 
			
		}

		let options = {
			attributes: true
		}
		observer.observe(nextDiv, options); 

		var emailnewdiv = document.querySelector('react-tabs');
		console.log(emailnewdiv);
		if (emailnewdiv) {
			var input16 = emailnewdiv.parentElement;
			if(input16)
			{
				var input15 = input16.parentElement;
				input16.appendChild(img9);
				//input15.insertBefore(img9, input16);
			}
		} */


		//window.location.reload();

		/*var imgnew = document.createElement('img');
		imgnew.src= "https://ronithimagestrial1.s3-us-west-1.amazonaws.com/search_2.png";
		imgnew.style.marginLeft = '50%';
		imgnew.style.width = "auto";
				imgnew.style.height = "70px";*/

		
	//}
/*

document.querySelector("button[data-identifier='cart_view_button']").addEventListener("click", function() {
	console.log("hi");
	var img2 = document.createElement('img');
	img2.src = "https://d2d8wwwkmhfcva.cloudfront.net/156x/d2lnr5mha7bycj.cloudfront.net/warehouse/logo/1/d2240f3c-34d1-4d25-8653-77213b4bd41c.png";
	setTimeout(function()
		{	   var x = document.querySelector("a[class='ic-btn ic-btn-success ic-btn-lg']").parentElement;
	x.appendChild(img2);},4000);
	
});

setTimeout(function(){
	
	console.log("hissss");
document.querySelectorAll('.item-card-contents').forEach(item => {

	item.parentElement.addEventListener("click", event => {
		console.log("hissss");
		setTimeout(function() {
			console.log("hix");
			var img2 = document.createElement('img');
			img2.src = "https://github.com/AshokDevireddy/LaunchX_team25/blob/master/Launchx%20Chrome%20Extension/images/goback.png?raw=true";
			//img2.style.position = "absolute";
			img2.style.position = "absolute";
			img2.style.maxWidth = "none";
			console.log("aaaaaa");
			var x = document.querySelector("div[class='icModalClose']");
			x.appendChild(img2);
			
			var img3 = document.createElement('img');
			img3.src = "https://github.com/AshokDevireddy/LaunchX_team25/blob/master/Launchx%20Chrome%20Extension/images/amount.png?raw=true";
			var z = document.querySelector("select[id='quantity-selector']").parentElement.parentElement;
			z.appendChild(img3);
			
			var img4 = document.createElement('img');
			img4.src = "https://github.com/AshokDevireddy/LaunchX_team25/blob/master/Launchx%20Chrome%20Extension/images/scroll.png?raw=true";
			img4.style.marginLeft = "40%";
			var a = document.querySelector("div[class='item-detail-module clearfix']").parentElement;
			a.appendChild(img4);
		},3000);
	})
})
	}, 6000);


*/
