import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import useProduct from "../../hooks/useProduct";
import * as S from "./styles";
import { useState } from "react";

const Search = () => {
    const { changeUrlParam } = useProduct();
    const [searchValue, setSearchValue] = useState("");
    const searchProduct = (searchParam: string) => {
        if(searchParam !== "") changeUrlParam(`/nameStartsWith/${searchParam}`);
    }

    return (
        <S.InputContainer>
            <S.InputSearch placeholder="Busque aqui" type="text" onChange={e => setSearchValue(e.target.value)}/>
            <S.SearchButton onClick={() => searchProduct(searchValue)}>
                <FontAwesomeIcon icon={faSearch} />
            </S.SearchButton>
        </S.InputContainer>
    );
}

export default Search;