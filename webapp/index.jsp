<!DOCTYPE html>
<%@page import="org.oscarehr.common.service.AcceptableUseAgreementManager"%>
<%@ page import="java.io.*,java.util.*,javax.mail.*,javax.mail.Transport,javax.mail.Session"%>
<%@ page import="javax.mail.internet.*,javax.activation.*"%>

<%@page import="oscar.OscarProperties, javax.servlet.http.Cookie, oscar.oscarSecurity.CookieSecurity, oscar.login.UAgentInfo" %>
<%@ taglib uri="/WEB-INF/struts-bean.tld" prefix="bean" %>
<%@ taglib uri="/WEB-INF/struts-html.tld" prefix="html" %>
<%@ taglib uri="/WEB-INF/struts-logic.tld" prefix="logic" %>
<%@ taglib uri="/WEB-INF/caisi-tag.tld" prefix="caisi" %>



<caisi:isModuleLoad moduleName="ticklerplus"><%
    if(session.getValue("user") != null) {
        response.sendRedirect("provider/providercontrol.jsp");
    }
    
%></caisi:isModuleLoad><%
OscarProperties props = OscarProperties.getInstance();
// clear old cookies
Cookie rcpCookie = new Cookie(CookieSecurity.receptionistCookie, "");
Cookie prvCookie = new Cookie(CookieSecurity.providerCookie, "");
Cookie admCookie = new Cookie(CookieSecurity.adminCookie, "");
rcpCookie.setPath("/");
prvCookie.setPath("/");
admCookie.setPath("/");
response.addCookie(rcpCookie);
response.addCookie(prvCookie);
response.addCookie(admCookie);

// Initialize browser info variables
String userAgent = request.getHeader("User-Agent");
String httpAccept = request.getHeader("Accept");
UAgentInfo detector = new UAgentInfo(userAgent, httpAccept);

// This parameter exists only if the user clicks the "Full Site" link on a mobile device
if (request.getParameter("full") != null) {
    session.setAttribute("fullSite","true");
}

// If a user is accessing through a smartphone (currently only supports mobile browsers with webkit),
// and if they haven't already clicked to see the full site, then we set a property which is
// used to bring up iPhone-optimized stylesheets, and add or remove functionality in certain pages.
if (detector.detectSmartphone() && detector.detectWebkit()  && session.getAttribute("fullSite") == null) {
    session.setAttribute("mobileOptimized", "true");
} else {
    session.removeAttribute("mobileOptimized");
}
Boolean isMobileOptimized = session.getAttribute("mobileOptimized") != null;
%>


<html:html locale="true">
    <head>
    
    <link rel="shortcut icon" href="images/favicon.ico" />
 
<script
			  src="https://code.jquery.com/jquery-2.2.0.min.js"
			  integrity="sha256-ihAoc6M/JPfrIiIeayPE9xjin4UWjsx2mjW/rtmxLM4="
			  crossorigin="anonymous"></script>
			
	
        <html:base/>
        <% if (isMobileOptimized) { %><meta name="viewport" content="initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no, width=device-width"/><% } %>

        <script>
	$(function(){
var height=window.innerHeight;
var body_height=height-85;
document.getElementById("SignUp").style.height=body_height;

$(".request_button").click(function(){
			
			
					$("#login").slideToggle(200);
					$(".login_button").slideToggle(200);
						$(".request_button").hide(200);
						$("#SignUp").css("position","relative");
					$(".signup_section").show(200,function(){
					
						
				}
				
				);
					return false;
					
			});
	

$(".login_button").click(function(){
			
			
					$("#login").slideToggle(200);
					$(".login_button").slideToggle(200);
					$(".signup_section").slideToggle(200,function(){
											
						$(".request_button").slideToggle(200);
						$("#SignUp").css("position","relative");

				}
				
				);
					return false;
					
			});	
			
			$("#phno").mask("+1 999-999-9999");
			$("#phno").click(function(){
				$(this).value="1";
			});
			
		});
		 
		 		function format(event)
		{
			event.target.value= event.target.value.match(/\d*/g).join('').match(/(\d{0,3})(\d{0,3})(\d{0,4})/).slice(1).join('-').replace(/-*$/g,'');
		}
		var ba = ["Chrome","Firefox","Safari","Opera","MSIE","Trident","Edge"];
var b, ua = navigator.userAgent;

for(var i=0; i < ba.length; i++){
   if( ua.indexOf(ba[i]) > -1 ){
       b = ba[i];
       break;
   }
}

if(b == "MSIE" || b == "Trident" || b == "Edge"){
   b = "Internet Explorer";
}
console.log(b);
var elems = document.getElementsByTagName('select');
if(b=="Firefox"){

for (var i = 0; i<elems.length; i++) {
   elems[i].style.padding="0";

}
}


		function codes(s1,s2){
			var s1 = document.getElementById(s1);
			var s2 = document.getElementById(s2);

			s2.innerHTML = "";

			if(s1.value == "AB"){
				var optionArray = ["|","403|403","587|587","780|780","825|825"];
			} else if(s1.value == "BC"){
				var optionArray = ["|","236|236","250|250","604|604","778|778"];
			} else if(s1.value == "MB"){
				var optionArray = ["|","204|204","431|431"];
			}
			else if(s1.value == "NB"){
				var optionArray = ["|","506|506"];
			}
			else if(s1.value == "NL"){
				var optionArray = ["|","709|709"];
			}

			else if(s1.value == "NT"){
				var optionArray = ["|","867|867"];
			}
			else if(s1.value == "NS"){
				var optionArray = ["|","782|782","902|902"];
			}
			else if(s1.value == "NU"){
				var optionArray = ["|","867|867"];
			}
			else if(s1.value == "ON"){
				var optionArray = ["|","226|226","249|249","289|289","343|343","365|365","416|416","437|437","519|519","613|613","647|647","705|705","807|807","905|905"];
			}
			else if(s1.value == "PE"){
				var optionArray = ["|","782|782","902|902"];
			}
			else if(s1.value == "QC"){
				var optionArray = ["|","418|418","438|438","450|450","514|514","579|579","581|581","819|819","873|873"];
			}
			else if(s1.value == "SK"){
				var optionArray = ["|","306|306","639|639"];
			}
			else if(s1.value == "YK"){
				var optionArray = ["|","867|867"];
			}
			else if(s1.value == "NG"){
				var optionArray = ["|","600|600","622|622"];
			}
			else if(s1.value == "TF"){
				var optionArray = ["|","800|800","844|844","855|855","866|866","877|877","888|888"];
			}

			for(var option in optionArray){
				var pair = optionArray[option].split("|");
				var newOption = document.createElement("option");
				newOption.value = pair[0];
				newOption.innerHTML = pair[1];
				s2.options.add(newOption);
				
			}

		}
        function showHideItem(id){
            if(document.getElementById(id).style.display == 'none')
                document.getElementById(id).style.display = 'block';
            else
                document.getElementById(id).style.display = 'none';
        }

function sendMail(){

}
	
  function setfocus() {
    document.loginForm.username.focus();
    document.loginForm.username.select();
  }
  
  function popupPage(vheight,vwidth,varpage) {
    var page = "" + varpage;
    windowprops = "height="+vheight+",width="+vwidth+",location=no,scrollbars=yes,menubars=no,toolbars=no,resizable=yes";
    var popup=window.open(page, "gpl", windowprops);
  }

        </script>
        
        <title>
            <% if (props.getProperty("logintitle", "").equals("")) { %>
            <bean:message key="loginApplication.title"/>
            <% } else { %>
            <%= props.getProperty("logintitle", "")%>
            <% } %>
        </title>
   

    
	<style>
	*{
			box-sizing: border-box;
			margin:0;
			padding:0;
		}
		
		body{
			width:100%;
			font-family:sans-serif;
			top:0;
			margin:0;
			padding:0;
			background-image:url(./images/QIH.png);
			background-size:cover;
			background-attachment: fixed;
			background-position: 0%;
			z-index:200;
		}
		
		.row{
			width:100%;
			margin:0;

			padding:0;
			
			display:block;
			position: relative;
			overflow: visible;
		}


		h1,h2,h3,h4,h5,h6{
			float:left;
			color:rgba(255,255,255,.8);
			margin:0;
			padding:0;
		}
		h4{
			line-height: 2.09;
		}
		.container{
			max-width:1200px;
			height:auto;
			margin-left:auto;
			margin-right:auto;
			overflow: visible;
		}

		.sub_container{
			margin:10px;
		}

		#header{
			height:85px;
			background:rgba(255,255,255,.1);
			z-index:100;
			
		}
		.top_heading{
		
		}
		section{
			float:left;
			margin:0;

			padding:0;
		}

		#login{
			margin-top:10px;
			width:70%;
			text-align:right;
			
		}
		.logo{
			
			width:25%;
			margin-left:10px;
		}
		
		input{
			margin-left:20px;
			margin:0;
			font-size:14px;
			margin-top:5px;
			
		}
		textarea{
			width:100%;
			
			margin:0;
			resize: none;
			font-size:15px;
			margin-top:5px;
			padding:9px;
			border:0;
			border-radius:3px;
						background-color:rgba(0,0,0,.3);
			color:white;

			
		}
		input[type="text"]{

			border: 1px solid rgba(0,0,0,.5);
			padding: 5px 10px;
			border-radius: 3px;
			width:150px;

		}
		input[type="email"]{
			border: 1px solid #504F50;
			padding: 5px 10px;
			border-radius: 0px;


		}
		input[type="number"]{
			border: 1px solid #504F50;
			padding: 5px 10px;
			border-radius: 0px;
		}
		input[type="password"]{
			border: 1px solid rgba(0,0,0,.5);
			padding:5px 10px;
			border-radius: 0px;
			width:150px;
			border-radius: 3px;
		}
		input[type="submit"]{
			transition: all .2s ease-in-out;
			padding: 5px 20px;
			border-radius:2px;
			background-color:#223B5A;
			color:white;
			border:0;
			cursor:pointer;
			font-size:14px;
		}

		::-webkit-input-placeholder{
			font-size:12px;
			font-weight:bold;
			color:rgba(0,0,0,.7);
			font-family:sans-serif;
		}
		::-moz-placeholder { /* Firefox 19+ */
			font-size:12px;
			font-weight:bold;
			color:rgba(0,0,0,.7);
			font-family:sans-serif;
		}
		:-ms-input-placeholder {
			font-size:12px;
			font-weight:bold;
			color:rgba(0,0,0,.7);
			font-family:sans-serif;
		}
		:-moz-placeholder { /* Firefox 18- */
			font-size:12px;
			font-weight:bold;
			color:rgba(0,0,0,.7);
			font-family:sans-serif;
		}
		input[type="text"]:focus,input[type="password"]:focus,input[type="email"]:focus,input[type="number"]:focus,input[type="submit"]:focus,input[type="submit"]:hover,select:focus,select:hover{
			box-shadow:0px 0px 3px 1px white;
			
			outline:0;
		}
		#SignUp input[type="text"]:focus,#SignUp input[type="email"]:focus,textarea:focus{
		
		background-color: rgba(222, 168, 94,.2);
			
		}
		
		a{
			color:black;
			font-size:12px;
			transition:color .2s ease-in-out;
		}
		a:hover{
			color:#585857;
		}
		form{
			margin:0;
		}
		.border_left{
		
		}
		
		#SignUp{
			top:-80px;
			
			overflow: visible;
			
		}
		
		#SignUp input{
	
			width:100%;
			margin-top:5px;
			font-size:16px;
			font-family:sans-serif;
			background-color:rgba(0,0,0,.3);
			color:white;
			

	
		}
		button{
			padding:10px 20px;
			background-color:rgba(255,255,255,.8);
			font-size:18px;
			color:gray;
			font-weight:bold;
			cursor:pointer;
			float:right;
			border-radius:5px	;
			border:0px;
			}
			button:hover{
			color:rgba(0,0,0,.9);
			}
		.login_button{
			display:none;
		}	
		.request_button{
		padding:10px 20px;
			background-color:rgba(255,255,255,.8);
			font-size:18px;
			color:gray;
			font-weight:bold;
			cursor:pointer;
			float:right;
			border-radius:5px	;
			margin-right:100px;
			margin-top:85px;
			transition: color .2s ease-in-out;
		}
		
		.signup_section{
			display:none;
			width:350px;
			z-index:1000;
			float:right;
			margin-top:75px;
			
			transition:right .2s ease-in-out;
		}
		
		/*.signup_section:before{
			content: " ";
			width: 0px;
			height: 0px;
			border-top: 20px solid transparent;
			border-bottom: 20px solid transparent;
			border-right: 20px solid white;
			margin-left: -10px;
			margin-top: 15px;
			position: absolute;
		}*/
		
		select{

			-webkit-appearance: none;
			-moz-appearance: none;
			-ms-appearance: none;
			-o-appearance: none;
			appearance: none;
			background-image: url(images/arrow_down.png);
			background-position:center right ;
			background-repeat:no-repeat;
			background-size:20px 20px ;
			border-radius:2px;
			border:0;
			transition: all .2s ease-in-out;
			padding: 10px 10px;
			border-bottom:2px solid #060C16;
			width:100%;
		
		
			margin-top:5px;
			font-size:15px;
			   			background-color:rgba(0,0,0,.3);
			color:white;
			
			
		}
		select::-ms-expand { /* for IE 11 */
			display: none;
		}
		select option{
			font-size:16px;
			font-family:sans-serif;
			
			padding: 10px 10px;
			padding:10px;
		}
		.special_input{
			border:0;
			padding:10px 10px;
		}
		#SignUp input[type="text"]{
			border-radius:2px;
			border:0;
			transition: all .2s ease-in-out;
			padding: 8px 10px;
			border-bottom:2px solid #060C16;


		}
		#SignUp input[type="email"]{

			padding: 10px 10px;

			border-radius:2px;
			border:0;
			border-bottom:2px solid #060C16;
		}
		#SignUp  input[type="number"]{

			padding: 10px 10px;

			border-radius:2px;
			border:0;
			border-bottom:2px solid #060C16;
		}
		#SignUp input[type="password"]{

			padding:10px 10px;

			border-radius:2px;
			border-bottom:2px solid #060C16;

		}
		#SignUp input[type="submit"]{
			transition: all .2s ease-in-out;
			padding: 10px 20px;
			border-radius:2px;
			background-color:#223B5A;
			color:white;
			border:0;
			cursor:pointer;
			font-size:14px;
			border-radius:2px;
			margin-top:20px;
		}
		#phno{

		}
		#area_code{
			width:30%;
			border-radius:2px;
			margin-top:0;
			border:0;
			transition: all .2s ease-in-out;
			padding: 10px 10px;
			border-bottom:2px solid #060C16;
		}
		.foot{
		margin-top:-80px;
		height:80px;
		z-index:5;
		bottom:0;
		position:fixed;
		}
   </style>   
        <% if (isMobileOptimized) { %>
        <!-- Small adjustments are made to the mobile stylesheet -->
      <style type="text/css">
            html { -webkit-text-size-adjust: none; }
            td.topbar{ width: 75%; }
            td.leftbar{ width: 25%; }
            span.extrasmall{ font-size: small; }
            #browserInfo, #logoImg, #buildInfo { display: none; }
            #mobileMsg { display: inline; }
        </style>
<% } %>
	
     
    </head>
    
    <body onLoad="setfocus()" bgcolor="#ffffff">
         <div class="row" id="header">
		<div class="container">
			<section class="logo">
				<img style="float:left;margin-left:10px;" src="images/qi_latest1.png" width="250px">
			</section>
   
    
			<section id="login" class="border_left" >
     
     <p>    <%
                    String key = "loginApplication.formLabel" ;
                    if(request.getParameter("login")!=null && request.getParameter("login").equals("failed") ){
                    key = "loginApplication.formFailedLabel" ;
//                    login_input_style="login_txt_fields_error";                    
                    }
	
                    %>

<bean:message key="<%=key%>"/> 
       </p>
                       
                            <html:form action="login"  >
                            <%
                            if(oscar.oscarSecurity.CRHelper.isCRFrameworkEnabled() && !net.sf.cookierevolver.CRFactory.getManager().isMachineIdentified(request)){
                            %><img src="gatekeeper/appid/?act=image&/empty<%=System.currentTimeMillis() %>.gif" width='1' height='1'><%
                            }
                            %>
                        
                                
                        <input type="text" name="username" value="" size="15" maxlength="15" autocomplete="off" placeholder="Username" />
                        
                        
                        <input type="password" name="password" value="" size="15" maxlength="32" autocomplete="off" placeholder="Password" />
                              
                        
                        
                        
                        <input type="password" name="pin" value="" size="15" maxlength="15" autocomplete="off"  placeholder="2nd Level Passcode" />
                         <input type="submit" value='<bean:message key="index.btnSignIn"/>' />
                        <input type='hidden' name='propname' value='<bean:message key="loginApplication.propertyFile"/>' />

                        </html:form>
                        <a href="#">Forgot password</a>
				<a href="#" style="margin-left:20px;">Help need?</a>
               </section>
               <button class="login_button" id="login_button" >Login</button>
		</div>
	</div>
                        <%if (AcceptableUseAgreementManager.hasAUA()){ %>
                       
                        <%} %>
                      
                        
                        
               
                	
	<div class="row" id="SignUp" >
		<div class="container" style="">

<div class="request">
					<span class="request_button" id="request_button" >Request for Demo</span>
				</div>

			<section class="signup_section" id="signup_section">
	
				<div class="sub_container">
					<form action="signup">
 
						<input type="text" class="special_input" placeholder="First Name" required />
						<input type="text" placeholder="Last Name" class="special_input" required/>
						<input name="email" type="email" placeholder="Email Id" class="special_input" required/>
						<textarea name="address" form="" rows="4" cols="28" placeholder="Address" required></textarea>
						<select name="province" id="province"  required placeholder="select a province" onchange="codes(this.id,'area_code')">
							<option value="null" selected="selected">select a province</option>
							<option value="AB" >Alberta</option>
							<option value="BC">British Columbia</option>
							<option value="MB">Manitoba</option>
							<option value="NB">New Brunswick</option>
							<option value="NL">Newfoundland and Labrador</option>
							<option value="NT">Northwest Territories</option>
							<option value="NS">Nova Scotia</option>
							<option value="NU">Nunavut</option>
							<option value="ON">Ontario</option>
							<option value="PE">Prince Edward Island</option>
							<option value="QC">Quebec</option>
							<option value="SK">Saskatchewan</option>
							<option value="YK">Yukon</option>
							<option value="NG">Non-Geographic</option>
							<option value="TF">Toll Free Numbers</option>

						</select>
						<input type="text" placeholder="Phone" class="special_input phno" id="phno" onkeyup="format(event)" style="width:68%;" required maxlength="15" onclick="" />
						<select id="area_code" name="area_code" class="area_code" required >
							<option value="null" selected="selected">Code</option>
						</select>
						<input type="text" placeholder="Speciality" class="special_input" required/>

						<input type="submit" value="Request for Demo" />
	
					</form> 
				</div>
			</section>
		</div>
	</div>

	<div class="row foot" style="	background: -webkit-linear-gradient(right top, rgba(15, 32, 58, 0.35),#8A6F6F); 
			background: -o-linear-gradient(right top,rgba(15, 32, 58, 0.35), #8A6F6F); 
			background: -moz-linear-gradient(right top,rgba(15, 32, 58, 0.35), #8A6F6F);
			background: linear-gradient(to right top,rgba(15, 32, 58, 0.35), #8A6F6F); 
"> 
		<div class="container">
			<div class="sub_container">
				<div style="float:right;margin:0" class="footer">
				<h1  class="top_heading" >UMBRELLA&nbsp;<h4 style="border-right:1px solid gray;margin-right:20px;padding-right:20px;margin-top:7px;"> HEALTH CARE</h4></h1>
				<p style="float:left;margin:5px 5px;color:rgba(255,255,255,.8);">powered by</p>
				<img style="float:left;margin-top:5px;margin-left:10px;" src="images/iodevops_logo1.png" width="130px">	
					
				</div>
			</div>
		</div>
	</div>
        
    </body>
</html:html>

