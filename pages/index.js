import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home(props) {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <h2>Hello this is custom marriage post In progress !</h2>
        <p>Bride Name : {props.postData.brideName}</p>
        <p>Grooms Name: {props.postData.groomName}</p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <img src={props.postData.image}></img>
        </div>
      </div>
    </main>
  )
}

export async function getStaticProps(){
  const response = await fetch("https://vast-ruby-clownfish-coat.cyclic.app/bhagykar")
  const data = await response.json()

  return{
    props:{
      postData:data[0]
    }
  }
}
