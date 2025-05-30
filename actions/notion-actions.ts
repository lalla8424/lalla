"use server";

import {
  getWeeklySchedule,
  submitWeeklyForm,
  getTrialSchedule,
  submitTrialForm,
} from "../lib/notion";

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

      // Schedule은 multi_select 타입
      const getSchedule = () => {
        if (
          props["Schedule"]?.multi_select &&
          props["Schedule"].multi_select.length > 0
        ) {
          // multi_select의 첫 번째 옵션을 반환하거나, 모든 옵션을 조합할 수도 있음
          return props["Schedule"].multi_select
            .map((option: any) => option.name)
            .join(", ");
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
 * 위클리 프로그램 폼 데이터를 노션에 제출하는 서버 액션
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

    const result = await submitWeeklyForm(data);
    return {
      success: true,
      message: "프로그램 신청이 완료되었습니다!",
    };
  } catch (error) {
    console.error("폼 제출 실패:", error);
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

      // Schedule은 multi_select 타입
      const getSchedule = () => {
        if (
          props["Schedule"]?.multi_select &&
          props["Schedule"].multi_select.length > 0
        ) {
          // multi_select의 모든 옵션을 조합하여 반환
          return props["Schedule"].multi_select
            .map((option: any) => option.name)
            .join(", ");
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
 * 트라이얼 클래스 폼 데이터를 노션에 제출하는 서버 액션
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

    const result = await submitTrialForm(data);
    return {
      success: true,
      message: "트라이얼 클래스 예약이 완료되었습니다!",
    };
  } catch (error) {
    console.error("트라이얼 폼 제출 실패:", error);
    return {
      success: false,
      error: "트라이얼 클래스 예약에 실패했습니다. 다시 시도해주세요.",
    };
  }
}
