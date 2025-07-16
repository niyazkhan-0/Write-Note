import { doc, deleteDoc } from "firebase/firestore"
import { auth, db } from "../firebase/config"

export const PostCard = ({ posts, toggel, setToggel }) => {
  const isAuth = JSON.parse(localStorage.getItem("isAuth"))
  const { id, title, description, author } = posts

  async function handelDelete() {
    const document = doc(db, "posts", id )
    await deleteDoc(document)
    setToggel(!toggel)
  }
  console.log("---")
  return (
    <div className='card'>
      <p className="title"> {title} </p>
      <p className="description">{description}</p>
      <p className='control'>
        <span className='author'>{author.name}</span>
        {isAuth && (auth.currentUser.displayName === author.name) && <span onClick={handelDelete} className='delete'><i className="bi bi-trash3"></i></span>}
      </p>
    </div>
  )
}
