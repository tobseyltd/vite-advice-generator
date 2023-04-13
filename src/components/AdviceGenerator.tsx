import tw from "tailwind-styled-components";
import icon from "../assets/adviceGenerator/icon-dice.svg";

interface Props {
  id: number;
  advice: string;
  randomAdvice: () => void;
}

// COMPONENT FUNCTION ///////////////////////////////////////////////////////////////////////////////////////

const AdviceGenerator = ({ advice, id, randomAdvice }: Props) => {
  return (
    <DIVwrapper>
      <DIVcontainer>
        <Pid>ADVICE #{id}</Pid>

        <BQadvice>"{advice}"</BQadvice>

        <img
          className="mt-5"
          src="../src/assets/adviceGenerator/pattern-divider-desktop.svg"
          alt=""
        />
      </DIVcontainer>

      <DIVbuttonWrapper onClick={randomAdvice}>
        <img src={icon} alt="" />
      </DIVbuttonWrapper>
    </DIVwrapper>
  );
};

export default AdviceGenerator;

// STYLED COMPONENTS ///////////////////////////////////////////////////////////////////////////////////////

const DIVwrapper = tw.div`
    flex
    h-screen 
    w-screen 
    flex-col 
    items-center 
    justify-center 
    bg-dark-grayish-blue 
    p-5
`;

const DIVcontainer = tw.div`
    container
    md:w-7/12
    xl:w-4/12 
    mx-auto 
    flex 
    flex-col 
    items-center 
    rounded-3xl 
    bg-grayish-blue/50 
    p-16
`;

const DIVbuttonWrapper = tw.div`
    -mt-8 
    rounded-full 
    bg-neon-green 
    p-5 
    hover:cursor-pointer
`;

const Pid = tw.p`
    mb-5 
    text-sm 
    tracking-widest 
    text-neon-green
`;

const BQadvice = tw.blockquote`
    mb-5 
    text-center 
    text-4xl 
    font-bold 
    text-light-cyan
`;
