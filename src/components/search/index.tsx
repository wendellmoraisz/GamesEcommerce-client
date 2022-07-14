import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import * as S from "./styles";


const Search = () => {

    return (
        <S.InputContainer>
            <S.InputSearch type="text" />
            <S.SearchButton>
                <FontAwesomeIcon icon={faSearch} />
            </S.SearchButton>
        </S.InputContainer>
    );
}

export default Search;