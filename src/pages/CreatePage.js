import { addDoc, collection } from "firebase/firestore"
import { db, auth } from "../firebase/config"
import { useNavigate } from "react-router-dom"
import { useTitle } from "../hooks/useTitle"

export const CreatePage = () => {

  const postRef = collection(db, "posts")
  const navigate = useNavigate()

  useTitle("Create post")

  async function handelCreatePost(event){
    event.preventDefault()
    console.log("---")
    const document = {
      title: event.target.title.value ,
      description: event.target.description.value,
      author: {
        name: auth.currentUser.displayName,
        id: auth.currentUser.uid
      }
    }
    await addDoc(postRef, document)
    navigate("/")
  }
  return (
    <section className="create">
      <div className="heading">
          <h1>Add new Post</h1>
      </div>
      <form className="createPost" onSubmit={handelCreatePost}>
        <input type="text" name="title" placeholder="Title" className="title" maxLength="50" required />
        <textarea type="text" name="description" className="description" maxLength="600" placeholder="Description" required></textarea>
        <button type="submit" className="submit">Submit</button>
      </form>

    </section>
  )
}
