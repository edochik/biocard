import { Button, TextInput } from "@mantine/core";
import s from "./SequenceAlignmentViewer.module.scss";

export const SequenceAlignmentViewer = () => {
  return (
    <div className={s.SequenceAlignmentViewer}>
      <TextInput
        label="Sequence 1"
        placeholder="Введите первую последовательность"
        mb="sm" // отступ снизу
      />
      <TextInput
        label="Sequence 2"
        placeholder="Введите вторую последовательность"
        mb="sm"
      />
      <Button>Выровнить</Button>
    </div>
  );
};
