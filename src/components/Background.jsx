import { Player } from "@lottiefiles/react-lottie-player";
import background from "../public/background.json";

export const Background = () => {
  return (
    <div>
      <Player
        autoplay
        loop
        src={background}
        style={{
          position: "absolute",
          zIndex: "-3",
          opacity: "0.9",
        }}
      ></Player>
    </div>
  );
};
