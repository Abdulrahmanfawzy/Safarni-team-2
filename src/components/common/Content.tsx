export default function Content({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full h-full lg:h-screen flex flex-col lg:flex-row items-center justify-between gap-6 px-4 lg:px-0 py-6 lg:py-0">
      {children}
    </div>
  );
}
