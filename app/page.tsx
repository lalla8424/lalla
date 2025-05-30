"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import {
  Instagram,
  BookOpen,
  Menu,
  X,
  MapPin,
  Clock,
  Navigation,
  ChevronLeft,
  ChevronRight,
  Palette,
  CheckCircle2,
} from "lucide-react";
import { Button } from "../components/ui/button";
import { Checkbox } from "../components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "../components/ui/radio-group";
import { Label } from "../components/ui/label";
import { Input } from "../components/ui/input";
import {
  fetchWeeklySchedule,
  submitWeeklyProgramForm,
  fetchTrialSchedule,
  submitTrialClassForm,
} from "../actions/notion-actions";

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

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-white">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6 lg:px-10">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold text-[#FFD700]">
              Lalla Kids Art
            </span>
          </Link>
          <MobileNav />
          <nav className="hidden md:flex gap-6 items-start pt-1 ml-auto mr-6">
            <Link
              href="#about"
              className="text-sm font-medium hover:text-[#FFD700] transition-colors"
            >
              About Us
            </Link>
            <Link
              href="#teacher"
              className="text-sm font-medium hover:text-[#FFD700] transition-colors"
            >
              Meet Our Creative Team
            </Link>
            <Link
              href="#programs"
              className="text-sm font-medium hover:text-[#FFD700] transition-colors"
            >
              Join our program!
            </Link>
            <Link
              href="#visit"
              className="text-sm font-medium hover:text-[#FFD700] transition-colors"
            >
              Visit Us
            </Link>
          </nav>
          <div className="hidden md:flex items-center gap-4 ml-6">
            <Link
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="h-5 w-5 text-gray-600 hover:text-[#FFD700]" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link
              href="https://blog.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BookOpen className="h-5 w-5 text-gray-600 hover:text-[#FFD700]" />
              <span className="sr-only">Blog</span>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <TeacherSection />
        <ProgramsSection />
        <VisitSection />
      </main>
      <Footer />
    </div>
  );
}

function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setIsOpen(true)}
        className="text-black"
      >
        <Menu className="h-6 w-6" />
        <span className="sr-only">Open menu</span>
      </Button>
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-white">
          <div className="container flex h-16 items-center justify-between px-4">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-xl font-bold text-[#FFD700]">
                Lalla Kids Art
              </span>
            </Link>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="text-black"
            >
              <X className="h-6 w-6" />
              <span className="sr-only">Close menu</span>
            </Button>
          </div>
          <nav className="container grid gap-6 px-4 py-6">
            <Link
              href="#about"
              className="text-lg font-medium hover:text-[#FFD700] transition-colors"
              onClick={() => setIsOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="#teacher"
              className="text-lg font-medium hover:text-[#FFD700] transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Meet Our Creative Team
            </Link>
            <Link
              href="#programs"
              className="text-lg font-medium hover:text-[#FFD700] transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Join our program!
            </Link>
            <Link
              href="#visit"
              className="text-lg font-medium hover:text-[#FFD700] transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Visit Us
            </Link>
            <div className="flex items-center gap-4 pt-4">
              <Link
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="h-5 w-5 text-gray-600 hover:text-[#FFD700]" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="https://blog.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BookOpen className="h-5 w-5 text-gray-600 hover:text-[#FFD700]" />
                <span className="sr-only">Blog</span>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </div>
  );
}

function HeroSection() {
  return (
    <section
      className="relative bg-cover bg-center py-12 md:py-24 lg:py-32"
      style={{
        backgroundImage: "url('/placeholder.svg?height=800&width=1600')",
        backgroundColor: "rgba(255, 215, 0, 0.85)",
        backgroundBlendMode: "overlay",
      }}
    >
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl/none text-white">
              Make Your New Story in Seoul — Through Art, For Your Kids.
            </h1>
            <p className="max-w-[600px] text-white md:text-xl">
              Creative art programs for young explorers living in Korea.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#programs"
                className="inline-flex h-10 items-center justify-center rounded-md bg-white px-8 text-sm font-medium text-[#FFD700] shadow transition-colors hover:bg-gray-100"
              >
                Explore Programs
              </Link>
              <Link
                href="#visit"
                className="inline-flex h-10 items-center justify-center rounded-md border border-white bg-transparent px-8 text-sm font-medium text-white shadow-sm transition-colors hover:bg-white/10"
              >
                Visit Us
              </Link>
            </div>
          </div>
          <div className="rounded-lg bg-white p-8 shadow-lg">
            <div className="aspect-square w-full rounded-lg overflow-hidden">
              <img
                src="/placeholder.svg?height=400&width=400"
                alt="Lalla Kids Art - Children creating art"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 80"
          fill="none"
          preserveAspectRatio="none"
          className="w-full h-auto"
        >
          <path
            d="M0,0 C240,80 480,80 720,40 C960,0 1200,0 1440,80 L1440,80 L0,80 Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-full bg-[#FFD700] px-3 py-1 text-sm font-medium text-white">
              About Us
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Our Philosophy
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              At Lalla Kids Art, we believe in nurturing creativity and
              self-expression in children through art. Our programs are designed
              to provide a safe and inspiring environment where kids can explore
              their artistic potential while developing essential life skills.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
          <div className="rounded-full bg-[#FFD700]/10 p-8 text-center flex flex-col items-center justify-center aspect-square">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#FFD700]">
              <span className="text-2xl font-bold text-white">1</span>
            </div>
            <h3 className="text-xl font-bold">Creative Freedom</h3>
            <p className="text-sm text-gray-500 mt-2">
              We encourage children to express themselves freely without
              constraints.
            </p>
          </div>
          <div className="rounded-full bg-[#FFD700]/10 p-8 text-center flex flex-col items-center justify-center aspect-square">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#FFD700]">
              <span className="text-2xl font-bold text-white">2</span>
            </div>
            <h3 className="text-xl font-bold">Global Perspective</h3>
            <p className="text-sm text-gray-500 mt-2">
              Our multicultural environment helps children develop a global
              mindset.
            </p>
          </div>
          <div className="rounded-full bg-[#FFD700]/10 p-8 text-center flex flex-col items-center justify-center aspect-square">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#FFD700]">
              <span className="text-2xl font-bold text-white">3</span>
            </div>
            <h3 className="text-xl font-bold">Skill Development</h3>
            <p className="text-sm text-gray-500 mt-2">
              Beyond art, we focus on building confidence, patience, and
              problem-solving skills.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function TeacherSection() {
  return (
    <section
      id="teacher"
      className="bg-[#FFD700]/5 py-12 md:py-24 lg:py-32 relative"
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <div className="inline-block rounded-full bg-[#FFD700] px-3 py-1 text-sm font-medium text-white">
              Meet Our Creative Team
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Our Art Specialists
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our team of experienced educators is passionate about nurturing
              creativity in children.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex items-center gap-6 w-full md:w-1/2">
                <div className="w-28 h-28 rounded-full bg-white p-2 shadow-lg flex-shrink-0">
                  <div className="w-full h-full rounded-full bg-[#FFD700]/20 flex items-center justify-center overflow-hidden">
                    <div className="text-center">
                      <div className="text-sm font-bold text-[#FFD700]">
                        Teacher
                      </div>
                      <div className="text-xs">Photo</div>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="font-medium">Ms. Sarah</p>
                  <p className="text-sm text-gray-500">Art Director</p>
                  <p className="mt-2 text-sm">
                    With over 10 years of experience in early childhood art
                    education, I'm passionate about helping children discover
                    their creative potential.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-6 w-full md:w-1/2">
                <div className="w-28 h-28 rounded-full bg-white p-2 shadow-lg flex-shrink-0">
                  <div className="w-full h-full rounded-full bg-[#FFD700]/20 flex items-center justify-center overflow-hidden">
                    <div className="text-center">
                      <div className="text-sm font-bold text-[#FFD700]">
                        Teacher
                      </div>
                      <div className="text-xs">Photo</div>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="font-medium">Mr. David</p>
                  <p className="text-sm text-gray-500">Sculpture Specialist</p>
                  <p className="mt-2 text-sm">
                    Specializing in 3D art forms, I help children explore
                    spatial concepts and develop fine motor skills through
                    hands-on sculpture projects.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex items-center gap-6 w-full md:w-1/2">
                <div className="w-28 h-28 rounded-full bg-white p-2 shadow-lg flex-shrink-0">
                  <div className="w-full h-full rounded-full bg-[#FFD700]/20 flex items-center justify-center overflow-hidden">
                    <div className="text-center">
                      <div className="text-sm font-bold text-[#FFD700]">
                        Teacher
                      </div>
                      <div className="text-xs">Photo</div>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="font-medium">Ms. Mina</p>
                  <p className="text-sm text-gray-500">Painting Instructor</p>
                  <p className="mt-2 text-sm">
                    I love introducing children to the world of colors and
                    textures. My classes focus on creative expression through
                    various painting techniques.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-6 w-full md:w-1/2">
                <div className="w-28 h-28 rounded-full bg-white p-2 shadow-lg flex-shrink-0">
                  <div className="w-full h-full rounded-full bg-[#FFD700]/20 flex items-center justify-center overflow-hidden">
                    <div className="text-center">
                      <div className="text-sm font-bold text-[#FFD700]">
                        Teacher
                      </div>
                      <div className="text-xs">Photo</div>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="font-medium">Mr. Jun</p>
                  <p className="text-sm text-gray-500">Craft Specialist</p>
                  <p className="mt-2 text-sm">
                    With a background in traditional Korean crafts, I enjoy
                    teaching children how to create beautiful objects using both
                    traditional and modern techniques.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 80"
          fill="none"
          preserveAspectRatio="none"
          className="w-full h-auto"
        >
          <path
            d="M0,80 C240,0 480,0 720,40 C960,80 1200,80 1440,0 L1440,80 L0,80 Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}

function ProgramsSection() {
  // Image slider state and data
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      image: "/placeholder.svg?height=400&width=800",
      caption: "Children exploring colors in our Little Explorers class",
    },
    {
      image: "/placeholder.svg?height=400&width=800",
      caption: "Creative Kids working on a collaborative art project",
    },
    {
      image: "/placeholder.svg?height=400&width=800",
      caption: "Young Artists developing their painting techniques",
    },
    {
      image: "/placeholder.svg?height=400&width=800",
      caption: "Art exhibition showcasing our students' work",
    },
    {
      image: "/placeholder.svg?height=400&width=800",
      caption: "Special workshop with visiting artist",
    },
  ];

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  }, [slides.length]);

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  // Form state
  const [weeklyFormData, setWeeklyFormData] = useState({
    parentName: "",
    childName: "",
    childAge: "",
    email: "",
    phone: "",
    programType: "",
    schedule: [] as string[],
    agreeTerms: false,
  });

  const [trialFormData, setTrialFormData] = useState({
    parentName: "",
    childName: "",
    childAge: "",
    email: "",
    phone: "",
    activity: "",
    schedule: [] as string[],
    agreeTerms: false,
  });

  // 노션 데이터 관련 상태 추가
  const [scheduleOptions, setScheduleOptions] = useState<
    { id: string; schedule: string }[]
  >([]);
  const [programTypeOptions, setProgramTypeOptions] = useState<
    { id: string; programType: string }[]
  >([]);

  // 트라이얼 클래스용 상태 추가
  const [trialScheduleOptions, setTrialScheduleOptions] = useState<
    { id: string; schedule: string }[]
  >([]);
  const [trialActivityOptions, setTrialActivityOptions] = useState<
    { id: string; chooseActivity: string }[]
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

  // 트라이얼 클래스용 제출 상태
  const [trialSubmitStatus, setTrialSubmitStatus] = useState<{
    loading: boolean;
    success: boolean | null;
    message: string;
  }>({
    loading: false,
    success: null,
    message: "",
  });

  // 노션에서 스케줄 데이터 가져오기
  useEffect(() => {
    async function loadScheduleData() {
      try {
        setIsLoading(true);

        // 위클리 프로그램 데이터 로드
        const weeklyResponse = await fetchWeeklySchedule();
        if (weeklyResponse.success) {
          // 콤마로 구분된 스케줄을 개별 항목으로 분리
          const flattenedSchedules: { id: string; schedule: string }[] = [];
          weeklyResponse.schedules?.forEach((item) => {
            if (item.schedule.includes(",")) {
              // 콤마로 구분된 경우 분리
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

          // 중복 제거
          const uniqueSchedules = flattenedSchedules.filter(
            (item, index, self) =>
              index === self.findIndex((t) => t.schedule === item.schedule),
          );

          setScheduleOptions(uniqueSchedules);
          setProgramTypeOptions(weeklyResponse.programTypes || []);
        } else {
          console.error(
            "위클리 프로그램 데이터 로딩 오류:",
            weeklyResponse.error,
          );
        }

        // 트라이얼 클래스 데이터 로드
        const trialResponse = await fetchTrialSchedule();
        if (trialResponse.success) {
          // 콤마로 구분된 스케줄을 개별 항목으로 분리
          const flattenedTrialSchedules: { id: string; schedule: string }[] =
            [];
          trialResponse.schedules?.forEach((item) => {
            if (item.schedule.includes(",")) {
              // 콤마로 구분된 경우 분리
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

          // 중복 제거
          const uniqueTrialSchedules = flattenedTrialSchedules.filter(
            (item, index, self) =>
              index === self.findIndex((t) => t.schedule === item.schedule),
          );

          setTrialScheduleOptions(uniqueTrialSchedules);
          setTrialActivityOptions(trialResponse.activities || []);
        } else {
          console.error(
            "트라이얼 클래스 데이터 로딩 오류:",
            trialResponse.error,
          );
        }
      } catch (error) {
        console.error("스케줄 데이터 로딩 실패:", error);
      } finally {
        setIsLoading(false);
      }
    }

    loadScheduleData();
  }, []);

  // 폼 제출 핸들러 수정
  const handleWeeklySubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // 폼 유효성 검사
    if (
      !weeklyFormData.parentName ||
      !weeklyFormData.childName ||
      !weeklyFormData.childAge ||
      !weeklyFormData.email ||
      !weeklyFormData.phone ||
      !weeklyFormData.programType ||
      weeklyFormData.schedule.length === 0 ||
      !weeklyFormData.agreeTerms
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

      // 직접 Server Action 호출
      const formData = new FormData();
      formData.append("parentName", weeklyFormData.parentName);
      formData.append("childName", weeklyFormData.childName);
      formData.append("childAge", weeklyFormData.childAge);
      formData.append("email", weeklyFormData.email);
      formData.append("phone", weeklyFormData.phone);
      formData.append("programType", weeklyFormData.programType);
      formData.append("schedule", weeklyFormData.schedule.join(", "));

      const result = await submitWeeklyProgramForm(formData);

      if (result.success) {
        setSubmitStatus({
          loading: false,
          success: true,
          message: "프로그램 신청이 완료되었습니다!",
        });

        // 폼 초기화
        setWeeklyFormData({
          parentName: "",
          childName: "",
          childAge: "",
          email: "",
          phone: "",
          programType: "",
          schedule: [],
          agreeTerms: false,
        });
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

  const handleTrialSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // 폼 유효성 검사
    if (
      !trialFormData.parentName ||
      !trialFormData.childName ||
      !trialFormData.childAge ||
      !trialFormData.email ||
      !trialFormData.phone ||
      !trialFormData.activity ||
      trialFormData.schedule.length === 0 ||
      !trialFormData.agreeTerms
    ) {
      setTrialSubmitStatus({
        loading: false,
        success: false,
        message: "모든 필드를 입력해주세요.",
      });
      return;
    }

    try {
      setTrialSubmitStatus({
        loading: true,
        success: null,
        message: "제출 중...",
      });

      // 직접 Server Action 호출
      const formData = new FormData();
      formData.append("parentName", trialFormData.parentName);
      formData.append("childName", trialFormData.childName);
      formData.append("childAge", trialFormData.childAge);
      formData.append("email", trialFormData.email);
      formData.append("phone", trialFormData.phone);
      formData.append("chooseActivity", trialFormData.activity);
      formData.append("schedule", trialFormData.schedule.join(", "));

      const result = await submitTrialClassForm(formData);

      if (result.success) {
        setTrialSubmitStatus({
          loading: false,
          success: true,
          message: "트라이얼 클래스 예약이 완료되었습니다!",
        });

        // 폼 초기화
        setTrialFormData({
          parentName: "",
          childName: "",
          childAge: "",
          email: "",
          phone: "",
          activity: "",
          schedule: [],
          agreeTerms: false,
        });
      } else {
        setTrialSubmitStatus({
          loading: false,
          success: false,
          message: result.error || "예약 처리 중 오류가 발생했습니다.",
        });
      }
    } catch (error) {
      console.error("트라이얼 폼 제출 실패:", error);
      setTrialSubmitStatus({
        loading: false,
        success: false,
        message: "예약 처리 중 오류가 발생했습니다.",
      });
    }
  };

  return (
    <section id="programs" className="py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-full bg-[#FFD700] px-3 py-1 text-sm font-medium text-white">
              Join our program!
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Our Art Classes
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Discover our range of age-appropriate art programs designed to
              inspire creativity and joy.
            </p>
          </div>
        </div>

        {/* Image Slider */}
        <div className="relative mx-auto max-w-5xl mt-12 mb-8 overflow-hidden rounded-xl shadow-lg">
          <div className="relative h-[300px] md:h-[400px] w-full">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  index === currentSlide
                    ? "opacity-100"
                    : "opacity-0 pointer-events-none"
                }`}
              >
                <img
                  src={slide.image || "/placeholder.svg"}
                  alt={slide.caption}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-white">
                  <p className="text-sm md:text-base">{slide.caption}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 rounded-full p-2 backdrop-blur-sm transition-colors"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-6 w-6 text-white" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 rounded-full p-2 backdrop-blur-sm transition-colors"
            aria-label="Next slide"
          >
            <ChevronRight className="h-6 w-6 text-white" />
          </button>

          {/* Slide Indicators */}
          <div className="absolute bottom-12 left-0 right-0 flex justify-center gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 w-2 rounded-full transition-colors ${
                  index === currentSlide ? "bg-white" : "bg-white/50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Program Forms */}
        <div className="mx-auto max-w-5xl py-8 grid gap-8 md:grid-cols-2">
          {/* Weekly Art Program */}
          <div className="border rounded-lg overflow-hidden shadow-md">
            <div className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <Palette className="h-6 w-6 text-[#FFD700]" />
                <h3 className="text-xl font-bold">Weekly Art Program</h3>
              </div>
              <div className="border-l-4 border-[#FFD700]/30 pl-4 mb-6">
                <p className="text-sm text-gray-600 mb-2">
                  Our Weekly Art Program is designed to spark your child's
                  creativity through hands-on art experiences.
                </p>
                <p className="text-sm text-gray-600 mb-2">
                  Children explore drawing, painting, sculpture, and mixed media
                  guided by professional educators.
                </p>
                <p className="text-sm text-gray-600 mb-2">
                  Each week introduces a new theme, technique, or artist,
                  keeping kids inspired and engaged.
                </p>
                <p className="text-sm text-gray-600 mb-2">
                  Classes are small-group based for personalized attention and
                  joyful interaction.
                </p>
                <p className="text-sm text-gray-600 mb-2">
                  You can choose from a 4-week or 8-week course, depending on
                  your schedule.
                </p>
                <p className="text-sm text-gray-600">
                  Let your child's imagination shine in a fun and safe
                  environment!
                </p>
              </div>

              <div className="mt-6">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-[#FFD700] font-bold">✏️</span>
                  <h4 className="font-semibold">Sign Up for Weekly Program</h4>
                </div>
                <form onSubmit={handleWeeklySubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="weekly-parent-name">
                      Parent/Guardian Name
                    </Label>
                    <Input
                      id="weekly-parent-name"
                      placeholder="Enter your full name"
                      value={weeklyFormData.parentName}
                      onChange={(e) =>
                        setWeeklyFormData({
                          ...weeklyFormData,
                          parentName: e.target.value,
                        })
                      }
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="weekly-child-name">Child's Name</Label>
                    <Input
                      id="weekly-child-name"
                      placeholder="Enter your child's name"
                      value={weeklyFormData.childName}
                      onChange={(e) =>
                        setWeeklyFormData({
                          ...weeklyFormData,
                          childName: e.target.value,
                        })
                      }
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="weekly-child-age">Child's Age</Label>
                    <Input
                      id="weekly-child-age"
                      placeholder="Enter your child's age (e.g., 5 years old)"
                      value={weeklyFormData.childAge}
                      onChange={(e) =>
                        setWeeklyFormData({
                          ...weeklyFormData,
                          childAge: e.target.value,
                        })
                      }
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="weekly-email">Email</Label>
                    <Input
                      id="weekly-email"
                      type="email"
                      placeholder="Enter your email"
                      value={weeklyFormData.email}
                      onChange={(e) =>
                        setWeeklyFormData({
                          ...weeklyFormData,
                          email: e.target.value,
                        })
                      }
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="weekly-phone">Phone Number</Label>
                    <Input
                      id="weekly-phone"
                      placeholder="Enter your phone number"
                      value={weeklyFormData.phone}
                      onChange={(e) =>
                        setWeeklyFormData({
                          ...weeklyFormData,
                          phone: e.target.value,
                        })
                      }
                      required
                    />
                  </div>
                  <div>
                    <Label>Program Type</Label>
                    <RadioGroup
                      value={weeklyFormData.programType}
                      onValueChange={(value) =>
                        setWeeklyFormData({
                          ...weeklyFormData,
                          programType: value,
                        })
                      }
                      className="mt-2"
                    >
                      {isLoading ? (
                        <div className="py-2 text-sm text-gray-500">
                          프로그램 정보를 불러오는 중...
                        </div>
                      ) : programTypeOptions.length > 0 ? (
                        programTypeOptions.map((option) => (
                          <div
                            key={option.id}
                            className="flex items-center space-x-2"
                          >
                            <RadioGroupItem
                              value={option.programType}
                              id={`program-${option.id}`}
                            />
                            <Label htmlFor={`program-${option.id}`}>
                              {option.programType}
                            </Label>
                          </div>
                        ))
                      ) : (
                        <div className="py-2 text-sm text-gray-500">
                          사용 가능한 프로그램이 없습니다
                        </div>
                      )}
                    </RadioGroup>
                  </div>
                  <div>
                    <Label>Schedule (다중 선택 가능)</Label>
                    <div className="mt-2 space-y-2">
                      {isLoading ? (
                        <div className="py-2 text-sm text-gray-500">
                          스케줄 정보를 불러오는 중...
                        </div>
                      ) : scheduleOptions.length > 0 ? (
                        scheduleOptions.map((option) => (
                          <div
                            key={option.id}
                            className="flex items-center space-x-2"
                          >
                            <Checkbox
                              id={`weekly-${option.id}`}
                              checked={weeklyFormData.schedule.includes(
                                option.schedule,
                              )}
                              onCheckedChange={(checked) => {
                                if (checked) {
                                  setWeeklyFormData({
                                    ...weeklyFormData,
                                    schedule: [
                                      ...weeklyFormData.schedule,
                                      option.schedule,
                                    ],
                                  });
                                } else {
                                  setWeeklyFormData({
                                    ...weeklyFormData,
                                    schedule: weeklyFormData.schedule.filter(
                                      (s) => s !== option.schedule,
                                    ),
                                  });
                                }
                              }}
                            />
                            <Label htmlFor={`weekly-${option.id}`}>
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
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="weekly-terms"
                      checked={weeklyFormData.agreeTerms}
                      onCheckedChange={(checked) =>
                        setWeeklyFormData({
                          ...weeklyFormData,
                          agreeTerms: checked as boolean,
                        })
                      }
                      required
                    />
                    <label
                      htmlFor="weekly-terms"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      I agree to the terms and conditions
                    </label>
                  </div>
                  {submitStatus.message && (
                    <div
                      className={`p-2 rounded text-sm ${
                        submitStatus.success === true
                          ? "bg-green-100 text-green-800"
                          : submitStatus.success === false
                          ? "bg-red-100 text-red-800"
                          : "bg-blue-100 text-blue-800"
                      }`}
                    >
                      {submitStatus.message}
                    </div>
                  )}
                  <Button
                    type="submit"
                    className="w-full bg-[#FFD700] hover:bg-[#FFD700]/90 text-white"
                    disabled={submitStatus.loading}
                  >
                    {submitStatus.loading ? (
                      <span className="flex items-center">
                        <svg
                          className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        제출 중...
                      </span>
                    ) : (
                      <>
                        <span className="mr-2">👉</span> Book Now
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </div>
          </div>

          {/* Trial Art Class */}
          <div className="border rounded-lg overflow-hidden shadow-md">
            <div className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <CheckCircle2 className="h-6 w-6 text-[#FFD700]" />
                <h3 className="text-xl font-bold">Trial Art Class</h3>
              </div>
              <div className="border-l-4 border-[#FFD700]/30 pl-4 mb-6">
                <p className="text-sm text-gray-600 mb-2">
                  Curious about our art classes? Try one before you commit!
                </p>
                <p className="text-sm text-gray-600 mb-2">
                  Our trial class is a one-time session where your child can
                  experience the joy of art-making.
                </p>
                <p className="text-sm text-gray-600 mb-2">
                  Choose from activities like painting, clay art, light art, or
                  eco-craft using recycled materials.
                </p>
                <p className="text-sm text-gray-600 mb-2">
                  This class is perfect for first-timers who want to explore our
                  studio.
                </p>
                <p className="text-sm text-gray-600 mb-2">
                  All materials are provided, and classes are led by friendly,
                  experienced teachers.
                </p>
                <p className="text-sm text-gray-600">
                  We can't wait to welcome your little artist!
                </p>
              </div>

              <div className="mt-6">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-[#FFD700] font-bold">✨</span>
                  <h4 className="font-semibold">Reserve Your Trial Class</h4>
                </div>
                <form onSubmit={handleTrialSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="trial-parent-name">
                      Parent/Guardian Name
                    </Label>
                    <Input
                      id="trial-parent-name"
                      placeholder="Enter your full name"
                      value={trialFormData.parentName}
                      onChange={(e) =>
                        setTrialFormData({
                          ...trialFormData,
                          parentName: e.target.value,
                        })
                      }
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="trial-child-name">Child's Name</Label>
                    <Input
                      id="trial-child-name"
                      placeholder="Enter your child's name"
                      value={trialFormData.childName}
                      onChange={(e) =>
                        setTrialFormData({
                          ...trialFormData,
                          childName: e.target.value,
                        })
                      }
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="trial-child-age">Child's Age</Label>
                    <Input
                      id="trial-child-age"
                      placeholder="Enter your child's age (e.g., 6 years old)"
                      value={trialFormData.childAge}
                      onChange={(e) =>
                        setTrialFormData({
                          ...trialFormData,
                          childAge: e.target.value,
                        })
                      }
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="trial-email">Email</Label>
                    <Input
                      id="trial-email"
                      type="email"
                      placeholder="Enter your email"
                      value={trialFormData.email}
                      onChange={(e) =>
                        setTrialFormData({
                          ...trialFormData,
                          email: e.target.value,
                        })
                      }
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="trial-phone">Phone Number</Label>
                    <Input
                      id="trial-phone"
                      placeholder="Enter your phone number"
                      value={trialFormData.phone}
                      onChange={(e) =>
                        setTrialFormData({
                          ...trialFormData,
                          phone: e.target.value,
                        })
                      }
                      required
                    />
                  </div>
                  <div>
                    <Label>Choose Activity</Label>
                    <RadioGroup
                      value={trialFormData.activity}
                      onValueChange={(value) =>
                        setTrialFormData({ ...trialFormData, activity: value })
                      }
                      className="mt-2"
                    >
                      {isLoading ? (
                        <div className="text-sm text-gray-500">
                          Loading activities...
                        </div>
                      ) : trialActivityOptions.length > 0 ? (
                        trialActivityOptions.map((activity) => (
                          <div
                            key={activity.id}
                            className="flex items-center space-x-2"
                          >
                            <RadioGroupItem
                              value={activity.chooseActivity}
                              id={`trial-activity-${activity.id}`}
                            />
                            <Label htmlFor={`trial-activity-${activity.id}`}>
                              {activity.chooseActivity}
                            </Label>
                          </div>
                        ))
                      ) : (
                        <>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem
                              value="drawing"
                              id="trial-drawing"
                            />
                            <Label htmlFor="trial-drawing">Drawing</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem
                              value="clay-art"
                              id="trial-clay-art"
                            />
                            <Label htmlFor="trial-clay-art">Clay Art</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem
                              value="light-art"
                              id="trial-light-art"
                            />
                            <Label htmlFor="trial-light-art">Light Art</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem
                              value="eco-art"
                              id="trial-eco-art"
                            />
                            <Label htmlFor="trial-eco-art">Eco Art</Label>
                          </div>
                        </>
                      )}
                    </RadioGroup>
                  </div>
                  <div>
                    <Label>Schedule (다중 선택 가능)</Label>
                    <div className="mt-2 space-y-2">
                      {isLoading ? (
                        <div className="text-sm text-gray-500">
                          Loading schedules...
                        </div>
                      ) : trialScheduleOptions.length > 0 ? (
                        trialScheduleOptions.map((schedule) => (
                          <div
                            key={schedule.id}
                            className="flex items-center space-x-2"
                          >
                            <Checkbox
                              id={`trial-schedule-${schedule.id}`}
                              checked={trialFormData.schedule.includes(
                                schedule.schedule,
                              )}
                              onCheckedChange={(checked) => {
                                if (checked) {
                                  setTrialFormData({
                                    ...trialFormData,
                                    schedule: [
                                      ...trialFormData.schedule,
                                      schedule.schedule,
                                    ],
                                  });
                                } else {
                                  setTrialFormData({
                                    ...trialFormData,
                                    schedule: trialFormData.schedule.filter(
                                      (s) => s !== schedule.schedule,
                                    ),
                                  });
                                }
                              }}
                            />
                            <Label htmlFor={`trial-schedule-${schedule.id}`}>
                              {schedule.schedule}
                            </Label>
                          </div>
                        ))
                      ) : (
                        <>
                          <div className="flex items-center space-x-2">
                            <Checkbox
                              id="trial-tuesday"
                              checked={trialFormData.schedule.includes(
                                "Tuesday 3:00–4:10 PM",
                              )}
                              onCheckedChange={(checked) => {
                                if (checked) {
                                  setTrialFormData({
                                    ...trialFormData,
                                    schedule: [
                                      ...trialFormData.schedule,
                                      "Tuesday 3:00–4:10 PM",
                                    ],
                                  });
                                } else {
                                  setTrialFormData({
                                    ...trialFormData,
                                    schedule: trialFormData.schedule.filter(
                                      (s) => s !== "Tuesday 3:00–4:10 PM",
                                    ),
                                  });
                                }
                              }}
                            />
                            <Label htmlFor="trial-tuesday">
                              Tuesday 3:00–4:10 PM
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox
                              id="trial-saturday"
                              checked={trialFormData.schedule.includes(
                                "Saturday 1:00–2:10 PM",
                              )}
                              onCheckedChange={(checked) => {
                                if (checked) {
                                  setTrialFormData({
                                    ...trialFormData,
                                    schedule: [
                                      ...trialFormData.schedule,
                                      "Saturday 1:00–2:10 PM",
                                    ],
                                  });
                                } else {
                                  setTrialFormData({
                                    ...trialFormData,
                                    schedule: trialFormData.schedule.filter(
                                      (s) => s !== "Saturday 1:00–2:10 PM",
                                    ),
                                  });
                                }
                              }}
                            />
                            <Label htmlFor="trial-saturday">
                              Saturday 1:00–2:10 PM
                            </Label>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="trial-terms"
                      checked={trialFormData.agreeTerms}
                      onCheckedChange={(checked) =>
                        setTrialFormData({
                          ...trialFormData,
                          agreeTerms: checked as boolean,
                        })
                      }
                      required
                    />
                    <label
                      htmlFor="trial-terms"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      I agree to the terms and conditions
                    </label>
                  </div>
                  {trialSubmitStatus.message && (
                    <div
                      className={`p-2 rounded text-sm ${
                        trialSubmitStatus.success === true
                          ? "bg-green-100 text-green-800"
                          : trialSubmitStatus.success === false
                          ? "bg-red-100 text-red-800"
                          : "bg-blue-100 text-blue-800"
                      }`}
                    >
                      {trialSubmitStatus.message}
                    </div>
                  )}
                  <Button
                    type="submit"
                    className="w-full bg-[#FFD700] hover:bg-[#FFD700]/90 text-white"
                    disabled={trialSubmitStatus.loading}
                  >
                    {trialSubmitStatus.loading ? (
                      <>
                        <span className="mr-2">⏳</span> Processing...
                      </>
                    ) : (
                      <>
                        <span className="mr-2">👉</span> Reserve Trial Class
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function VisitSection() {
  return (
    <section
      id="visit"
      className="bg-[#FFD700]/5 py-12 md:py-24 lg:py-32 relative"
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <div className="inline-block rounded-full bg-[#FFD700] px-3 py-1 text-sm font-medium text-white">
              Visit Us
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Our Location
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Come visit our art studio in the heart of Seoul. We'd love to show
              you around!
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-6 lg:grid-cols-2 items-center">
          <div className="space-y-6">
            <div className="flex items-start gap-3">
              <MapPin className="h-6 w-6 text-[#FFD700] flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold">Studio Address</h3>
                <p className="text-gray-500 mt-1">
                  123 Itaewon-ro, Yongsan-gu
                  <br />
                  Seoul, South Korea
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="h-6 w-6 text-[#FFD700] flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2">Opening Hours</h3>
                <div className="grid grid-cols-2 gap-2 text-gray-500">
                  <div>Monday - Friday</div>
                  <div>9:00 AM - 6:00 PM</div>
                  <div>Saturday</div>
                  <div>10:00 AM - 4:00 PM</div>
                  <div>Sunday</div>
                  <div>Closed</div>
                </div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Navigation className="h-6 w-6 text-[#FFD700] flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2">Getting Here</h3>
                <ul className="space-y-2 text-gray-500">
                  <li className="flex items-start gap-2">
                    <span className="font-medium">Subway:</span>
                    <span>
                      Itaewon Station (Line 6), Exit 3. 5-minute walk.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-medium">Bus:</span>
                    <span>
                      Routes 110, 421, 740 stop directly in front of the
                      building.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-medium">Parking:</span>
                    <span>
                      Limited parking available on-site. Please call ahead to
                      reserve a spot.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg h-[400px] bg-gray-100">
            {/* This would be replaced with an actual map */}
            <div className="w-full h-full flex items-center justify-center bg-gray-200">
              <div className="text-center">
                <MapPin className="h-12 w-12 text-[#FFD700] mx-auto mb-2" />
                <p className="text-gray-500">Interactive Map</p>
                <p className="text-sm text-gray-400">
                  Google Maps integration would be here
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 80"
          fill="none"
          preserveAspectRatio="none"
          className="w-full h-auto"
        >
          <path
            d="M0,80 C240,0 480,0 720,40 C960,80 1200,80 1440,0 L1440,80 L0,80 Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#FFD700]/5 py-6 md:py-12">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-xl font-bold text-[#FFD700]">
                Lalla Kids Art
              </span>
            </Link>
            <p className="text-sm text-gray-500">
              Creative art programs for young explorers living in Korea.
            </p>
            <div className="flex items-center gap-4">
              <Link
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="h-5 w-5 text-gray-600 hover:text-[#FFD700]" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="https://blog.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BookOpen className="h-5 w-5 text-gray-600 hover:text-[#FFD700]" />
                <span className="sr-only">Blog</span>
              </Link>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Quick Links</h3>
            <nav className="flex flex-col gap-2">
              <Link
                href="#about"
                className="text-sm text-gray-500 hover:text-[#FFD700]"
              >
                About Us
              </Link>
              <Link
                href="#teacher"
                className="text-sm text-gray-500 hover:text-[#FFD700]"
              >
                Meet Our Creative Team
              </Link>
              <Link
                href="#programs"
                className="text-sm text-gray-500 hover:text-[#FFD700]"
              >
                Join our program!
              </Link>
              <Link
                href="#visit"
                className="text-sm text-gray-500 hover:text-[#FFD700]"
              >
                Visit Us
              </Link>
            </nav>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Contact Us</h3>
            <div className="text-sm text-gray-500">
              <p>123 Itaewon-ro, Yongsan-gu</p>
              <p>Seoul, South Korea</p>
              <p>Email: hello@lallakidsart.com</p>
              <p>Phone: +82 10-1234-5678</p>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} Lalla Kids Art. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
