import React, { useRef,useState, FormEvent } from "react";
import { useForm } from "react-hook-form";

const Form = () => {
//     const person = {name:'',age:0}
//   const nameRef = useRef<HTMLInputElement>(null);
//   const ageRef = useRef<HTMLInputElement>(null);
//   const handleSubmit = (event: FormEvent) => {
//     event.preventDefault();
//     if (nameRef.current !== null)
//       person.name = nameRef.current.value;
//     if(ageRef.current !== null)
//      person.age = parseInt(ageRef.current.value)
//     console.log(person);
//   };
//   return (
//     <form onSubmit={handleSubmit}>
//       <div className="mb-3">
//         <label htmlFor="name" className="form-label">
//           Name
//         </label>
//         <input ref={nameRef} id="name" type="text" className="form-control" />
//       </div>
//       <div className="mb-3">
//         <label htmlFor="age" className="form-label">
//           Age
//         </label>
//         <input ref={ageRef} id="age" type="number" className="form-control" />
//       </div>
//       <button type="submit" className="btn btn-primary">
//         Submit
//       </button>
//     </form>
//   );

// const [person,setPerson] = useState({
//     name:'',
//     age: ''
// })

// const handleSubmit = (event:FormEvent) =>{
//     event.preventDefault()
//     console.log(person)
// }

// return(
//     <>
//     <form onSubmit={handleSubmit}>
//        <div className="mb-3">
//          <label htmlFor="name" className="form-label">
//            Name
//          </label>
//          <input value={person.name} onChange={(event)=> setPerson({...person,name:event.target.value})} id="name" type="text" className="form-control" />
//        </div>
//        <div className="mb-3">
//          <label htmlFor="age" className="form-label">
//            Age
//          </label>
//          <input value={person.age} onChange={(event)=>setPerson({...person,age:parseInt(event.target.value)})}  id="age" type="number" className="form-control" />
//        </div>
//        <button type="submit" className="btn btn-primary">
//          Submit
//        </button>
//      </form>
//     </>
// )

const {register, handleSubmit,formState:{errors}} = useForm();
    
    return(
        <>
        <form onSubmit={handleSubmit(data => console.log(data))}>
           <div className="mb-3">
             <label htmlFor="name" className="form-label">
               Name
             </label>
             <input {...register('name',{required: true, minLength:3})} id="name" type="text" className="form-control" />
           </div>
           {errors.name?.type === 'required' && <p>The name field is empty</p>}
           {errors.name?.type === 'minLength' && <p>The name must be atlest 3 characters</p>}
           <div className="mb-3">
             <label htmlFor="age" className="form-label">
               Age
             </label>
             <input {...register('age')}  id="age" type="number" className="form-control" />
           </div>
           <button type="submit" className="btn btn-primary">
             Submit
           </button>
         </form>
        </>
    )
};
export default Form;
