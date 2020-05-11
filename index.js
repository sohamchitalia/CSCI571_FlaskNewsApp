
function loadDoc() {
  var allCnnArticles = new Array();
  var xhttpcnn = new XMLHttpRequest();
  xhttpcnn.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {
	  //console.log(JSON.parse(this.responseText));
	  var allCnnArticles = JSON.parse(this.responseText)["articles"];
	  var cnnArticleArray = [];
	  for(var i = 0; i < allCnnArticles.length; i++)
	  {
		var currentArticle = allCnnArticles[i];
		var artkeys = Object.keys(currentArticle);
		if(currentArticle["author"] !=null && currentArticle["author"] !="null" && currentArticle["author"].length>0 && currentArticle["description"] !=null && currentArticle["description"] !="null" && currentArticle["description"].length>0 && currentArticle["title"] !=null && currentArticle["title"] !="null" && currentArticle["title"].length>0 && currentArticle["url"] !=null && currentArticle["url"] !="null" && currentArticle["url"].length>0 && currentArticle["urlToImage"] !=null && currentArticle["urlToImage"] !="null" && currentArticle["urlToImage"].length>0){
		  cnnArticleArray.push(currentArticle);
		  //console.log(cnnArticleArray.length);
		  if(cnnArticleArray.length == 4){
			//console.log("Length 4");
			break;
		  }
		}

	  }
	  //console.log(cnnArticleArray);
	  //console.log("CNN done");
	  // var ur = [];
	  var cnnBoxArray = document.getElementsByClassName("cnn-newsarticle");
	  for(var j=0;j<4;j++){
		//console.log(cnnArticleArray[j]["title"]);
		cnnBoxArray[j].getElementsByClassName("articleimg")[0].src = cnnArticleArray[j]["urlToImage"];
		cnnBoxArray[j].getElementsByClassName("articleheading")[0].innerHTML = "<b>" + cnnArticleArray[j]["title"] + "</b>";
		cnnBoxArray[j].getElementsByClassName("articlecontent")[0].innerHTML = cnnArticleArray[j]["description"];

	  }
	  document.getElementById("cnn1").onclick = function(){window.open(cnnArticleArray[0]["url"]);};
	  document.getElementById("cnn2").onclick = function(){window.open(cnnArticleArray[1]["url"]);};
	  document.getElementById("cnn3").onclick = function(){window.open(cnnArticleArray[2]["url"]);};
	  document.getElementById("cnn4").onclick = function(){window.open(cnnArticleArray[3]["url"]);};

	  
	  }
  };
  
  xhttpcnn.open("GET", "/top-cnn-news", true);
  xhttpcnn.send();




  // FOX ///

  var allFoxArticles = new Array();
  var xhttpfox = new XMLHttpRequest();
  xhttpfox.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {
	  //console.log(JSON.parse(this.responseText));
	  var allFoxArticles = JSON.parse(this.responseText)["articles"];
	  var foxArticleArray = [];
	  for(var i = 0; i < allFoxArticles.length; i++)
	  {
		var currentArticle = allFoxArticles[i];
		var artkeys = Object.keys(currentArticle);
		if(currentArticle["author"] !=null && currentArticle["author"] !="null" && currentArticle["author"].length>0 && currentArticle["description"] !=null && currentArticle["description"] !="null" && currentArticle["description"].length>0 && currentArticle["title"] !=null && currentArticle["title"] !="null" && currentArticle["title"].length>0 && currentArticle["url"] !=null && currentArticle["url"] !="null" && currentArticle["url"].length>0 && currentArticle["urlToImage"] !=null && currentArticle["urlToImage"] !="null" && currentArticle["urlToImage"].length>0){
		  foxArticleArray.push(currentArticle);
		  //console.log(cnnArticleArray.length);
		  if(foxArticleArray.length == 4){
			//console.log("Length 4");
			break;
		  }
		}

	  }
	  //console.log(cnnArticleArray);
	  //console.log("CNN done");
	  // var ur = [];
	  var foxBoxArray = document.getElementsByClassName("fox-newsarticle");
	  for(var j=0;j<4;j++){
		//console.log(cnnArticleArray[j]["title"]);
		foxBoxArray[j].getElementsByClassName("articleimg")[0].src = foxArticleArray[j]["urlToImage"];
		foxBoxArray[j].getElementsByClassName("articleheading")[0].innerHTML = "<b>" + foxArticleArray[j]["title"] + "</b>";
		foxBoxArray[j].getElementsByClassName("articlecontent")[0].innerHTML = foxArticleArray[j]["description"];

	  }
	  document.getElementById("fox1").onclick = function(){window.open(foxArticleArray[0]["url"]);};
	  document.getElementById("fox2").onclick = function(){window.open(foxArticleArray[1]["url"]);};
	  document.getElementById("fox3").onclick = function(){window.open(foxArticleArray[2]["url"]);};
	  document.getElementById("fox4").onclick = function(){window.open(foxArticleArray[3]["url"]);};

	  
	  }
  };
  
  xhttpfox.open("GET", "/top-fox-news", true);
  xhttpfox.send();


  // Getting all headlines

  var xhttptopheadlines = new XMLHttpRequest();
  xhttptopheadlines.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {
	  //console.log(JSON.parse(this.responseText));
	  var allTopHeadlines = JSON.parse(this.responseText)["articles"];
	  var top5 = [];
	  for(var i = 0; i < allTopHeadlines.length; i++){
		if(allTopHeadlines[i]["author"] !=null && allTopHeadlines[i]["author"] !="null" && allTopHeadlines[i]["author"].length>0 && allTopHeadlines[i]["description"] !=null && allTopHeadlines[i]["description"] !="null" && allTopHeadlines[i]["description"].length>0 && allTopHeadlines[i]["title"] !=null && allTopHeadlines[i]["title"] !="null" && allTopHeadlines[i]["title"].length>0 && allTopHeadlines[i]["url"] !=null && allTopHeadlines[i]["url"] !="null" && allTopHeadlines[i]["url"].length>0 && allTopHeadlines[i]["urlToImage"] !=null && allTopHeadlines[i]["urlToImage"] !="null" && allTopHeadlines[i]["urlToImage"].length>0){
		  top5.push(allTopHeadlines[i]);

		}

	  }
	  console.log(top5);
	  var allslides = document.getElementsByClassName("mySlides");
	  for(var j = 0; j < 5; j++){
		allslides[j].getElementsByClassName("content")[0].getElementsByTagName(
		  "h6")[0].innerHTML = top5[j]["title"];
		allslides[j].getElementsByClassName("content")[0].getElementsByTagName(
		  "p")[0].innerHTML = top5[j]["description"];
		allslides[j].getElementsByTagName(
		  "img")[0].src = top5[j]["urlToImage"];
		// allslides[j].onclick = function(){window.open(top5[j]["url"]);
		// document.getElementById(j+1).onclick = function(){window.open(top5[j]["url"]);

	  }
	  document.getElementById(1).onclick = function(){window.open(top5[0]["url"])};
	  document.getElementById(2).onclick = function(){window.open(top5[1]["url"])};
	  document.getElementById(3).onclick = function(){window.open(top5[2]["url"])};
	  document.getElementById(4).onclick = function(){window.open(top5[3]["url"])};
	  document.getElementById(5).onclick = function(){window.open(top5[4]["url"])};
  
	}


  };
  
  xhttptopheadlines.open("GET", "/top-headlines", true);
  xhttptopheadlines.send();



}


var truncatefun = function (sent) {

	// Make sure an element and number of items to truncate is provided
	// if (!elem || !limit) return;

	// Get the inner content of the element
	var content = sent.trim();

	// Convert the content into an array of words
	// Remove any words above the limit
	var newcontent = content.split(' ');
	// content = content.split(' ');
	var newstr = "";
	var chars = 0;
	for(var i = 0; i<newcontent.length; i++){
		if((chars + newcontent[i].length <= 55)){
			chars = chars + newcontent[i].length + 1;
			newstr = newstr + newcontent[i] + " ";
		}
		else{
			break;
		}
	}
	if(content.length > newstr.length)
		return newstr.substring(0,newstr.length-1) + "...";
	else
		return newstr.substring(0,newstr.length-1)

	// Convert the array of words back into a string
	// If there's content to add after it, add it
	// newcontent = newcontent.join(' ') + (content.length > 9 ? "..." : '');

	// Inject the content back into the DOM
	// return newcontent;
	
};

function json_search(){

  document.getElementById("nores").style.display = "none";
  document.getElementById("showmore").style.display = "none";
  var singleSearchOnRef = document.getElementsByClassName("singlesearch");
  console.log(singleSearchOnRef);
  for(var i = 0; i < singleSearchOnRef.length; i++){
  	singleSearchOnRef[i].style.display = "none";
  }
  document.getElementById("showless").style.display = "none";
  var myurl = document.forms["searchForm"];
  var keywordvalidate = false;
  if(myurl.keyword.value.length > 0){
	keywordvalidate = true;
  }
  var from = new Date();
  var to = new Date()
  from = myurl.datefrom.value;
  to = myurl.dateto.value;
  var validfrom = false;
  var validto = false;
  // var date_regex = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/;
  // console.log(from);
  
  if(from <= to){
	var datecomparison = true;
  }
  else{
	var datecomparison = false;
	alert("Incorrect Time");
  }
  
  if(keywordvalidate == true && datecomparison == true){
	var URL = "/search?keyword="+myurl.keyword.value+"&startdate="+myurl.datefrom.value+"&enddate="+myurl.dateto.value+"&source="+myurl.source.value+"&language=en&country=us";
	var xhttpsearch = new XMLHttpRequest();
	xhttpsearch.onreadystatechange = function() {
	  if (this.readyState == 4 && this.status == 200) {
		console.log("Some response");
		console.log(JSON.parse(this.responseText));
		if(JSON.parse(this.responseText)["status"] == "error"){
			window.alert(JSON.parse(this.responseText)["message"]);
		}
		var resp = JSON.parse(this.responseText)["articles"];
		if(resp.length == 0){
		  var fullSearchEl = document.getElementsByClassName("searchnews")[0];
		  // fullSearchEl.childNodes[1].style.display = "flex";
		  document.getElementsByClassName("nores")[0].style.removeProperty('display');
		  document.getElementById('showmore').style.display = "none";
		  return;
		}
		var allSearch = [];
		var searchnewsEl = document.getElementsByClassName("searchnews")[0];
		while(searchnewsEl.childNodes.length > 3){
			var ch = searchnewsEl.childNodes[3];
			searchnewsEl.removeChild(ch);
		}
		for(var j = 0; j < resp.length; j++){
		  if(resp[j]["author"] !=null && resp[j]["author"] !="null" && resp[j]["author"].length>0 && resp[j]["description"] !=null && resp[j]["description"] !="null" && resp[j]["description"].length>0 &&resp[j]["title"] !=null && resp[j]["title"] !="null" && resp[j]["title"].length>0 && resp[j]["url"] !=null && resp[j]["url"] !="null" && resp[j]["url"].length>0 && resp[j]["urlToImage"] !=null && resp[j]["urlToImage"] !="null" && resp[j]["urlToImage"].length>0){
		  
		  allSearch.push(resp[j]);

		  }

		}
		console.log("All search");
		console.log(allSearch);
		var searchlen;
		if(allSearch.length > 15){
		  searchlen=15
		}
		else{
		  searchlen = allSearch.length;
		}
		for(var k = 0; k < searchlen; k++){

		  
		  var fullSearch = document.getElementsByClassName("searchnews")[0];
		  var testchild = fullSearch.childNodes[1];
		  
		  var cln = testchild.cloneNode(true);
		  
		  cln.id = cln.id+k.toString();
		  cln.getElementsByClassName("searchcontent")[0].style.removeProperty("display");
		  cln.getElementsByClassName("searchimg")[0].style.removeProperty("display");

		  // cln.style.removeProperty('display');
		  cln.getElementsByTagName("img")[0].src = allSearch[k]["urlToImage"];
		  cln.getElementsByTagName("h4")[0].innerHTML = allSearch[k]["title"];
		  
		  cln.getElementsByClassName("articledesc")[0].innerHTML = allSearch[k]["description"];
		  cln.getElementsByClassName("articledesctrunc")[0].innerHTML = truncatefun(allSearch[k]["description"]);
		  cln.getElementsByClassName("author")[0].innerHTML += allSearch[k]["author"];
		  cln.getElementsByClassName("articlesource")[0].innerHTML += allSearch[k]["source"]["name"];
		  cln.getElementsByClassName("articledate")[0].innerHTML += publishdateformat(allSearch[k]["publishedAt"]);
		  cln.getElementsByClassName("fullpost")[0].href = allSearch[k]["url"];
		  // cln.getElementsByClassName("articledesc")[0].style.removeProperty('display');
		  // cln.getElementsByClassName("author")[0].style.removeProperty('display');
		  // cln.getElementsByClassName("articlesource")[0].style.removeProperty('display');
		  // cln.getElementsByClassName("articledate")[0].style.removeProperty('display');
		  // cln.getElementsByClassName("fullpost")[0].style.removeProperty('display');
		  fullSearch.appendChild(cln);
		}


		var fullSearchEl = document.getElementsByClassName("searchnews")[0];
		// fullSearchEl.childNodes[].style.display = "none";
		// for(var l = 5; l < searchlen; l++){
		//   var child = fullSearchEl.childNodes[l];
		//     child.style.display = "none";

		// }
		console.log(fullSearchEl.childNodes);
		for(var l = 3; l < 8; l+=1){
		  var child = fullSearchEl.childNodes[l];
		  console.log(child);
			child.style.removeProperty('display');
			// cln.getElementsByClassName("searchcontent")[0].style.removeProperty("display");
			// cln.getElementsByClassName("searchimg")[0].style.removeProperty("display");

		}
		if(allSearch.length > 5){
		document.getElementById("showmore").style.removeProperty("display");
	  }
	  document.getElementById("showless").style.display = "none";

	  }
	};
	xhttpsearch.open("GET", URL, true);
	xhttpsearch.send();
	
  }
}

function publishdateformat(d){
	// 2020-03-10
	var mon = d.substring(5,7);
	var day = d.substring(8,10);
	var yr = d.substring(0,4);
	return mon+"/"+day+"/"+yr;
}
function dateformat(dt){

  	var mon = dt.getMonth()+1;
  	if(mon.toString().length < 2){
  		mon = "0"+mon;
  	}
  	var dy = dt.getDate();
  	if(dy.toString().length < 2){
  		dy = "0"+dy;
  	}
  	return mon+'/'+dy+'/'+dt.getFullYear();
}

		function showmore(){
		  var fullSearchEl = document.getElementsByClassName("searchnews")[0];
				// fullSearchEl.childNodes[1].style.display = "none";
				for(var l = 8; l < 18; l++){
				  var child = fullSearchEl.childNodes[l];
				  child.style.removeProperty('display');

				}
				document.getElementById('showless').style.removeProperty('display');
				document.getElementById('showmore').style.display = "none";

		}

function showless(){
  var fullSearchEl = document.getElementsByClassName("searchnews")[0];
  // fullSearchEl.childNodes[1].style.display = "none";
  for(var l = 8; l < 18; l++){
	var child = fullSearchEl.childNodes[l];
	child.style.display = "none";

  }
  document.getElementById('showless').style.display = "none";
  document.getElementById('showmore').style.removeProperty('display');

}

function getSources(){
  var myurl = document.forms["searchForm"];
  if(myurl.category.value == "all"){
	var URL = "/sources"
  }
  else{
  var URL = "/sources?category="+myurl.category.value+"&language=en&country=us";
  }
  console.log(URL)
  var xhttpsources = new XMLHttpRequest();
  xhttpsources.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {
	  console.log(JSON.parse(this.responseText)["sources"]);
	  var allsources = JSON.parse(this.responseText)["sources"].slice(0,11);
	  var selectEl = document.getElementById("source");
	  while(selectEl.hasChildNodes()){
		selectEl.removeChild(selectEl.childNodes[0]);

	  }
		var opt = document.createElement("option");
		var val = document.createAttribute("value");
		val.value = "all";
		opt.setAttributeNode(val);
		opt.innerHTML = "All";
		selectEl.appendChild(opt);
		var sourcelen;
		if(allsources.length < 10){
		  sourcelen = allsources.length;

		}
		else{
		  sourcelen = 10;
		}
	  for(var i = 0; i < sourcelen; i++){
		
		var opt = document.createElement("option");
		var val = document.createAttribute("value");
		val.value = allsources[i]["id"];
		opt.setAttributeNode(val);
		opt.innerHTML = allsources[i]["name"];
		selectEl.appendChild(opt);
	  }

  }
};

  xhttpsources.open("GET", URL, true);
  xhttpsources.send();


}

// For slide show

// End of slide show

// search content

