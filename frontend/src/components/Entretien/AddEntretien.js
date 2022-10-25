import React,{useState} from 'react'
import { useDispatch, useSelector } from "react-redux";
import { addEntretien } from '../../Redux/Actions/entretien';
import { useSearchParams } from 'react-router-dom';

function AddEntretien() {
    const [tarif,settarif]=useState("")
    const [description,setdescription]=useState("")
    const [duree,setduree]=useState("")
    const [searchParams] = useSearchParams();

    const dispatch = useDispatch();
    const onsubmit =async (e) => {
        e.preventDefault();
    dispatch(addEntretien(tarif,description,duree,searchParams.get("_id")))
    }
  return (
    <div class="container-fluid flex-grow-1 container-p-y">
    <h4 class="font-weight-bold py-3 mb-0">Add Entretien</h4>
    <div class="text-muted small mt-0 mb-4 d-block breadcrumb">
 
    <div class="card mb-4">
                            <h6 class="card-header">Add Entretien</h6>
                            <div class="card-body">
                                <form  onSubmit={(e) => onsubmit(e)}>
                                    <div class="form-group">
                                        <label class="form-label">Tarif</label>
                                        <input type="text" class="form-control" name="Tarif" value={tarif} onChange={(e) => settarif(e.target.value)} placeholder="Tarif"/>
                                        <div class="clearfix"></div>
                                    </div>
                                    <div class="form-group">
                                        <label class="form-label">Description</label>
                                        <input type="text" class="form-control" name="description" value={description} onChange={(e) => setdescription(e.target.value)} placeholder="Description"/>
                                        <div class="clearfix"></div>
                                    </div>

                                    <div class="form-group">
                                        <label class="form-label">Durée</label>
                                        <input type="number" class="form-control" name="duree" value={duree} onChange={(e) => setduree(e.target.value)} placeholder="Durée"/>
                                        <div class="clearfix"></div>
                                    </div>
          
                                 {tarif!=""&&description!=""&& duree!=""? <button type="submit" class="btn btn-primary">Submit</button>:<button type="submit" class="btn btn-primary" disabled>Submit</button> }  

                                </form>
                            </div>
                        </div>

                      
    </div>
  



</div>  )
}

export default AddEntretien