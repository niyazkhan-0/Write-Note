import { useEffect, useState, useRef } from 'react';
import { getDocs, collection } from 'firebase/firestore';
import { db } from '../firebase/config';
import { PostCard } from './../components/';
import { useTitle } from './../hooks/useTitle';
import { SkeletonCard } from '../components/SkeletonCard';


export const HomePage = () => {
  const [posts, setPosts] = useState(new Array(2).fill(false))
  const [toggel, setToggel] = useState(false)
  const postRef = useRef(collection(db, "posts"))
  
  useTitle("Posts")
  
  useEffect(() => {
    async function getPost() {
      const data = await getDocs(postRef.current);
      setPosts(data.docs.map((document) => ({...document.data() , id:document.id})))
    }
    getPost()
    
  } ,[toggel, postRef])
  return (
    <section>
      {posts.map((post,index) => (
        post ? (
          <PostCard posts={post} key={post.id} toggel={toggel} setToggel={setToggel} />
        ) : (
          <SkeletonCard key={index}/>
        )
      ))}
    </section>
  )
}
