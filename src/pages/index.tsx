import Head from 'next/head'
import Image from 'next/image'

export default function Home () {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

        width: '100%',
        height: '100%'
      }}
    >
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

    <div
      style={{
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <Image
        src='/camisalendas.png'
        alt='imagem de uma camisa'
        width={600}
        height={600}
      />
      <div
        className="buttons"
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between'
        }}
      >
        <button
          style={{
            paddingTop: 10,
            margin: '10px 0'
          }}
        >
          Compre pelo mercado pago
        </button>

        <button
          style={{
            paddingTop: 10,
            margin: '10px 0'
          }}
        >
          compre pelo strapi
        </button>
      </div>

    </div>
    </div>
  )
}
