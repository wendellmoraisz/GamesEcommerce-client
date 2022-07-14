import Cart from "../cart";
import Search from "../search";
import * as S from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGamepad, faUser } from "@fortawesome/free-solid-svg-icons";

const Header = () => {

    return (
        <S.Container>
            <S.Logo>
                Games Shop
                <FontAwesomeIcon icon={faGamepad} />
            </S.Logo>
            <Search />
            <a href="#">
                <FontAwesomeIcon icon={faUser}/>
            </a>
            <Cart />
        </S.Container>
    );

}

export default Header;