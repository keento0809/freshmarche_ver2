import { render, screen } from "@testing-library/react";
import { SearchInput } from "./SearchInput";
import userEvent from "@testing-library/user-event";

describe("SearchInput", () => {
  const renderSearchInput = () => {
    const mockText = "test";
    const onChange = vi.fn();
    const user = userEvent.setup();
    render(<SearchInput onChange={onChange} />);

    const input = screen.getByRole("textbox");

    return {
      mockText,
      onChange,
      user,
      input,
    };
  };

  it("should render SearchInput component", () => {
    const { input } = renderSearchInput();

    expect(input).toBeInTheDocument();
  });

  it("should call onChange when users input text", async () => {
    const { mockText, onChange, user, input } = renderSearchInput();

    await user.type(input, mockText);

    expect(onChange).toHaveBeenCalledWith(mockText);
  });
});
