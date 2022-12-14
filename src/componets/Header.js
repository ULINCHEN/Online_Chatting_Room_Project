
import styled from "styled-components";
import { Avatar } from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SearchIcon from '@mui/icons-material/Search';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";

const Header = () => {

    const [user] = useAuthState(auth);
    console.log("user is ", user);
    return (
        <HeaderContainer>

            <HeaderLeft>
                <HeaderAvatar
                    onClick={() => auth.signOut()}
                    alt={user?.displayName}
                    src={user?.photoURL}
                    referrerpolicy="no-referrer"

                />
                < AccessTimeIcon />
            </HeaderLeft>

            <HeaderSearch>
                <SearchIcon />
                <input placeholder="Search" />
            </HeaderSearch>

            <HeaderRight>
                <HelpOutlineIcon />
            </HeaderRight>

        </HeaderContainer>
    )
}

export default Header;

const HeaderContainer = styled.div`
    display: flex;
    position: fixed;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    padding: 10px 0;
    background-color: var(--slack-color);
    color: white;

`

const HeaderLeft = styled.div`
    flex: 0.3;
    display: flex;
    align-items: center;
    margin-left:10px;

    > .MuiSvgIcon-root{
        margin-left: auto;
        margin-right: 30px;
    }
`

const HeaderAvatar = styled(Avatar)`
    cursor: pointer;
    :hover{
        opacity: 0.8;
    }
`

const HeaderSearch = styled.div`
    flex: 0.4;
    opacity: 1;
    border-radius: 6px ;
    background-color: #421f44;
    text-align: center;
    display: flex;
    padding: 0 50px;
    border: 1px gray solid;

    > input{
        background-color: transparent;
        border:none;
        text-align: center;
        min-width: 30vw;
        outline: 0;
        color: white;
    }
`

const HeaderRight = styled.div`
    flex: 0.3;
    display: flex;
    align-items: flex-end;
    > .MuiSvgIcon-root{
        margin-left: auto;
        margin-right: 20px;
    }
`