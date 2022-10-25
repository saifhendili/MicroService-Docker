import React,{useState} from 'react'
import { useDispatch, useSelector } from "react-redux";
import { addPost } from '../../Redux/Actions/blog';

function AddBlog() {
    const [text,settext]=useState("")
    const dispatch = useDispatch();
    const onsubmit =async (e) => {
        e.preventDefault();
    dispatch(addPost(text))
    }
  return (
    <div class="container-fluid flex-grow-1 container-p-y">
    <h4 class="font-weight-bold py-3 mb-0">Add Blog</h4>
    <div class="text-muted small mt-0 mb-4 d-block breadcrumb">
 
    <div class="card mb-4">
                            <h6 class="card-header">Add Blog</h6>
                            <div class="card-body">
                                <form  onSubmit={(e) => onsubmit(e)}>
                                    <div class="form-group">
                                        <label class="form-label">My Blog</label>
                                        <input type="text" class="form-control" name="text" value={text} onChange={(e) => settext(e.target.value)} placeholder="FullName"/>
                                        <div class="clearfix"></div>
                                    </div>

                                 {text!=""? <button type="submit" class="btn btn-primary">Submit</button>:<button type="submit" class="btn btn-primary" disabled>Submit</button> }  

                                </form>
                            </div>
                        </div>

                      
    </div>
  



</div>  )
}

export default AddBlog