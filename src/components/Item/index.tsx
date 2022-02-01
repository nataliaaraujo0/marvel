import { Card, ShapeImg } from "./styled"
import Image from 'next/image'

export function Item() {
    return (
        <Card>
            <ShapeImg>
                <Image
                    src="/images/avatar.png"
                    alt="avatar"
                    width={200}
                    height={148}
                />

            </ShapeImg>
            <h1>Doctor Strange</h1>
        </Card>
    )
}