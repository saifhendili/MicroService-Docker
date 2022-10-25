import axios from 'axios';
import React,{useEffect,useState} from 'react'
import Spinner from '../Layout/Spinner';
import BarChart from './BarChart';

function Admin() {
  const [clients, setclients] = useState("");
  const [fournisseurs, setfournisseurs] = useState("");
  const [imports, setimports] = useState("");
  const [exports, setexports] = useState("");
  const [prixImport, setprixImport] = useState("");
  const [prixExport, setprixExport] = useState("");
  const [loading, setloading] = useState(true);

  useEffect(()=>{
axios.get("/api/folder/stat/type")
    .then((res) => {
      setclients(res.data.clients);
      setfournisseurs(res.data.fournisseurs);
      setimports(res.data.Import);
      setexports(res.data.Export);
      setprixImport(res.data.prixImport);
      setprixExport(res.data.prixExport);
      setloading(false)
    })
    .catch((err) => console.log(err));

},[])
  return loading?<Spinner/>:(
    <div>
    <div class="container-fluid flex-grow-1 container-p-y">
        <h4 class="font-weight-bold py-3 mb-0">Dashboard</h4>
        <div class="text-muted small mt-0 mb-4 d-block breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="#"><i class="feather icon-home"></i></a></li>
                <li class="breadcrumb-item"><a href="#">Library</a></li>
                <li class="breadcrumb-item active">Data</li>
            </ol>
        </div>
        <div class="row">

<div class="col-lg-5">
<div class="row">
<div class="col-md-6">
<div class="card mb-4">
<div class="card-body">
    <div class="d-flex align-items-center justify-content-between">
        <div class="">
            <h2 class="mb-2"> {clients} </h2>
            <p class="text-muted mb-0"><span class="badge badge-primary">Total</span> Client</p>
        </div>
        <div class="lnr lnr-users display-4 text-primary"></div>
    </div>
</div>
</div>
</div>
<div class="col-md-6">
<div class="card mb-4">
<div class="card-body">
    <div class="d-flex align-items-center justify-content-between">
        <div class="">
        <h2 class="mb-2"> {fournisseurs} </h2>
        <p class="text-muted mb-0"><span class="badge badge-primary">Total</span> Fournisseur</p>
        </div>
        <div class="lnr lnr-users display-4 text-success"></div>
    </div>
</div>
</div>
</div>



</div>
</div>

<div class="col-lg-7">
                <div class="card mb-4">
                    <div class="card-header with-elements">
                        <h6 class="card-header-title mb-0">Statistics</h6>
                        <div class="card-header-elements ml-auto">
                         
                        </div>
                    </div>
                    <div class="card-body">
                        <div >
                        <BarChart imports={imports} exports={exports} /> 
                        </div>
                    </div>
                </div>
            </div>
            
</div>

        </div>
        </div>  )
}

export default Admin