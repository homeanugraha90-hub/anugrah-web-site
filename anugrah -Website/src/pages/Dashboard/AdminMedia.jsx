import React, { useEffect, useState } from "react";
import axios from "axios";
import { Save, Trash2 } from "lucide-react";

export default function AdminMedia() {
  const [sections, setSections] = useState([]);
  const [selectedSection, setSelectedSection] = useState(null);
  const [content, setContent] = useState({});
  const [newImages, setNewImages] = useState([]);
  const [newVideo, setNewVideo] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchSections();
  }, []);

  const fetchSections = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/media");
      setSections(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleSelect = (section) => {
    setSelectedSection(section);

    if (section.content) {
      try {
        setContent(JSON.parse(section.content));
      } catch (err) {
        console.error("Failed to parse content JSON:", err);
        setContent({});
      }
    } else {
      setContent({});
    }

    setNewImages([]);
    setNewVideo(null);
  };

  const handleFileChange = (e, type) => {
    if (type === "images") setNewImages(e.target.files);
    else if (type === "video") setNewVideo(e.target.files[0]);
  };

  const handleDeleteImage = (index) => {
    if (!selectedSection) return;
    const updatedImages = [...(selectedSection.images || [])];
    updatedImages.splice(index, 1);
    setSelectedSection({ ...selectedSection, images: updatedImages });
  };

  const handleDeleteVideo = () => {
    if (!selectedSection) return;
    setSelectedSection({ ...selectedSection, videos: [] });
  };

  const handleSave = async () => {
    if (!selectedSection) return;
    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("content", JSON.stringify(content));

      for (let img of newImages) formData.append("images", img);
      if (newVideo) formData.append("videos", newVideo);

      if (selectedSection.images?.length > 0) {
        formData.append("existingImages", JSON.stringify(selectedSection.images));
      }
      if (selectedSection.videos?.length > 0) {
        formData.append("existingVideos", JSON.stringify(selectedSection.videos));
      }

      await axios.put(
        `http://localhost:5000/api/media/${selectedSection.sectionName}`,
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      alert("Section updated successfully!");
      await fetchSections();
      setNewImages([]);
      setNewVideo(null);
    } catch (err) {
      console.error(err);
      alert("Failed to update section");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-16 md:p-20 font-sans">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Admin Media Dashboard
      </h1>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Sections List */}
        <div className="md:w-1/4 bg-white rounded-lg shadow p-4">
          <h2 className="text-xl font-semibold mb-4">Sections</h2>
          <ul className="space-y-2">
            {sections.map((section) => (
              <li key={section._id}>
                <button
                  className={`w-full text-left px-3 py-2 rounded hover:bg-blue-100 transition ${
                    selectedSection?._id === section._id ? "bg-blue-200 font-semibold" : ""
                  }`}
                  onClick={() => handleSelect(section)}
                >
                  {section.sectionName}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Section Editor */}
        {selectedSection && (
          <div className="md:w-3/4 bg-white rounded-lg shadow p-6 flex flex-col gap-4">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              Edit Section: {selectedSection.sectionName}
            </h2>

            {/* Editable Content */}
            {content && Object.keys(content).length > 0 ? (
              Object.keys(content).map((key) => (
                <div key={key} className="flex flex-col">
                  <label className="font-medium text-gray-700 mb-1">{key}</label>
                  <textarea
                    className="border rounded-md p-2 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
                    rows={3}
                    value={content[key] || ""}
                    onChange={(e) =>
                      setContent({ ...content, [key]: e.target.value })
                    }
                  />
                </div>
              ))
            ) : (
              <p className="text-gray-500 italic">No editable content for this section.</p>
            )}

            {/* Existing Images */}
            {selectedSection.images?.length > 0 && (
              <div>
                <label className="font-medium text-gray-700 mb-1">Existing Images</label>
                <div className="flex gap-2 flex-wrap">
                  {selectedSection.images.map((img, idx) => (
                    <div key={idx} className="relative">
                      <img
                        src={`http://localhost:5000/upload/${img}`}
                        alt={`img-${idx}`}
                        className="w-32 h-32 object-cover rounded"
                      />
                      <button
                        onClick={() => handleDeleteImage(idx)}
                        className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 hover:bg-red-600"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Upload New Images */}
            <div>
              <label className="font-medium text-gray-700 mb-1">Add New Images</label>
              <input
                type="file"
                multiple
                accept="image/*"
                onChange={(e) => handleFileChange(e, "images")}
                className="border p-2 rounded w-full"
              />
            </div>

            {/* Existing Video */}
            {selectedSection.videos?.length > 0 && (
              <div>
                <label className="font-medium text-gray-700 mb-1">Existing Video</label>
                <div className="relative w-64 h-40">
                  <video
                    src={`http://localhost:5000/upload/${selectedSection.videos[0]}`}
                    controls
                    className="w-full h-full object-cover rounded"
                  />
                  <button
                    onClick={handleDeleteVideo}
                    className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 hover:bg-red-600"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* Upload New Video */}
            <div>
              <label className="font-medium text-gray-700 mb-1">Upload Video</label>
              <input
                type="file"
                accept="video/*"
                onChange={(e) => handleFileChange(e, "video")}
                className="border p-2 rounded w-full"
              />
            </div>

            <button
              onClick={handleSave}
              disabled={loading}
              className="self-start mt-4 bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg flex items-center gap-2 transition"
            >
              <Save className="w-5 h-5" />
              {loading ? "Saving..." : "Save Changes"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
