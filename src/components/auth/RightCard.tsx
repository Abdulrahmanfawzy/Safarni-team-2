export default function RightCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full lg:w-1/2 h-full lg:h-[75%] lg:max-w-[608px] flex items-center justify-center lg:justify-start px-4 lg:px-0 pb-10 lg:pb-0">
      <div className="flex w-[510px] flex-col items-center justify-center h-full rounded-2xl">
        {children}
      </div>
    </div>
  );
}
