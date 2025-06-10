import { colorLetter } from "@utils/colorLetter.ts";
import s from "./CheckSequences.module.scss";
interface Props {
  sequence1: string;
  sequence2: string;
}
// ARNDGHILKMFPSTWYVCEQARNDCEQGHILKMFPSTWYV
export const CheckSequences = ({ sequence1, sequence2 }: Props) => {
  return (
    <div className={s.CheckSequences}>
      <p>{sequence1}</p>
      <ul className={s.list}>
        {sequence1.split("").map((letter, index) => {
          const backgroundSeq1 = colorLetter[letter];
          const backgroundSeq2 = letter !== sequence2[index] ? "gray" : "";
          return (
            <li key={index} className={s.item}>
              <p style={{ backgroundColor: backgroundSeq1 }}>{letter}</p>
              <p style={{ backgroundColor: backgroundSeq2 }}>
                {sequence2[index]}
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
