interface OptionCardProps {
  title: string;
  description: string;
  danger?: boolean;
}

function OptionCard({ title, description, danger }: OptionCardProps) {
  return (
    <div
      className={`p-4 rounded-lg border cursor-pointer transition hover:shadow-md ${
        danger ? "border-red-500 text-red-600" : "border-gray-300 text-gray-800"
      }`}
    >
      <h2 className="font-semibold">{title}</h2>
      <p className="text-sm mt-1">{description}</p>
    </div>
  );
}

export default OptionCard;
