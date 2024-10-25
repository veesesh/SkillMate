import React, { useState } from "react";
import FormInput from "./FormInput";
import RecommendButton from "./RecommendButton";
import Recommendations from "./Recommendations";

function SkillRecommendationForm() {
  const [formData, setFormData] = useState({
    jobRole: "",
    currentSkills: "",
    interests: "",
    learningGoals: "",
  });
  const [recommendations, setRecommendations] = useState([]);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "auto" }}>
      <h2>Personalized Skill Recommendation System</h2>

      {/* Form Inputs */}
      <FormInput
        label="Current Job Role"
        name="jobRole"
        value={formData.jobRole}
        handleInputChange={handleInputChange}
      />
      <FormInput
        label="Current Skills"
        name="currentSkills"
        value={formData.currentSkills}
        handleInputChange={handleInputChange}
      />
      <FormInput
        label="Interests"
        name="interests"
        value={formData.interests}
        handleInputChange={handleInputChange}
      />
      <FormInput
        label="Learning Goals"
        name="learningGoals"
        value={formData.learningGoals}
        handleInputChange={handleInputChange}
      />

      {/* Recommend Button */}
      <RecommendButton onClick={() => alert("Recommend button clicked!")} />

      {/* Display Recommendations */}
      <Recommendations recommendations={recommendations} />
    </div>
  );
}

export default SkillRecommendationForm;
