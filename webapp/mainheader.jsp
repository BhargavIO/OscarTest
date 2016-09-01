


<html>
      
<%
String prov=(String) session.getAttribute("prov");
String curUser_no = (String) session.getAttribute("user");

%>
<head>
<link rel="stylesheet" href="../receptionist/receptionistapptstyle.css" type="text/css">
<link rel="stylesheet" href="../css/mainheader.css" type="text/css">
<script>


function popupPage2(varpage) {
popupPage2(varpage, "apptProviderSearch");
}

function popupPage2(varpage, windowname) {
popupPage2(varpage, windowname, 700, 1024);
}

function popupPage2(varpage, windowname, vheight, vwidth) {
// Provide default values for windowname, vheight, and vwidth incase popupPage2
// is called with only 1 or 2 arguments (must always specify varpage)
windowname  = typeof(windowname)!= 'undefined' ? windowname : 'apptProviderSearch';
vheight     = typeof(vheight)   != 'undefined' ? vheight : '700px';
vwidth      = typeof(vwidth)    != 'undefined' ? vwidth : '1024px';
var page = "" + varpage;
windowprops = "height="+vheight+",width="+vwidth+",location=no,scrollbars=yes,menubars=no,toolbars=no,resizable=yes,screenX=50,screenY=50,top=0,left=0";
var popup = window.open(page,"_self");
//window.open(page);
if (popup != null) {
	if (popup.opener == null) {
  		popup.opener = self;
	}
	popup.focus();
	}

}

<!--oscarMessenger code block-->
function popupOscarRx(vheight,vwidth,varpage) {
var page = varpage;
windowprops = "height="+vheight+",width="+vwidth+",location=no,scrollbars=yes,menubars=no,toolbars=no,resizable=yes,screenX=0,screenY=0,top=0,left=0";
window.open(varpage,"_self");
/*var popup=window.open(varpage, "<bean:message key="global.oscarRx"/>_appt", windowprops);
if (popup != null) {
if (popup.opener == null) {
popup.opener = self;
}
popup.focus();
}*/
}

function popupInboxManager(varpage){
    var page = "" + varpage;
    var windowname="apptProviderSearch";
    windowprops = "height=700,width=1100,location=no,"
    + "scrollbars=yes,menubars=no,toolbars=no,resizable=yes,top=10,left=0";
    var popup = window.open(page, "_self");
    if (popup != null) {
        if (popup.opener == null) {
            popup.opener = self;
        }
        popup.focus();
    }
}
</script>

</head>

<body>

<table BORDER="0" CELLPADDING="0" CELLSPACING="0" WIDTH="100%" id="firstTable" >
<tr>
<td id="firstMenu">

<ul id="navlist">
<li >
	<a href="<%= request.getContextPath() %>/provider/providercontrol.jsp">Home</a>
</li>

<li id="search">
    
       <a HREF="#" ONCLICK ="popupPage2('<%= request.getContextPath() %>/demographic/search.jsp');return false;"  TITLE='search' OnMouseOver="window.status='Search' ; return true"><bean:message key="provider.appointmentProviderAdminDay.search"/></a>
    
</li>
<li>
 <a HREF="#" ONCLICK ="popupInboxManager('<%= request.getContextPath() %>/dms/inboxManage.do?method=prepareForIndexPage&providerNo=<%=curUser_no%>', 'Lab');return false;" TITLE='<bean:message key="provider.appointmentProviderAdminDay.viewLabReports"/>'>
	   <span id="oscar_new_lab"><bean:message key="global.lab"/></span>
       </a>
<a class="tabalert" HREF="#" ONCLICK ="popupInboxManager('<%= request.getContextPath() %>/dms/inboxManage.do?method=prepareForIndexPage&providerNo=0&searchProviderNo=0&status=N&lname=&fname=&hnum=&pageNum=1&startIndex=0', 'Lab');return false;" TITLE='<bean:message key="provider.appointmentProviderAdminDay.viewLabReports"/>'>*</a>
</li>

<li>
     
	<a HREF="#" ONCLICK ="popupPage2('<%= request.getContextPath() %>/billing/CA/<%=prov%>/billingReportCenter.jsp?displaymode=billreport&providerview=<%=curUser_no%>');return false;" TITLE='<bean:message key="global.genBillReport"/>' onMouseOver="window.status='<bean:message key="global.genBillReport"/>';return true"><bean:message key="global.billing"/></a>
     
</li>

<li id="admin">
     <a HREF="#" ONCLICK ="popupOscarRx(700,687,'<%= request.getContextPath() %>/admin/admin.jsp');return false;"><bean:message key="global.admin"/></a>
  </li>
   
</ul>
<ul class="right">
<li class="logout">
      <a href="<%= request.getContextPath() %>/logout.jsp" style="color:white;"><bean:message key="global.btnLogout"/></a>
  </li>
</ul>	

</td>
</tr>
</table>

</body>
</html>
