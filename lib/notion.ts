import { Client } from "@notionhq/client";

// 환경 변수 검증
if (!process.env.NOTION_API_KEY) {
  console.error("Notion API 키가 설정되지 않았습니다!");
}

if (!process.env.NOTION_DATABASE_WEEKLY_SCHEDULE_ID) {
  console.error("Notion 위클리 스케줄 데이터베이스 ID가 설정되지 않았습니다!");
}

if (!process.env.NOTION_DATABASE_WEEKLY_FORM_ID) {
  console.error("Notion 위클리 폼 데이터베이스 ID가 설정되지 않았습니다!");
}

// Notion API 클라이언트 초기화
const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

/**
 * 노션에서 위클리 스케줄 데이터를 가져오는 함수
 */
export const getWeeklySchedule = async () => {
  try {
    const response = await notion.databases.query({
      database_id: process.env.NOTION_DATABASE_WEEKLY_SCHEDULE_ID as string,
      sorts: [
        {
          property: "Schedule",
          direction: "ascending",
        },
      ],
    });

    return response.results;
  } catch (error) {
    console.error("노션 API 데이터 가져오기 실패:", error);
    throw new Error("스케줄 데이터를 불러오는 데 실패했습니다");
  }
};

/**
 * 위클리 폼 데이터를 노션에 제출하는 함수
 */
export const submitWeeklyForm = async (formData: any) => {
  try {
    // 노션에 데이터 제출
    await notion.pages.create({
      parent: {
        database_id: process.env.NOTION_DATABASE_WEEKLY_FORM_ID as string,
      },
      properties: {
        "Parent/Guardian Name": {
          title: [{ text: { content: formData.parentName } }],
        },
        "Child's Name": {
          rich_text: [{ text: { content: formData.childName } }],
        },
        "Child's Age": {
          number: parseInt(formData.childAge),
        },
        Email: {
          email: formData.email,
        },
        "Phone Number": {
          phone_number: formData.phone,
        },
        "Program Type": {
          rich_text: [{ text: { content: formData.programType } }],
        },
        Schedule: {
          rich_text: [{ text: { content: formData.schedule } }],
        },
        "Submitted At": {
          date: {
            start: new Date().toISOString(),
          },
        },
      },
    });

    return { success: true };
  } catch (error) {
    console.error("노션 API 데이터 제출 실패:", error);
    throw new Error("폼 데이터 제출에 실패했습니다");
  }
};
