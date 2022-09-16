import { useState } from "react"
import review from './assets/show.png'

const Task = (props) => {
    
    let [okay, setOkay] = useState([])
    let [name, setName] = useState("")
   


    const Add = ()=>{
        if (name != "") {
            props.setarr.push({todo: name})
            
            // localStorage.setItem("todo", JSON.stringify(start))
            name = ""
            setName(name)
        }
        else{
            alert("add a task")
        }
    }

    const Movetask = (ev,index)=>{
        let event = ev.target.checked
        if (event == true) {
            okay.push(props.setarr[index])
            console.log(okay)
            props.func([...okay])
            // console.log(event)
            // props.setarr.splice(index, 1)
        }
        else if(event == false){
            okay.splice(index, 1)
            console.log(okay)
            props.func([...okay])
        }
      
    }
    
    return (
        <section>
            <div className='todo' >
                <div className='event'> To Do</div>
                <div className='listheader'>
                    <div className='d-flex gap-1'>
                        <div className='color1 '></div>
                        <div className='color2 '></div>
                    </div>
                    <div className='w-75 underlist p-2'></div>
                    <div className=' number gap-3' ><img src={review} alt="" width={"20px"} className='mt-2' /> {props.setarr.length} </div>
                </div>
                <div className="listheader mt-2 text-dark" id='todothis'>
                    {
                        props.setarr.map((value, index) =>
                            <main key={index}>
                                <div className='mb-2  position-relative d-flex gap-2'>
                                    <main  className='value p-3'>
                                        <div>{value.todo}</div>
                                    </main>
                                    <input 
                                    type="checkbox" 
                                    // className="checked"
                                    onChange={event=> Movetask(event,index)}
                                    />
                                </div>

                            </main>
                        )
                    }
                </div>
                <div className='d-flex gap-2 mt-2'>
                  <input 
                    type="text" 
                    id='task'
                    value={name}
                    onChange={(ev)=> setName(ev.target.value)}
                  />
                  <button className='add fs-3 ' onClick={Add}>+</button>
                </div>
            </div>
        </section>
    )
}
export default Task;