export default function RightCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-1/2 h-[75%] max-w-[608px] flex items-center justify-start">
      <div className="flex flex-col items-center justify-center h-full w-full rounded-2xl">
        {children}
      </div>
    </div>
  );
}
