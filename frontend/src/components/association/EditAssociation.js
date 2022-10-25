import React,{useState,useEffect} from 'react'
import { useSearchParams } from 'react-router-dom';

import { useDispatch, useSelector } from "react-redux";
import Spinner from '../Layout/Spinner';
import { editAssoc, getAssoc } from '../../Redux/Actions/association';

function EditAssociation() {
    const [nom,setnom]=useState("")
    const [description,setdescription]=useState("")
    const [owner,setowner]=useState("")
    const [nbdepersonne,setnbdepersonne]=useState("")
    const [objective,setobjective]=useState("")
    const [searchParams] = useSearchParams();
    const dispatch = useDispatch();
    const myclient = useSelector((state) => state.association);
    const {loading, associa } =myclient ;

    useEffect(()=>{
        dispatch(getAssoc(searchParams.get("_id")));
      }, []);
      const onsubmit = (e) => {
        e.preventDefault();
        dispatch(editAssoc(searchParams.get("_id"),nom,description,owner,nbdepersonne,objective))
    }
  return loading||associa==null?<Spinner/>: (
    <div class="container-fluid flex-grow-1 container-p-y">
    <h4 class="font-weight-bold py-3 mb-0">Dashboard</h4>
    <div class="text-muted small mt-0 mb-4 d-block breadcrumb">
 
    <div class="card mb-4">
                            <h6 class="card-header">Edit Entretien</h6>
                            <div class="card-body">
                                <form  onSubmit={(e) => onsubmit(e)} enctype="multipart/form-data" >
  
                                    <div class="form-group">
                                        <label class="form-label">Nom</label>
                                        <input type="text" class="form-control" name="nom" value={nom} onChange={(e) => setnom(e.target.value)} placeholder={associa.nom}/>
                                        <div class="clearfix"></div>
                                    </div>
                                    <div class="form-group">
                                        <label class="form-label">Description</label>
                                        <input type="text" class="form-control" name="description" value={description} onChange={(e) => setdescription(e.target.value)} placeholder={associa.description}/>
                                        <div class="clearfix"></div>
                                    </div>
                                    <div class="form-group">
                                        <label class="form-label">owner</label>
                                        <input type="text" class="form-control" name="owner" value={owner} onChange={(e) => setowner(e.target.value)} placeholder={associa.owner}/>
                                        <div class="clearfix"></div>
                                    </div>
                                    <div class="form-group">
                                        <label class="form-label">nbdepersonne</label>
                                        <input type="number" class="form-control" name="nbdepersonne" value={nbdepersonne} onChange={(e) => setnbdepersonne(e.target.value)} placeholder={associa.nbdepersonne}/>
                                        <div class="clearfix"></div>
                                    </div>

                                    <div class="form-group">
                                        <label class="form-label">objective</label>
                                        <input type="text" class="form-control" name="objective" value={objective} onChange={(e) => setobjective(e.target.value)} placeholder={associa.objective}/>
                                        <div class="clearfix"></div>
                                    </div>
                                    <button type="submit" class="btn btn-primary">Submit</button>
                                </form>
                            </div>
                        </div>

                      
    </div>
  



</div>
    )
}

export default EditAssociation