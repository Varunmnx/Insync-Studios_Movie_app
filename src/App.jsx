import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Gridchild } from './components/gridchild'
import { Detailed } from './components/detailed/detailed'
import logo from "./components/searchbar/logo.png"
import { SearchBar } from './components/searchbar/searchbar'
import { useEffect,useMemo } from 'react'
import useDebounce from './helper/useDebouncer'
import { selectedCard,setSelectedCard } from './provider/contextprovider'


function App() {
  const [appear, setappear] = useState(false)
  const [movies,setMovies] = useState([])
  const [search,setSearch] = useState("")
  const [selected,setSelected] = useState({})
  let delayedquery = useDebounce(search,700)
  
  let API_URL ="https://api.themoviedb.org/3/movie/popular"
  let API_S = "https://api.themoviedb.org/3"

  let fetchdata = async()=>{
    let data = await fetch(`${API_URL}?api_key=${import.meta.env.VITE_MOVIES_KEY}`).then(res=>res.json())
    let initial = data.results.slice(0,12)
    localStorage.setItem("initial",JSON.stringify(initial))
    setMovies(initial)
    
  }

  let searchWithquery = async(userintput)=>{
    let data =  await fetch(`${API_S}/search/movie?api_key=${import.meta.env.VITE_MOVIES_KEY}&query=${userintput}&primary_release_date.gte=2022-11-15&page=1`).then(res=>res&&res.json())
    console.log("____SEARCHED____")
    if(data.results){
      console.log("can set now____")
      setMovies(data.results)
    }
    if(userintput===""){
     let ini = JSON.parse(localStorage.getItem("initial"))
     console.log("___initial__is___")
     setMovies(ini)
    }
  }

  useEffect(()=>{
     fetchdata()
    console.log("__movies______")
    console.log(movies)
  },[])
  
  useEffect(()=>{
     searchWithquery(delayedquery)

  },[delayedquery])
console.log("___movies___")
console.log(movies)
 return(

  <>
            <div className='searchBarSection'>
              <div className='CenteredBars'>
                <img src={logo} className="logo"/>
                <span className='searchbar'><SearchBar handlechange={(input)=>{
                  setSearch(input)}}/></span>
              </div>
            
            </div>
            <span className='dividing_bar'></span>
            <div className='GR_container'>
                <div className='GR_containerChild'>
                
                  <div className='movies_holder'>
                  <div className='subh_holder'>
                  <h3 className='movie_sub'>Most Recent Movies</h3>  
                  </div>
                    {
                          movies.map(e=><Gridchild 
                                                  onClick={()=>setappear(prev=>prev=!prev)} 
                                                  Title={e.original_title} 
                                                  src={e.poster_path} 
                                                  date={e.release_date} 
                                                  rating={e.vote_average}
                                                  count={e.vote_count}
                                                  overview = {e.overview}
                                                  />     
                                                  
                                            )   }
                </div>
            
                </div>
            </div>

          {appear&&<Detailed onClick={()=>setappear((appear)=>!appear)} selected={selected} />}
  </>

  )
}

export default App


