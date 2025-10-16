export function MatjipCard() {
  return (
    <div className='flex flex-col gap-2 items-center p-4 rounded-lg shadow-md transition-opacity duration-300 ease-in-out min-h-60 min-w-80'>
      <figure className='overflow-hidden relative w-full rounded-lg'>
        <img
          src=''
          alt=''
          className='object-cover object-center absolute inset-0 w-full h-full'
          loading='lazy'
        />
      </figure>
      <div className='w-full'>
        <h3 className='h-14 text-lg font-bold text-left'></h3>
        <p></p>
      </div>
    </div>
  );
}