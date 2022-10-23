import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import norigin_logo from '../../../assets/norigin_logo.png'
import { Wrapper } from "./Header.styles";
export const Header = () => {
  return (
    <Wrapper>
      <PersonIcon sx={{ color: "white", fontSize: "2.5rem" }} />
      <img src={norigin_logo} alt="norigin_logo" />
      <SearchIcon sx={{ color: "white", fontSize: "2.5rem" }} />
    </Wrapper>
  );
};
