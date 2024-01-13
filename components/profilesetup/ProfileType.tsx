import { useState } from "react";
import DetailsComponent from "./DetailsComponent";
import PrimaryButton from "../util/PrimaryButton";

interface ProfileDetails {
  student: {
    name: string;
    details: string;
  };
  educator: {
    name: string;
    details: string;
  };
  hr: {
    name: string;
    details: string;
  };
}

interface ProfileTypeProps {
  onProfileTypeSelected: (stepName: string, profileType: string) => void;
}

const ProfileType: React.FC<ProfileTypeProps> = ({ onProfileTypeSelected }) => {
  const profileDetails: ProfileDetails = {
    student: {
      name: "Student",
      details: "Student Details",
    },
    educator: {
      name: "Educator",
      details: "Educator Details",
    },
    hr: {
      name: "HR",
      details: "HR Details",
    },
  };
  const [showDetails, setShowDetails] = useState(false);
  const [selectedDetails, setSelectedDetails] = useState("");

  function detailsHandler(profileType: keyof ProfileDetails) {
    setShowDetails(true);
    setSelectedDetails(profileDetails[profileType].details);
    onProfileTypeSelected("ProfileSelect", profileDetails[profileType].name);
  }

  return (
    <>
      <br />
      <span>Select Your Profile Type</span>
      <div className="flex">
        {Object.keys(profileDetails).map((key) => (
          <div
            key={key}
            onClick={() => detailsHandler(key as keyof ProfileDetails)}
            className="mx-auto grid max-w-full w-full grid-cols-3 gap-x-5 px-8"
          >
            <PrimaryButton
              name={profileDetails[key as keyof ProfileDetails].name}
            />
          </div>
        ))}
      </div>
      {showDetails && <DetailsComponent details={selectedDetails} />}
    </>
  );
};

export default ProfileType;
