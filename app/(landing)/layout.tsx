import BackgroundImage from "./_components/BackgroundImage";
import NavBar from "./_components/NavBar";

interface LandingLayoutProps {
  children: React.ReactNode;
}

const LandingLayout = ({ children }: LandingLayoutProps) => {
  return (
    <>
      <BackgroundImage />
      <NavBar />
      {children}
    </>
  );
};

export default LandingLayout;
