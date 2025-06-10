import { SequenceAlignmentViewer } from "@pages/ComparableAminoAcids/";
import s from "./Layout.module.scss";

export const Layout = () => {
  return (
    <main className={s.Layout}>
      <SequenceAlignmentViewer />
    </main>
  );
};
