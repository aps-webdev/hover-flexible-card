import './App.css';

function App() {
  const imageIds = [
    '1500462918059-b1a0cb512f1d',
    '1531581147762-5961e6e2e6b1',
    '1626204327506-0d3ee11d7752',
    '1549068106-b024baf5062d',
  ];
  return (
    <div className='flex min-h-screen justify-center items-center'>
      <ul className='flex w-full max-w-5xl gap-4'>
        {[...Array(4).keys()].map((_, idx) => {
          return (
            <li
              key={idx}
              className='h-[500px] w-full rounded-2xl relative overflow-hidden group flex-1 transition-all duration-300 ease-in-out hover:grow-[1.4]'>
              <img
                className='absolute inset-0 h-full object-cover'
                src={`https://images.unsplash.com/photo-${imageIds[idx]}?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dmlicmFudHxlbnwwfHwwfHx8MA%3D%3D`}
                alt=''
              />
              <div className='absolute bottom-0 p-4 inset-x-0 bg-gradient-to-t from-black/70 from-20%'>
                <div className='max-w-52'>
                  <h2 className='text-white font-medium text-2xl'>
                    Card title to be shown here
                  </h2>
                  <div className='grid grid-rows-[0fr] transition-all duration-300 ease-in-out group-hover:grid-rows-[1fr]'>
                    <p className='text-white/70 mt-2 overflow-hidden opacity-0 transition duration-300 group-hover:opacity-100'>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
