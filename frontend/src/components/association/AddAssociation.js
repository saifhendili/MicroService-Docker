import React,{useState} from 'react'
import { useDispatch, useSelector } from "react-redux";
import { addAssoc } from '../../Redux/Actions/association';

function AddAssociation() {
    const [nom,setnom]=useState("")
    const [description,setdescription]=useState("")
    const [owner,setowner]=useState("")
    const [nbdepersonne,setnbdepersonne]=useState("")
    const [objective,setobjective]=useState("")
    const dispatch = useDispatch();
    
    const onsubmit =async (e) => {
        e.preventDefault();
    dispatch(addAssoc(nom,description,owner,nbdepersonne,objective))
    }
  return (
    <div class="container-fluid flex-grow-1 container-p-y">
    <h4 class="font-weight-bold py-3 mb-0">Add Association</h4>
    <div class="text-muted small mt-0 mb-4 d-block breadcrumb">
 
    <div class="card mb-4">
                            <h6 class="card-header">Add Association</h6>
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
                                        <label class="form-label">owner</label>
                                        <input type="text" class="form-control" name="owner" value={owner} onChange={(e) => setowner(e.target.value)} placeholder="owner"/>
                                        <div class="clearfix"></div>
                                    </div>
                                    <div class="form-group">
                                        <label class="form-label">nbdepersonne</label>
                                        <input type="number" class="form-control" name="nbdepersonne" value={nbdepersonne} onChange={(e) => setnbdepersonne(e.target.value)} placeholder="nbdepersonne"/>
                                        <div class="clearfix"></div>
                                    </div>
                                    <div class="form-group">
                                        <label class="form-label">objective</label>
                                        <input type="text" class="form-control" name="objective" value={objective} onChange={(e) => setobjective(e.target.value)} placeholder="objective"/>
                                        <div class="clearfix"></div>
                                    </div>
          
                                 {nom!=""&&description!=""&& owner!=""&&nbdepersonne!=""&&objective!=""? <button type="submit" class="btn btn-primary">Submit</button>:<button type="submit" class="btn btn-primary" disabled>Submit</button> }  

                                </form>
                            </div>
                        </div>

                      
    </div>
  



</div>  )
}

export default AddAssociation