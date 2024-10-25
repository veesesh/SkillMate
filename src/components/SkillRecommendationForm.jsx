import React, { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI("");
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

console.log("heheheheh");

function SkillRecommendationForm() {
  const [formData, setFormData] = useState({
    jobRole: "",
    currentSkills: "",
    interests: "",
    learningGoals: "",
  });
  const [recommendations, setRecommendations] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const fetchRecommendations = async () => {
    try {
      setErrorMessage(null);

      // promt
      const prompt = `
        You are an AI model assisting in generating skill recommendations based on a user’s current role, skills, interests, and learning goals. Based on the following user data:
        
        Job Role: ${formData.jobRole}
        Current Skills: ${formData.currentSkills}
        Interests: ${formData.interests}
        Learning Goals: ${formData.learningGoals}

        Provide a list of 5 to 7 recommended skills that this user should learn next. The list should be concise, relevant, and tailored to the user's background. The response MUST ONLY be a JSON array of strings, without any explanation, like this:
        ["skill1": , "skill2", "skill3", ...]

        Do not include any additional information, just return a clean JSON array of skills.
      `;

      const result = await model.generateContent(prompt);
      console.log(result.response.text());

      const skillArray = JSON.parse(result.response.text());
      setRecommendations(skillArray);
    } catch (error) {
      setErrorMessage(
        "Error fetching recommendations. Please ensure all fields are filled and try again."
      );
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <div>
        <h2>Personalized Skill Recommendation System</h2>
        <div>
          <label>Current Job Role:</label>
          <input
            type="text"
            name="jobRole"
            value={formData.jobRole}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Current Skills:</label>
          <input
            type="text"
            name="currentSkills"
            value={formData.currentSkills}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Interests:</label>
          <input
            type="text"
            name="interests"
            value={formData.interests}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Learning Goals:</label>
          <input
            type="text"
            name="learningGoals"
            value={formData.learningGoals}
            onChange={handleInputChange}
          />
        </div>

        <button onClick={fetchRecommendations}>Get Recommendations</button>

        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}

        <h3>Recommended Skills:</h3>
        <ul>
          {recommendations.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SkillRecommendationForm;
