import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * 스케줄을 요일별, 시간별로 정렬하는 함수
 * 예: "Thursday 2:00–3:10 PM" 형태의 스케줄을 정렬
 */
export function sortSchedules(schedules: { id: string; schedule: string }[]) {
  console.log('🔄 정렬 전 스케줄:', schedules.map(s => s.schedule));
  
  const dayOrder = [
    'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'
  ];

  const sorted = schedules.sort((a, b) => {
    // 스케줄 문자열에서 요일과 시간 추출
    const parseSchedule = (schedule: string) => {
      const parts = schedule.split(' ');
      const day = parts[0]?.toLowerCase() || '';
      
      // 시간을 24시간 형식으로 변환
      const convertTo24Hour = (schedule: string) => {
        // "Thursday 2:00–3:10 PM" 형태에서 시간 부분 추출
        const timeMatch = schedule.match(/(\d{1,2}):(\d{2})[–-]\d{1,2}:\d{2}\s*(AM|PM)/i);
        if (!timeMatch) return 0;
        
        const hours = parseInt(timeMatch[1]);
        const minutes = parseInt(timeMatch[2]);
        const period = timeMatch[3].toUpperCase();
        
        if (isNaN(hours) || isNaN(minutes)) return 0;
        
        let hour24 = hours;
        if (period === 'PM' && hours !== 12) {
          hour24 += 12;
        } else if (period === 'AM' && hours === 12) {
          hour24 = 0;
        }
        
        return hour24 * 60 + minutes; // 분 단위로 변환
      };
      
      return {
        day,
        timeMinutes: convertTo24Hour(schedule)
      };
    };

    const scheduleA = parseSchedule(a.schedule);
    const scheduleB = parseSchedule(b.schedule);

    console.log(`📅 비교: ${a.schedule} (${scheduleA.day}, ${scheduleA.timeMinutes}) vs ${b.schedule} (${scheduleB.day}, ${scheduleB.timeMinutes})`);

    // 먼저 요일별로 정렬
    const dayIndexA = dayOrder.indexOf(scheduleA.day);
    const dayIndexB = dayOrder.indexOf(scheduleB.day);
    
    console.log(`📊 요일 인덱스: ${scheduleA.day}=${dayIndexA}, ${scheduleB.day}=${dayIndexB}`);
    
    if (dayIndexA !== dayIndexB) {
      return dayIndexA - dayIndexB;
    }

    // 같은 요일이면 시간별로 정렬
    return scheduleA.timeMinutes - scheduleB.timeMinutes;
  });
  
  console.log('✅ 정렬 후 스케줄:', sorted.map(s => s.schedule));
  return sorted;
}
