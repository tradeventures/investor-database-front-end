import React, { useState } from 'react';
import './header.css';
import { useForm } from 'react-hook-form';

const Header = () => {

    const [toggle, setToggle] = useState(false)
    
    const { register, handleSubmit } = useForm()
    const onSubmit = (data) => console.log(data)

    return (
        <>
        <div className='header-bg'>
            <div className='wraper'>
                <h1 className='roboto-medium'>Trade Ventuers Investor Database</h1>
                <button onClick={()=>setToggle(true)}  className="btn-add">Add Investor</button>
            </div>
        </div>

        {/* model  */}
        <div className='model-center'>
            <div className={toggle?'display':'no-display'}>
                <div>
                    <h3 style={{color:"#22cd5a"}}>Add An Investor Information</h3>
                </div>
                <hr />

                <form onSubmit={handleSubmit(onSubmit)}>
                <div className='model-content'>
                    <input {...register("vcAngelName")} placeholder='VC/Angel Name'/>

                    <input {...register("csuiteName")} placeholder='C-suite name'/>

                    <input {...register("email")} placeholder='Email'/>

                    <input {...register("whatsApp")} placeholder='WhatsApp/Phone'/>

                    <input {...register("investmentDomain")} placeholder='Investment Domain'/>

                    <input {...register("investmentStage")} placeholder='Investment Stage'/>

                    <input {...register("totalInvestment")} placeholder='Total Investment'/>
                    
                    <input {...register("exitInvestment")} placeholder='Exit Investment'/>

                    <input {...register("location")} placeholder='Office HQ'/>

                    <input {...register("investmentLocation")} placeholder='Investment Country'/>

                    <input {...register("investmentRange")} placeholder='Investment Range'/>

                    <input {...register("investedVentures")} placeholder='Invested ventures'/>
                </div>
                <hr />
                <div className='footer-button'>
                    <button onClick={()=>setToggle(false)} type="button">Close</button>
                    <div></div>
                    <button type="submit">Save</button>
                </div>
                </form>
            </div>
            </div>
        {/* model  */}
        </>
    );
};

export default Header;