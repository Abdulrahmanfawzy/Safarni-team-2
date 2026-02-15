export default function SectionHeading({ content }: { content: string }) {
  return (
    <h3 className="text-[20px] lg:text-[22px] font-semibold text-gray-800">
      {content}
    </h3>
  );
}
