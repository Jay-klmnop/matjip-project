import { LikedList, MainList } from "./components"

function App() {
  return (
    <>
      <section>
        <h1 className="heading">찜한 목록</h1>
        <LikedList />
      </section>
      <section>
        <h1 className="heading">맛집 리스트</h1>
        <MainList />
      </section>
    </>
  )
}

export default App
