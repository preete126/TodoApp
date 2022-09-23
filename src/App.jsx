import { useState } from 'react';
import { useEffect } from 'react';
import './App.css'
import User from './assets/user.png'
import Task from './Todo';
import Proceed from './Doing';
import Suspend from './suspended';
import Complete from './completed';

function App() {
  let [profile, setProfile] = useState([User])
  let [newtime, setNewtime] = useState();
  let [indices, setIndices] = useState([]) 
  let [determ, setDeterm] = useState("")

  
  let [start, setStart] = useState([])
  let [array, setArray] = useState([])
  let [starting, setStarting] = useState([])
  let [suspend, setSuspend] = useState([])
  let [done, setDone] = useState([])

 


  let getprofile = JSON.parse(localStorage.getItem("profilephoto"))
  let gettodo = JSON.parse(localStorage.getItem("todo"))
  let getprogress = JSON.parse(localStorage.getItem("progress"))
  let getsuspend = JSON.parse(localStorage.getItem("suspend"))
  let getdone = JSON.parse(localStorage.getItem("done"))
  let time;


  if (getprogress != null) {
    starting = getprogress
  }

  if (gettodo != null) {
    start = gettodo
  }
  if (getsuspend != null) {
    suspend = getsuspend
  }
  if (getdone != null) {
    done = getdone
  }
 
  if (getprofile != null) {
    profile = getprofile
  }
 
  
  useEffect(() => {
    time = setInterval(() => {
      let act = new Date
      let hrs = act.getHours()
      let min = act.getMinutes()
      newtime = `${hrs}:${min}`;
      setNewtime(newtime)
    }, 1000)

    setIndices(indices)

    return () => {
      clearInterval(time)
    };

  }, [])
 

  function settask(v) {
    setStart(v)
    localStorage.setItem("todo", JSON.stringify(start))
  }
  function setdeterminer(ev) {
    setDeterm(ev)
  }

  const upload = ()=>{
    document.getElementById("file").click()
  }

  const changeimage = (ev) =>{
    let file = ev.target.files[0]
    const reader = new FileReader();
    reader.readAsDataURL(file)

    reader.onload = () => {
      profile = reader.result
       setProfile(profile)
       localStorage.setItem("profilephoto", JSON.stringify(profile))
    }
    reader.onerror = () => {
        console.log("error");
    }
  }

  function Spreadarr(ev) {
    setArray(ev)
    // localStorage.setItem("todo", JSON.stringify(start))
    // console.log(start)
  }

  
  
  function suspended() {
    suspend.push(...array)
    setSuspend([...suspend])
    console.log(array)
    console.log(suspend);
    localStorage.setItem("suspend", JSON.stringify(suspend))
    if (determ == "false") {
      start.splice(indices, 1)
      setStart([...start])
      localStorage.setItem("todo", JSON.stringify(start))
   }
   else if (determ == "proceed") {
    starting.splice(indices, 1)
    setStarting([...starting])
    localStorage.setItem("progress", JSON.stringify(starting))
   }
   else if (determ == "onhold") {
    suspend.splice(indices, 1)
    setSuspend([...suspend])
    localStorage.setItem("suspend", JSON.stringify(suspend))
   }
    window.location.reload()

  }

  function started() {
    
    
      starting.push(...array)
      setStarting([...starting])
      console.log(array)
      console.log(starting);
      localStorage.setItem("progress", JSON.stringify(starting))
      if (determ == "false") {
        start.splice(indices, 1)
        setStart([...start])
        localStorage.setItem("todo", JSON.stringify(start))
     }
     else if (determ == "proceed") {
      starting.splice(indices, 1)
      setStarting([...starting])
      localStorage.setItem("progress", JSON.stringify(starting))
     }
     else if (determ == "onhold") {
      suspend.splice(indices, 1)
      setSuspend([...suspend])
      localStorage.setItem("suspend", JSON.stringify(suspend))
     }
      window.location.reload() 
   

  }

  function completed() {
    done.push(...array)
    setDone([...done])
    console.log(array)
    console.log(done);
    localStorage.setItem("done", JSON.stringify(done))
    if (determ == "false") {
      start.splice(indices, 1)
      setStart([...start])
      localStorage.setItem("todo", JSON.stringify(start))
   }
   else if (determ == "proceed") {
    starting.splice(indices, 1)
    setStarting([...starting])
    localStorage.setItem("progress", JSON.stringify(starting))
   }
   else if (determ == "onhold") {
    suspend.splice(indices, 1)
    setSuspend([...suspend])
    localStorage.setItem("suspend", JSON.stringify(suspend))
   }
    window.location.reload()
  }



  return(
    <section>
      <nav className='bar'>
        <div className='d-flex gap-1  side1'>
          <button></button>
          <button></button>
          <input type="text" id='search' />
        </div>
        <div className='d-flex gap-1 logoname'>
          <div className='logo'>➰</div>
          <div className='name'>Maker</div>
        </div>
        <div className='d-flex gap-1'>
          <div id='time'>{newtime}</div>
          <button className="fs-2 plus">+</button>
          <button>
            <div className='sign'>i</div>
          </button>
          <div className='ms-2'>
            <div className='accounthandler' data-bs-toggle="modal" data-bs-target="#myModal" >
              <img className='account' src={profile} alt="" />
            </div>
            <div className="modal" id="myModal">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">Profile photo</h5>
                    <button type="button" className='btn-close bg-white' data-bs-dismiss="modal"></button>
                  </div>
                  <div className="modal-body profilemodal">
                    <div className='holder'>
                      <input type="file" id='file' onChange={event => changeimage(event)} hidden />
                      <img id='image' src={profile} alt="" />
                    </div>

                    <div className='mt-5 pt-4'>
                      <button  className='btn text-white  fs-5 p-2 rounded-pill w-25' onClick={upload}>Upload Photo</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>


      <div className="master">
          <main className='menu'>
            
          </main>
          <main className='listcontainer'>
            <div className='options'>
              <header>
                <strong>Options :</strong>
                <button onClick={started}>Start</button>
                <button onClick={suspended}>Suspend</button>
                <button onClick={completed}>Complete</button>
              </header>
            </div>
            <div className='flow' style={{overflowX:"scroll", padding:"10px"}}>
              <article className="d-flex gap-3" >
                <Task setarr = {start} func = {Spreadarr}  setfunc = {settask} indexs={indices} determiner={setdeterminer}/>
                <Proceed Addarr = {starting} func = {Spreadarr} indexs={indices} determiner={setdeterminer} />
                <Suspend Addarr = {suspend} func = {Spreadarr} indexs={indices} determiner={setdeterminer} />
                <Complete Addarr = {done}/>
              </article>
            </div>
          </main>
      </div>
    
    </section>
  )
}
export default App;