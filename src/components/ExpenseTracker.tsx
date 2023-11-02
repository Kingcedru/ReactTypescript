import React from 'react'
import { useForm } from 'react-hook-form'

function ExpenseTracker() {
    
const {register,handleSubmit,formState:{errors,isValid}} = useForm()

  return (
    <form className='form' onSubmit={handleSubmit(data=>console.log(data))}>
        <div className="mb-3">
            <label className='form-label'>Descriptinon</label>
            <input {...register('name',{required:true, minLength:3})} type='text'/>
        </div>
        {errors.name?.type === 'required' && <p className='text-danger'>Description is required</p>}
        {errors.name?.type === 'minLength'  && <p className='text-danger'>Description should be at least 3 characters</p>}
        <div className="mb-3">
            <label className='form-label'>Amount</label>
            <input {...register('age',{required:true,min:1})} className='' type='number'/>
        </div>
        {errors.age?.type === 'required' && <p className="text-danger">Amount is required</p>}
        {errors.age?.type === 'min' && <p className="text-danger">Amount must be greater than 0</p>}
        <div className="mb-3">
            <label className='form-label'>Category</label>
            <select {...register('category',{required:true})}>
                <option value="" ></option>
                <option value="Groceries" >Groceries</option>
                <option value="Utilities" >Utilities</option>
                <option value="Entertainment" >Entertainment</option>
            </select>
        </div>
        {errors.category?.type === 'required' && <p className="text-danger">Category required</p>}
        <button  className='btn btn-primary' type='submit'>Submit</button>
    </form>
  )
}

export default ExpenseTracker