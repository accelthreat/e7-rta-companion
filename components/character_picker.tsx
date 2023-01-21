import { character_options } from "@/data/sample_data";
import { Control, Controller } from "react-hook-form";
import Select from "react-select";

export type FormValues = {
  first_pick: boolean;
  prebans: string[];
  pick_zero: string;
  pick_one: string;
  pick_two: string;
  pick_three: string;
  pick_four: string;
  pick_five: string;
  pick_six: string;
  pick_seven: string;
  pick_eight: string;
  pick_nine: string;
};

export type PickNumbers =
  | "pick_zero"
  | "pick_one"
  | "pick_two"
  | "pick_three"
  | "pick_four"
  | "pick_five"
  | "pick_six"
  | "pick_seven"
  | "pick_eight"
  | "pick_nine";

type CharacterPickersProps = {
  control: Control<FormValues, any>;
  name: PickNumbers;
  excluded: string[];
  disabled: boolean;
};

export function CharacterPicker({
  control,
  name,
  excluded,
  disabled = false,
}: CharacterPickersProps) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value, ref } }) => (
        <Select
          isDisabled={disabled}
          onChange={(newValue) => {
            onChange(newValue?.value);
          }}
          value={{ value: value, label: value }}
          ref={ref}
          options={character_options.filter((char) => {
            return !excluded.includes(char.value) || char.value == "";
          })}
          styles={{
            option: (styles, { isDisabled }) => {
              return {
                ...styles,
                backgroundColor: isDisabled ? "red" : "white",
                color: "black",
                cursor: isDisabled ? "not-allowed" : "default",
              };
            },
            valueContainer: (styles, { isDisabled }) => {
              return {
                ...styles,
                backgroundColor: isDisabled ? "gray" : "white",
              };
            },
          }}
        ></Select>
      )}
    ></Controller>
  );
}
