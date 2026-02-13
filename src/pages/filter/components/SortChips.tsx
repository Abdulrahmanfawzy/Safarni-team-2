import * as ToggleGroup from "@radix-ui/react-toggle-group";

type Option<T extends string> = { label: string; value: T };

type SingleProps<T extends string> = {
  heading: string;
  type: "single";
  value?: T;
  onChange: (v?: T) => void;
  options: Option<T>[];
};

type MultipleProps<T extends string> = {
  heading: string;
  type: "multiple";
  value: T[];
  onChange: (v: T[]) => void;
  options: Option<T>[];
};

export function SortChips<T extends string>(
  props: SingleProps<T> | MultipleProps<T>,
) {
  const { heading, type, options } = props;

  return (
    <div className="space-y-3">
      <p className="text-[24px] font-semibold text-gray-800">{heading}</p>

      <ToggleGroup.Root
        type={type}
        value={type === "single" ? props.value : props.value}
        onValueChange={(v) => {
          if (type === "single") {
            props.onChange((v || undefined) as T | undefined);
          } else {
            props.onChange(v as T[]);
          }
        }}
        className="flex flex-wrap gap-4 py-4 md:justify-between"
      >
        {options.map((opt) => (
          <ToggleGroup.Item
            key={opt.value}
            value={opt.value}
            className={[
              "rounded-full border-2 px-8 py-2 text-[20px] font-medium cursor-pointer border-(--secondary-blue)",
              "transition hover:shadow",
              "data-[state=on]:text-(--primary-blue) data-[state=on]:bg-(--secondary-blue)",
              "data-[state=off]:text-[#6B7280]",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2",
            ].join(" ")}
          >
            {opt.label}
          </ToggleGroup.Item>
        ))}
      </ToggleGroup.Root>
    </div>
  );
}
