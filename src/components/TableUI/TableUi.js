import React from 'react';
import './tableui.css';

const TableUi = () => {
    return (
        <div className='table-container'>
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">Code-No</th>
                    <th scope="col">VC/Angel Name</th>
                    <th scope="col">C-suite name</th>
                    <th scope="col">Email</th>
                    <th scope="col">WhatsApp/Phone</th>
                    <th scope="col">Investment Domain</th>
                    <th scope="col">Investment Stage</th>
                    <th scope="col">Total Investment</th>
                    <th scope="col">Exit Investment</th>
                    <th scope="col">Office HQ</th>
                    <th scope="col">Investment Country</th>
                    <th scope="col">Investment Range</th>
                    <th scope="col">Invested ventures</th>

                    
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">5563</th>
                    <td>500 Startup</td>
                    <td>Simit demny</td>
                    <td>hello@tradeventures.pro</td>
                    <td>+8801727-887729</td>
                    <td>Fintech, E-comarce, Automation, Healthtech, Edutech</td>
                    <td>Seed, Pre-revnue, Revnue, Series A, Series B, Series B</td>
                </tr>
            </tbody>
        </table>
        </div>
    );
};

export default TableUi;