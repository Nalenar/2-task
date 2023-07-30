const Background = () => {
  return (
    <div
      id="background"
      className="absolute inset-0 -z-20 h-full w-full sm:top-[55px] sm:overflow-hidden"
    >
      <div
        id="purple-light"
        className="absolute -top-[154px] right-[579px] h-[259px] w-[259px] rounded-[259px] bg-[#833ab4] opacity-50 blur-[196px] sm:-right-[197px] sm:top-[107px]"
      />
      <img
        src="/assets/purple_ball.svg"
        id="purple-ball"
        className="absolute right-[512px] top-[2px] h-[60px] w-[60px] blur-[5px] sm:-right-[16px] sm:top-[236px]"
      />
      <img
        src="/assets/red_ball.svg"
        id="red-ball"
        className="absolute right-[838px] top-[83px] h-[83px] w-[83px] sm:right-[248px] sm:top-[402px]"
      />
      <div
        id="red-light"
        className="absolute left-[-102px] top-[251px] h-[311px] w-[311px] rounded-[311px] bg-[#961A1A] opacity-50 blur-[196px] sm:-left-[55px] sm:top-[241px]"
      />
      <img
        src="/assets/red_ball.svg"
        id="red-ball-small"
        className="absolute right-[561px] top-[547px] h-[28px] w-[28px] sm:hidden"
      />
      <div className="glass h-full w-full"></div>
    </div>
  );
};

export default Background;
