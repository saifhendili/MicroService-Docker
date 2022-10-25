import React, { Fragment } from 'react'
import { addLike, removeLike } from '../../Redux/Actions/blog'
import { useDispatch, useSelector } from "react-redux";
import Spinner from '../Layout/Spinner';

function BlogItem({blog:{_id,firstname,lastname,text,likes}}) {
    const auth = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    const { isAuthenticated, loading, user } =auth ;
  return loading ?<Spinner/>:(
 <Fragment>


    <div class="media align-items-center my-4 h4">
        <div class="ion ion-md-help-circle-outline ui-w-60 text-center text-large"></div>
        <div class="media-body ml-1">
            Blogs
            <div class="text-muted text-tiny font-weight-light">{firstname} {lastname}</div>
            
        </div>
    </div>

    <div class="bg-white ui-bordered mb-2">
        <a href="#company-faq-1" class="d-flex justify-content-between text-dark py-3 px-4" data-toggle="collapse">

            <div class="px-4 pb-3">{firstname} {lastname}</div><span class="collapse-icon"></span></a>
        <div id="company-faq-1" class="collapse text-muted">
            <div class="px-4 pb-3">{text}</div>

        </div>
        {likes.includes(user._id)? <div className="postBottomLeft">

<img
  className="likeIcon"
  src={require('./like.png')}
  onClick={(e)=>dispatch(removeLike(_id))}  alt=""
/>
<span className="postLikeCounter">{likes.length} &nbsp;like</span>



</div>:
 <div className="postBottomLeft">
<img
   className="likeIcond"
   src={require('./unlike.png')}
 
   onClick={(e)=>dispatch(addLike(_id,user._id))}
   alt=""
 />
 
 <span className="postLikeCounter">{likes.length} &nbsp; like</span>

 
 </div>}
    </div>


    <hr class="my-5"/>


 </Fragment>

)
}

export default BlogItem