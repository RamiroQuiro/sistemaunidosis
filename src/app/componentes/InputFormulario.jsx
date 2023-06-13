"use client"

export default function InputFormulario({
    onChange,type,name,value,children
}) {
  return (
    <div className={`flex flex-col text-sm items-start justify-between w-full relative py-2 `}>
       <input 
       onChange={onChange}
       type={type} name={name} id={name}   value={value} required={true}   className="peer w-full py-1 pl-4 focus:bg-transparent  bg-transparent shadow-none border-0 border-b text-gray-700 border-gray-500 outline-none focus:outline-none relative z-10 valid:bg-transparent bg-" />
       <label htmlFor="email" className=" peer-focus:bg-primary-100 peer-focus:text-gray-700 text-sm peer-focus:p-1 peer-focus:rounded-sm peer-focus:-translate-y-4 peer-valid:bg-primary-100 peer-valid:text-gray-700  peer-valid:p-1 peer-valid:rounded-sm peer-valid:text-xs peer-focus:text-xs bg-transparent volid:bg-transparent focus:bg-transparent  peer-valid:-translate-y-4 duration-500 text-gray-700 absolute left-0 bottom-3 pl-4">{children}</label>
     </div>
  )
}
