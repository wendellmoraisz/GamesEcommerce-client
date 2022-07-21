import Cart from "../cart";
import Search from "../search";
import * as S from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGamepad, faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Header = () => {

    return (
        <S.Container>
            <S.Logo>
                React Games
                <FontAwesomeIcon icon={faGamepad} />
            </S.Logo>
            <Search />
            <Link to={"/login"}>
                <FontAwesomeIcon icon={faUser} />
            </Link>
            <Link to={"/cart"}>
                <Cart />
            </Link>
        </S.Container>
    );

}

export default Header;