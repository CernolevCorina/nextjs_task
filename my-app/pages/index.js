import Head from 'next/head';
import Layout from '../components/Layout';

import ColumnGroupingTable from '../components/Tabel';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Next.js learning</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>
          Welcome to Next.js!
        </h1>

        <ColumnGroupingTable/>
      </main>
    </Layout>
  )
}
