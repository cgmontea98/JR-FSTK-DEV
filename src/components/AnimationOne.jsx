import { Player } from "@lottiefiles/react-lottie-player";
import animationsing from "../public/AnimationSing.json";
export const AnimationOne = () => {
  return (
    <div>
      <Player
        autoplay
        loop
        src={animationsing}
        style={{
          height: "50%",
          display: "flex",
          textAlign: "center",
          alignItems: "center",
        }}
      ></Player>
    </div>
  );
};
