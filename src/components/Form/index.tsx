import { useForm } from "react-hook-form";
import { Button, TextInput } from "@mantine/core";
import s from "./Form.module.scss";
interface Props {
  onChange: (data: FormData) => void;
}

export interface FormData {
  sequence1: string;
  sequence2: string;
}

export const Form = ({ onChange }: Props) => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<FormData>({
    mode: "onChange",
  });

  const onSubmit = (data: FormData) => {
    if (data.sequence1.length !== data.sequence2.length) {
      setError("sequence2", {
        type: "manual",
        message: "Длины sequence1 и sequence2 должны совпадать",
      });
      return;
    }
    onChange(data);
  };

  const handleInputValidateLetter = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const onlyValid = e.target.value
      .toUpperCase()
      .replace(/[^ARNDCEQGHILKMFPSTWYV-]/g, "");
    e.target.value = onlyValid;
  };

  return (
    <form className={s.Form} onSubmit={handleSubmit(onSubmit)}>
      <TextInput
        label="Последовательность 1"
        placeholder="Введите первую последовательность"
        {...register("sequence1", {
          required: "Поле обязательно",
        })}
        error={errors.sequence1?.message}
        mb="sm"
        onInput={handleInputValidateLetter}
      />
      <TextInput
        label="Последовательность 2"
        placeholder="Введите вторую последовательность"
        {...register("sequence2", {
          required: "Поле обязательно",
        })}
        error={errors.sequence2?.message}
        mb="sm"
        onInput={handleInputValidateLetter}
      />
      <Button type="submit">Проверить</Button>
    </form>
  );
};
