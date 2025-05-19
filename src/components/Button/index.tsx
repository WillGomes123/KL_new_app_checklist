import styled from "styled-components";

export type ButtonTypes = 'denied' | 'allow'

interface ButtonProps {

    name: string
    tipo: ButtonTypes
    onClick: ()=> void

}

export const StyledButton = styled.button<{tipo: ButtonTypes}>`
    backgrouynd-color: ${({tipo}) =>
        tipo ? '#ffff' : '#121212'

        }
    color:${({tipo}) =>
        tipo ? '#fff': '#121212'
        }

`
