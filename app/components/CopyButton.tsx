"use client";

export default function CopyButton({ text }: { text: string }) {
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
  };

  return (
    <button
      onClick={handleCopy}
      className="text-nebula-blue text-sm hover:text-white transition"
    >
      Copy
    </button>
  );
}
