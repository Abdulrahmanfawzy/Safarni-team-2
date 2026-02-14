import { Button } from "../../../components/ui/button";

export default function FilterButtons() {
  return (
    <div className="flex gap-6 my-12">
      <Button
        variant={"alternative"}
        className="font-semibold text-[20px] py-6 flex-1 "
      >
        Clear All
      </Button>
      <Button className="font-semibold text-[20px] py-6 flex-1 border shadow-xs">
        56 Tours Found
      </Button>
    </div>
  );
}
