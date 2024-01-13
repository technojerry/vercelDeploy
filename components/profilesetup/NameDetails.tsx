import React, { useState } from "react";
interface NameDetailsProps {
  onProfileTypeSelected: (stepName: string, profileType: any) => void;
}
const NameDetails: React.FC<NameDetailsProps> = ({ onProfileTypeSelected }) => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [fullName, setFullName] = useState<string>("");

  const handleFirstNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFirstName(e.target.value);
    updateFullName(e.target.value, lastName);
  };

  const handleLastNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(e.target.value);
    updateFullName(firstName, e.target.value);
  };

  const handleFullNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(e.target.value);
    updateFullName(fullName, e.target.value);
  };

  const updateFullName = (first: string, last: string) => {
    setFullName(`${first} ${last}`);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Submitted:", { firstName, lastName, fullName });
    onProfileTypeSelected("Name", { firstName, lastName, fullName });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        First Name:
        <input type="text" value={firstName} onChange={handleFirstNameChange} />
      </label>
      <br />
      <label>
        Last Name:
        <input type="text" value={lastName} onChange={handleLastNameChange} />
      </label>
      <br />
      <label>
        Full Name:
        <input type="text" value={fullName} onChange={handleFullNameChange} />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};
export default NameDetails;
