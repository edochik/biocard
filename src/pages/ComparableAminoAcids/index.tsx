import { Button, TextInput } from "@mantine/core";
import s from "./SequenceAlignmentViewer.module.scss";
import { useForm } from "react-hook-form";

interface FormData {
  sequence1: string;
  sequence2: string;
}

const validAminoAcids = /^[ARNDCEQGHILKMFPSTWYV-]+$/i;

export const SequenceAlignmentViewer = () => {
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
    <div className={s.SequenceAlignmentViewer}>
      <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
        <TextInput
          label="Последовательность 1"
          placeholder="Введите первую последовательность"
          {...register("sequence1", {
            required: "Поле обязательно",
            pattern: {
              value: validAminoAcids,
              message: "Только буквы аминокислот и дефис",
            },
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
            pattern: {
              value: validAminoAcids,
              message: "Только буквы аминокислот и дефис",
            },
          })}
          error={errors.sequence2?.message}
          mb="sm"
          onInput={handleInputValidateLetter}
        />
        <Button type="submit">Проверить</Button>
      </form>
    </div>
  );
};
