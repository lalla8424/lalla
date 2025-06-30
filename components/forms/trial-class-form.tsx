import React, { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { LoadingSpinner } from "../ui/loading-spinner";
import { submitTrialClassForm } from "../../actions/notion-actions";

interface TrialFormData {
  parentName: string;
  childName: string;
  childAge: string;
  email: string;
  phone: string;
  activity: string;
  schedule: string[];
  agreeTerms: boolean;
}

interface ScheduleOption {
  id: string;
  schedule: string;
}

interface ActivityOption {
  id: string;
  chooseActivity: string;
}

interface SubmitStatus {
  loading: boolean;
  success: boolean | null;
  message: string;
}

interface TrialClassFormProps {
  scheduleOptions: ScheduleOption[];
  activityOptions: ActivityOption[];
  isLoading: boolean;
}

export function TrialClassForm({
  scheduleOptions,
  activityOptions,
  isLoading,
}: TrialClassFormProps) {
  const [formData, setFormData] = useState<TrialFormData>({
    parentName: "",
    childName: "",
    childAge: "",
    email: "",
    phone: "",
    activity: "",
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
      !formData.activity ||
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
      formDataToSubmit.append("chooseActivity", formData.activity);
      formDataToSubmit.append("schedule", formData.schedule.join(", "));

      const result = await submitTrialClassForm(formDataToSubmit);

      if (result.success) {
        setSubmitStatus({
          loading: false,
          success: true,
          message: "Trial class booking completed!",
        });

        // Reset form
        setFormData({
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
        setSubmitStatus({
          loading: false,
          success: false,
          message:
            result.error || "An error occurred during booking processing.",
        });
      }
    } catch (error) {
      console.error("Trial form submission failed:", error);
      setSubmitStatus({
        loading: false,
        success: false,
        message: "An error occurred during booking processing.",
      });
    }
  };

  return (
    <div className="border rounded-lg overflow-hidden shadow-md h-full flex flex-col">
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex items-center gap-2 mb-4">
          <CheckCircle2 className="h-6 w-6 text-[#FFD700]" />
          <h3 className="text-xl font-bold">Trial Art Class</h3>
        </div>
        <div className="border-l-4 border-[#FFD700]/30 pl-4 mb-6">
          <p className="text-sm text-gray-800 font-semibold mb-2">
            Trial Art Class – $50,000 KRW for 90 mins
          </p>
          <p className="text-sm text-gray-600 mb-2">
            Curious about our art classes? Give it a go with a fun one-off session!
          </p>
          <p className="text-sm text-gray-600 mb-2">
            Kids can explore eco painting, clay, beam projection mural painting or eco-crafts with recycled materials.
          </p>
          <p className="text-sm text-gray-600 mb-2">
            Perfect for first-timers keen to try our studio.
          </p>
          <p className="text-sm text-gray-600">
            All materials included.
          </p>
        </div>

        <div className="mt-6 flex-1 flex flex-col">
          <div className="flex items-center gap-2 mb-4">
            <h4 className="font-semibold">Reserve Your Trial Class</h4>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4 flex-1 flex flex-col">
            <div className="flex-1 space-y-4">
            <div>
              <Label htmlFor="trial-parent-name">Parent/Guardian Name</Label>
              <Input
                id="trial-parent-name"
                placeholder="Enter your full name"
                value={formData.parentName}
                onChange={(e) =>
                  setFormData({ ...formData, parentName: e.target.value })
                }
                required
              />
            </div>
            <div>
              <Label htmlFor="trial-child-name">Child's Name</Label>
              <Input
                id="trial-child-name"
                placeholder="Enter your child's name"
                value={formData.childName}
                onChange={(e) =>
                  setFormData({ ...formData, childName: e.target.value })
                }
                required
              />
            </div>
            <div>
              <Label htmlFor="trial-child-age">Child's Age</Label>
              <Input
                id="trial-child-age"
                placeholder="Enter your child's age (e.g., 6 years old)"
                value={formData.childAge}
                onChange={(e) =>
                  setFormData({ ...formData, childAge: e.target.value })
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
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
              />
            </div>
            <div>
              <Label htmlFor="trial-phone">Phone Number</Label>
              <Input
                id="trial-phone"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                required
              />
            </div>
            <div>
              <Label>Choose Activity</Label>
              <RadioGroup
                value={formData.activity}
                onValueChange={(value) =>
                  setFormData({ ...formData, activity: value })
                }
                className="mt-2"
              >
                {isLoading ? (
                  <LoadingSpinner size="sm" text="Loading activities..." />
                ) : activityOptions.length > 0 ? (
                  activityOptions.map((activity) => (
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
                      <RadioGroupItem value="drawing" id="trial-drawing" />
                      <Label htmlFor="trial-drawing">Drawing</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="clay-art" id="trial-clay-art" />
                      <Label htmlFor="trial-clay-art">Clay Art</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="light-art" id="trial-light-art" />
                      <Label htmlFor="trial-light-art">Light Art</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="eco-art" id="trial-eco-art" />
                      <Label htmlFor="trial-eco-art">Eco Art</Label>
                    </div>
                  </>
                )}
              </RadioGroup>
            </div>
            <div>
              <Label>Schedule (Multiple selection available)</Label>
              <div className="mt-2 space-y-2">
                {isLoading ? (
                  <LoadingSpinner size="sm" text="Loading schedules..." />
                ) : scheduleOptions.length > 0 ? (
                  scheduleOptions.map((schedule) => (
                    <div
                      key={schedule.id}
                      className="flex items-center space-x-2"
                    >
                      <Checkbox
                        id={`trial-schedule-${schedule.id}`}
                        checked={formData.schedule.includes(schedule.schedule)}
                        onCheckedChange={(checked) => {
                          if (checked) {
                            setFormData({
                              ...formData,
                              schedule: [
                                ...formData.schedule,
                                schedule.schedule,
                              ],
                            });
                          } else {
                            setFormData({
                              ...formData,
                              schedule: formData.schedule.filter(
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
                        checked={formData.schedule.includes(
                          "Tuesday 3:00–4:10 PM",
                        )}
                        onCheckedChange={(checked) => {
                          if (checked) {
                            setFormData({
                              ...formData,
                              schedule: [
                                ...formData.schedule,
                                "Tuesday 3:00–4:10 PM",
                              ],
                            });
                          } else {
                            setFormData({
                              ...formData,
                              schedule: formData.schedule.filter(
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
                        checked={formData.schedule.includes(
                          "Saturday 1:00–2:10 PM",
                        )}
                        onCheckedChange={(checked) => {
                          if (checked) {
                            setFormData({
                              ...formData,
                              schedule: [
                                ...formData.schedule,
                                "Saturday 1:00–2:10 PM",
                              ],
                            });
                          } else {
                            setFormData({
                              ...formData,
                              schedule: formData.schedule.filter(
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
                checked={formData.agreeTerms}
                onCheckedChange={(checked) =>
                  setFormData({ ...formData, agreeTerms: checked as boolean })
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
                <>
                  <span className="mr-2">⏳</span> Processing...
                </>
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
