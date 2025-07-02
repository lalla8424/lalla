function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const formType = data.formType;

    if (formType === "WeeklyProgram") {
      handleWeeklyProgram(data);
    } else if (formType === "TrialClass") {
      handleTrialClass(data);
    } else {
      throw new Error("Unknown formType");
    }

    return ContentService.createTextOutput(
      JSON.stringify({ result: "success" }),
    ).setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(
      JSON.stringify({ result: "error", message: error.message }),
    ).setMimeType(ContentService.MimeType.JSON);
  }
}

// 💡 Weekly Program 처리
function handleWeeklyProgram(data) {
  const sheet =
    SpreadsheetApp.getActiveSpreadsheet().getSheetByName("WeeklyProgram") ||
    SpreadsheetApp.getActiveSpreadsheet().insertSheet("WeeklyProgram");

  const headers = [
    "Submission Time",
    "Parent/Guardian Name",
    "Child's Name",
    "Child's Age",
    "Email",
    "Phone Number",
    "Program Type",
    "Schedule",
  ];

  const row = [
    new Date(),
    data.parentName || "",
    data.childName || "",
    data.childAge || "",
    data.email || "",
    data.phone || "",
    data.programType || "",
    (Array.isArray(data.schedule) ? data.schedule.join(", ") : data.schedule) ||
      "",
  ];

  if (sheet.getLastRow() === 0) sheet.appendRow(headers);
  sheet.appendRow(row);
  sendEmailNotification(data, "WeeklyProgram");
}

// 💡 Trial Class 처리
function handleTrialClass(data) {
  const sheet =
    SpreadsheetApp.getActiveSpreadsheet().getSheetByName("TrialClass") ||
    SpreadsheetApp.getActiveSpreadsheet().insertSheet("TrialClass");

  const headers = [
    "Submission Time",
    "Parent/Guardian Name",
    "Child's Name",
    "Child's Age",
    "Email",
    "Phone Number",
    "Activity",
    "Schedule",
    "Agreed To Terms",
  ];

  const row = [
    new Date(),
    data.parentName || "",
    data.childName || "",
    data.childAge || "",
    data.email || "",
    data.phone || "",
    data.activity || "",
    (Array.isArray(data.schedule) ? data.schedule.join(", ") : data.schedule) ||
      "",
    data.agreed || "",
  ];

  if (sheet.getLastRow() === 0) sheet.appendRow(headers);
  sheet.appendRow(row);
  sendEmailNotification(data, "TrialClass");
}

// 📧 이메일 자동화 (공통)
function sendEmailNotification(data, formType) {
  const adminEmail = "senugw0u@gmail.com";
  let subject = "";
  let htmlBody = "";

  if (formType === "WeeklyProgram") {
    subject = "주간 프로그램 신청 접수 알림";
    htmlBody = `
      <h2>새로운 주간 프로그램 신청이 접수되었습니다.</h2>
      <table border="1">
        <tr><td><strong>Parent</strong></td><td>${
          data.parentName || "-"
        }</td></tr>
        <tr><td><strong>Child</strong></td><td>${
          data.childName || "-"
        }</td></tr>
        <tr><td><strong>Age</strong></td><td>${data.childAge || "-"}</td></tr>
        <tr><td><strong>Email</strong></td><td>${data.email || "-"}</td></tr>
        <tr><td><strong>Phone</strong></td><td>${data.phone || "-"}</td></tr>
        <tr><td><strong>Program Type</strong></td><td>${
          data.programType || "-"
        }</td></tr>
        <tr><td><strong>Schedule</strong></td><td>${
          (Array.isArray(data.schedule)
            ? data.schedule.join(", ")
            : data.schedule) || "-"
        }</td></tr>
      </table>
    `;
  } else if (formType === "TrialClass") {
    subject = "체험 수업 신청 접수 알림";
    htmlBody = `
      <h2>새로운 체험 수업 신청이 접수되었습니다.</h2>
      <table border="1">
        <tr><td><strong>Parent</strong></td><td>${
          data.parentName || "-"
        }</td></tr>
        <tr><td><strong>Child</strong></td><td>${
          data.childName || "-"
        }</td></tr>
        <tr><td><strong>Age</strong></td><td>${data.childAge || "-"}</td></tr>
        <tr><td><strong>Email</strong></td><td>${data.email || "-"}</td></tr>
        <tr><td><strong>Phone</strong></td><td>${data.phone || "-"}</td></tr>
        <tr><td><strong>Activity</strong></td><td>${
          data.activity || "-"
        }</td></tr>
        <tr><td><strong>Schedule</strong></td><td>${
          (Array.isArray(data.schedule)
            ? data.schedule.join(", ")
            : data.schedule) || "-"
        }</td></tr>
        <tr><td><strong>Terms Agreed</strong></td><td>${
          data.agreed ? "Yes" : "No"
        }</td></tr>
      </table>
    `;
  }

  GmailApp.sendEmail(adminEmail, subject, "", {
    htmlBody: htmlBody,
    name: "폼 신청 시스템",
  });

  if (data.email) {
    GmailApp.sendEmail(data.email, "신청 확인", "", {
      htmlBody: `<p>${
        formType === "TrialClass" ? "체험 수업" : "주간 프로그램"
      } 신청이 접수되었습니다. 감사합니다!</p>`,
      name: "폼 신청 시스템",
    });
  }
}
