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
  const dayOrder = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];

  return [...schedules].sort((a, b) => {
    // 요일 추출 (첫 번째 단어)
    const getDayIndex = (schedule: string) => {
      const day = schedule.split(' ')[0]?.toLowerCase() || '';
      const index = dayOrder.indexOf(day);
      return index === -1 ? 999 : index; // 찾을 수 없으면 맨 뒤로
    };

    // 시간 추출 및 24시간 형식으로 변환
    const getTimeMinutes = (schedule: string) => {
      const timeMatch = schedule.match(/(\d{1,2}):(\d{2})[–-].*?(AM|PM)/i);
      if (!timeMatch) return 0;
      
      let hours = parseInt(timeMatch[1]);
      const minutes = parseInt(timeMatch[2]);
      const period = timeMatch[3].toUpperCase();
      
      // 24시간 형식으로 변환
      if (period === 'PM' && hours !== 12) {
        hours += 12;
      } else if (period === 'AM' && hours === 12) {
        hours = 0;
      }
      
      return hours * 60 + minutes;
    };

    const dayA = getDayIndex(a.schedule);
    const dayB = getDayIndex(b.schedule);
    
    // 요일이 다르면 요일순으로 정렬
    if (dayA !== dayB) {
      return dayA - dayB;
    }
    
    // 같은 요일이면 시간순으로 정렬
    return getTimeMinutes(a.schedule) - getTimeMinutes(b.schedule);
  });
}
