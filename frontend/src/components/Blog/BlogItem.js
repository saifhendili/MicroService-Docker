import React, { Fragment } from 'react'

function BlogItem({blog:{firstname,lastname,text}}) {
  return (
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
    </div>


    <hr class="my-5"/>


 </Fragment>

)
}

export default BlogItem