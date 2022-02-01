import type { NextPage } from 'next'
import Head from "next/head"
import { List } from "../components/List"
import { Container } from "./home"
const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>
          Marve characters
        </title>
      </Head>

      <Container>
        <List />
      </Container>
    </>
  )
}

export default Home
