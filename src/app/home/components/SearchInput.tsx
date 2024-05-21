import { Input } from "@/src/components/common/input/input";
import { FC } from "react";

type SearchInputProps = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const SearchInput: FC<SearchInputProps> = ({ onChange }) => {
  return (
    <div className="py-4 mx-auto max-w-[400px]" onChange={onChange}>
      <Input />
    </div>
  );
};
