import { colorLetter } from "@utils/colorLetter.ts";
import s from "./CheckSequences.module.scss";
interface Props {
  sequence1: string;
  sequence2: string;
}

export const CheckSequences = ({ sequence1, sequence2 }: Props) => {
  return (
    <div className={s.CheckSequences}>
      <ul className={s.list}>
        {sequence1.split("").map((letter, index) => {
          const backgroundSeq1 = colorLetter[letter];
          const letterSeq2 = sequence2[index];
          const backgroundSeq2 =
            letter !== letterSeq2 ? colorLetter[letterSeq2] : "";
          return (
            <li className={s.wrapper}>
              <span style={{ backgroundColor: backgroundSeq1 }}>{letter}</span>
              <span style={{ backgroundColor: backgroundSeq2 }}>
                {sequence2[index]}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
