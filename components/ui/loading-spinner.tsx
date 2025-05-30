import React from "react";

interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg";
  text?: string;
  fullScreen?: boolean;
}

export function LoadingSpinner({
  size = "md",
  text = "Loading...",
  fullScreen = false,
}: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: "h-4 w-4",
    md: "h-8 w-8",
    lg: "h-12 w-12",
  };

  const containerClasses = fullScreen
    ? "flex min-h-screen flex-col items-center justify-center bg-white"
    : "flex flex-col items-center justify-center py-8";

  return (
    <div className={containerClasses}>
      <div className="relative">
        {/* Outer spinning ring */}
        <div
          className={`${sizeClasses[size]} animate-spin rounded-full border-4 border-gray-200 border-t-[#FFD700]`}
        ></div>

        {/* Inner pulsing dot */}
        <div
          className={`absolute inset-0 ${sizeClasses[size]} flex items-center justify-center`}
        >
          <div className="h-2 w-2 animate-pulse rounded-full bg-[#FFD700]"></div>
        </div>
      </div>

      {text && (
        <p className="mt-4 text-lg font-medium text-gray-600 animate-pulse">
          {text}
        </p>
      )}

      {/* Brand touch */}
      <div className="mt-2 flex space-x-1">
        <div className="h-1 w-1 animate-bounce rounded-full bg-[#FFD700] [animation-delay:-0.3s]"></div>
        <div className="h-1 w-1 animate-bounce rounded-full bg-[#FFD700] [animation-delay:-0.15s]"></div>
        <div className="h-1 w-1 animate-bounce rounded-full bg-[#FFD700]"></div>
      </div>
    </div>
  );
}

export function PageLoadingSpinner() {
  return (
    <LoadingSpinner
      size="lg"
      text="Welcome to Lalla Kids Art..."
      fullScreen={true}
    />
  );
}
