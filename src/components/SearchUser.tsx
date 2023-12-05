import { FormEvent, useState } from 'react'
import styled from 'styled-components';


const SearchContainer = styled.div`
    display: flex;
    flex-direction: column;
    min-width: 320px;
    margin: 0 18px;


    form{
        display:  flex;
        flex-direction: column;
        gap: 5px;

    }
`

const SearchTextInput = styled.input`
  height: 45px;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 8px;
  margin-bottom: 8px;
`;

const SearchButton = styled.button`
    height: 35px;
    border-radius: 8px;
    border: 1px solid #3b3b3b;
    background-color: #3e4b51;
    color: #C9D1D9;
`

interface SearchProps{
    setUser: React.Dispatch<React.SetStateAction<string>>;
}

export function SearchUser({ setUser }: SearchProps) {
    const [search, setSeach] = useState<string>('')

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setUser(search)
    }

    return (
        <SearchContainer>
            <form onSubmit={handleSubmit}>
                <SearchTextInput
                    value={search}
                    onChange={(e) => setSeach(e.target.value)}
                    placeholder="Digite o nome do usuário do GitHub"
                    required
                />
                <SearchButton type="submit">Pesquisar</SearchButton>
            </form>
        </SearchContainer>
    )
}


