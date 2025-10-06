import React, { useRef, useState, useEffect } from "react";

const App = () => {
  const [input, setInput] = useState("");

  const inputRef = useRef();

  console.log("Getting rendered");

  useEffect(() => {
    inputRef.current = input;
  }, [input]);

  const display = () => {
    console.log(inputRef.current);
    inputRef.current.focus();
  };

  return (
    <div>
      <h2>useRef Hook Practiced Here!!</h2>
      <h1>Input </h1>
      <input
        ref={inputRef}
        type="text"
        value={input}
        onChange={(event) => setInput(event.target.value)}
      />
      <p> My entered text is: {input} </p>

      <p> My entered text is: {inputRef.current} </p>

      {/* <p>My Entered Value is: {inputRef?.current?.value}</p> */}

      <button onClick={display}> show input</button>
    </div>
  );
};

export default App;

// Doodleblue job application form

// import React, { useState } from "react";

// function JobApplicationForm() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     opportunity: "Full-time",
//     skills: [],
//     experience: "",
//     intro: "",
//   });

//   const [skillInput, setSkillInput] = useState("");

//   // Add skill (max 5)
//   const addSkill = () => {
//     if (
//       skillInput.trim() !== "" &&
//       !formData.skills.includes(skillInput) &&
//       formData.skills.length < 5
//     ) {
//       setFormData((prev) => ({
//         ...prev,
//         skills: [...prev.skills, skillInput],
//       }));
//       setSkillInput("");
//     }
//   };

//   // Remove skill
//   const removeSkill = (skillToRemove) => {
//     setFormData((prev) => ({
//       ...prev,
//       skills: prev.skills.filter((s) => s !== skillToRemove),
//     }));
//   };

//   // Handle other inputs
//   const handleChange = (field, value) => {
//     setFormData((prev) => ({ ...prev, [field]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form Submitted:", formData);
//   };

//   return (
//     <div className="p-6 max-w-lg mx-auto">
//       <h2 className="text-2xl font-bold mb-4">ReactJS Job Application</h2>

//       <form onSubmit={handleSubmit} className="space-y-4">
//         {/* Name */}
//         <input
//           type="text"
//           placeholder="Enter your full name"
//           className="w-full border p-2 rounded"
//           value={formData.name}
//           onChange={(e) => handleChange("name", e.target.value)}
//         />

//         {/* Email */}
//         <input
//           type="email"
//           placeholder="Email"
//           className="w-full border p-2 rounded"
//           value={formData.email}
//           onChange={(e) => handleChange("email", e.target.value)}
//         />

//         {/* Opportunity */}
//         <div>
//           <p className="font-semibold mb-1">What kind of opportunity?</p>
//           <label className="mr-4">
//             <input
//               type="radio"
//               name="opportunity"
//               value="Full-time"
//               checked={formData.opportunity === "Full-time"}
//               onChange={(e) => handleChange("opportunity", e.target.value)}
//             />
//             Full-time
//           </label>
//           <label>
//             <input
//               type="radio"
//               name="opportunity"
//               value="Consultant"
//               checked={formData.opportunity === "Consultant"}
//               onChange={(e) => handleChange("opportunity", e.target.value)}
//             />
//             Consultant
//           </label>
//         </div>

//         {/* Skills */}
//         <div>
//           <p className="font-semibold mb-1">
//             Mention your top 5 technical skills
//           </p>
//           <div className="flex gap-2">
//             <input
//               type="text"
//               placeholder="Enter your skills"
//               className="flex-grow border p-2 rounded"
//               value={skillInput}
//               onChange={(e) => setSkillInput(e.target.value)}
//             />
//             <button
//               type="button"
//               onClick={addSkill}
//               className="bg-blue-600 text-white px-4 rounded"
//               disabled={formData.skills.length >= 5}
//             >
//               Add
//             </button>
//           </div>

//           <div className="flex flex-wrap gap-2 mt-2">
//             {formData.skills.map((skill, index) => (
//               <span
//                 key={index}
//                 className="bg-gray-200 px-3 py-1 rounded flex items-center gap-2"
//               >
//                 {skill}
//                 <button
//                   type="button"
//                   className="text-red-500 font-bold"
//                   onClick={() => removeSkill(skill)}
//                 >
//                   ×
//                 </button>
//               </span>
//             ))}
//           </div>
//           {formData.skills.length >= 5 && (
//             <p className="text-sm text-red-600">Max 5 skills allowed</p>
//           )}
//         </div>

//         {/* Experience */}
//         <div>
//           <p className="font-semibold mb-1">Total years of experience</p>
//           <label className="block">
//             <input
//               type="radio"
//               name="experience"
//               value="1-3yrs"
//               checked={formData.experience === "1-3yrs"}
//               onChange={(e) => handleChange("experience", e.target.value)}
//             />
//             1-3 years
//           </label>
//           <label className="block">
//             <input
//               type="radio"
//               name="experience"
//               value="3-5yrs"
//               checked={formData.experience === "3-5yrs"}
//               onChange={(e) => handleChange("experience", e.target.value)}
//             />
//             3-5 years
//           </label>
//           <label className="block">
//             <input
//               type="radio"
//               name="experience"
//               value="5+yrs"
//               checked={formData.experience === "5+yrs"}
//               onChange={(e) => handleChange("experience", e.target.value)}
//             />
//             5+ years
//           </label>
//         </div>

//         {/* Intro */}
//         <textarea
//           placeholder="Introduce yourself in few words"
//           className="w-full border p-2 rounded"
//           value={formData.intro}
//           onChange={(e) => handleChange("intro", e.target.value)}
//         />

//         {/* Submit */}
//         <button
//           type="submit"
//           className="bg-green-600 text-white px-6 py-2 rounded"
//         >
//           Submit
//         </button>
//       </form>

//       {/* Debug */}
//       <div className="mt-6">
//         <h3 className="font-semibold">Form State:</h3>
//         <pre>{JSON.stringify(formData, null, 2)}</pre>
//       </div>
//     </div>
//   );
// }

// export default JobApplicationForm;

// 2 times conosle log in React 18 Strict Mode:-
// ✅ What you should do
// Don’t panic when you see double console logs
// Just know: production = single render logs.
// Use console.count() or label your logs clearly to make debugging easier.
