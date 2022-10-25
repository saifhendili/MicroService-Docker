import React,{useEffect} from 'react'
import { getPosts } from '../../Redux/Actions/blog'
import { useDispatch, useSelector } from "react-redux";
import { Fragment } from 'react';
import { Spinner } from 'react-bootstrap';
import BlogItem from './BlogItem';

function Blogs() {
    const dispatch = useDispatch();
    const Myblog = useSelector((state) => state.blog);
    const {loading, blogs } =Myblog ;
    useEffect(()=>{
        dispatch(getPosts())
    },[])
    return loading?<Spinner/>:<Fragment>
    <div>Blogs</div>
    <div class="col">
          {blogs.map((blog) => (
            <BlogItem key={blog._id} blog={blog} />
          ))}
        </div>
    </Fragment>
}

export default Blogs