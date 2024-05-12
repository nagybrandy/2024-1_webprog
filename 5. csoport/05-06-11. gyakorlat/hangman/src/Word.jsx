import cn from "classnames";
import Letter from "./Letter";

const Word = () => {
  const won = false;
  return (
    <div id="szo" className={cn({ nyer: won })}>
      <Letter visible={false} missing={false}>
        a
      </Letter>
      <Letter visible={true} missing={false}>
        b
      </Letter>
      <Letter visible={false} missing={true}>
        c
      </Letter>
      <Letter visible={true} missing={true}>
        d
      </Letter>
    </div>
  );
};

export default Word;
