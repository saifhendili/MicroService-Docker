import React,{useState,useEffect} from 'react'
import { useSearchParams } from 'react-router-dom';

import { useDispatch, useSelector } from "react-redux";
import Spinner from '../Layout/Spinner';
import { editEntretien, getEntretien } from '../../Redux/Actions/entretien';

function EditEntretien() {
    const [tarif,settarif]=useState("")
    const [description,setdescription]=useState("")
    const [duree,setduree]=useState()
    const [searchParams] = useSearchParams();
    const dispatch = useDispatch();
    const myclient = useSelector((state) => state.entretien);
    const {loading, entretien } =myclient ;

    useEffect(()=>{
        dispatch(getEntretien(searchParams.get("_id")));
      }, []);
      const onsubmit = (e) => {
        e.preventDefault();
        dispatch(editEntretien(searchParams.get("_id"),tarif,description,duree))
    }
  return loading||entretien==null?<Spinner/>: (
    <div class="container-fluid flex-grow-1 container-p-y">
    <h4 class="font-weight-bold py-3 mb-0">Dashboard</h4>
    <div class="text-muted small mt-0 mb-4 d-block breadcrumb">
 
    <div class="card mb-4">
                            <h6 class="card-header">Edit Entretien</h6>
                            <div class="card-body">
                                <form  onSubmit={(e) => onsubmit(e)} enctype="multipart/form-data" >
  
                                    <div class="form-group">
                                        <label class="form-label">Tarif</label>
                                        <input type="text" class="form-control" name="tarif" value={tarif} onChange={(e) => settarif(e.target.value)} placeholder={entretien.tarif}/>
                                        <div class="clearfix"></div>
                                    </div>
                                    <div class="form-group">
                                        <label class="form-label">Description</label>
                                        <input type="text" class="form-control" name="description" value={description} onChange={(e) => setdescription(e.target.value)} placeholder={entretien.description}/>
                                        <div class="clearfix"></div>
                                    </div>
                                    <div class="form-group">
                                        <label class="form-label">Duree</label>
                                        <input type="text" class="form-control" name="duree" value={duree} onChange={(e) => setduree(e.target.value)} placeholder={entretien.duree}/>
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

export default EditEntretien