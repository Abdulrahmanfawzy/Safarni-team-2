import { ChevronLeft, Search } from "lucide-react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "../../../components/ui/input-group";

type searchInputProps = { onInput: () => void };

export default function SearchInput({ onInput }: searchInputProps) {
  return (
    <div className="flex gap-8 content-center mt-8">
      <div className="bg-gray-100 rounded-full aspect-square flex p-3.75">
        <ChevronLeft size={30} />
      </div>
      <InputGroup>
        <InputGroupInput onInput={onInput} />
        <InputGroupAddon>
          <div>
            <Search stroke="var(--color-blue-500)" strokeWidth={1} />
          </div>
        </InputGroupAddon>
      </InputGroup>
    </div>
  );
}
