<%--

    Copyright (c) 2006-. OSCARservice, OpenSoft System. All Rights Reserved.
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

--%>
<%//
			if (session.getAttribute("user") == null)
				response.sendRedirect("../../../../logout.jsp");
			String user_no = "";
			user_no = (String) session.getAttribute("user");
%>
<%@ page
	import="java.util.*,java.sql.*,oscar.util.*,oscar.*,oscar.oscarBilling.ca.on.data.*"
	errorPage="../../../errorpage.jsp"%>

<jsp:useBean id="apptMainBean" class="oscar.AppointmentMainBean"
	scope="session" />
<%@ include file="dbINR.jspf"%>
<%//
			JdbcBillingClaimImpl dbObj = new JdbcBillingClaimImpl();
			String temp = "";
			String clinic_no = request.getParameter("clinic_no");
			String clinic_ref_code = request.getParameter("xml_location");
			String creator = request.getParameter("curUser");
			String updatedate = request.getParameter("curDate");
			String verCode = request.getParameter("verCode");

			String demono = "", demo_name = "", demo_dob = "", demo_hin = "", billinginr_no = "", provider_no = "";
			String provider_ohip_no = "", provider_rma_no = "", diagnostic_code = "", service_desc = "", service_code = "", billing_amount = "";
			String billing_unit = "";
			int colorCount = 0;
			String color = "";
			int Count1 = 0;

			for (Enumeration e = request.getParameterNames(); e.hasMoreElements();) {
				temp = e.nextElement().toString();
				if (temp.indexOf("inrbilling") == -1)
					continue;
				//////////////////////////////////////////////////////////////////////////////////////
				// 	content+="<" +temp+ ">" +SxmlMisc.replaceHTMLContent(request.getParameter(temp))+ "</" +temp+ ">";
				//////////////////////////////////////////////////////////////////////////////////////  	

				ResultSet rsdemo = null;
				rsdemo = apptMainBean.queryResults(temp.substring(10), "search_inrbilling_dt_billno");
				while (rsdemo.next()) {

					demono = rsdemo.getString("demographic_no");
					demo_name = rsdemo.getString("demographic_name");
					demo_hin = rsdemo.getString("hin") + rsdemo.getString("ver");
					demo_dob = rsdemo.getString("year_of_birth") + rsdemo.getString("month_of_birth")
							+ rsdemo.getString("date_of_birth");
					provider_no = rsdemo.getString("provider_no");
					provider_ohip_no = rsdemo.getString("provider_ohip_no");
					provider_rma_no = rsdemo.getString("provider_rma_no");
					diagnostic_code = rsdemo.getString("diagnostic_code");
					service_code = rsdemo.getString("service_code");
					service_desc = rsdemo.getString("service_desc");
					billing_amount = rsdemo.getString("billing_amount");
					billing_unit = rsdemo.getString("billing_unit");

					String hcType = rsdemo.getString("hc_type");
					String sex = rsdemo.getString("sex");
					String last_name = rsdemo.getString("last_name");
					String first_name = rsdemo.getString("first_name");

					//StringBuffer sotherBuffer = new StringBuffer(billing_amount);
					//int f = billing_amount.indexOf('.');
					//sotherBuffer.deleteCharAt(f);
					//sotherBuffer.insert(f, "");
					//billing_amount = sotherBuffer.toString();

					String[] param = new String[23];
					param[0] = clinic_no;
					param[1] = demono;
					param[2] = provider_no;
					param[3] = "0";
					param[4] = "V03";
					param[5] = demo_name;
					param[6] = demo_hin;
					param[7] = request.getParameter("curDate");
					param[8] = MyDateFormat.getTimeXX_XX_XX("00:00");
					param[9] = request.getParameter("xml_appointment_date");
					param[10] = MyDateFormat.getTimeXX_XX_XX("00:00");
					param[11] = clinic_ref_code;
					param[12] = "";
					param[13] = billing_amount;
					param[14] = "O";
					param[15] = demo_dob;
					param[16] = request.getParameter("xml_appointment_date");
					param[17] = "00";
					param[18] = provider_ohip_no;
					param[19] = provider_rma_no;
					param[20] = "";
					param[21] = "";
					param[22] = creator;

					BillingClaimHeader1Data claim1Header = new BillingClaimHeader1Data();

					claim1Header.setTransc_id(BillingDataHlp.CLAIMHEADER1_TRANSACTIONIDENTIFIER);
					claim1Header.setRec_id(BillingDataHlp.CLAIMHEADER1_REORDIDENTIFICATION);
					claim1Header.setHin(rsdemo.getString("hin"));
					claim1Header.setVer(rsdemo.getString("ver"));
					claim1Header.setDob(demo_dob);
					// acc_num - billing no
					String payProg = hcType.equals("ON") ? "HCP" : "RMB";
					claim1Header.setPay_program(payProg);
					claim1Header.setPayee(BillingDataHlp.CLAIMHEADER1_PAYEE);
					claim1Header.setRef_num("");

					claim1Header.setFacilty_num(clinic_ref_code);
					claim1Header.setAdmission_date("");

					claim1Header.setRef_lab_num("");
					claim1Header.setMan_review("");

					claim1Header.setLocation(clinic_no);

					claim1Header.setDemographic_no(demono);
					claim1Header.setProviderNo(provider_no);

					claim1Header.setAppointment_no("0"); // appointment_no;
					claim1Header.setDemographic_name(demo_name);
					claim1Header.setSex(sex);
					claim1Header.setProvince(hcType);

					claim1Header.setBilling_date(request.getParameter("xml_appointment_date"));
					claim1Header.setBilling_time("00:00:00");
					claim1Header.setUpdate_datetime(UtilDateUtilities.getToday("yyyy-MM-dd HH:mm:ss"));
					claim1Header.setTotal(billing_amount);

					claim1Header.setPaid("");
					claim1Header.setStatus("O");
					claim1Header.setComment("");
					claim1Header.setVisittype("00");
					claim1Header.setProvider_ohip_no(provider_ohip_no);
					claim1Header.setProvider_rma_no(provider_rma_no);
					claim1Header.setApptProvider_no("");
					claim1Header.setAsstProvider_no("");
					claim1Header.setCreator(creator);

					int nNo = dbObj.addOneClaimHeaderRecord(claim1Header);
					String billNo = "" + nNo;

					int recordAffected = 0;
					String[] param3 = new String[3];
					param3[0] = "A";
					param3[1] = request.getParameter("xml_appointment_date");
					param3[2] = temp.substring(10);
					recordAffected = apptMainBean.queryExecuteUpdate(param3, "update_inrbilling_dt_billno");

					int recordCount = Integer.parseInt("1");
					for (int i = 0; i < recordCount; i++) {
						String[] param2 = new String[8];
						param2[0] = billNo;
						param2[1] = service_code;
						param2[2] = service_desc;
						param2[3] = billing_amount;
						param2[4] = diagnostic_code;
						param2[5] = request.getParameter("xml_appointment_date");
						param2[6] = "O";
						param2[7] = billing_unit;

					}

					BillingItemData[] claimItem = new BillingItemData[recordCount];
					// _logger.info("No billing item for billing # " + itemNum);
					for (int i = 0; i < recordCount; i++) {
						claimItem[i] = new BillingItemData();
						claimItem[i].setTransc_id(BillingDataHlp.ITEM_TRANSACTIONIDENTIFIER);
						claimItem[i].setRec_id(BillingDataHlp.ITEM_REORDIDENTIFICATION);
						claimItem[i].setService_code(service_code);
						claimItem[i].setFee(billing_amount);
						claimItem[i].setSer_num(billing_unit);
						claimItem[i].setService_date(request.getParameter("xml_appointment_date"));
						claimItem[i].setDx(diagnostic_code);
						claimItem[i].setDx1("");
						claimItem[i].setDx2("");
						claimItem[i].setStatus("O");

						List aL = new Vector();
						aL.add(claimItem[i]);
						dbObj.addItemRecord(aL, Integer.parseInt(billNo));
					}

				}
			}

		%>
<script LANGUAGE="JavaScript">
      self.close();
     // self.opener.refresh();
</script>