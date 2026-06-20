import { useEffect, useState } from 'react';

const PHONE = '9779860486269';
const PRESET_MESSAGE = encodeURIComponent(
  "Hi Point Zero — I'd like to discuss a project. (Source: website)",
);
const HREF = `https://wa.me/${PHONE}?text=${PRESET_MESSAGE}`;

export default function WhatsAppFab() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 1200);
    return () => clearTimeout(t);
  }, []);

  if (!mounted) return null;

  return (
    <a
      href={HREF}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Point Zero on WhatsApp"
      title="Chat with Point Zero on WhatsApp"
      data-analytics="whatsapp-fab"
      className="fixed bottom-5 right-5 z-[60] inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg shadow-emerald-500/30 hover:scale-110 transition-transform focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        className="w-7 h-7"
        aria-hidden="true"
      >
        <path
          fill="currentColor"
          d="M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.415-.545-.516-1.146-1.13-1.46-1.804a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.831 2.722.831.474 0 2.07-.39 2.49-.939.214-.288.301-.659.301-1.02 0-.2-.027-.41-.171-.5-.171-.071-2.37-1.235-2.625-1.235zm-2.6 8.064c-1.677 0-3.31-.458-4.732-1.319l-3.31 1.06 1.066-3.225a9.4 9.4 0 0 1-1.49-5.119c0-5.196 4.27-9.426 9.466-9.426 5.196 0 9.426 4.23 9.426 9.426 0 5.196-4.23 9.426-9.426 9.426zm0-20.85c-6.3 0-11.428 5.128-11.428 11.428 0 2.105.572 4.166 1.643 5.943L4.6 28.97l6.456-2.122a11.318 11.318 0 0 0 5.453 1.392c6.3 0 11.428-5.13 11.428-11.428.014-6.305-5.114-11.434-11.43-11.434z"
        />
      </svg>
    </a>
  );
}
