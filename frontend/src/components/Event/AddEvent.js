import React,{useState} from 'react'
import { useDispatch, useSelector } from "react-redux";
import { addEvent } from '../../Redux/Actions/event';

function AddEvent() {
    const [nom,setnom]=useState("")
    const [description,setdescription]=useState("")
    const [date,setdate]=useState("")
    const [nbvelo,setnbvelo]=useState("1")
    const [place,setplace]=useState("")
    const dispatch = useDispatch();
    
    const onsubmit =async (e) => {
        e.preventDefault();
    dispatch(addEvent(nom,description,date,nbvelo,place))
    }
  return (
    <div class="container-fluid flex-grow-1 container-p-y">
    <h4 class="font-weight-bold py-3 mb-0">Add Client</h4>
    <div class="text-muted small mt-0 mb-4 d-block breadcrumb">
 
    <div class="card mb-4">
                            <h6 class="card-header">Add Event</h6>
                            <div class="card-body">
                                <form  onSubmit={(e) => onsubmit(e)}>
                                    <div class="form-group">
                                        <label class="form-label">nom</label>
                                        <input type="text" class="form-control" name="nom" value={nom} onChange={(e) => setnom(e.target.value)} placeholder="Nom"/>
                                        <div class="clearfix"></div>
                                    </div>
                                    <div class="form-group">
                                        <label class="form-label">Description</label>
                                        <input type="text" class="form-control" name="description" value={description} onChange={(e) => setdescription(e.target.value)} placeholder="Description"/>
                                        <div class="clearfix"></div>
                                    </div>

                                    <div class="form-group">
                                        <label class="form-label">Date</label>
                                        <input type="date" class="form-control" name="date" value={date} onChange={(e) => setdate(e.target.value)} placeholder="Date"/>
                                        <div class="clearfix"></div>
                                    </div>
                                    <div class="form-group">
                                        <label class="form-label">Place</label>
                                        <input type="text" class="form-control" name="place" value={place} onChange={(e) => setplace(e.target.value)} placeholder="Place"/>
                                        <div class="clearfix"></div>
                                    </div>
          
                                 {nom!=""&&description!=""&& date!=""&&place!=""? <button type="submit" class="btn btn-primary">Submit</button>:<button type="submit" class="btn btn-primary" disabled>Submit</button> }  

                                </form>
                            </div>
                        </div>

                      
    </div>
  



</div>  )
}

export default AddEvent