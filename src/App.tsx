import { CookingPot, Utensils } from 'lucide-react';
import { LikedList, MatjipList } from '@/components';

function App() {
  return (
    <main className='centralize h-full w-full flex-col gap-10'>
      <div className='centralize m-4 h-full w-5/6 flex-col gap-10'>
        <header className='centralize h-28 gap-4 p-4'>
          <CookingPot size={40} />
          <h1 className='heading block'>오늘 뭐 먹지?</h1>
          <Utensils size={40} />
        </header>
        <section className='centralize list'>
          <h1 className='sub-heading'>찜한 목록</h1>
          <LikedList />
        </section>
        <section className='centralize list'>
          <h1 className='sub-heading'>맛집 목록</h1>
          <MatjipList />
        </section>
      </div>
    </main>
  );
}

export default App;
