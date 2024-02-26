export function Footer() {
  const date = new Date();
  return (
    <div className="w-screen flex flex-wrap gap-4 justify-between bg-nav-background p-8">
      <div className="m-auto">Designed and Developed by myself</div>
      <div className="m-auto">Copyright © {date.getFullYear()}</div>
    </div>
  );
}
