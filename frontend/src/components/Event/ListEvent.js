import React,{useEffect,useState} from 'react'
import { deleteClient, getClients } from '../../Redux/Actions/client';
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../Layout/Spinner";
import { Link } from 'react-router-dom';
import { deleteEvent, getEvents } from '../../Redux/Actions/event';

function ListEvent() {
    const [Search, setSearch] = useState('');

    const dispatch = useDispatch();
    const client = useSelector((state) => state.event);
    const {loading, events } =client ;
  
    const handleChange = (e) => {
        setSearch(e.target.value);
      };
        useEffect(()=>{
            dispatch(getEvents())
        },[])
  return loading||events==null?<Spinner/>:(
    <div class="container-fluid flex-grow-1 container-p-y">
    <h4 class="font-weight-bold py-3 mb-0">List clients</h4>
    <div class="text-muted small mt-0 mb-4 d-block breadcrumb">
        <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="#"><i class="feather icon-home"></i></a></li>
            <li class="breadcrumb-item"><a href="#">Library</a></li>
            <li class="breadcrumb-item active">Data</li>
        </ol>
    </div>
    <div class="form-inline">
              <input value={Search} className="form-control mr-sm-2" type="text" onChange={(e)=>handleChange(e)} id="main-search" placeholder="Search" />
              </div>
    <hr class="border-light container-m--x "/>

                        <table class="table fixtablelistebooks">
                            <thead class="thead-dark">
                                <tr>
                                    <th>#</th>
                                    <th>nom</th>
                                    <th>description</th>
                                    <th>date</th>
                                    <th>nbvelo</th>
                                    <th>picture</th>
                                    <th>place</th>
                                    <th>Edit</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>    
                            {events.filter(el =>
                            el.nom.toLowerCase().includes(Search.toLowerCase())).map((x,i)=>
                                 <tr key={`book${i}`}>
                                 <th scope="row">{i}</th>
                                 <td className='spacing'>{x.nom}</td>
                                    <td>{x.description}</td>
                                    <td>{x.date}</td>
                                    <td>1</td>
                                    <td>{x.place}</td>

                                 <Link to={`/EditEvent?_id=${x.id}`}>
        <td>     <button className='btn btn-secondary'>Edit</button> </td>  </Link>
        
        <td><button onClick={(e)=>dispatch(deleteEvent(x.id))}  className='btn btn-danger'>Delete</button></td>

                           
                             </tr>)}
                            </tbody>
                        </table>





</div>  )
}

export default ListEvent