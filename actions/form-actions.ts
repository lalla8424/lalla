"use server";

import {
  getWeeklySchedule,
  submitWeeklyForm,
  getTrialSchedule,
  submitTrialForm,
} from "../lib/notion";
import {
  submitWeeklyProgramToGoogleSheets,
  submitTrialClassToGoogleSheets,
} from "../lib/google-sheets";

type WeeklyScheduleItem = {
  id: string;
  programType: string;
  schedule: string;
};

type TrialScheduleItem = {
  id: string;
  chooseActivity: string;
  schedule: string;
};

/**
 * 노션에서 위클리 스케줄 데이터를 가져오는 서버 액션
 */
export async function fetchWeeklySchedule() {
  try {
    const notionData = await getWeeklySchedule();

    // 노션 데이터를 적절한 형태로 가공
    const schedules = notionData.map((item: any) => {
      const props = item.properties;

      // Program Type은 title 타입
      const getProgramType = () => {
        if (
          props["Program Type"]?.title &&
          props["Program Type"].title.length > 0
        ) {
          return props["Program Type"].title[0].plain_text;
        }
        return "";
      };

      // Schedule은 select 타입 (단일 선택)
      const getSchedule = () => {
        if (props["Schedule"]?.select && props["Schedule"].select.name) {
          return props["Schedule"].select.name;
        }
        return "";
      };

      return {
        id: item.id,
        programType: getProgramType(),
        schedule: getSchedule(),
      } as WeeklyScheduleItem;
    });

    // 중복 제거하고 유니크한 스케줄 옵션만 반환
    const uniqueSchedules = Array.from(
      new Set(
        schedules.map((item) => item.schedule).filter(Boolean),
      ) as Set<string>,
    ).map((schedule: string) => {
      return {
        id: schedule.replace(/\s+/g, "-").toLowerCase(),
        schedule,
      };
    });

    const uniqueProgramTypes = Array.from(
      new Set(
        schedules.map((item) => item.programType).filter(Boolean),
      ) as Set<string>,
    ).map((programType: string) => {
      return {
        id: programType.replace(/\s+/g, "-").toLowerCase(),
        programType,
      };
    });

    return {
      success: true,
      schedules: uniqueSchedules,
      programTypes: uniqueProgramTypes,
    };
  } catch (error) {
    console.error("스케줄 데이터 가져오기 실패:", error);
    return {
      success: false,
      error: "스케줄을 불러오는 데 실패했습니다",
    };
  }
}

/**
 * 위클리 프로그램 폼 데이터를 노션과 Google Sheets에 제출하는 서버 액션
 */
export async function submitWeeklyProgramForm(formData: FormData) {
  try {
    const data = {
      parentName: formData.get("parentName") as string,
      childName: formData.get("childName") as string,
      childAge: formData.get("childAge") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      programType: formData.get("programType") as string,
      schedule: formData.get("schedule") as string,
    };

    // 1. Notion DB에 저장
    await submitWeeklyForm(data);

    // 2. Google Sheets에 저장 (Fire-and-Forget 방식)
    submitWeeklyProgramToGoogleSheets(data).catch(() => {
      // 백업용이므로 실패해도 조용히 무시
    });

    return {
      success: true,
      message: "프로그램 신청이 완료되었습니다!",
    };
  } catch (error) {
    console.error("❌ 폼 제출 실패:", error);
    return {
      success: false,
      error: "프로그램 신청에 실패했습니다. 다시 시도해주세요.",
    };
  }
}

/**
 * 노션에서 트라이얼 스케줄 데이터를 가져오는 서버 액션
 */
export async function fetchTrialSchedule() {
  try {
    const notionData = await getTrialSchedule();

    // 노션 데이터를 적절한 형태로 가공
    const schedules = notionData.map((item: any) => {
      const props = item.properties;

      // Choose Activity는 title 타입
      const getChooseActivity = () => {
        if (
          props["Choose Activity"]?.title &&
          props["Choose Activity"].title.length > 0
        ) {
          return props["Choose Activity"].title[0].plain_text;
        }
        return "";
      };

      // Schedule은 select 타입 (단일 선택)
      const getSchedule = () => {
        if (props["Schedule"]?.select && props["Schedule"].select.name) {
          return props["Schedule"].select.name;
        }
        return "";
      };

      return {
        id: item.id,
        chooseActivity: getChooseActivity(),
        schedule: getSchedule(),
      } as TrialScheduleItem;
    });

    // 중복 제거하고 유니크한 스케줄 옵션만 반환
    const uniqueSchedules = Array.from(
      new Set(
        schedules.map((item) => item.schedule).filter(Boolean),
      ) as Set<string>,
    ).map((schedule: string) => {
      return {
        id: schedule.replace(/\s+/g, "-").toLowerCase(),
        schedule,
      };
    });

    const uniqueActivities = Array.from(
      new Set(
        schedules.map((item) => item.chooseActivity).filter(Boolean),
      ) as Set<string>,
    ).map((chooseActivity: string) => {
      return {
        id: chooseActivity.replace(/\s+/g, "-").toLowerCase(),
        chooseActivity,
      };
    });

    return {
      success: true,
      schedules: uniqueSchedules,
      activities: uniqueActivities,
    };
  } catch (error) {
    console.error("트라이얼 스케줄 데이터 가져오기 실패:", error);
    return {
      success: false,
      error: "트라이얼 스케줄을 불러오는 데 실패했습니다",
    };
  }
}

/**
 * 트라이얼 클래스 폼 데이터를 노션과 Google Sheets에 제출하는 서버 액션
 */
export async function submitTrialClassForm(formData: FormData) {
  try {
    const data = {
      parentName: formData.get("parentName") as string,
      childName: formData.get("childName") as string,
      childAge: formData.get("childAge") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      chooseActivity: formData.get("chooseActivity") as string,
      schedule: formData.get("schedule") as string,
    };

    // 1. Notion DB에 저장
    await submitTrialForm(data);

    // 2. Google Sheets에 저장 (Fire-and-Forget 방식)
    submitTrialClassToGoogleSheets(data).catch(() => {
      // 백업용이므로 실패해도 조용히 무시
    });

    return {
      success: true,
      message: "트라이얼 클래스 예약이 완료되었습니다!",
    };
  } catch (error) {
    console.error("❌ 트라이얼 폼 제출 실패:", error);
    return {
      success: false,
      error: "트라이얼 클래스 예약에 실패했습니다. 다시 시도해주세요.",
    };
  }
}
