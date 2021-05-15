function a()
{
	var a = document.getElementById("a").checked
    var b = document.getElementById("b").checked
	var c = document.getElementById("c").checked
	var d = document.getElementById("d").checked
	var e = document.getElementById("e").checked
	var f = document.getElementById("f").checked
	var g = document.getElementById("g").checked
	var h = document.getElementById("h").checked
	var i = document.getElementById("i").checked
	var j = document.getElementById("j").checked

	if((a==true || b==true) && (c==true || d==true) && (e==true || f==true) && (g==true || h==true) && (i==true || j==true)) 
	 {
		  document.getElementById("s").removeAttribute("disabled")
		  document.getElementById("s").style.backgroundColor="blue"
		  document.getElementById("s").style.color="white"
		  
	 }
}