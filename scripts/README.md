## 📋 구성 개요

- **폼 1: Weekly Program**
  시트명 → `WeeklyProgram`

- **폼 2: Trial Class**
  시트명 → `TrialClass`

- **공통 기능**:

  - Google Sheets에 자동 저장
  - 이메일 알림 자동 발송 (관리자 + 사용자)
  - 하나의 Google Apps Script 프로젝트에서 처리
  - 폼 구분은 `formType` 필드 사용 (`WeeklyProgram` 또는 `TrialClass`)

---

## 📄 1. Google Apps Script 코드

Google Sheets → `확장 프로그램 > Apps Script` 클릭 후 아래 코드 붙여넣고 저장하세요.

```javascript
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

// 📘 Weekly Program 폼 처리
function handleWeeklyProgram(data) {
  const sheet =
    SpreadsheetApp.getActiveSpreadsheet().getSheetByName("WeeklyProgram") ||
    SpreadsheetApp.getActiveSpreadsheet().insertSheet("WeeklyProgram");

  const headers = [
    "제출시간",
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

// 🧡 Trial Class 폼 처리
function handleTrialClass(data) {
  const sheet =
    SpreadsheetApp.getActiveSpreadsheet().getSheetByName("TrialClass") ||
    SpreadsheetApp.getActiveSpreadsheet().insertSheet("TrialClass");

  const headers = [
    "제출시간",
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
    data.agreed ? "Yes" : "No",
  ];

  if (sheet.getLastRow() === 0) sheet.appendRow(headers);
  sheet.appendRow(row);
  sendEmailNotification(data, "TrialClass");
}

// 📧 이메일 알림 (공통)
function sendEmailNotification(data, formType) {
  const adminEmail = "senugw0u@gmail.com";
  let subject = "";
  let htmlBody = "";

  if (formType === "WeeklyProgram") {
    subject = "주간 프로그램 신청 접수";
    htmlBody = `
      <h2>새로운 주간 프로그램 신청</h2>
      <ul>
        <li><strong>Parent:</strong> ${data.parentName}</li>
        <li><strong>Child:</strong> ${data.childName}</li>
        <li><strong>Age:</strong> ${data.childAge}</li>
        <li><strong>Email:</strong> ${data.email}</li>
        <li><strong>Phone:</strong> ${data.phone}</li>
        <li><strong>Program Type:</strong> ${data.programType}</li>
        <li><strong>Schedule:</strong> ${
          Array.isArray(data.schedule)
            ? data.schedule.join(", ")
            : data.schedule
        }</li>
      </ul>
    `;
  } else if (formType === "TrialClass") {
    subject = "체험 수업 신청 접수";
    htmlBody = `
      <h2>새로운 체험 수업 신청</h2>
      <ul>
        <li><strong>Parent:</strong> ${data.parentName}</li>
        <li><strong>Child:</strong> ${data.childName}</li>
        <li><strong>Age:</strong> ${data.childAge}</li>
        <li><strong>Email:</strong> ${data.email}</li>
        <li><strong>Phone:</strong> ${data.phone}</li>
        <li><strong>Activity:</strong> ${data.activity}</li>
        <li><strong>Schedule:</strong> ${
          Array.isArray(data.schedule)
            ? data.schedule.join(", ")
            : data.schedule
        }</li>
        <li><strong>Agreed To Terms:</strong> ${data.agreed ? "Yes" : "No"}</li>
      </ul>
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
```

---

## 🌐 2. JavaScript 코드 (폼 제출용)

### 공통 사용 함수

```javascript
const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec";

async function submitForm(formData) {
  const data = Object.fromEntries(formData.entries());

  // checkbox(name="schedule") 및 terms 처리
  data.schedule = formData.getAll("schedule");
  data.agreed = formData.get("agreed") === "on";

  await fetch(GOOGLE_SCRIPT_URL, {
    method: "POST",
    mode: "no-cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  alert("제출이 완료되었습니다.");
}
```

---

## ✅ 3. 각 폼에서 `formType` 지정 방법

HTML `<form>` 태그 내부에 hidden 필드를 추가하세요.

### Weekly Program 예시

```html
<input type="hidden" name="formType" value="WeeklyProgram" />
```

### Trial Class 예시

```html
<input type="hidden" name="formType" value="TrialClass" />
```

---

## ⚙️ 4. 배포 절차

1. **Google Sheets 생성**
   → `WeeklyProgram`, `TrialClass` 시트 자동 생성됨

2. **Apps Script 연결**

   - 시트 상단 메뉴 → 확장 프로그램 → Apps Script
   - 위 코드 붙여넣고 저장

3. **웹 앱으로 배포**

   - 배포 > 새 배포 > 유형: 웹 앱
   - 권한: 본인
   - 액세스: 익명 사용자
   - 배포 후 생성된 URL을 `GOOGLE_SCRIPT_URL`에 입력

4. **Gmail 권한 승인**

   - 이메일 자동화 기능 사용을 위한 권한 승인 필요

---

## 🚨 주의사항

- checkbox는 `formData.getAll()` 사용
- `mode: "no-cors"`이므로 fetch 응답을 직접 확인 불가 → 스프레드시트에서 확인
- 관리자 이메일은 `senugw0u@gmail.com`으로 고정
- 이메일은 스팸함으로 갈 수 있으므로 주의
