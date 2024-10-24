import * as S from "./style"


export const Input = ({title,type }) => {
    return (<S.Container>
        <S.Label>
            {title}
        </S.Label>    
        <S.Input type={type} />
    
    </S.Container>)
}