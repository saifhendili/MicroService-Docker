import React,{useEffect,useState} from 'react'
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../Layout/Spinner";
import { Link } from 'react-router-dom';
import { deleteAssoc, getAssocs } from '../../Redux/Actions/association';

function ListAssociation() {
    const [Search, setSearch] = useState('');

    const dispatch = useDispatch();
    const client = useSelector((state) => state.association);
    const {loading, associas } =client ;
  
    const handleChange = (e) => {
        setSearch(e.target.value);
      };
        useEffect(()=>{
            dispatch(getAssocs())
        },[])
  return loading||associas==null?<Spinner/>:(
    <div class="container-fluid flex-grow-1 container-p-y">
    <h4 class="font-weight-bold py-3 mb-0">List association</h4>
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
                                    <th>owner</th>
                                    <th>nb personne</th>
                                    <th>objective</th>
                                    <th>Edit</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>    
                            {associas.filter(el =>
                            el.nom.toLowerCase().includes(Search.toLowerCase())).map((x,i)=>
                                 <tr key={`book${i}`}>
                                 <th scope="row">{i}</th>
                                 <td className='spacing'>{x.nom}</td>
                                    <td>{x.description}</td>
                                    <td>{x.owner}</td>
                                    <td>{x.nbdepersonne}</td>
                                    <td>{x.objective}</td>

                                 <Link to={`/assosiationedit?_id=${x.id}`}>
        <td>     <button className='btn btn-secondary'>Edit</button> </td>  </Link>
        
        <td><button onClick={(e)=>dispatch(deleteAssoc(x.id))}  className='btn btn-danger'>Delete</button></td>

                           
                             </tr>)}
                            </tbody>
                        </table>





</div>  )
}

export default ListAssociation