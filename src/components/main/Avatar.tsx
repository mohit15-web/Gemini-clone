import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const Avataar = () => {
  return (
    <>
      <Avatar>
        <AvatarImage src="https://i.pinimg.com/736x/fa/d5/e7/fad5e79954583ad50ccb3f16ee64f66d.jpg" />
        <AvatarFallback>PV</AvatarFallback>
      </Avatar>
    </>
  );
};

export default Avataar;
