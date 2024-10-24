import * as S from "./style"
import imagem from "../../assets/picture.svg"
import { Input } from "../../components/input"
    
export const Login = () => {
    
    return(<S.Container>
    
    <S.Column> <Input title="Emai Address" type="text"/> </S.Column>
    <S.Column> <S.Imagem src={imagem}/>  </S.Column>
    
    </S.Container>)
}