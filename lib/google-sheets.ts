/**
 * @file google-sheets.ts
 * @description Google Apps Script를 통한 Google Sheets 연동 함수들
 *
 * 이 파일은 폼 데이터를 Google Sheets에 저장하는 기능을 제공합니다.
 *
 * 주요 기능:
 * 1. Weekly Program 폼 데이터를 Google Sheets에 저장
 * 2. Trial Class 폼 데이터를 Google Sheets에 저장
 * 3. Google Apps Script를 통한 이메일 알림 자동 발송
 *
 * 핵심 구현 로직:
 * - 환경 변수에서 GOOGLE_SCRIPT_URL을 가져와 POST 요청
 * - formType 필드로 Weekly Program과 Trial Class 구분
 * - no-cors 모드를 사용하여 브라우저 CORS 제한 우회
 *
 * @dependencies
 * - GOOGLE_SCRIPT_URL 환경 변수 필요
 *
 * @see {@link /scripts/README.md} - Google Apps Script 설정 가이드
 */

// Google Apps Script URL을 환경 변수에서 가져옴
const GOOGLE_SCRIPT_URL = process.env.GOOGLE_SCRIPT_URL;

if (!GOOGLE_SCRIPT_URL) {
  console.error("GOOGLE_SCRIPT_URL 환경 변수가 설정되지 않았습니다!");
}

/**
 * Weekly Program 폼 데이터를 Google Sheets에 저장
 */
export const submitWeeklyProgramToGoogleSheets = async (formData: any) => {
  if (!GOOGLE_SCRIPT_URL) {
    throw new Error("Google Script URL이 설정되지 않았습니다");
  }

  try {
    const data = {
      formType: "WeeklyProgram",
      parentName: formData.parentName,
      childName: formData.childName,
      childAge: formData.childAge,
      email: formData.email,
      phone: formData.phone,
      programType: formData.programType,
      schedule: formData.schedule, // 배열 또는 문자열
    };

    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    return { success: true };
  } catch (error) {
    console.error("❌ Google Sheets Weekly Program 제출 실패:", error);
    throw new Error("Google Sheets에 데이터 저장 실패");
  }
};

/**
 * Trial Class 폼 데이터를 Google Sheets에 저장
 */
export const submitTrialClassToGoogleSheets = async (formData: any) => {
  if (!GOOGLE_SCRIPT_URL) {
    throw new Error("Google Script URL이 설정되지 않았습니다");
  }

  try {
    const data = {
      formType: "TrialClass",
      parentName: formData.parentName,
      childName: formData.childName,
      childAge: formData.childAge,
      email: formData.email,
      phone: formData.phone,
      activity: formData.chooseActivity, // Trial Class에서는 chooseActivity 필드 사용
      schedule: formData.schedule, // 배열 또는 문자열
    };

    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    return { success: true };
  } catch (error) {
    console.error("❌ Google Sheets Trial Class 제출 실패:", error);
    throw new Error("Google Sheets에 데이터 저장 실패");
  }
};
