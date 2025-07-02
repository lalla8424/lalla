import React, { useState, useEffect } from "react";
import { ImageSlider } from "../ui/image-slider";
import { WeeklyProgramForm } from "../forms/weekly-program-form";
import { TrialClassForm } from "../forms/trial-class-form";
import {
  fetchWeeklySchedule,
  fetchTrialSchedule,
} from "../../actions/form-actions";
import { sortSchedules } from "../../lib/utils";

// Slide data
const slides: { image: string }[] = [
  { image: "/art.jpg" },
  { image: "/art3.jpg" },
  { image: "/art4.JPG" },
  { image: "/art5.jpg" },
  { image: "/art6.JPG" },
  { image: "/art7.JPG" },
  { image: "/art9.jpg" },
  { image: "/art10.JPG" },
  { image: "/art11.JPG" },
  { image: "/art12.JPG" },
  { image: "/art13.jpg" },
  { image: "/art15.JPG" },
  { image: "/art16.JPG" },
  { image: "/art17.JPG" },
];

export function ProgramsSection() {
  // Notion data states
  const [scheduleOptions, setScheduleOptions] = useState<
    { id: string; schedule: string }[]
  >([]);
  const [programTypeOptions, setProgramTypeOptions] = useState<
    { id: string; programType: string }[]
  >([]);
  const [trialScheduleOptions, setTrialScheduleOptions] = useState<
    { id: string; schedule: string }[]
  >([]);
  const [trialActivityOptions, setTrialActivityOptions] = useState<
    { id: string; chooseActivity: string }[]
  >([]);
  const [isLoading, setIsLoading] = useState(true);

  // Load Notion data
  useEffect(() => {
    async function loadScheduleData() {
      try {
        setIsLoading(true);

        // Load weekly program data
        const weeklyResponse = await fetchWeeklySchedule();
        if (weeklyResponse.success) {
          // Split comma-separated schedules into individual items
          const flattenedSchedules: { id: string; schedule: string }[] = [];
          weeklyResponse.schedules?.forEach((item) => {
            if (item.schedule.includes(",")) {
              // Split comma-separated schedules
              const individualSchedules = item.schedule
                .split(",")
                .map((s) => s.trim());
              individualSchedules.forEach((schedule, index) => {
                flattenedSchedules.push({
                  id: `${item.id}-${index}`,
                  schedule,
                });
              });
            } else {
              flattenedSchedules.push(item);
            }
          });

          // Remove duplicates
          const uniqueSchedules = flattenedSchedules.filter(
            (item, index, self) =>
              index === self.findIndex((t) => t.schedule === item.schedule),
          );

          // Add Thursday 2:00–3:10 PM before Thursday 5:00–6:10 PM
          const targetSchedule = "Thursday 5:00–6:10 PM";
          const newSchedule = {
            id: "thursday-2:00–3:10-pm",
            schedule: "Thursday 2:00–3:10 PM",
          };

          const targetIndex = uniqueSchedules.findIndex(
            (item) => item.schedule === targetSchedule,
          );
          if (targetIndex !== -1) {
            // Check if the new schedule doesn't already exist
            const exists = uniqueSchedules.some(
              (item) => item.schedule === newSchedule.schedule,
            );
            if (!exists) {
              uniqueSchedules.splice(targetIndex, 0, newSchedule);
            }
          } else {
            // If target schedule not found, just add to the end
            const exists = uniqueSchedules.some(
              (item) => item.schedule === newSchedule.schedule,
            );
            if (!exists) {
              uniqueSchedules.push(newSchedule);
            }
          }

          // 스케줄을 요일별, 시간별로 정렬
          const sortedSchedules = sortSchedules(uniqueSchedules);

          setScheduleOptions(sortedSchedules);
          setProgramTypeOptions(weeklyResponse.programTypes || []);
        } else {
          console.error(
            "Weekly program data loading error:",
            weeklyResponse.error,
          );
        }

        // Load trial class data
        const trialResponse = await fetchTrialSchedule();
        if (trialResponse.success) {
          // Split comma-separated schedules into individual items
          const flattenedTrialSchedules: { id: string; schedule: string }[] =
            [];
          trialResponse.schedules?.forEach((item) => {
            if (item.schedule.includes(",")) {
              // Split comma-separated schedules
              const individualSchedules = item.schedule
                .split(",")
                .map((s) => s.trim());
              individualSchedules.forEach((schedule, index) => {
                flattenedTrialSchedules.push({
                  id: `${item.id}-${index}`,
                  schedule,
                });
              });
            } else {
              flattenedTrialSchedules.push(item);
            }
          });

          // Remove duplicates
          const uniqueTrialSchedules = flattenedTrialSchedules.filter(
            (item, index, self) =>
              index === self.findIndex((t) => t.schedule === item.schedule),
          );

          // 스케줄을 요일별, 시간별로 정렬
          const sortedTrialSchedules = sortSchedules(uniqueTrialSchedules);

          setTrialScheduleOptions(sortedTrialSchedules);
          setTrialActivityOptions(trialResponse.activities || []);
        } else {
          console.error("Trial class data loading error:", trialResponse.error);
        }
      } catch (error) {
        console.error("Schedule data loading failed:", error);
      } finally {
        setIsLoading(false);
      }
    }

    loadScheduleData();
  }, []);

  return (
    <section id="programs" className="py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-full bg-[#FFD700] px-3 py-1 text-sm font-medium text-white">
              Join our program!
            </div>
            <h2 className="text-3xl font-bold tracking-normal sm:text-5xl">
              Our Art Classes
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              From playful painting to cultural storytelling, our classes are
              designed to grow with your child – building skills, confidence,
              and creativity in a warm, encouraging space.
            </p>
          </div>
        </div>

        {/* Image Slider */}
        <ImageSlider slides={slides} />

        {/* Program Forms */}
        <div className="mx-auto max-w-5xl py-8 grid gap-8 md:grid-cols-2 md:items-stretch">
          {/* Weekly Art Program */}
          <WeeklyProgramForm
            scheduleOptions={scheduleOptions}
            programTypeOptions={programTypeOptions}
            isLoading={isLoading}
          />

          {/* Trial Art Class */}
          <TrialClassForm
            scheduleOptions={trialScheduleOptions}
            activityOptions={trialActivityOptions}
            isLoading={isLoading}
          />
        </div>
      </div>
    </section>
  );
}
