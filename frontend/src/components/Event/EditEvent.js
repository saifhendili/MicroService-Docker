import React,{useState,useEffect} from 'react'
import { useSearchParams } from 'react-router-dom';

import { useDispatch, useSelector } from "react-redux";
import Spinner from '../Layout/Spinner';
import { editEntretien, getEntretien } from '../../Redux/Actions/entretien';
import { editEvent, getEvent } from '../../Redux/Actions/event';

function EditEvent() {
    const [nom,setnom]=useState("")
    const [description,setdescription]=useState("")
    const [date,setdate]=useState("")
    const [nbvelo,setnbvelo]=useState("1")
    const [place,setplace]=useState("")
    const [searchParams] = useSearchParams();
    const dispatch = useDispatch();
    const myclient = useSelector((state) => state.event);
    const {loading, event } =myclient ;

    useEffect(()=>{
        dispatch(getEvent(searchParams.get("_id")));
      }, []);
      const onsubmit = (e) => {
        e.preventDefault();
        dispatch(editEvent(searchParams.get("_id"),nom,description,date,nbvelo,place))
    }
  return loading||event==null?<Spinner/>: (
    <div class="container-fluid flex-grow-1 container-p-y">
    <h4 class="font-weight-bold py-3 mb-0">Dashboard</h4>
    <div class="text-muted small mt-0 mb-4 d-block breadcrumb">
 
    <div class="card mb-4">
                            <h6 class="card-header">Edit Entretien</h6>
                            <div class="card-body">
                                <form  onSubmit={(e) => onsubmit(e)} enctype="multipart/form-data" >
  
                                    <div class="form-group">
                                        <label class="form-label">Nom</label>
                                        <input type="text" class="form-control" name="nom" value={nom} onChange={(e) => setnom(e.target.value)} placeholder={event.nom}/>
                                        <div class="clearfix"></div>
                                    </div>
                                    <div class="form-group">
                                        <label class="form-label">Description</label>
                                        <input type="text" class="form-control" name="description" value={description} onChange={(e) => setdescription(e.target.value)} placeholder={event.description}/>
                                        <div class="clearfix"></div>
                                    </div>
                                    <div class="form-group">
                                        <label class="form-label">Date</label>
                                        <input type="date" class="form-control" name="date" value={date} onChange={(e) => setdate(e.target.value)} placeholder={event.date}/>
                                        <div class="clearfix"></div>
                                    </div>
                                    <div class="form-group">
                                        <label class="form-label">Place</label>
                                        <input type="text" class="form-control" name="place" value={place} onChange={(e) => setplace(e.target.value)} placeholder={event.place}/>
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

export default EditEvent