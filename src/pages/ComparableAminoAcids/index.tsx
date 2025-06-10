import s from "./SequenceAlignmentViewer.module.scss";
import { useState } from "react";
import { Form, type FormData } from "@components/Form/";
import { CheckSequences } from "./components/checkSequences.tsx";

export const SequenceAlignmentViewer = () => {
  const [sequences, setSequences] = useState<null | FormData>(null);

  return (
    <div className={s.SequenceAlignmentViewer}>
      <p>Допустимые символы для ввода: |ARNDCEQGHILKMFPSTWYV-|</p>
      <Form onChange={(data: FormData) => setSequences(data)} />
      {sequences && (
        <CheckSequences
          sequence1={sequences.sequence1}
          sequence2={sequences.sequence2}
        />
      )}
    </div>
  );
};
