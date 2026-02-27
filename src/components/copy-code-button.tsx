"use client";

import { useEffect } from "react";
import { Check, Copy } from "lucide-react";

function addCopyButtons(container: HTMLElement) {
  container.querySelectorAll("pre").forEach((pre) => {
    if (pre.querySelector(".copy-code-btn")) return;

    pre.style.position = "relative";

    const btn = document.createElement("button");
    btn.className = "copy-code-btn";
    btn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>`;
    btn.title = "Copy code";

    btn.addEventListener("click", async () => {
      const code = pre.querySelector("code");
      const text = code?.textContent ?? "";
      await navigator.clipboard.writeText(text);

      btn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>`;
      btn.title = "Copied!";

      setTimeout(() => {
        btn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>`;
        btn.title = "Copy code";
      }, 2000);
    });

    pre.appendChild(btn);
  });
}

export function CopyCodeInjector({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const article = document.querySelector("article.prose");
    if (article) addCopyButtons(article as HTMLElement);
  }, []);

  return <>{children}</>;
}
