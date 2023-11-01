import { useAddBlockItemForm } from "@/features/block-list/model/use-add-block-item-form";
import { UiSelectField } from "@/shared/ui/ui-select-field";
import { UiTextField } from "@/shared/ui/ui-text-field";
import { UiButton } from "@/shared/ui/ui-button";
import { AddBlockItemDtoType } from "@/shared/api/generated";

const typeOptions = [
  { label: "Website", value: AddBlockItemDtoType.Website },
  { label: "KeyWord", value: AddBlockItemDtoType.Key },
];

export function AddBlockItemForm() {
  const { handleSubmit, isLoading, type, register } = useAddBlockItemForm();
  return (
    <form className="flex gap-2" onSubmit={handleSubmit}>
      <UiSelectField options={typeOptions}
        className="grow min-w-[200px]"
        selectProps={{ ...register("type") }}
      />
      <UiTextField
        className="grow"
        inputProps={{
          placeholder: type === "Key" ? "Enter Key World" : "Enter Website",
          ...register("data"),
        }}
      />
      <UiButton disabled={isLoading}>Add Block Item</UiButton>
    </form>
  );
}
