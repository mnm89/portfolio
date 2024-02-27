"use client";
import GitHubButton from "react-github-button";
export function Footer() {
  const date = new Date();
  return (
    <div className="w-screen flex flex-wrap gap-4 justify-center bg-nav-background p-8">
      <div className="text-md font-bold m-auto">
        Designed and Developed by myself
      </div>
      <div className="flex gap-2 m-auto">
        <GitHubButton
          type="stargazers"
          size="large"
          namespace="mnm89"
          repo="portfolio"
        />

        <GitHubButton
          type="forks"
          size="large"
          namespace="mnm89"
          repo="portfolio"
        />
      </div>
      <div className="text-md font-bold m-auto">
        Copyright © {date.getFullYear()}
      </div>
    </div>
  );
}
