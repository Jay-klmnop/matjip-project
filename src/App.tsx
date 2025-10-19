import { CookingPot } from 'lucide-react';
import { LikedList, MatjipList } from './components';

function App() {
  return (
    <main className='centralize m-4 h-full w-full flex-col gap-4'>
      <header className='centralize h-32 gap-4 p-4'>
        <CookingPot size={40} />
        <div className='mt-2.5'>
          <h1 className='heading block'>오늘 뭐 먹지?</h1>
        </div>
      </header>
      <section className='centralize flex-col'>
        <h1 className='text-4xl'>찜한 목록</h1>
        <LikedList />
      </section>
      <section className='centralize flex-col'>
        <h1 className='text-4xl'>맛집 목록</h1>
        <MatjipList />
      </section>
    </main>
  );
}

export default App;
