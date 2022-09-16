import { useState } from "react"
import review from './assets/show.png'

const Suspend = (props) => {
    let [okay, setOkay] = useState([])
   
    
    const Movetask = (ev,index)=>{
        let event = ev.target.checked
        if (event == true) {
            okay.push(props.Addarr[index])
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
                <div className='event'> Suspended</div>
                <div className='listheader'>
                    <div className='d-flex gap-1'>
                        <div className='color2 '></div>
                        <div className='color1 '></div>
                    </div>
                    <div className='w-75 underlist p-2'></div>
                    <div className=' number gap-3' ><img src={review} alt="" width={"20px"} className='mt-2' /> {props.Addarr.length} </div>
                </div>
                <div className="listheader mt-2 text-dark" style={{ background: "linear-gradient(390deg, rgb(93, 136, 132),rgb(228, 130, 215))"}} >
                    {
                        props.Addarr.map((value, index) =>
                            <main key={index}>
                                 <div className='mb-2  position-relative d-flex gap-2'>
                                    <main  className='value p-3'>
                                        <div>{value.todo}</div>
                                    </main>
                                    <input 
                                    type="checkbox" 
                                    className="checked"
                                    onChange={event=> Movetask(event,index)}
                                    />
                                </div>

                            </main>
                        )
                    }
                </div>
                
            </div>
        </section>
    )
}
export default Suspend;