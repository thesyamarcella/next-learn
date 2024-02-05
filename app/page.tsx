import AnimeList from "@/app/components/AnimeList"
import Link from "next/link";


export default function Home() {
  return (
    <>
    <h1> Test</h1>
    <Link href="/posts">Posting</Link> 
    <Link href="/albums">Album</Link>
    <AnimeList />
    </>
  );
}

//meminimalisir resource berulang