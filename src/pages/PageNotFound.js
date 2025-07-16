import PageNotFoundImg from "../assets/images/page-not-found.jpg"
import { Link } from "react-router-dom"
import { useTitle } from "../hooks/useTitle"

export const PageNotFound = () => {
  useTitle("Page Note Found")
  return (
    <section className="pageNotFound">
      <p>404 / Page not found</p>
      <img src={PageNotFoundImg} alt="" />
      <Link to="/">
        <button>Back to home</button>
      </Link>
    </section>
  )
}
