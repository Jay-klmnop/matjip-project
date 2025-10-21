import { CookingPot, Utensils } from 'lucide-react';
import { LikedList, MatjipList } from '@/components';

function App() {
  return (
    <main className='centralize h-full w-full flex-col gap-12'>
      <div className='centralize m-4 h-full w-5/6 flex-col gap-12'>
        <header className='centralize h-32 gap-4 p-4'>
          <CookingPot size={44} strokeWidth={3} />
          <h1 className='heading mb-2.5 ml-0.5 block'>오늘 뭐 먹지?</h1>
          <Utensils size={45} strokeWidth={3} />
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
