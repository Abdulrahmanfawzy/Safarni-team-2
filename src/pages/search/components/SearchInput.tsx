import { Search } from "lucide-react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "../../../components/ui/input-group";
import PreviousButton from "../../../components/common/PreviousButton";

type searchInputProps = { onInput: () => void };

export default function SearchInput({ onInput }: searchInputProps) {
  return (
    <div className="flex gap-8 content-center mt-8">
      <PreviousButton />
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
