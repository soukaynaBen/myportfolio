import React from 'react'
import {PhoneIcon,MapPinIcon,EnvelopeIcon} from '@heroicons/react/24/solid'
import { useForm, SubmitHandler } from "react-hook-form";
type Inputs = {
    name: string,
    email: string,
    subject: string,
    message: string,
  };

export default function ContactMe() {
    const { register, handleSubmit, reset, formState: { errors } } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = formData => {
        window.location.href=`mailto:soukabenlahbib@gmail.com&subject=${formData.subject}&body=Hi my name is ${formData.name}. ${formData.message} (${formData.email})`
        reset({
            name: "",
            subject: "",
            message: "",
            email: "",
          }, {
            keepErrors: true, 
            keepDirty: true,
          });
    };
  return (
    <div className=' flex relative flex-col text-center md:text-left  max-w-7xl p-10 justify-evenly mx-auto items-center'>
        <h3 className=' uppercase tracking-[20px] text-gray-500 text-2xl pt-10 sm-pt-16 md:pt-24 '>
            Contact
        </h3>
        <div className='flex flex-col space-y-10  pt-24'>
            <h4 className='text-4xl font-semibold text-center '>
                I have got just what you need .{" "}
                <span className='decoration-[#F7AB0A]/50 underline'>Lets Talk.</span>
            </h4>
            <div className='space-y-10'>
                <div className='flex items-center space-x-5 justify-center'>
                    <PhoneIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse'/>
                    <p className='text-lg md:text-2xl'>00212621872726</p>
                </div>
                <div className='flex items-center space-x-5 justify-center'>
                    <EnvelopeIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse'/>
                    <p className='text-lg md:text-2xl'>Soukabenlahbib@gmail.com</p>
                </div>
                <div className='flex items-center space-x-5 justify-center'>
                    <MapPinIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse'/>
                    <p className='text-lg md:text-2xl'>Morocco</p>
                </div>
            </div>
                <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 w-fit mx-auto'>
                    <div className=' space-y-2 sm:space-y-0 sm:space-x-2 flex flex-col sm:flex-row'>
                        <div>

                        <input {...register("name",{required:true})}  placeholder='Name'  className='contactInput'  type="text"/>
                        <br />
                         {errors.name && <span>This field is required</span>}
                        </div>
                        <div>

                        <input {...register("email",{required:true})}  placeholder='Email'  className='contactInput' type="email"/>
                        <br />
                         {errors.email && <span>This field is required</span>}
                        </div>

                    </div>
                        <input {...register("subject",{required:true})}  placeholder='Subject' className='contactInput' type="text"/>
                              {errors.subject && <span>This field is required</span>}

                        <textarea {...register("message",{required:true})}  placeholder='Message'  className='contactInput' />
                              {errors.message && <span>This field is required</span>}

                        <button className='bg-[#F7AB0A]/80 py-5 px-10 rounded-md text-black font-bold text-lg'>Submit</button>
                </form>
        </div>
    </div>
  )
}
