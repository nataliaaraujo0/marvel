import { Container, } from "./styled"
import Image from 'next/image'

export function Header() {
    return (
        <Container>
            <Image
                src="/images/logo.svg"
                alt="logo"
                width={133}
                height={77}
            />
        </Container>
    )
}