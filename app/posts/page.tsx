
//ini server component karena kita ga punya interaktif ke browser api
//button liat user ada di client component.

import CardList from "../components/Posts/CardList"
import ViewUserButton from "../components/Posts/ViewUserButton"

//endpoint api
const base_url = "https://jsonplaceholder.typicode.com/posts" 

//untuk interface post dari api yg sudah difetch mengandung apa aja
interface Iposts {
  userId: number,
  id: number,
  title: string,
  body: string
}

//code untuk fetch dengan base yg diatas, ketika buat vaariabel response
//ketika buat response dan di tunggu maka bikin variabel baru yaitu post dengan bentuk data seperti ipost dalam array karena punya banyak data
//ipost ini harus punya banyak data, yang mana ini dibentuk dalam json lalu dimapping di bagian komponen
const Posts = async() => {
  const response = await fetch(base_url, {
    cache: "no-store"
  })
  const posts:Iposts[] = await response.json()
  return (
    <>
    <p>{new Date().toLocaleTimeString()}</p>
    <h1 className="text-fuchsia-200">Postingan Post</h1>
    {posts.map((post) => {
      return (
        <CardList key={post.id}> 
        <p>{post.id}</p>
        <p>{post.body}</p>
        <p>{post.title}</p>
        <ViewUserButton userId={post.userId}/>
      </CardList>
      )
    })}
    </>

  )
}

export default Posts

//key supaya ketika kita mapping dimasukkan dari bagian terluar dari apa saja yg kita mapping.
