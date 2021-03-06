<%--

    Copyright (c) 2001-2002. Department of Family Medicine, McMaster University. All Rights Reserved.
    This software is published under the GPL GNU General Public License.
    This program is free software; you can redistribute it and/or
    modify it under the terms of the GNU General Public License
    as published by the Free Software Foundation; either version 2
    of the License, or (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program; if not, write to the Free Software
    Foundation, Inc., 59 Temple Place - Suite 330, Boston, MA 02111-1307, USA.

    This software was written for the
    Department of Family Medicine
    McMaster University
    Hamilton
    Ontario, Canada

--%>
<%@ page
	import="java.math.*, java.util.*, java.io.*, java.sql.*, java.net.*,oscar.*, oscar.util.*, oscar.MyDateFormat"
	errorPage="errorpage.jsp"%>
<%@ include file="../admin/dbconnection.jsp"%>
<jsp:useBean id="apptMainBean" class="oscar.AppointmentMainBean"
	scope="session" />
<jsp:useBean id="billingLocalInvNoBean" class="java.util.Properties"
	scope="page" />
<%@ include file="dbBilling.jspf"%>

<html>
<head>
<script type="text/javascript" src="<%= request.getContextPath() %>/js/global.js"></script>
<link rel="stylesheet" href="billing.css">
<title>Billing Reconcilliation</title>
</head>

<body bgcolor="#EBF4F5" text="#000000" leftmargin="0" topmargin="0"
	marginwidth="0" marginheight="0">

<table border="0" cellspacing="0" cellpadding="0" width="100%">
	<tr bgcolor="#486ebd">
		<th align='LEFT'><input type='button' name='print' value='Print'
			onClick='window.print(); return false;'></th>
		<th align='CENTER'><font face="Arial, Helvetica, sans-serif"
			color="#FFFFFF">Billing Reconcilliation - Payment Summary</font></th>
		<th align='RIGHT'><input type='button' name='close' value='Close'
			onClick='window.close()'></th>
	</tr>
</table>
<% 
GregorianCalendar now=new GregorianCalendar();
int curYear = now.get(Calendar.YEAR);
int curMonth = (now.get(Calendar.MONTH)+1);
int curDay = now.get(Calendar.DAY_OF_MONTH);
  
String nowDate = UtilDateUtilities.DateToString(UtilDateUtilities.now(), "yyyy/MM/dd"); // String.valueOf(curYear)+"/"+String.valueOf(curMonth) + "/" + String.valueOf(curDay);
%>

<% 
String raNo = "", flag="", plast="", pfirst="", pohipno="", proNo="";
String filepath="", filename = "", header="", headerCount="", total="", paymentdate="", payable="", totalStatus="", deposit=""; //request.getParameter("filename");
String transactiontype="", providerno="", specialty="", account="", patient_last="", patient_first="", provincecode="", hin="", ver="", billtype="", location="";
String servicedate="", serviceno="", servicecode="", amountsubmit="", amountpay="", amountpaysign="", explain="", error="";
String proFirst="", proLast="", demoFirst="", demoLast="", apptDate="", apptTime="", checkAccount="", proName="";
String sqlRACO="",sqlRAOB="", OBflag="0",COflag="0", amountOB="", amountCO="";
String demo_name ="",demo_hin="";
int accountno=0 ;

raNo = request.getParameter("rano");

// set localClinic record bean
billingLocalInvNoBean = new Properties();
String localClinicNo = oscarVariables.getProperty("clinic_no");
ResultSet rs8 = apptMainBean.queryResults(raNo, "search_rahd_content");
while (rs8.next()) {
	filename = rs8.getString("filename");
}
String url=request.getRequestURI();
url = url.substring(1);
url = url.substring(0,url.indexOf("/")); 
filepath = "/usr/local/OscarDocument/" + url +"/document/";
FileInputStream file = new FileInputStream(filepath + filename);
InputStreamReader reader = new InputStreamReader(file);
BufferedReader input = new BufferedReader(reader);
String nextline;

while ((nextline=input.readLine())!=null){
	header = nextline.substring(0,1);

	if (header.compareTo("H") == 0) { 
		headerCount = nextline.substring(2,3);

		if (headerCount.compareTo("4") == 0){
			account = nextline.substring(23,31);
			location = nextline.substring(69,73);

			String validnum = "0123456789- ";
			boolean valid = true;
			for (int i = 0; i < account.length(); i++) {
				char c = account.charAt(i);
				if (validnum.indexOf(c) == -1) {
					valid = false;
					break;
				}
			}

			if (valid){
				accountno= Integer.parseInt(account.trim());
				account = String.valueOf(accountno);
			}
			// add a bean
			if (location.equals(localClinicNo)) {
				billingLocalInvNoBean.setProperty(account, localClinicNo);
			}
		}
	}
}

// sqlOBfee = "select distinct billing_no from radetail where raheader_no='"+raNo+"' and (service_code='P006A' or service_code='P020A' or service_code='P022A' or service_code='P028A' or service_code='P023A' or service_code='P007A' or service_code='P008B' or service_code='P018B' or service_code='E502A' or service_code='C989A' or service_code='E409A' or service_code='E410A' or service_code='E411A' or service_code='H001A')";

ArrayList OBbilling_no = new ArrayList();
ArrayList CObilling_no = new ArrayList();

ResultSet rsdemo1 = apptMainBean.queryResults(raNo, "search_raob");
while (rsdemo1.next()) {
	OBbilling_no.add((String)rsdemo1.getString("billing_no"));
}
ResultSet rsdemo01 = apptMainBean.queryResults(raNo, "search_racolposcopy");
while (rsdemo01.next()) {
	CObilling_no.add((String)rsdemo01.getString("billing_no"));
}
      	     
BigDecimal bdCFee = new BigDecimal(0).setScale(2, BigDecimal.ROUND_HALF_UP);     	     
BigDecimal bdPFee = new BigDecimal(0).setScale(2, BigDecimal.ROUND_HALF_UP);     	     
BigDecimal bdOFee = new BigDecimal(0).setScale(2, BigDecimal.ROUND_HALF_UP);     	     
BigDecimal bdCOFee = new BigDecimal(0).setScale(2, BigDecimal.ROUND_HALF_UP);     	     

BigDecimal bdFee = new BigDecimal(0).setScale(2, BigDecimal.ROUND_HALF_UP);
BigDecimal bdHFee = new BigDecimal(0).setScale(2, BigDecimal.ROUND_HALF_UP);
BigDecimal BigTotal = new BigDecimal(0).setScale(2, BigDecimal.ROUND_HALF_UP);
BigDecimal BigCTotal = new BigDecimal(0).setScale(2, BigDecimal.ROUND_HALF_UP);
BigDecimal BigPTotal = new BigDecimal(0).setScale(2, BigDecimal.ROUND_HALF_UP);
BigDecimal BigOTotal = new BigDecimal(0).setScale(2, BigDecimal.ROUND_HALF_UP);
BigDecimal BigCOTotal = new BigDecimal(0).setScale(2, BigDecimal.ROUND_HALF_UP);
BigDecimal BigLTotal = new BigDecimal(0).setScale(2, BigDecimal.ROUND_HALF_UP);
BigDecimal BigHTotal = new BigDecimal(0).setScale(2, BigDecimal.ROUND_HALF_UP);
BigDecimal bdOBFee = new BigDecimal(0).setScale(2, BigDecimal.ROUND_HALF_UP);
BigDecimal BigOBTotal = new BigDecimal(0).setScale(2, BigDecimal.ROUND_HALF_UP);
double dHFee = 0.00;        
double dFee = 0.00;
double dCOFee = 0.00; 
double dOBFee = 0.00; 
double dCFee = 0.00;       	
double dPFee = 0.00;       	       	
double dOFee = 0.00;       	       	
       	
proNo = request.getParameter("proNo");
//raNo = request.getParameter("rano");
if (raNo.compareTo("") == 0 || raNo == null){
	flag = "0";
} else {
%>

<table border="0" cellspacing="0" cellpadding="0" width="100%">
	<tr bgcolor="#333333">
		<th align='CENTRE'>
		<form action="genRASummary.jsp"><input type="hidden"
			name="rano" value="<%=raNo%>"> <select name="proNo">
			<option value="all" <%=proNo.equals("all")?"selected":""%>>All
			Providers</option>

			<%
	ResultSet rsdemo = null;
	ResultSet rsdemo2 = null;
	ResultSet rsdemo3 = null;
	rsdemo = apptMainBean.queryResults(raNo, "search_raprovider");
	while (rsdemo.next()) {   
		pohipno = rsdemo.getString("providerohip_no");
		plast = rsdemo.getString("last_name");
		pfirst = rsdemo.getString("first_name");
%>
			<option value="<%=pohipno%>" <%=proNo.equals(pohipno)?"selected":""%>><%=plast%>,<%=pfirst%></option>
			<%	} %>
		</select><input type=submit name=submit value=Generate></form>
		</th>
	</tr>
</table>

<% 
	if (proNo.compareTo("") == 0 || proNo.compareTo("all") == 0 || proNo == null){ 
%>
<table width="100%" border="1" cellspacing="0" cellpadding="0"
	bgcolor="#EFEFEF">
	<form>
	<tr>
		<td width="7%" height="16">Billing No</td>
		<td width="14%" height="16">Provider</td>
		<td width="15%" height="16">Patient</td>
		<td width="7%" height="16">HIN</td>
		<td width="10%" height="16">Service Date</td>
		<td width="7%" height="16">Service Code</td>
		<!-- <td width="8%" height="16">Count</td> -->
		<td width="7%" height="16" align=right>Invoiced</td>
		<td width="7%" height="16" align=right>Paid</td>
		<td width="7%" height="16" align=right>Clinic Pay</td>
		<td width="7%" height="16" align=right>Hospital Pay</td>
		<td width="7%" height="16" align=right>OB</td>
		<td width="5%" height="16" align=right>Error</td>
	</tr>

	<%
	String[] param = new String[2];
	param[0] = raNo;
	param[1] = "%";
	rsdemo = null;
	rsdemo = apptMainBean.queryResults(param, "search_rasummary_dt");
	while (rsdemo.next()) {   
		account = rsdemo.getString("billing_no");
		location="";  
		demo_name ="";
		demo_hin = "";
		rsdemo3 = null;
		rsdemo3 = apptMainBean.queryResults(account, "search_bill"); // change search_bill to a small sql
		while (rsdemo3.next()){
			demo_name = rsdemo3.getString("demographic_name");
			demo_hin = rsdemo3.getString("hin");
			location = rsdemo3.getString("visittype");
		}

		rsdemo2 = null;
		// should take it out of the loop, use prop
		rsdemo2 = apptMainBean.queryResults(rsdemo.getString("providerohip_no"), "search_provider_ohip_dt");
		while (rsdemo2.next()){
			proName = rsdemo2.getString("last_name") + "," + rsdemo2.getString("first_name");
		}

		servicecode = rsdemo.getString("service_code");
		servicedate = rsdemo.getString("service_date");
		serviceno = rsdemo.getString("service_count");
		explain = rsdemo.getString("error_code");
		amountsubmit = rsdemo.getString("amountclaim");
		amountpay = rsdemo.getString("amountpay");

		//OBflag="0";
		// get claim/pay amount
		dCFee = Double.parseDouble(amountsubmit);
		bdCFee = new BigDecimal(dCFee).setScale(2, BigDecimal.ROUND_HALF_UP);
		BigCTotal = BigCTotal.add(bdCFee);

		dPFee = Double.parseDouble(amountpay);
		bdPFee = new BigDecimal(dPFee).setScale(2, BigDecimal.ROUND_HALF_UP);
		BigPTotal = BigPTotal.add(bdPFee);

		OBflag="0";
		COflag="0";
		// set flag
		for (int i=0; i<OBbilling_no.size(); i++){
			sqlRAOB = (String)OBbilling_no.get(i);
			if(sqlRAOB.compareTo(account)==0) {
				OBflag = "1";
				break;
			}
		}
		for (int j=0; j<CObilling_no.size(); j++){
			sqlRACO = (String)CObilling_no.get(j);
			if(sqlRACO.compareTo(account)==0) {
				COflag = "1";
				break;
			}
		}
      	    
		if(OBflag.equals("1")) {
			amountOB=amountpay;
			dOBFee = Double.parseDouble(amountOB);
			bdOBFee = new BigDecimal(dOBFee).setScale(2, BigDecimal.ROUND_HALF_UP);
			BigOBTotal = BigOBTotal.add(bdOBFee);
		} else {
			amountOB="N/A";
		} 

		if(COflag.equals("1")) {
			amountCO=amountpay;
			dCOFee = Double.parseDouble(amountCO);
			bdCOFee = new BigDecimal(dCOFee).setScale(2, BigDecimal.ROUND_HALF_UP);
			BigCOTotal = BigCOTotal.add(bdCOFee);
		} else {
			amountCO="N/A";
		} 


		if (explain.compareTo("") == 0 || explain == null){
			explain = "**";
		}

		if (location.compareTo("02") == 0) { // hospital
			dHFee = Double.parseDouble(amountpay);
			bdHFee = new BigDecimal(dHFee).setScale(2, BigDecimal.ROUND_HALF_UP);
			BigHTotal = BigHTotal.add(bdHFee);
%>

	<tr>
		<td width="7%" height="16"><%=account%></td>
		<td width="14%" height="16"><%=proName%></td>
		<td width="15%" height="16"><%=demo_name%></td>
		<td width="7%" height="16"><%=demo_hin%></td>
		<td width="10%" height="16"><%=servicedate%></td>
		<td width="7%" height="16"><%=servicecode%></td>
		<!-- <td width="8%" height="16"><%=serviceno%></td>-->
		<td width="7%" height="16" align=right><%=amountsubmit%></td>
		<td width="7%" height="16" align=right><%=amountpay%></td>
		<td width="7%" height="16" align=right>N/A</td>
		<td width="7%" height="16" align=right><%=amountpay%></td>
		<td width="7%" height="16" align=right><%=amountOB%></td>
		<td width="5%" height="16" align=right><%=explain%></td>
	</tr>


	<%
		} else { // clinic && local clinic
			if (location.compareTo("00") == 0 && billingLocalInvNoBean.getProperty(account, "").equals(localClinicNo)) {
				dFee = Double.parseDouble(amountpay);
				bdFee = new BigDecimal(dFee).setScale(2, BigDecimal.ROUND_HALF_UP);
				BigTotal = BigTotal.add(bdFee);
%>
	<tr>
		<td width="7%" height="16"><%=account%></td>
		<td width="14%" height="16"><%=proName%></td>
		<td width="15%" height="16"><%=demo_name%></td>
		<td width="7%" height="16"><%=demo_hin%></td>
		<td width="10%" height="16"><%=servicedate%></td>
		<td width="7%" height="16"><%=servicecode%></td>
		<!-- <td width="8%" height="16"><%=serviceno%></td>-->
		<td width="7%" height="16" align=right><%=amountsubmit%></td>
		<td width="7%" height="16" align=right><%=amountpay%></td>
		<td width="7%" height="16" align=right><%=amountpay%></td>
		<td width="7%" height="16" align=right>N/A</td>
		<td width="7%" height="16" align=right><%=amountOB%></td>
		<td width="5%" height="16" align=right><%=explain%></td>
	</tr>

	<%
			} else { // other fee
				dOFee = Double.parseDouble(amountpay);
				bdOFee = new BigDecimal(dOFee).setScale(2, BigDecimal.ROUND_HALF_UP);
				BigOTotal = BigOTotal.add(bdOFee);
%>
	<tr>
		<td width="7%" height="16"><%=account%></td>
		<td width="14%" height="16"><%=proName%></td>
		<td width="15%" height="16"><%=demo_name%></td>
		<td width="7%" height="16"><%=demo_hin%></td>
		<td width="10%" height="16"><%=servicedate%></td>
		<td width="7%" height="16"><%=servicecode%></td>
		<!-- <td width="8%" height="16"><%=serviceno%></td>-->
		<td width="7%" height="16" align=right><%=amountsubmit%></td>
		<td width="7%" height="16" align=right><%=amountpay%></td>
		<td width="7%" height="16" align=right>N/A</td>
		<td width="7%" height="16" align=right>N/A</td>
		<td width="7%" height="16" align=right><%=amountOB%></td>
		<td width="5%" height="16" align=right><%=explain%></td>
	</tr>
	<%
			}
		}
	}	 
} else { // raNo for all providers
%>

	<table width="100%" border="1" cellspacing="0" cellpadding="0"
		bgcolor="#EFEFEF">
		<tr>
			<td width="7%" height="16">Billing No</td>
			<td width="14%" height="16">Provider</td>
			<td width="15%" height="16">Patient</td>
			<td width="7%" height="16">HIN</td>
			<td width="10%" height="16">Service Date</td>
			<td width="7%" height="16">Service Code</td>
			<!-- <td width="8%" height="16">Count</td> -->
			<td width="7%" height="16" align=right>Invoiced</td>
			<td width="7%" height="16" align=right>Paid</td>
			<td width="7%" height="16" align=right>Clinic Pay</td>
			<td width="7%" height="16" align=right>Hospital Pay</td>
			<td width="7%" height="16" align=right>OB</td>
			<td width="5%" height="16" align=right>Error</td>
		</tr>
		<%
            
            
               String[] param = new String[2];
                      param[0] = raNo;
                      param[1] = proNo+"%";
            rsdemo = null;
                  	    rsdemo = apptMainBean.queryResults(param, "search_rasummary_dt");
                  	     while (rsdemo.next()) {   
                  	    account = rsdemo.getString("billing_no");
                          location = "";
                 demo_name ="";
				 demo_hin = "";
		          		    rsdemo3 = null;
		          		    rsdemo3 = apptMainBean.queryResults(account, "search_bill");
		                        while (rsdemo3.next()){
		                         demo_name = rsdemo3.getString("demographic_name");
		                	     demo_hin = rsdemo3.getString("hin");
		                	             location = rsdemo3.getString("visittype");
            	     }
         
        	          		    rsdemo2 = null;
		          		    rsdemo2 = apptMainBean.queryResults(rsdemo.getString("providerohip_no"), "search_provider_ohip_dt");
		                        while (rsdemo2.next()){
	 
         
         
         proName = rsdemo2.getString("last_name") + "," + rsdemo2.getString("first_name");
      	 }   	
                	   servicecode = rsdemo.getString("service_code");
                   	   servicedate = rsdemo.getString("service_date");
                   	   serviceno = rsdemo.getString("service_count");
            	           explain = rsdemo.getString("error_code");
            	           amountsubmit = rsdemo.getString("amountclaim");
            	           amountpay = rsdemo.getString("amountpay");
                 
       //k     location = rsdemo.getString("visittype");
            dCFee = Double.parseDouble(amountsubmit);
	                     bdCFee = new BigDecimal(dCFee).setScale(2, BigDecimal.ROUND_HALF_UP);
	    		        	BigCTotal = BigCTotal.add(bdCFee);
      	    
      	    dPFee = Double.parseDouble(amountpay);
	    	                     bdPFee = new BigDecimal(dPFee).setScale(2, BigDecimal.ROUND_HALF_UP);
	    	    		        	BigPTotal = BigPTotal.add(bdPFee);
      	      COflag="0";
            OBflag="0";
         for (int i=0; i<OBbilling_no.size(); i++){
	      	    sqlRAOB = (String)OBbilling_no.get(i);
	      	    if(sqlRAOB.compareTo(account)==0)OBflag = "1";
	      	     	    
	      	    }
	      	         for (int j=0; j<CObilling_no.size(); j++){
			      	    sqlRACO = (String)CObilling_no.get(j);
			      	    if(sqlRACO.compareTo(account)==0)COflag = "1";
			      	     	    
	      	    }
	      	    
	      	        if(OBflag.equals("1")) {
	      	        amountOB=amountpay;
	      	         dOBFee = Double.parseDouble(amountOB);
			  				               	          
			  				               	bdOBFee = new BigDecimal(dOBFee).setScale(2, BigDecimal.ROUND_HALF_UP);
					               	BigOBTotal = BigOBTotal.add(bdOBFee);
	      	        }else{
	      	        amountOB="N/A";
	      	        } 
	      	       
	      	        if(COflag.equals("1")) {
		             	        amountCO=amountpay;
		             	         dCOFee = Double.parseDouble(amountCO);
		       		  				               	          
		       		  				               	bdCOFee = new BigDecimal(dCOFee).setScale(2, BigDecimal.ROUND_HALF_UP);
		       				               	BigCOTotal = BigCOTotal.add(bdCOFee);
		             	        }else{
		             	        amountCO="N/A";
		             	        } 
      	       
            	         
            //	           proName = rsdemo.getString("last_name") + "," + rsdemo.getString("first_name");
            	           
                                             if (explain.compareTo("") == 0 || explain == null){
      	           explain = "**";
      	           }      

            	           if (location.compareTo("02") == 0) {
            	           
			   				               dHFee = Double.parseDouble(amountpay);
			   				               	          
			   				               	bdHFee = new BigDecimal(dHFee).setScale(2, BigDecimal.ROUND_HALF_UP);
			   				               	BigHTotal = BigHTotal.add(bdHFee);
				              	
	                                         
	         %>
		<tr>
			<td width="7%" height="16"><%=account%></td>
			<td width="14%" height="16"><%=proName%></td>
			<td width="15%" height="16"><%=demo_name%></td>
			<td width="7%" height="16"><%=demo_hin%></td>
			<td width="10%" height="16"><%=servicedate%></td>
			<td width="7%" height="16"><%=servicecode%></td>
			<!--<td width="8%" height="16"><%=serviceno%></td>-->
			<td width="7%" height="16" align=right><%=amountsubmit%></td>
			<td width="7%" height="16" align=right><%=amountpay%></td>
			<td width="7%" height="16" align=right>N/A</td>
			<td width="7%" height="16" align=right><%=amountpay%></td>
			<td width="7%" height="16" align=right><%=amountOB%></td>
			<td width="5%" height="16" align=right><%=explain%></td>
		</tr>

		<%
	         } 
	         else {     if (location.compareTo("00") == 0) {
	         
		     		     dFee = Double.parseDouble(amountpay);
		 		  				               	          
		 	      bdFee = new BigDecimal(dFee).setScale(2, BigDecimal.ROUND_HALF_UP);
				               	BigTotal = BigTotal.add(bdFee);
          %>
		<tr>
			<td width="7%" height="16"><%=account%></td>
			<td width="14%" height="16"><%=proName%></td>
			<td width="15%" height="16"><%=demo_name%></td>
			<td width="7%" height="16"><%=demo_hin%></td>
			<td width="10%" height="16"><%=servicedate%></td>
			<td width="7%" height="16"><%=servicecode%></td>
			<!-- <td width="8%" height="16"><%=serviceno%></td>-->
			<td width="7%" height="16" align=right><%=amountsubmit%></td>
			<td width="7%" height="16" align=right><%=amountpay%></td>
			<td width="7%" height="16" align=right><%=amountpay%></td>

			<td width="7%" height="16" align=right>N/A</td>
			<td width="7%" height="16" align=right><%=amountOB%></td>
			<td width="5%" height="16" align=right><%=explain%></td>
		</tr>

		<%
  }
  else{ 
  
       dOFee = Double.parseDouble(amountpay);
  		 		  				               	          
  		 	      bdOFee = new BigDecimal(dOFee).setScale(2, BigDecimal.ROUND_HALF_UP);
				               	BigOTotal = BigOTotal.add(bdOFee);
  %>
		<tr>
			<td width="7%" height="16"><%=account%></td>
			<td width="14%" height="16"><%=proName%></td>
			<td width="15%" height="16"><%=demo_name%></td>
			<td width="7%" height="16"><%=demo_hin%></td>
			<td width="10%" height="16"><%=servicedate%></td>
			<td width="7%" height="16"><%=servicecode%></td>
			<!-- <td width="8%" height="16"><%=serviceno%></td>-->
			<td width="7%" height="16" align=right><%=amountsubmit%></td>
			<td width="7%" height="16" align=right><%=amountpay%></td>
			<td width="7%" height="16" align=right>N/A</td>
			<td width="7%" height="16" align=right>N/A</td>
			<td width="7%" height="16" align=right><%=amountOB%></td>
			<td width="5%" height="16" align=right><%=explain%></td>
		</tr>

		<%
  }
  }          
            
           
            }
      %>

		<%
      }
       
  }
 %>

		<% 
BigLTotal = BigLTotal.add(BigTotal);
BigLTotal = BigLTotal.add(BigHTotal);
%>
		<tr bgcolor='#FFFF3E'>
			<td width="7%" height="16"></td>
			<td width="14%" height="16"></td>
			<td width="15%" height="16"></td>
			<td width="7%" height="16"></td>
			<td width="10%" height="16"></td>
			<td width="7%" height="16">Total</td>
			<td width="7%" height="16" align=right><%=BigCTotal%></td>
			<td width="7%" height="16" align=right><%=BigPTotal%><!-- <%=BigOTotal%>--></td>
			<td width="7%" height="16" align=right><%=BigTotal%><!--<%=BigLTotal%>--></td>
			<td width="7%" height="16" align=right><%=BigHTotal%></td>
			<td width="7%" height="16" align=right><%=BigOBTotal%></td>
			<td width="5%" height="16"></td>
		</tr>
	</table>

	<%
String transaction="", content="", balancefwd="", xtotal="", other_total="", ob_total=""; 
ResultSet rslocal = apptMainBean.queryResults(raNo, "search_rahd_content");
while(rslocal.next()){
	transaction= SxmlMisc.getXmlContent(rslocal.getString("content"),"<xml_transaction>","</xml_transaction>");
	balancefwd= SxmlMisc.getXmlContent(rslocal.getString("content"),"<xml_balancefwd>","</xml_balancefwd>");
}
content = content + "<xml_transaction>" + transaction + "</xml_transaction>" + "<xml_balancefwd>" + balancefwd + "</xml_balancefwd>";
content = content + "<xml_local>" + BigLTotal + "</xml_local>"+ "<xml_total>" + BigPTotal + "</xml_total>" + "<xml_other_total>" + BigOTotal + "</xml_other_total>" + "<xml_ob_total>" + BigOBTotal + "</xml_ob_total>" + "<xml_co_total>" + BigCOTotal + "</xml_co_total>";

int recordAffected=0;
String[] param2 = new String[2];
param2[0] = content;
param2[1] = raNo; 

recordAffected = apptMainBean.queryExecuteUpdate(param2,"update_rahd_content");
%>

</body>
</html>
