import { useState } from "react";


function ProfileEditor() {
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleBioChange(e) {
    setBio(e.target.value);
  }

  function handleClear() {
    setName("");
    setBio("");
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Mini Profile Editor</h2>

        <input
          type="text"
          value={name}
          onChange={handleNameChange}
          placeholder="Enter your name"
          className="w-full p-2 border rounded mb-4"
        />

        <textarea
          value={bio}
          onChange={handleBioChange}
          placeholder="Write a short bio"
          className="w-full p-2 border rounded mb-4"
          rows="4"
        />

        <div className="mt-6 border-t pt-4">
          <h3 className="font-semibold mb-2">Live Preview</h3>
          <p>
            <strong>Name:</strong> {name || "—"}
          </p>
          <p className="mt-2">
            <strong>Bio:</strong> {bio || "—"}
          </p>
        </div>

        <button
          onClick={handleClear}
          className="mt-4 w-full bg-red-500 text-white py-2 rounded hover:bg-red-600"
        >
          Clear Profile
        </button>
      </div>
    </div>
  );
}

export default ProfileEditor;















