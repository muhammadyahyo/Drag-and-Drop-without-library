import { useEffect, useState } from "react";
import Navbar from "./components/navbar";
import NoData from "./components/nodata";
import { data } from "./mock/data";


function App() {
  useEffect(()=>{
    setTasks(data)
  },[])
  const [tasks, setTasks] = useState([]);
  console.log(tasks);

  const onDragStart = (event, id) => {
    event.dataTransfer.setData("id", id);
  };

  const onDrop = (event, cat) => {
    let id = event.dataTransfer.getData("id");
    let newTasks = tasks.filter((task) => {
      if (task.name === id) {
        task.category = cat;
      }
      return task;
    });

    setTasks([...newTasks]);
  };

  
  const getTask = () => {
    const tasksToRender = {
      new: [],
      current: [],
      closed: [],
      archive: []
    };

    tasks.forEach((t) => {
      tasksToRender[t.category].push(
        <figure
          key={t.name}
          onDragStart={(e) => onDragStart(e, t.name)}
          draggable
          className="my-[12px] mx-[6px] flex flex-col items-start justify-start p-2 shadow-md  bg-white rounded dark:bg-gray-800 dark:border-gray-700"
          
        >
            <div className="flex justify-between w-full">
                <blockquote className="mb-1 text-gray-500  dark:text-gray-400">
                    <h3 className="text-sm font-semibold text-gray-900 dark:text-white">{t.title}</h3>
                    <p className="my-1 text-xs w-[186px] truncate ">{t.department}</p>
                </blockquote>

                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M10 10.8334C10.4602 10.8334 10.8333 10.4603 10.8333 10C10.8333 9.53978 10.4602 9.16669 10 9.16669C9.53977 9.16669 9.16667 9.53978 9.16667 10C9.16667 10.4603 9.53977 10.8334 10 10.8334Z" stroke="#96A09B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M10 16.6667C10.4602 16.6667 10.8333 16.2936 10.8333 15.8333C10.8333 15.3731 10.4602 15 10 15C9.53977 15 9.16667 15.3731 9.16667 15.8333C9.16667 16.2936 9.53977 16.6667 10 16.6667Z" stroke="#96A09B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M10 5.00001C10.4602 5.00001 10.8333 4.62691 10.8333 4.16668C10.8333 3.70644 10.4602 3.33334 10 3.33334C9.53977 3.33334 9.16667 3.70644 9.16667 4.16668C9.16667 4.62691 9.53977 5.00001 10 5.00001Z" stroke="#96A09B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </div>

            <div className="flex items-center">
                <span className={`${t.bg}  p-2 rounded-sm  text-xs`}>{t.condition}</span>
                <span className="bg-[#FAFFFC] ml-2 p-1 flex items-center  border rounded-sm">
                    <svg className="mr-1" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M6.00001 7.33333C7.47277 7.33333 8.66668 6.13943 8.66668 4.66667C8.66668 3.19391 7.47277 2 6.00001 2C4.52725 2 3.33334 3.19391 3.33334 4.66667C3.33334 6.13943 4.52725 7.33333 6.00001 7.33333Z" stroke="#96A09B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M10.6667 2.08667C11.2403 2.23354 11.7487 2.56714 12.1118 3.03488C12.4748 3.50262 12.6719 4.07789 12.6719 4.67C12.6719 5.26212 12.4748 5.83739 12.1118 6.30513C11.7487 6.77287 11.2403 7.10647 10.6667 7.25334M14 14V12.6667C13.9966 12.0781 13.7986 11.5072 13.4368 11.0429C13.0751 10.5787 12.5699 10.2471 12 10.1M2 14V12.6667C2 11.9594 2.28095 11.2811 2.78105 10.7811C3.28115 10.281 3.95942 10 4.66667 10H7.33333C8.04058 10 8.71885 10.281 9.21895 10.7811C9.71905 11.2811 10 11.9594 10 12.6667V14H2Z" stroke="#96A09B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    3
                </span>
                <span className="bg-[#FAFFFC] ml-2 p-1 flex items-center  border rounded-sm">
                    <svg className="mr-1" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M9.33334 2V4.66667C9.33334 4.84348 9.40358 5.01305 9.52861 5.13807C9.65363 5.2631 9.8232 5.33333 10 5.33333H12.6667" stroke="#96A09B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M6.00001 8.66667H10M11.3333 14H4.66668C4.31305 14 3.97392 13.8595 3.72387 13.6095C3.47382 13.3594 3.33334 13.0203 3.33334 12.6667V3.33333C3.33334 2.97971 3.47382 2.64057 3.72387 2.39052C3.97392 2.14048 4.31305 2 4.66668 2H9.33334L12.6667 5.33333V12.6667C12.6667 13.0203 12.5262 13.3594 12.2762 13.6095C12.0261 13.8595 11.687 14 11.3333 14ZM6.00001 11.3333H10H6.00001Z" stroke="#96A09B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    255
                </span>
            </div>

                      
            <figcaption className="flex items-center justify-center my-1 ">
                <img className="rounded-full w-9 h-9" src={`${t.name}.svg`} alt="Profile picture"/>
                <div className="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
                    <div className="text-[11px] text-[#969F9B] font-normal">Рекруитер</div>
                    <div className="text-xs text-[#414644] dark:text-gray-400 ">{t.name}</div>
                </div>
            </figcaption>    
        </figure>
       
      );
    });

    return tasksToRender;
  };
  

  return (
    <div >
      <Navbar/>
      <div className="">
        <div className="w-11/12 bg-[#F0F0F0]  ml-auto p-5 ">
              <h2 className="text-lg font-semibold flex items-center">Заявки 
                  <svg className="ml-2" xmlns="http://www.w3.org/2000/svg" width="3" height="4" viewBox="0 0 3 4" fill="none">
                    <circle cx="1.5" cy="2" r="1.5" fill="#386E56"/>
                  </svg>
                  <span className="text-[#6D7471] pl-2">22</span>
              </h2>
              <div className="drag-drop-board">


              
              <div className=" w-full h-screen flex justify-between">

                <div className="w-[268px] border-2 rounded touch-pan-right overflow-y-scroll  h-full "
                   onDragOver={(e) => e.preventDefault()}
                   onDrop={(e) => {
                     onDrop(e, "new");
                   }}
                >
                  <div className="bg-[#F2FAF6] py-3 px-2 rounded ]">
                    <h5 className="text-lg font-medium flex items-center">Новые 
                      <svg className="ml-2" xmlns="http://www.w3.org/2000/svg" width="3" height="4" viewBox="0 0 3 4" fill="none">
                      <circle cx="1.5" cy="2" r="1.5" fill="#386E56"/>
                      </svg>
                      <span className="text-[#6D7471] pl-2 text-sm">{getTask().new.length}</span>
                    </h5>
                  </div>
                  {getTask().new.length === 0 ? <NoData/> : getTask().new}
                </div>

                <div className="w-[268px] border-2 rounded overflow-y-scroll  h-full"
                   onDragOver={(e) => e.preventDefault()}
                   onDrop={(e) => {
                     onDrop(e, "current");
                   }}
                >
                  <div className="bg-[#F2FAF6] py-3 px-2 rounded">
                    <h5 className="text-lg font-medium flex items-center">Текущие
                      <svg className="ml-2" xmlns="http://www.w3.org/2000/svg" width="3" height="4" viewBox="0 0 3 4" fill="none">
                      <circle cx="1.5" cy="2" r="1.5" fill="#386E56"/>
                      </svg>
                      <span className="text-[#6D7471] pl-2 text-sm">{getTask().current.length}</span>
                    </h5>
                  </div>
                   {
                    getTask().current.length === 0 ? <NoData/> : getTask().current
                   }
                </div>

                <div className="w-[268px] border-2 rounded overflow-y-scroll  h-full"
                  onDragOver={(e) => e.preventDefault()}
                  onDrop={(e) => {
                    onDrop(e, "closed");
                  }}
                >
                  <div className="bg-[#F2FAF6] py-3 px-2 rounded">
                    <h5 className="text-lg font-medium flex items-center">Закрытые 
                      <svg className="ml-2" xmlns="http://www.w3.org/2000/svg" width="3" height="4" viewBox="0 0 3 4" fill="none">
                      <circle cx="1.5" cy="2" r="1.5" fill="#386E56"/>
                      </svg>
                      <span className="text-[#6D7471] pl-2 text-sm">{getTask().closed.length}</span>
                    </h5>
                  </div>

                    {getTask().closed.length === 0 ? <NoData/> : getTask().closed}
                  
                </div>

                <div className="w-[268px] border-2 rounded overflow-y-scroll  h-full"
                  onDragOver={(e) => e.preventDefault()}
                  onDrop={(e) => {
                    onDrop(e, "archive");
                  }}
                >
                  <div className="bg-[#F2FAF6] py-3 px-2 rounded">
                    <h5 className="text-lg font-medium flex items-center">Архив 
                      <svg className="ml-2" xmlns="http://www.w3.org/2000/svg" width="3" height="4" viewBox="0 0 3 4" fill="none">
                      <circle cx="1.5" cy="2" r="1.5" fill="#386E56"/>
                      </svg>
                      <span className="text-[#6D7471] pl-2 text-sm">{getTask().archive.length}</span>
                    </h5>
                  </div>

                 {getTask().archive.length === 0 ? <NoData/> : getTask().archive}
                  
                </div>
              </div>
              </div>
        </div>
      </div>
      
    </div>
  );
}

export default App;