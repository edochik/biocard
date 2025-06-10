import { Button, TextInput } from "@mantine/core";
import s from "./SequenceAlignmentViewer.module.scss";
import { useState } from "react";

export const SequenceAlignmentViewer = () => {
  const [sequenceFirst, setSequenceFirst] = useState("");
  const [sequenceSecond, setSequenceSecond] = useState("");
	
  return (
    <div className={s.SequenceAlignmentViewer}>
      <TextInput
        label="Последовательность 1"
        placeholder="Введите первую последовательность"
        mb="sm"
        value={sequenceFirst}
        onChange={(e) => setSequenceFirst(e.target.value)}
      />
      <TextInput
        label="Последовательность 2"
        placeholder="Введите вторую последовательность"
        mb="sm"
        value={sequenceSecond}
        onChange={(e) => setSequenceSecond(e.target.value)}
      />
      <Button>Проверить</Button>
    </div>
  );
};
