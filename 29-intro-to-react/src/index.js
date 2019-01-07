console.log("Hello World!")

const Article = (key, text) => {
  return React.createElement("article", { key: key, className: "message" }, text)
}

const article1 = Article("a1", "Why use React?")
const article2 = Article("a2", "Because components rock!")

const Page = (children) => {
  return React.createElement("div", { className: "container" }, children)
}

const ourPage = Page([article1, article2])

// console.log(Article)
// console.log(React)
// console.log(ReactDOM)
console.log(ourPage)

ReactDOM.render(
  ourPage,
  document.querySelector("#main")
)
