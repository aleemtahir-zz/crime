<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
</head>
<style>
ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: #333;
}

li {
    float: left;
}

li a {
    display: block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
}

li a:hover {
    background-color: #111;
}

#main{
padding:20px;
margin-top:30px;
height:1500px;
background-color: #F0B27A  ;
}

.active {
    background-color: #EB984E;
}

.img{
	margin-bottom: 50px;
	margin-left: 480px;
	margin-top: 100px;
	width:304px;height:228px;}
	
#usr
{
	width: 870px;
	height: 48px;
	margin-left: 200px;	

}
placeholder{
	font-family="times new roman";
	font-size: 14px;}

#buton
{
	margin-right:230px;
}

#new1
{
margin-top : 300px;
float: left;
	background-color: grey;
	margin: 30px;
	width:500px;
	height:700px;
}

#new2
{
float: right;

margin-top: 100px;
	background-color: grey;
	width:500px;
	height:700px;
}
#new
{

background-color: pink;
margin: 20px;
width:800;
height: 800px;
}
</style>
<body>
  
<div classs="container" id="main">

<ul>
  <li><a class="active" href="#home">Home</a></li>
  <li><a href="#news">News</a></li>
  <li><a href="#contact">Contact</a></li>
  <li><a href="#about">About</a></li>
</ul>

<img class ="img" src="NEW.jpg" name="image" value="show image" />
<form action="Interface" method="POST">
<div class="input-group">
   <input type="text" name="inbox" class="form-control" placeholder= "enter crime related news for search";>
   <span class="input-group-btn">
        <button id="buton" class="btn btn-success btn-lg" type="submit">Go!</button>
   </span>
</div>     
</form>
<div id="new">
<div id="new1">
</div>

<div id="new2">
</div>
</div>
</div>
    


</body>
</html>
