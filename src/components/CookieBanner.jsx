import { useEffect, useState } from "react";

const STORAGE_KEY = "cookie-consent";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [showInfo, setShowInfo] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(STORAGE_KEY);
    if (!consent) setVisible(true);
  }, []);

  function handleConsent(choice) {
    localStorage.setItem(STORAGE_KEY, choice);
    if (choice === "accepted") {
      document.dispatchEvent(new CustomEvent("loadGA", { detail: "G-B9ZVK0TBBX" }));
    }
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 p-4">
      <div className="mx-auto max-w-5xl rounded-box border border-base-300 bg-base-100 shadow-2xl">
        <div className="grid gap-4 p-4 md:grid-cols-[1fr_auto] md:items-center md:p-6">
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-base-content">We use cookies</h3>

            <p className="text-sm text-base-content/80">
              This site uses cookies to analyze traffic and improve your experience.{" "}
              <button
                onClick={() => setShowInfo(!showInfo)}
                className="underline text-emerald-600"
              >
                {showInfo ? "Hide details" : "Learn more"}
              </button>
              .
            </p>

            {showInfo && (
              <div className="mt-2 text-sm text-base-content/80 leading-relaxed">
                We use cookies to help us understand how visitors use our website. This
                includes anonymous analytics data via Google Analytics, which tracks page
                views, device types, and traffic sources. You can choose to accept or
                decline cookies at any time.
              </div>
            )}
          </div>

          <div className="flex flex-wrap items-center gap-2 md:justify-end">
            <button
              className="btn btn-outline btn-sm md:btn-md"
              onClick={() => handleConsent("declined")}
            >
              Reject
            </button>
            <button
              className="btn btn-primary btn-sm md:btn-md"
              onClick={() => handleConsent("accepted")}
            >
              Accept
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}