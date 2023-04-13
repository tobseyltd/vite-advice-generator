interface Props {
  id: number;
  advice: string;
  randomAdvice: () => void;
}

const AdviceGenerator = ({ advice, id, randomAdvice }: Props) => {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center bg-dark-grayish-blue p-5">
      <div className="container mx-auto flex flex-col items-center rounded-3xl bg-grayish-blue/50 p-16">
        <p className="mb-5 text-sm tracking-widest text-neon-green">
          ADVICE #{id}
        </p>
        <blockquote className="mb-5 text-center text-4xl font-bold text-light-cyan">
          "{advice}"
        </blockquote>
        <img
          className="mt-5"
          src="../src/assets/adviceGenerator/pattern-divider-desktop.svg"
          alt=""
        />
      </div>
      <div
        onClick={randomAdvice}
        className="-mt-8 rounded-full bg-neon-green p-5 hover:cursor-pointer"
      >
        <img src="../src/assets/adviceGenerator/icon-dice.svg" alt="" />
      </div>
    </div>
  );
};

export default AdviceGenerator;
