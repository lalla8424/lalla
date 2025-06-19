import React, { useState } from "react";
import { Palette } from "lucide-react";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { LoadingSpinner } from "../ui/loading-spinner";
import { submitWeeklyProgramForm } from "../../actions/notion-actions";

interface WeeklyFormData {
  parentName: string;
  childName: string;
  childAge: string;
  email: string;
  phone: string;
  programType: string;
  schedule: string[];
  agreeTerms: boolean;
}

interface ScheduleOption {
  id: string;
  schedule: string;
}

interface ProgramTypeOption {
  id: string;
  programType: string;
}

interface SubmitStatus {
  loading: boolean;
  success: boolean | null;
  message: string;
}

interface WeeklyProgramFormProps {
  scheduleOptions: ScheduleOption[];
  programTypeOptions: ProgramTypeOption[];
  isLoading: boolean;
}

export function WeeklyProgramForm({
  scheduleOptions,
  programTypeOptions,
  isLoading,
}: WeeklyProgramFormProps) {
  const [formData, setFormData] = useState<WeeklyFormData>({
    parentName: "",
    childName: "",
    childAge: "",
    email: "",
    phone: "",
    programType: "",
    schedule: [],
    agreeTerms: false,
  });

  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>({
    loading: false,
    success: null,
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Form validation
    if (
      !formData.parentName ||
      !formData.childName ||
      !formData.childAge ||
      !formData.email ||
      !formData.phone ||
      !formData.programType ||
      formData.schedule.length === 0 ||
      !formData.agreeTerms
    ) {
      setSubmitStatus({
        loading: false,
        success: false,
        message: "Please fill in all fields.",
      });
      return;
    }

    try {
      setSubmitStatus({
        loading: true,
        success: null,
        message: "Submitting...",
      });

      const formDataToSubmit = new FormData();
      formDataToSubmit.append("parentName", formData.parentName);
      formDataToSubmit.append("childName", formData.childName);
      formDataToSubmit.append("childAge", formData.childAge);
      formDataToSubmit.append("email", formData.email);
      formDataToSubmit.append("phone", formData.phone);
      formDataToSubmit.append("programType", formData.programType);
      formDataToSubmit.append("schedule", formData.schedule.join(", "));

      const result = await submitWeeklyProgramForm(formDataToSubmit);

      if (result.success) {
        setSubmitStatus({
          loading: false,
          success: true,
          message: "Program application completed!",
        });

        // Reset form
        setFormData({
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
          message:
            result.error || "An error occurred during application processing.",
        });
      }
    } catch (error) {
      console.error("Form submission failed:", error);
      setSubmitStatus({
        loading: false,
        success: false,
        message: "An error occurred during application processing.",
      });
    }
  };

  return (
    <div className="border rounded-lg overflow-hidden shadow-md h-full flex flex-col">
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex items-center gap-2 mb-4">
          <Palette className="h-6 w-6 text-[#FFD700]" />
          <h3 className="text-xl font-bold">Weekly Art Program</h3>
        </div>
        <div className="border-l-4 border-[#FFD700]/30 pl-4 mb-6">
          <p className="text-base font-semibold text-gray-800 mb-1">
            Creative Kids Art Adventure
            <br />
            <span className="text-xs font-normal text-gray-500">(Kindy ~ Lower Primary / 70 mins)</span>
          </p>
          <p className="text-sm text-gray-600 mb-2">
            A fun, hands-on art program designed to spark your child's imagination and creativity!<br />
            Kids explore art through picture books, storytelling, basic drawing, sculpture, installation art, beam projection murals, and eco-friendly materials.
          </p>
          <div className="mb-2">
            <span className="block text-sm font-semibold text-gray-700 mb-1">[ What We Do ]</span>
            <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
              <li><b>Lytart-mural painting</b> – Create media murals using beam projection</li>
              <li><b>Drawing Skills</b> – Build foundational drawing skills through fun games and activities</li>
              <li><b>Making & Construction</b> – Explore form, installation, and turn their artwork into real-life products</li>
              <li><b>Canvas Layer Art</b> – Combine action painting, collage and drawing to make unique layered canvases</li>
              <li>♻️ Eco-friendly materials & storybook-inspired activities</li>
            </ul>
          </div>
          <div>
            <span className="block text-sm font-semibold text-gray-700 mb-1">[ Program Cost ]</span>
            <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
              <li>4-week program (1 class per week / total of 4 sessions): <b>190,000 KRW</b> (includes all materials)</li>
              <li>Optional Art Photobook: <b>40,000 KRW</b> (includes photos from 10 sessions, professionally designed)</li>
            </ul>
          </div>
        </div>

        <div className="mt-6 flex-1 flex flex-col">
          <div className="flex items-center gap-2 mb-4">
            <h4 className="font-semibold">Sign Up for Weekly Program</h4>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4 flex-1 flex flex-col">
            <div className="flex-1 space-y-4">
            <div>
              <Label htmlFor="weekly-parent-name">Parent/Guardian Name</Label>
              <Input
                id="weekly-parent-name"
                placeholder="Enter your full name"
                value={formData.parentName}
                onChange={(e) =>
                  setFormData({ ...formData, parentName: e.target.value })
                }
                required
              />
            </div>
            <div>
              <Label htmlFor="weekly-child-name">Child's Name</Label>
              <Input
                id="weekly-child-name"
                placeholder="Enter your child's name"
                value={formData.childName}
                onChange={(e) =>
                  setFormData({ ...formData, childName: e.target.value })
                }
                required
              />
            </div>
            <div>
              <Label htmlFor="weekly-child-age">Child's Age</Label>
              <Input
                id="weekly-child-age"
                placeholder="Enter your child's age (e.g., 5 years old)"
                value={formData.childAge}
                onChange={(e) =>
                  setFormData({ ...formData, childAge: e.target.value })
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
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
              />
            </div>
            <div>
              <Label htmlFor="weekly-phone">Phone Number</Label>
              <Input
                id="weekly-phone"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                required
              />
            </div>
            <div>
              <Label>Program Type</Label>
              <RadioGroup
                value={formData.programType}
                onValueChange={(value) =>
                  setFormData({ ...formData, programType: value })
                }
                className="mt-2"
              >
                {isLoading ? (
                  <LoadingSpinner
                    size="sm"
                    text="Loading program information..."
                  />
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
                    No programs available
                  </div>
                )}
              </RadioGroup>
            </div>
            <div>
              <Label>Schedule (Multiple selection available)</Label>
              <div className="mt-2 space-y-2">
                {isLoading ? (
                  <LoadingSpinner
                    size="sm"
                    text="Loading schedule information..."
                  />
                ) : scheduleOptions.length > 0 ? (
                  scheduleOptions.map((option) => (
                    <div
                      key={option.id}
                      className="flex items-center space-x-2"
                    >
                      <Checkbox
                        id={`weekly-${option.id}`}
                        checked={formData.schedule.includes(option.schedule)}
                        onCheckedChange={(checked) => {
                          if (checked) {
                            setFormData({
                              ...formData,
                              schedule: [...formData.schedule, option.schedule],
                            });
                          } else {
                            setFormData({
                              ...formData,
                              schedule: formData.schedule.filter(
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
                    No schedules available
                  </div>
                )}
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="weekly-terms"
                checked={formData.agreeTerms}
                onCheckedChange={(checked) =>
                  setFormData({ ...formData, agreeTerms: checked as boolean })
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
            </div>
            
            <div className="mt-auto pt-4 space-y-4">
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
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  Submitting...
                </span>
              ) : (
                <>
                  <span className="mr-2">👉</span> Book Now
                </>
              )}
            </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
