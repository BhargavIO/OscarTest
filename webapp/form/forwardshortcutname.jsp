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

<%@page import="org.oscarehr.util.MiscUtils"%>
<%@ taglib uri="/WEB-INF/security.tld" prefix="security"%>
<%
    if(session.getAttribute("userrole") == null )  response.sendRedirect("../logout.jsp");
    String roleName$ = (String)session.getAttribute("userrole") + "," + (String) session.getAttribute("user");
%>
<security:oscarSec roleName="<%=roleName$%>" objectName="_eChart"
	rights="r" reverse="<%=true%>">
	<%response.sendRedirect("../logout.jsp");%>
</security:oscarSec>

<%@ page import="java.net.URLDecoder, oscar.form.data.*" errorPage="../errorpage.jsp"%>

<%
  //if(session.getValue("user") == null || !( ((String) session.getValue("userprofession")).equalsIgnoreCase("doctor") ))
  //  response.sendRedirect("../logout.jsp");

    // forward to the page 'form_link'
    if(true) {
        out.clear();
        //forward to the current specified form, e.g. ../form/formar.jsp?demographic_no=
        String strFrm = URLDecoder.decode(request.getParameter("formname"), "UTF-8");
        String[] formPath = (new FrmData()).getShortcutFormValue(request.getParameter("demographic_no"), strFrm);
        formPath[0] = formPath[0].trim();
        
        String remoteFacilityIdString=request.getParameter("remoteFacilityId");
        String nextPage=formPath[0] + request.getParameter("demographic_no")  + (remoteFacilityIdString!=null?"&remoteFacilityId="+remoteFacilityIdString+"&formId="+request.getParameter("formId"):"&formId=" + formPath[1]);
        MiscUtils.getLogger().debug("Forwarding to page : "+nextPage);
        pageContext.forward(nextPage);
        return;
    }
%>
