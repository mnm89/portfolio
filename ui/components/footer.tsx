export function Footer() {
  const date = new Date();

  return (
    <div className="w-screen flex justify-between bg-nav-background p-8">
      <div>Designed and Developed by myself</div>
      <div>Copyright © {date.getFullYear()}</div>
    </div>
  );
}
