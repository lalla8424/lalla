# Lalla Kids Art 노션 API 연동 가이드

## 비개발자를 위한 요약

**이 프로젝트는 무엇인가요?**

- Lalla Kids Art 웹사이트의 프로그램 신청 과정을 노션과 연동하여 자동화했습니다.
- 노션에 저장된 프로그램 정보(시간표, 프로그램 유형)가 웹사이트 폼에 자동으로 표시됩니다.
- 방문자가 웹사이트에서 제출한 신청서가 노션 데이터베이스에 자동으로 저장됩니다.

**현재 상태:**

- '위클리 프로그램' 신청 폼 연동이 완료되었습니다.
- '트라이얼 클래스' 신청 폼 연동이 완료되었습니다.
- 스케줄 다중 선택 기능이 구현되어 여러 시간대를 선택할 수 있습니다.

**노션 데이터베이스 활용:**

- 스케줄 데이터베이스: 프로그램 시간표와 유형 정보를 관리합니다. 여기서 변경하면 웹사이트에 자동 반영됩니다.
- 신청 폼 데이터베이스: 웹사이트를 통해 제출된 모든 신청서가 자동으로 저장됩니다.
- 위클리 프로그램과 트라이얼 클래스 각각에 대해 별도의 스케줄 및 폼 데이터베이스를 운영합니다.

**이점:**

- 노션에서 프로그램 정보 업데이트 시 웹사이트가 자동으로 최신 정보를 표시합니다.
- 프로그램 신청 정보가 자동으로 노션에 기록되어 관리가 편리합니다.
- 다중 스케줄 선택이 가능하여 사용자 편의성이 향상되었습니다.
- 수동 데이터 입력 작업이 줄어들어 시간 절약과 오류 감소 효과가 있습니다.

## 프로젝트 개요

Lalla Kids Art 웹사이트에 노션 데이터베이스 연동 기능을 구현하여 다음을 지원합니다:

1. **위클리 프로그램**: '위클리 스케줄' 데이터베이스의 정보를 가져와 웹 폼에 표시하고, 제출된 폼 데이터를 '위클리 폼' 데이터베이스에 저장
2. **트라이얼 클래스**: '트라이얼 스케줄' 데이터베이스의 정보를 가져와 웹 폼에 표시하고, 제출된 폼 데이터를 '트라이얼 폼' 데이터베이스에 저장
3. **다중 스케줄 선택**: 체크박스를 통해 여러 시간대를 동시에 선택할 수 있는 기능

## 주요 기능

### 1. 노션 데이터베이스 연동

- 위클리 스케줄 및 트라이얼 스케줄 데이터베이스에서 프로그램 정보 가져오기
- 가져온 데이터를 웹 폼의 체크박스 및 라디오 버튼 옵션으로 표시
- 제출된 폼 데이터를 해당 폼 데이터베이스에 저장

### 2. 스케줄 다중 선택

- 기존 라디오 버튼에서 체크박스로 변경하여 다중 선택 지원
- 선택된 스케줄들을 쉼표로 구분된 문자열로 저장
- 중복 옵션 자동 제거 및 동적 옵션 생성

### 3. 데이터 타입 처리

- 원본 데이터베이스: Schedule 필드를 multi_select 타입으로 관리
- 폼 제출: rich_text 타입으로 쉼표 구분 문자열 저장
- 자동 데이터 변환 로직 구현

## 구현 환경

- Next.js 14 이상 (Server Actions 지원 필요)
- TypeScript
- @notionhq/client (노션 API 클라이언트)

## 구현 단계

### 1. 노션 API 설정

1. [노션 개발자 페이지](https://developers.notion.com/)에서 API 키 발급
2. 연동할 노션 데이터베이스 준비:
   - **위클리 스케줄** 데이터베이스: Program Type(title), Schedule(multi_select)
   - **위클리 폼** 데이터베이스: 사용자가 제출한 위클리 프로그램 폼 데이터 저장용
   - **트라이얼 스케줄** 데이터베이스: Choose Activity(title), Schedule(multi_select)
   - **트라이얼 폼** 데이터베이스: 사용자가 제출한 트라이얼 클래스 폼 데이터 저장용

### 2. 필요 패키지 설치

```bash
pnpm add @notionhq/client
```

### 3. 환경 변수 설정

`.env` 파일에 다음 환경 변수 추가:

```
NOTION_API_KEY=your_secret_key

# 위클리 프로그램 관련
NOTION_DATABASE_WEEKLY_SCHEDULE_ID=your_weekly_schedule_db_id
NOTION_DATABASE_WEEKLY_FORM_ID=your_weekly_form_db_id

# 트라이얼 클래스 관련
NOTION_DATABASE_TRIAL_SCHEDULE_ID=your_trial_schedule_db_id
NOTION_DATABASE_TRIAL_FORM_ID=your_trial_form_db_id
```

### 4. 파일 구조 및 역할

#### `lib/notion.ts`

노션 API 클라이언트 초기화 및 기본 데이터 통신 함수 구현:

```typescript
import { Client } from "@notionhq/client";

// 환경 변수 검증
if (!process.env.NOTION_API_KEY) {
  console.error("Notion API 키가 설정되지 않았습니다!");
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
      },
    });

    return { success: true };
  } catch (error) {
    console.error("노션 API 데이터 제출 실패:", error);
    throw new Error("폼 데이터 제출에 실패했습니다");
  }
};

/**
 * 노션에서 트라이얼 스케줄 데이터를 가져오는 함수
 */
export const getTrialSchedule = async () => {
  try {
    const response = await notion.databases.query({
      database_id: process.env.NOTION_DATABASE_TRIAL_SCHEDULE_ID as string,
      sorts: [
        {
          property: "Schedule",
          direction: "ascending",
        },
      ],
    });

    return response.results;
  } catch (error) {
    console.error("노션 API 트라이얼 스케줄 데이터 가져오기 실패:", error);
    throw new Error("트라이얼 스케줄 데이터를 불러오는 데 실패했습니다");
  }
};

/**
 * 트라이얼 폼 데이터를 노션에 제출하는 함수
 */
export const submitTrialForm = async (formData: any) => {
  try {
    await notion.pages.create({
      parent: {
        database_id: process.env.NOTION_DATABASE_TRIAL_FORM_ID as string,
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
        "Choose Activity": {
          rich_text: [{ text: { content: formData.chooseActivity } }],
        },
        Schedule: {
          rich_text: [{ text: { content: formData.schedule } }],
        },
      },
    });

    return { success: true };
  } catch (error) {
    console.error("노션 API 트라이얼 폼 데이터 제출 실패:", error);
    throw new Error("트라이얼 폼 데이터 제출에 실패했습니다");
  }
};
```

#### `actions/notion-actions.ts`

Server Actions를 이용한 노션 API 호출 및 데이터 가공 로직:

```typescript
"use server";

import {
  getWeeklySchedule,
  submitWeeklyForm,
  getTrialSchedule,
  submitTrialForm,
} from "../lib/notion";

/**
 * 노션에서 위클리 스케줄 데이터를 가져오는 서버 액션
 */
export async function fetchWeeklySchedule() {
  try {
    const notionData = await getWeeklySchedule();

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

      // Schedule은 multi_select 타입에서 문자열로 변환
      const getSchedule = () => {
        if (
          props["Schedule"]?.multi_select &&
          props["Schedule"].multi_select.length > 0
        ) {
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
      };
    });

    // 유니크한 스케줄 옵션 생성 (쉼표로 구분된 문자열을 개별 옵션으로 분리)
    const allSchedules = schedules
      .map((item) => item.schedule)
      .filter(Boolean)
      .flatMap((schedule: string) => schedule.split(",").map((s) => s.trim()));

    const uniqueSchedules = Array.from(new Set(allSchedules)).map(
      (schedule: string) => {
        return {
          id: schedule.replace(/\s+/g, "-").toLowerCase(),
          schedule,
        };
      },
    );

    const uniqueProgramTypes = Array.from(
      new Set(schedules.map((item) => item.programType).filter(Boolean)),
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

    await submitWeeklyForm(data);
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

      // Schedule은 multi_select 타입에서 문자열로 변환
      const getSchedule = () => {
        if (
          props["Schedule"]?.multi_select &&
          props["Schedule"].multi_select.length > 0
        ) {
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
      };
    });

    // 유니크한 스케줄 옵션 생성
    const allSchedules = schedules
      .map((item) => item.schedule)
      .filter(Boolean)
      .flatMap((schedule: string) => schedule.split(",").map((s) => s.trim()));

    const uniqueSchedules = Array.from(new Set(allSchedules)).map(
      (schedule: string) => {
        return {
          id: schedule.replace(/\s+/g, "-").toLowerCase(),
          schedule,
        };
      },
    );

    const uniqueActivities = Array.from(
      new Set(schedules.map((item) => item.chooseActivity).filter(Boolean)),
    ).map((activity: string) => {
      return {
        id: activity.replace(/\s+/g, "-").toLowerCase(),
        activity,
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

    await submitTrialForm(data);
    return {
      success: true,
      message: "트라이얼 클래스 신청이 완료되었습니다!",
    };
  } catch (error) {
    console.error("트라이얼 폼 제출 실패:", error);
    return {
      success: false,
      error: "트라이얼 클래스 신청에 실패했습니다. 다시 시도해주세요.",
    };
  }
}
```

#### `app/page.tsx` 주요 구현 사항

1. **다중 상태 관리**:

```typescript
// 위클리 프로그램 상태
const [weeklyScheduleOptions, setWeeklyScheduleOptions] = useState([]);
const [weeklyProgramTypeOptions, setWeeklyProgramTypeOptions] = useState([]);
const [weeklyFormData, setWeeklyFormData] = useState({
  // ... 폼 필드들
  schedules: [] as string[], // 다중 선택을 위한 배열
});

// 트라이얼 클래스 상태
const [trialScheduleOptions, setTrialScheduleOptions] = useState([]);
const [trialActivityOptions, setTrialActivityOptions] = useState([]);
const [trialFormData, setTrialFormData] = useState({
  // ... 폼 필드들
  schedules: [] as string[], // 다중 선택을 위한 배열
});
```

2. **체크박스 다중 선택 처리**:

```typescript
// 스케줄 체크박스 변경 핸들러
const handleWeeklyScheduleChange = (schedule: string, checked: boolean) => {
  setWeeklyFormData((prev) => ({
    ...prev,
    schedules: checked
      ? [...prev.schedules, schedule]
      : prev.schedules.filter((s) => s !== schedule),
  }));
};
```

3. **폼 제출 시 배열을 문자열로 변환**:

```typescript
const handleWeeklySubmit = async (e: React.FormEvent) => {
  // FormData 생성 시 배열을 쉼표로 구분된 문자열로 변환
  formData.append("schedule", weeklyFormData.schedules.join(", "));
};
```

### 5. 스케줄 다중 선택 UI 구현

위클리 프로그램과 트라이얼 클래스 모두에서 체크박스를 통한 다중 선택 지원:

```typescript
{
  /* 스케줄 선택 - 체크박스 */
}
<div className="space-y-2">
  <Label className="text-sm font-medium">Choose Schedule</Label>
  <div className="grid grid-cols-1 gap-2">
    {isWeeklyLoading ? (
      <div className="py-2 text-sm text-gray-500">
        스케줄 정보를 불러오는 중...
      </div>
    ) : weeklyScheduleOptions.length > 0 ? (
      weeklyScheduleOptions.map((option) => (
        <div key={option.id} className="flex items-center space-x-2">
          <Checkbox
            id={`weekly-schedule-${option.id}`}
            checked={weeklyFormData.schedules.includes(option.schedule)}
            onCheckedChange={(checked) =>
              handleWeeklyScheduleChange(option.schedule, checked as boolean)
            }
          />
          <Label
            htmlFor={`weekly-schedule-${option.id}`}
            className="text-sm font-normal cursor-pointer"
          >
            {option.schedule}
          </Label>
        </div>
      ))
    ) : (
      <div className="py-2 text-sm text-gray-500">
        사용 가능한 스케줄이 없습니다
      </div>
    )}
  </div>
</div>;
```

## 주요 개선사항

### 1. 다중 스케줄 선택

- **기존**: 라디오 버튼으로 단일 스케줄만 선택 가능
- **개선**: 체크박스로 여러 스케줄 동시 선택 가능
- **데이터 처리**: 선택된 스케줄들을 배열로 관리하고 제출 시 쉼표로 구분된 문자열로 변환

### 2. 데이터 타입 처리 최적화

- **문제**: 노션 Schedule 필드가 multi_select 타입이나 폼 제출 시 rich_text 필요
- **해결**:
  - 데이터 읽기: multi_select 배열을 문자열로 변환
  - 폼 표시: 문자열을 개별 체크박스 옵션으로 분리
  - 폼 제출: 선택된 배열을 다시 문자열로 변환하여 rich_text로 저장

### 3. 트라이얼 클래스 완전 연동

- 트라이얼 스케줄 데이터베이스에서 활동 및 스케줄 정보 자동 로딩
- 트라이얼 폼 제출 시 노션 데이터베이스에 자동 저장
- 위클리 프로그램과 동일한 사용자 경험 제공

## 주의 사항

### 1. 노션 데이터베이스 구조

**위클리 프로그램:**

- 위클리 스케줄 DB: Program Type(title), Schedule(multi_select)
- 위클리 폼 DB: Parent/Guardian Name(title), Child's Name(rich_text), Child's Age(number), Email(email), Phone Number(phone_number), Program Type(rich_text), Schedule(rich_text)

**트라이얼 클래스:**

- 트라이얼 스케줄 DB: Choose Activity(title), Schedule(multi_select)
- 트라이얼 폼 DB: Parent/Guardian Name(title), Child's Name(rich_text), Child's Age(number), Email(email), Phone Number(phone_number), Choose Activity(rich_text), Schedule(rich_text)

### 2. 환경 변수

- 모든 4개의 데이터베이스 ID와 NOTION_API_KEY 필수 설정
- .env 파일에 추가하고 .gitignore에 포함시켜 보안 유지

### 3. 필드 매핑

- 노션 데이터베이스의 필드명과 코드의 필드명이 정확히 일치해야 함
- 필드 타입에 맞게 데이터 포맷 처리 필요

## 문제 해결

### 1. 하이드레이션 오류

- 클라이언트 컴포넌트에 마운트 체크 로직 추가
- suppressHydrationWarning 속성 활용

### 2. 데이터 로딩 문제

- isLoading 상태 활용하여 로딩 표시
- 에러 처리 로직 구현

### 3. Schedule 필드 타입 불일치

- **문제**: multi_select 타입 데이터를 rich_text로 저장해야 하는 상황
- **해결**: 데이터 변환 로직 구현하여 타입 간 호환성 확보

### 4. 다중 선택 상태 관리

- 배열 상태로 선택값 관리
- 폼 제출 시 배열을 문자열로 변환하는 로직 구현

## 재구현 절차 요약

1. 노션 API 키 및 4개 데이터베이스 ID 발급 및 설정
2. @notionhq/client 패키지 설치
3. lib/notion.ts 파일 생성 및 위클리/트라이얼 API 통신 함수 구현
4. actions/notion-actions.ts 파일 생성 및 Server Actions 구현
5. app/page.tsx 파일 수정하여 두 폼 모두 노션 연동 및 다중 선택 기능 추가
6. 하이드레이션 이슈 해결을 위한 마운트 체크 로직 추가
7. 데이터 타입 변환 로직 구현 및 테스트
8. 다중 선택 UI 및 상태 관리 로직 구현

이 README를 참고하여 완전한 노션 API 연동 기능을 재구현할 수 있습니다.
