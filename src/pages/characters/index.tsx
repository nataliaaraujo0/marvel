import type { NextPage } from 'next'
import Head from "next/head"
import { Container, Content } from './styled'

const Characters: NextPage = () => {
  return (
    <>
      <Head>
        <title>
           Characters
        </title>
      </Head>

      <Container>
        <Content>
            <h1>Doctor Strange</h1>
        </Content>
      </Container>
    </>
  )
}

export default Characters