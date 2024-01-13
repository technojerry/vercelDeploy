import EducationDetails from "@/components/profilesetup/EducationDetails";
import NameDetails from "@/components/profilesetup/NameDetails";
import ProfileType from "@/components/profilesetup/ProfileType";
import PrimaryButton from "@/components/util/PrimaryButton";
import { useState } from "react";

interface ProfileSteps {
  [key: string]: {
    name: string;
    component: React.ComponentType<any>;
  };
}

export default function Page() {
  const profileSteps: ProfileSteps = {
    1: {
      name: "Select Profile Type",
      component: ProfileType,
    },
    2: {
      name: "Add Profile Name",
      component: NameDetails,
    },
    3: {
      name: "Education Details",
      component: EducationDetails,
    },
  };

  const [profileType, setProfileType] = useState("");
  const [currentStep, setCurrentStep] = useState<string>("1");
  const [nameDetails, setNameDetails] = useState<any>({});

  const handleProfileTypeSelected = (stepName: string, profileType: any) => {
    if (stepName === "ProfileSelect") {
      setProfileType(profileType);
    }
    if (stepName === "Name") {
      console.log("setting the name");
      setNameDetails(profileType);
    }
    // Move to the next step after selecting the profile type
    const nextStep = (parseInt(currentStep) + 1).toString();
    if (+nextStep > 2) {
      console.log("last step Isko Handle kar");
      return;
    }
    setCurrentStep(nextStep);
  };

  let CurrentComponent = profileSteps[currentStep].component;

  const profileStepHandler = (step: keyof ProfileSteps) => {
    CurrentComponent = profileSteps[step].component;
  };

  return (
    <>
      profile Setup Route
      <div className="flex">
        {Object.keys(profileSteps).map((key) => (
          <div
            key={key}
            onClick={() => profileStepHandler(key as keyof ProfileSteps)}
            className="mx-auto grid max-w-full w-full grid-cols-3 gap-x-5 px-8"
          >
            <PrimaryButton
              name={profileSteps[key as keyof ProfileSteps].name}
            />
          </div>
        ))}
      </div>
      <CurrentComponent onProfileTypeSelected={handleProfileTypeSelected} />
      {profileType}
      {Object.keys(nameDetails).map((key) => (
        <div key={key}>{nameDetails[key]}</div>
      ))}
    </>
  );
}
