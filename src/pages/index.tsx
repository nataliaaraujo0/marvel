import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { GlobalStyle } from "../../styles/global";

const Home: NextPage = () => {
  return (
    <>
      <GlobalStyle />
      <h1>ola mundo</h1>
    </>
  )
}

export default Home
