import React,{useEffect,useState} from 'react'
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../Layout/Spinner";
import { Link } from 'react-router-dom';
import { deleteEntretien, getEntretiens } from '../../Redux/Actions/entretien';

function ListEntretien() {
    const [Search, setSearch] = useState('');

    const dispatch = useDispatch();
    const client = useSelector((state) => state.entretien);
    const {loading, entretiens } =client ;
  
    const handleChange = (e) => {
        setSearch(e.target.value);
      };
        useEffect(()=>{
            dispatch(getEntretiens())
        },[])
  return loading?<Spinner/>:(
    <div class="container-fluid flex-grow-1 container-p-y">
    <h4 class="font-weight-bold py-3 mb-0">List Entretien</h4>
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
                                    <th>tarif</th>
                                    <th>description</th>
                                    <th>duree</th>
                                    <th>Id Event</th>
                                    <th>Edit</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>    
                            {entretiens.filter(el =>
                            el.description.toLowerCase().includes(Search.toLowerCase())).map((x,i)=>
                                 <tr key={`book${i}`}>
                                 <th scope="row">{i}</th>
                                 <td className='spacing'>{x.tarif}</td>
                                    <td>{x.description}</td>
                                 <td>{x.duree}</td>
                                 <td>{x.idEvent}</td>
                                 <Link to={`/EditEntretien?_id=${x.idEntretien}&&idevent=${x.idEvent}`}>
        <td>     <button className='btn btn-secondary'>Edit</button> </td>  </Link>
        
        <td><button onClick={(e)=>dispatch(deleteEntretien(x.idEntretien))}  className='btn btn-danger'>Delete</button></td>

                           
                             </tr>)}
                            </tbody>
                        </table>





</div>  )
}

export default ListEntretien