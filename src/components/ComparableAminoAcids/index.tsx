import s from "./SequenceAlignmentViewer.module.scss";
import { useState } from "react";
import { Form, type FormData } from "@components/Form/";
import { CheckSequences } from "../CheckSequences/index.tsx";

export const SequenceAlignmentViewer = () => {
  const [sequences, setSequences] = useState<null | FormData>(null);
  const onClickClear = () => {
    setSequences(null);
  };
  return (
    <div className={s.SequenceAlignmentViewer}>
      <p className={s.text}>
        Допустимые символы для ввода: |ARNDCEQGHILKMFPSTWYV-|
      </p>
      <Form onChange={(data: FormData) => setSequences(data)} onClear={onClickClear} />
      {sequences && (
        <CheckSequences
          sequence1={sequences.sequence1}
          sequence2={sequences.sequence2}
        />
      )}
    </div>
  );
};
