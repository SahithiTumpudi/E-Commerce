import React from 'react';
import { useForm } from 'react-hook-form';
function Form() {
    let { register, handleSubmit, formState: { errors } } = useForm();
    let Userdata = (userobj) => {
        console.log(userobj)
    }
    return( 
    <div className='container  d-flex font-center'>
        <div className="display-3 text-info">Register to enter into world of shopping</div>
        <form onSubmit={handleSubmit(Userdata)}>
            <div className='m-3'>
                <label className="form-label" htmlFor='un'>Enter Username</label>
                <input type="text" id="un" className="form-control w-25" {...register("un", { required: true })} />
                {errors.un?.type === 'required' && <p className='text-danger'>Username required</p>}
            </div>
            <div className='m-3'>
                <label className="form-label" htmlFor='p'>Enter Password</label>
                <input type="text" id="p" className="form-control w-25" {...register("p", { required: true })} />
                {errors.un?.type === 'required' && <p className='text-danger'>Password required</p>}
            </div>
            <div className='m-3'>
                <label className="form-label" htmlFor='mail'>Enter Email</label>
                <input type="email" id="mail" className="form-control w-25" {...register("mail", { required: true })} />
                {errors.un?.type === 'required' && <p className='text-danger'>Email required</p>}
            </div>
            <div className='m-3'>
                <label className="form-label" htmlFor='mf'>Gender</label>
                <div>
                    <input type="radio" id="f" className="form-check-input" {...register("mf")} />
                    <label className="form-check-label" htmlFor='f'>Female</label>
                </div>
                <div>
                    <input type="radio" id="m" className="form-check-input" {...register("mf")} />
                    <label className="form-check-label" htmlFor='m'>Male</label>
                </div>
            </div>
            <div className='m-3'>
                <label className="form-label" htmlFor='un'>Enter PhoneNumber</label>
                <input type="number" id="un" className="form-control w-25" {...register("a", { required: true })} />
                {errors.un?.type === 'required' && <p className='text-danger'>Phone number</p>}
            </div>
            <div class="m-3">
                <label for="inputAddress" class="form-label">Billing Address</label>
                <input type="text" class="form-control" id="inputAddress" placeholder="Hno. street name.." />
            </div>
            <div class="col-md-6 m-3">
                <label for="inputCity" class="form-label">City</label>
                <input type="text" class="form-control" id="inputCity" />
            </div>
            <div class="col-md-4 m-3">
                <label for="inputState" class="form-label">State</label>
                <select id="inputState" class="form-select">
                    <option selected>Choose...</option>
                    <option>...</option>
                </select>
            </div>
            <div class="col-md-2 m-3">
                <label for="inputZip" class="form-label">Zip</label>
                <input type="text" class="form-control" id="inputZip" />
            </div>
            <div className='m-3'>
                <button type='submit' className='btn btn-info ms-5'>Submit</button>
            </div>
        </form>
    </div>
    );
}
export default Form;