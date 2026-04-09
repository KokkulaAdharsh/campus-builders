import lynxLogo from "@/assets/lynx-logo.png";

const LynxFooter = () => {
  return (
    <footer className="border-t border-border py-12 px-6">
      <div className="max-w-6xl mx-auto text-center flex flex-col items-center">
        <img src={lynxLogo} alt="LYNX Logo" className="h-10 w-auto mb-3" />
        <p className="text-subtle text-sm mb-6">
          Empowering students. Bridging the gap. Building the future.
        </p>
        <p className="text-micro text-[10px]">
          © 2025 LYNX — AI-Driven Campus Tech Initiative
        </p>
      </div>
    </footer>
  );
};

export default LynxFooter;
