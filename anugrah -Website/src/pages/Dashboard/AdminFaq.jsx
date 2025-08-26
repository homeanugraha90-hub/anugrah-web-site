import React, { useEffect, useState } from "react";
import axios from "axios";
import { Save, Trash2, Plus } from "lucide-react";

export default function AdminFaq() {
  const [faqs, setFaqs] = useState([]);
  const [selectedFaq, setSelectedFaq] = useState(null);
  const [loading, setLoading] = useState(false);
  const [newFaq, setNewFaq] = useState({ question: "", answer: "" });

  useEffect(() => {
    fetchFaqs();
  }, []);

  const fetchFaqs = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/faqs");
      setFaqs(res.data);
    } catch (err) {
      console.error("Error fetching FAQs:", err);
    }
  };

  const handleSelect = (faq) => {
    setSelectedFaq(faq);
  };

  const handleChange = (e, field) => {
    setSelectedFaq({ ...selectedFaq, [field]: e.target.value });
  };

  const handleNewFaqChange = (e, field) => {
    setNewFaq({ ...newFaq, [field]: e.target.value });
  };

  const handleSave = async () => {
    if (!selectedFaq) return;
    setLoading(true);
    try {
      await axios.put(`http://localhost:5000/api/faqs/${selectedFaq._id}`, selectedFaq);
      alert("FAQ updated successfully!");
      await fetchFaqs();
      setSelectedFaq(null);
    } catch (err) {
      console.error(err);
      alert("Failed to update FAQ");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this FAQ?")) return;
    try {
      await axios.delete(`http://localhost:5000/api/faqs/${id}`);
      alert("FAQ deleted successfully!");
      await fetchFaqs();
    } catch (err) {
      console.error(err);
      alert("Failed to delete FAQ");
    }
  };

  const handleAddNew = async () => {
    if (!newFaq.question || !newFaq.answer) {
      alert("Please fill both question and answer");
      return;
    }
    try {
      await axios.post("http://localhost:5000/api/faqs", newFaq);
      alert("FAQ added successfully!");
      setNewFaq({ question: "", answer: "" });
      await fetchFaqs();
    } catch (err) {
      console.error(err);
      alert("Failed to add FAQ");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-16 md:p-20 font-sans">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Admin FAQ Dashboard
      </h1>

      <div className="flex flex-col md:flex-row gap-6">
        {/* FAQ List */}
        <div className="md:w-1/4 bg-white rounded-lg shadow p-4">
          <h2 className="text-xl font-semibold mb-4">FAQs</h2>
          <ul className="space-y-2">
            {faqs.map((faq) => (
              <li key={faq._id} className="flex justify-between items-center">
                <button
                  className={`text-left px-3 py-2 rounded hover:bg-blue-100 transition ${
                    selectedFaq?._id === faq._id ? "bg-blue-200 font-semibold" : ""
                  }`}
                  onClick={() => handleSelect(faq)}
                >
                  {faq.question.length > 30
                    ? faq.question.substring(0, 30) + "..."
                    : faq.question}
                </button>
                <button
                  onClick={() => handleDelete(faq._id)}
                  className="ml-2 bg-red-500 text-white rounded p-1 hover:bg-red-600"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </li>
            ))}
          </ul>

          {/* Add New FAQ */}
          <div className="mt-6 border-t pt-4">
            <h3 className="text-lg font-semibold mb-2">Add New FAQ</h3>
            <input
              type="text"
              placeholder="Question"
              value={newFaq.question}
              onChange={(e) => handleNewFaqChange(e, "question")}
              className="border p-2 rounded w-full mb-2"
            />
            <textarea
              placeholder="Answer"
              value={newFaq.answer}
              onChange={(e) => handleNewFaqChange(e, "answer")}
              className="border p-2 rounded w-full mb-2"
              rows={3}
            />
            <button
              onClick={handleAddNew}
              className="bg-green-500 text-white px-4 py-2 rounded flex items-center gap-2 hover:bg-green-600 transition"
            >
              <Plus className="w-4 h-4" /> Add FAQ
            </button>
          </div>
        </div>

        {/* FAQ Editor */}
        {selectedFaq && (
          <div className="md:w-3/4 bg-white rounded-lg shadow p-6 flex flex-col gap-4">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              Edit FAQ
            </h2>
            <div className="flex flex-col gap-2">
              <label className="font-medium text-gray-700">Question</label>
              <input
                type="text"
                value={selectedFaq.question}
                onChange={(e) => handleChange(e, "question")}
                className="border p-2 rounded w-full"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-medium text-gray-700">Answer</label>
              <textarea
                value={selectedFaq.answer}
                onChange={(e) => handleChange(e, "answer")}
                rows={4}
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
