export default async function Home() {
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/550?api_key=${process.env.API_KEY}`
  );
  const res = await data.json();
  console.log(res);
  return (
    <main>
      <h1 className="">Started with next13</h1>
    </main>
  );
}
