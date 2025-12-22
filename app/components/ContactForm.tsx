import { useState } from "react";
import { Send } from "lucide-react";
import { toast } from "react-toastify";

type FormData = {
  name: string;
  email: string;
  message: string;
};

type FormErrors = {
  name?: string;
  email?: string;
  message?: string;
};

const ContactForm = ({ theme }: { theme: string }) => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isLoading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Enter a valid email";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      return;
    }

    const baseUrl = process.env.BASE_URL || "";
    setLoading(true);
    try {
      const res = await fetch(`${baseUrl}/api/mail`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (res.ok) {
        toast.success("Message sent successfully!", { position: "top-center" });
        setFormData({ name: "", email: "", message: "" });
        setErrors({});
      } else {
        toast.error(result.error || "Something went wrong!", {
          position: "top-center",
        });
      }
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong. Try again later.", {
        position: "top-center",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className={`relative p-4 rounded-2xl shadow-md overflow-hidden backdrop-blur-md ${
        theme === "dark" ? "bg-gray-800/80" : "bg-white"
      }`}
    >
      <div className="absolute inset-0 rounded-2xl border border-indigo-500/20 pointer-events-none" />

      <h3
        className={`text-lg font-bold mb-4 ${
          theme === "dark" ? "text-white" : "text-gray-900"
        }`}
      >
        Send a Message
      </h3>
      <form onSubmit={handleSubmit}>
        <div className="space-y-3 relative z-10">
          <input
            type="text"
            placeholder="Your Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className={`w-full px-3 py-2 rounded-lg border-2 outline-none text-sm transition ${
              theme === "dark"
                ? "bg-gray-900 text-white border-gray-700 focus:border-indigo-500"
                : "bg-gray-50 text-gray-900 border-gray-200 focus:border-indigo-500"
            }`}
          />
          {errors.name && <p className="text-xs text-red-500">{errors.name}</p>}

          <input
            type="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className={`w-full px-3 py-2 rounded-lg border-2 outline-none text-sm transition ${
              theme === "dark"
                ? "bg-gray-900 text-white border-gray-700 focus:border-indigo-500"
                : "bg-gray-50 text-gray-900 border-gray-200 focus:border-indigo-500"
            }`}
          />
          {errors.email && (
            <p className="text-xs text-red-500">{errors.email}</p>
          )}

          <textarea
            placeholder="Your Message"
            rows={3}
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            className={`w-full px-3 py-2 rounded-lg border-2 outline-none text-sm transition ${
              theme === "dark"
                ? "bg-gray-900 text-white border-gray-700 focus:border-indigo-500"
                : "bg-gray-50 text-gray-900 border-gray-200 focus:border-indigo-500"
            }`}
          />
          {errors.message && (
            <p className="text-xs text-red-500">{errors.message}</p>
          )}

          <button
            disabled={isLoading}
            type="submit"
            className={`w-full py-3 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium transition flex items-center justify-center gap-2 text-sm 
    ${isLoading ? "cursor-not-allowed opacity-70" : "hover:shadow-md"}`}
          >
            {isLoading ? (
              <svg
                className="animate-spin h-4 w-4 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                ></path>
              </svg>
            ) : (
              <Send className="w-4 h-4" />
            )}
            {isLoading ? "Sending..." : "Send Message"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
