# Lalla Kids Art 노션 API 연동 가이드

## 비개발자를 위한 요약

**이 프로젝트는 무엇인가요?**

- Lalla Kids Art 웹사이트의 프로그램 신청 과정을 노션과 연동하여 자동화했습니다.
- 노션에 저장된 프로그램 정보(시간표, 프로그램 유형)가 웹사이트 폼에 자동으로 표시됩니다.
- 방문자가 웹사이트에서 제출한 신청서가 노션 데이터베이스에 자동으로 저장됩니다.

**현재 상태와 향후 계획:**

- 현재: '위클리 프로그램' 신청 폼 연동이 완료되었습니다.
- 향후: '트라이얼 클래스' 신청 폼도 동일한 방식으로 연동할 예정입니다.

**노션 데이터베이스 활용:**

- 스케줄 데이터베이스: 프로그램 시간표와 유형 정보를 관리합니다. 여기서 변경하면 웹사이트에 자동 반영됩니다.
- 신청 폼 데이터베이스: 웹사이트를 통해 제출된 모든 신청서가 자동으로 저장됩니다.

**이점:**

- 노션에서 프로그램 정보 업데이트 시 웹사이트가 자동으로 최신 정보를 표시합니다.
- 프로그램 신청 정보가 자동으로 노션에 기록되어 관리가 편리합니다.
- 수동 데이터 입력 작업이 줄어들어 시간 절약과 오류 감소 효과가 있습니다.

## 프로젝트 개요

Lalla Kids Art 웹사이트에 노션 데이터베이스 연동 기능을 구현하여 '위클리 스케줄' 데이터베이스의 정보를 가져와 웹 폼에 표시하고, 제출된 폼 데이터를 '위클리 폼' 데이터베이스에 저장하는 기능을 구현했습니다.

## 주요 기능

1. 노션 '위클리 스케줄' 데이터베이스에서 스케줄 및 프로그램 타입 정보 가져오기
2. 가져온 데이터를 웹 폼의 라디오 버튼 옵션으로 표시
3. 제출된 폼 데이터를 노션 '위클리 폼' 데이터베이스에 저장

## 구현 환경

- Next.js 14 이상 (Server Actions 지원 필요)
- TypeScript
- @notionhq/client (노션 API 클라이언트)

## 구현 단계

### 1. 노션 API 설정

1. [노션 개발자 페이지](https://developers.notion.com/)에서 API 키 발급
2. 연동할 노션 데이터베이스 준비:
   - '위클리 스케줄' 데이터베이스: 프로그램 타입(title 필드)과 스케줄(rich_text 필드) 포함
   - '위클리 폼' 데이터베이스: 사용자가 제출한 폼 데이터 저장용

### 2. 필요 패키지 설치

```bash
pnpm add @notionhq/client
```

### 3. 환경 변수 설정

`.env` 파일에 다음 환경 변수 추가:

```
NOTION_API_KEY=your_secret_key

NOTION_DATABASE_WEEKLY_SCHEDULE_ID=your_weekly_schedule_db_id
NOTION_DATABASE_WEEKLY_FORM_ID=your_weekly_form_db_id
NOTION_DATABASE_TRIAL_SCHEDULE_ID=your_trial_schedule_db_id
NOTION_DATABASE_TRIAL_FORM_ID=your_trial_form_db_id
```

### 4. 파일 구조 및 역할

#### `lib/notion.ts`

노션 API 클라이언트 초기화 및 기본 데이터 통신 함수 구현:

```typescript
import { Client } from "@notionhq/client";

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
```

#### `actions/notion-actions.ts`

Server Actions를 이용한 노션 API 호출 및 데이터 가공 로직:

```typescript
"use server";

import { getWeeklySchedule, submitWeeklyForm } from "../lib/notion";

type WeeklyScheduleItem = {
  id: string;
  programType: string;
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

      // Schedule은 rich_text 타입
      const getSchedule = () => {
        if (
          props["Schedule"]?.rich_text &&
          props["Schedule"].rich_text.length > 0
        ) {
          return props["Schedule"].rich_text[0].plain_text;
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
```

#### `app/page.tsx` 수정

폼 컴포넌트에 노션 데이터 연동 기능 추가:

1. Server Actions 임포트 추가:

```typescript
import {
  fetchWeeklySchedule,
  submitWeeklyProgramForm,
} from "../actions/notion-actions";
```

2. 노션 데이터 관련 상태 추가:

```typescript
const [scheduleOptions, setScheduleOptions] = useState<
  { id: string; schedule: string }[]
>([]);
const [programTypeOptions, setProgramTypeOptions] = useState<
  { id: string; programType: string }[]
>([]);
const [isLoading, setIsLoading] = useState(true);
const [submitStatus, setSubmitStatus] = useState<{
  loading: boolean;
  success: boolean | null;
  message: string;
}>({
  loading: false,
  success: null,
  message: "",
});
```

3. 데이터 가져오기 useEffect 추가:

```typescript
useEffect(() => {
  async function loadScheduleData() {
    try {
      setIsLoading(true);
      const response = await fetchWeeklySchedule();
      if (response.success) {
        setScheduleOptions(response.schedules || []);
        setProgramTypeOptions(response.programTypes || []);
      } else {
        console.error("데이터 로딩 오류:", response.error);
      }
    } catch (error) {
      console.error("스케줄 데이터 로딩 실패:", error);
    } finally {
      setIsLoading(false);
    }
  }
  loadScheduleData();
}, []);
```

4. 폼 제출 핸들러 수정:

```typescript
const handleWeeklySubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  // 폼 유효성 검사
  if (
    !weeklyFormData.parentName ||
    /* 다른 필드들 */ !weeklyFormData.agreeTerms
  ) {
    setSubmitStatus({
      loading: false,
      success: false,
      message: "모든 필드를 입력해주세요.",
    });
    return;
  }

  try {
    setSubmitStatus({
      loading: true,
      success: null,
      message: "제출 중...",
    });

    // FormData 객체 생성 및 값 설정
    const formData = new FormData();
    formData.append("parentName", weeklyFormData.parentName);
    // 다른 필드들도 추가

    // Server Action 호출
    const result = await submitWeeklyProgramForm(formData);

    if (result.success) {
      setSubmitStatus({
        loading: false,
        success: true,
        message: "프로그램 신청이 완료되었습니다!",
      });
      // 폼 초기화
    } else {
      setSubmitStatus({
        loading: false,
        success: false,
        message: result.error || "신청 처리 중 오류가 발생했습니다.",
      });
    }
  } catch (error) {
    console.error("폼 제출 실패:", error);
    setSubmitStatus({
      loading: false,
      success: false,
      message: "신청 처리 중 오류가 발생했습니다.",
    });
  }
};
```

5. 동적 폼 옵션 생성:

```typescript
{
  isLoading ? (
    <div className="py-2 text-sm text-gray-500">
      프로그램 정보를 불러오는 중...
    </div>
  ) : programTypeOptions.length > 0 ? (
    programTypeOptions.map((option) => (
      <div key={option.id} className="flex items-center space-x-2">
        <RadioGroupItem
          value={option.programType}
          id={`program-${option.id}`}
        />
        <Label htmlFor={`program-${option.id}`}>{option.programType}</Label>
      </div>
    ))
  ) : (
    <div className="py-2 text-sm text-gray-500">
      사용 가능한 프로그램이 없습니다
    </div>
  );
}
```

### 5. 하이드레이션 이슈 해결

클라이언트 컴포넌트 렌더링 시 하이드레이션 이슈를 해결하기 위해 `app/page.tsx`에 마운트 상태 확인 로직 추가:

```typescript
export default function Home() {
  const [mounted, setMounted] = React.useState(false);

  // 클라이언트 사이드 렌더링을 위한 마운트 체크
  React.useEffect(() => {
    setMounted(true);
  }, []);

  // 서버 사이드 렌더링 중에는 최소한의 레이아웃만 표시
  if (!mounted) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center">
        <div className="text-lg font-medium">로딩 중...</div>
      </div>
    );
  }

  // 기존 컴포넌트 렌더링
  return (
    // ...
  );
}
```

## 주의 사항

1. 노션 데이터베이스 구조

   - '위클리 스케줄' 데이터베이스: Program Type(title 타입), Schedule(rich_text 타입) 필드 필요
   - '위클리 폼' 데이터베이스: Parent/Guardian Name(title 타입), Child's Name(rich_text 타입) 등 필수 필드 필요

2. 환경 변수

   - NOTION_API_KEY, NOTION_DATABASE_WEEKLY_SCHEDULE_ID, NOTION_DATABASE_WEEKLY_FORM_ID 필수 설정
   - .env 파일에 추가하고 .gitignore에 포함시켜 보안 유지

3. 필드 매핑
   - 노션 데이터베이스의 필드명과 코드의 필드명이 정확히 일치해야 함
   - 필드 타입에 맞게 데이터 포맷 처리 필요 (title, rich_text, number 등)

## 문제 해결

1. 하이드레이션 오류

   - 클라이언트 컴포넌트에 마운트 체크 로직 추가
   - suppressHydrationWarning 속성 활용

2. 데이터 로딩 문제

   - isLoading 상태 활용하여 로딩 표시
   - 에러 처리 로직 구현

3. 폼 제출 상태 관리
   - submitStatus 상태로 로딩/성공/실패 상태 관리
   - 유효성 검사 구현

## 재구현 절차 요약

1. 노션 API 키 및 데이터베이스 ID 발급 및 설정
2. @notionhq/client 패키지 설치
3. lib/notion.ts 파일 생성 및 API 통신 함수 구현
4. actions/notion-actions.ts 파일 생성 및 Server Actions 구현
5. app/page.tsx 파일 수정하여 Server Actions 호출 및 데이터 표시 로직 추가
6. 하이드레이션 이슈 해결을 위한 마운트 체크 로직 추가
7. 테스트 및 오류 수정

이 README를 참고하여 노션 API 연동 기능을 재구현할 수 있습니다.
