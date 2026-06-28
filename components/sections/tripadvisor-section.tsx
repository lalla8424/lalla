/**
 * @file tripadvisor-section.tsx
 * @description TripAdvisor 리뷰 위젯 섹션 컴포넌트
 *
 * 이 컴포넌트는 TripAdvisor에서 제공하는 리뷰 위젯을 표시합니다.
 * 사용자들이 작성한 리뷰를 확인할 수 있도록 합니다.
 *
 * 주요 기능:
 * 1. TripAdvisor 리뷰 위젯 표시
 * 2. 외부 스크립트 동적 로드
 *
 * @dependencies
 * - react: 클라이언트 사이드 렌더링
 */

"use client";

import React, { useEffect, useRef } from "react";

export function TripadvisorSection() {
  const widgetRef = useRef<HTMLDivElement>(null);
  const scriptLoadedRef = useRef(false);

  useEffect(() => {
    // 이미 로드되었는지 확인
    if (scriptLoadedRef.current || !widgetRef.current) {
      return;
    }

    // 위젯 HTML 추가
    if (widgetRef.current) {
      widgetRef.current.innerHTML = `
        <div id="TA_rated935" class="TA_rated">
          <ul id="dLByZk" class="TA_links PAlC1ChXUp">
            <li id="wuk9oUWr" class="68SUQ4I9JYvF">
              <a target="_blank" href="https://www.tripadvisor.co.kr/Attraction_Review-g294197-d28047381-Reviews-Lalla_Kids_Art-Seoul.html">
                <img src="https://www.tripadvisor.co.kr/img/cdsi/img2/badges/ollie-11424-2.gif" alt="TripAdvisor"/>
              </a>
            </li>
          </ul>
        </div>
      `;

      // TripAdvisor 스크립트 로드
      const existingScript = document.querySelector(
        'script[src*="jscache.com/wejs?wtype=rated&uniq=935"]'
      );

      if (!existingScript) {
        const script = document.createElement("script");
        script.async = true;
        script.src =
          "https://www.jscache.com/wejs?wtype=rated&uniq=935&locationId=28047381&lang=ko&display_version=2";
        script.setAttribute("data-loadtrk", "");
        script.onload = function () {
          scriptLoadedRef.current = true;
          // @ts-ignore - TripAdvisor 스크립트가 이 속성을 사용
          if (this.loadtrk !== undefined) {
            // @ts-ignore
            this.loadtrk = true;
          }
        };
        script.onerror = () => {
          console.warn("TripAdvisor widget script failed to load.");
        };
        document.body.appendChild(script);
        scriptLoadedRef.current = true;
      }
    }
  }, []);

  return (
    <section
      id="reviews"
      className="bg-white py-12 md:py-24 lg:py-32"
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <div className="inline-block rounded-full bg-[#FFD700] px-3 py-1 text-sm font-medium text-white">
              Reviews
            </div>
            <h2 className="text-3xl font-bold tracking-normal sm:text-5xl">
              Visitor Reviews
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              See what families are saying about their experience at Lalla Kids Art
            </p>
          </div>
        </div>
        <div className="max-w-5xl mx-auto flex justify-center">
          <div ref={widgetRef} className="tripadvisor-widget" />
        </div>
      </div>
    </section>
  );
}

