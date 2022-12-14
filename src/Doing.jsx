// import { useEffect, useState } from "react"
import { useState } from 'react'
import review from './assets/show.png'

const Proceed = (Props) => {
    let [okay, setOkay] = useState([])
   
    
    const Movetask = (ev,index)=>{
        let event = ev.target.checked
        if (event == true) {
            okay.push(Props.Addarr[index])
            console.log(okay)
            Props.func([...okay])
            Props.indexs.push(index)
            Props.determiner("proceed")
            // console.log(event)
            // props.setarr.splice(index, 1)
        }
        else if(event == false){
            okay.splice(index, 1)
            console.log(okay)
            Props.func([...okay])
        }
      
    }


    return (
        <section>
            <div className='todo' >
                <div className='event'> Doing</div>
                <div className='listheader'>
                    <div className='d-flex gap-1'>
                        <div className='color2 '></div>
                        <div className='color1 '></div>
                    </div>
                    <div className='w-75 underlist p-2'></div>
                    <div className=' number gap-3' ><img src={review} alt="" width={"20px"} className='mt-2' /> {Props.Addarr.length} </div>
                </div>
                <div className="listheader mt-2 text-dark" style={{ background: "linear-gradient(390deg, rgba(75, 197, 228, 0.8), rgba(77, 77, 189, 0.8))"}} >
                    {
                        Props.Addarr.map((value, index) =>
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
export default Proceed;