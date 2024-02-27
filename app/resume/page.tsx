import { EmploymentHistory } from "@/ui/sections/employment-history";
import Link from "next/link";
import { FaFilePdf, FaDownload } from "react-icons/fa6";

export default function Resume() {
  return (
    <section>
      <Link
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="text-md w-fit p-2 flex flex-nowrap gap-2 rounded-full border animate-bounce border-white border-solid hover:scale-110"
      >
        <FaFilePdf />
        <span>Download pdf</span>
        <FaDownload />
      </Link>
      <EmploymentHistory />
    </section>
  );
}
