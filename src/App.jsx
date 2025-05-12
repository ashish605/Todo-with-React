import { useState,useEffect } from 'react'
import './App.css'
import { FaTrash} from 'react-icons/fa'; //react icons
import { BiEdit } from 'react-icons/bi';
import { v4 as uuidv4 } from 'uuid'; //npm package used to genrate random ids

function App() {

  const [todos, settodos] = useState([]) //array real todo this array in show in the main section with map function
  const [todo, settodo] = useState("")//just varibale not the actual todo just value of todo 
  const [show_finished, setshow_finished] = useState(true)//use for show all task finished and unfinished both by deafult its is true
  


    useEffect(() => { //this use effect run on window render and take all the todos save on local storage to the orignal todos array 
       let todostring=localStorage.getItem("todos")
       if(todostring) //if nothing is saved no need to load the todos into array from local storage
       {
       let todos=JSON.parse(localStorage.getItem("todos"));
       settodos(todos)
       }
    }, [])



    
  const save_to_local_storage=(params)=>{ //func putting our todos to local storage
    localStorage.setItem("todos",JSON.stringify(todos))
  }
  
  const handeldelete=(e,id)=>{  //handal the delete button   
    const confirm=window.confirm("Are you sure you want to delete this todo?"); //confrim func asking for permission to delete todo
    if (confirm){
      let newtodos=todos.filter(item=>{ //filter creates a new array with todos which match the condition
      return item.id!==id
    });
    settodos(newtodos);//just upadting the value of todos array with settodos function
    save_to_local_storage()//saving updating todos array into local storage
    } else {
    alert("Delete canceled");
    }
  }
  
  const handeledit=(e,id)=>{ //this will gave the todo who's id matched to textarea and delete at and we agin save it by clicking save button 
    let t=todos.filter(i=>i.id===id)
    settodo(t[0].todo)
    let newtodos=todos.filter(item=>{
      return item.id!==id
    });
    settodos(newtodos);
    save_to_local_storage()//saving updating todos array into local storage
   
  }

  
  const handeladd=()=>{ //it enters the todo into todo array

    if(todo.trim()==="") //if todo is empty so alert to enter a some thing in it
    {
      alert("enter a todo")
    }
    else{
    settodos([...todos,{id:uuidv4(),todo,iscompleted:false}]) //making a new todo
    settodo("")
    save_to_local_storage()//saving updating todos array into local storage
    }
  }


  const handelchange=(e)=>{
     settodo(e.target.value)  //entring the text input into todo variable it is then putted into todos array value it is just a varibale
  }


  const handelcheckbox=(e)=>{ //this function updating the todos array with the todos whos ids iscomplete value is true so they can turn red

    let id=e.target.name;
    let index=todos.findIndex(item=>{
      return item.id===id;
    })
    let newtodos=[...todos];
    newtodos[index].isCompleted=!newtodos[index].isCompleted;
    settodos(newtodos);//just upadting the value of todos array with settodos function
    save_to_local_storage()//saving updating todos array into local storage
  }

  const toggelfinished=(e)=>{ //funcation to change the value of show_finsihed if usertoggel or untoggel on it
    setshow_finished(!show_finished)

  }

  return (
    <>
    <div className="main flex w-screen h-screen justify-center items-center flex-col">
       <div className='w-[10%] h-[1%] bg-[#FF6000] rounded-t-md shadow-3xl'></div>
       <div className='board bg-orange-300 w-[28%] h-[90vh] rounded-3xl flex items-center flex-col relative justify-center shadow-2xl '>
         <div className='top w-[40%] rounded-lg h-[10%] bg-[#FF6000] z-10 absolute top-0 shadow-lg'></div>
         <div className="paper shadow-inner rounded-md w-[85%] h-[93%] bg-[#f0f0f3] flex flex-col items-center">
          <div className='h-[5%]'></div>
          <div className="head p-3 font-bold text-6xl text-[#FF6000] text-center">TODO LIST</div>
          <div className='w-[80%] h-[0.5px] bg-slate-600 mx-auto mb-2'></div>
          <div className="add w-[80%] flex flex-col">
            <div className="text-add text-[#FF6000] font-medium">ADD TODO :</div>
            <div className="textarea"><textarea value={todo} onChange={handelchange} className='w-full bg-[#f0f0f3] my-1 p-1 shadow-sm border border-slate-600' rows="3" name="" id=""></textarea></div>
            <div className="btm-save mx-auto"><button onClick={handeladd} className='bg-[#FF853C] hover:bg-[#FF6000]  shadow-md text-white font-bold px-7 py-1 rounded-md'>Save</button></div>
          </div>
          <div className=" w-[80%] my-2 flex gap-2 text-[#FF6000]"><input type="checkbox" className='cursor-pointer' checked={show_finished} onChange={toggelfinished}/>
             <label className='text-s' htmlFor="show">Show Finished</label>
          </div>
          <div className="main1 w-[80%] h-[40vh] flex flex-col">
            <div className="heading text-[#FF6000] font-bold my-2 text-xl">Your Todos :</div>
            {todos.length === 0 && <div className='w-full h-full text text-[#FF6000] flex justify-center items-center font-bold text-xl'>
               No Todo to Display</div>} {/*if no todo so display this */}
            {todos.map(item=>{
              // condition to show the todos on checked or unchecked the the checkbox
              return (show_finished || !item.isCompleted) && <div key={item.id} className={`todo  bg-[#CFE3F8] w-full h-[12vh] p-3 rounded-lg text-[#1E3A8A] flex mb-2 shadow-md ${item.    isCompleted ? 'bg-red-400' : ''}`}>
                  <div className="check mr-2 flex justify-center"><input name={item.id} type="checkbox" onChange={handelcheckbox} value={item.isCompleted} /></div>
                  <div className={`saved-text w-[92%] h-[100%] ${item.isCompleted ? 'bg-red-400 line-through' : ''}`} >{item.todo}</div>
                  <div className="extra-buttons text-white flex flex-col ml-1 ">
                    <button onClick={(e)=>{ handeldelete(e,item.id)}} className='bg-[#1E3A8A] p-[4.5px] rounded-md cursor-pointer m-1 hover:bg-[#435da5]'><FaTrash /></button>
                     <button onClick={(e)=>{handeledit(e,item.id)}} className='bg-[#1E3A8A] p-[3.5px] rounded-md cursor-pointer m-1 hover:bg-[#435da5]' ><BiEdit className='text-lg'/></button>
                   </div>
                 </div> 
            })}                     
          </div>
        </div>
       </div>
     </div>
    </>
  )
}

export default App
