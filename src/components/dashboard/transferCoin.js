import React from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom';
import {removeCoin} from '../../actions/coinTransferActions'
import { useState } from 'react';


export const TransferCoin = () => {
    const dispatch = useDispatch();
    const transferCoin = useSelector((state) => state.transferCoin.transferCoin);
    
    const [transferForm, setTransferForm] = useState({transferCoin: transferCoin, address: '', coinChain: ''})
    const handleChange = (event) => {
        const { name, value } = event.target;
         setTransferForm({...transferForm, [name]: value})
    }
    
    const navigate = useNavigate();

    const handleSubmit = (event)=>{
        dispatch(removeCoin())
        navigate('/dashboard')
    }

  return (
    <div>
    <div>
        <form onSubmit={handleSubmit}>
        <div className="form-group mb-3">
            <label className="form-label" htmlFor="transferCoin">Coin</label>
            <input type="text" className="form-control" name="transferCoin" id="transferCoin" value={transferCoin} placeholder="Enter Coin" readOnly/>
          </div>
          <div className="form-group mb-3">
            <label className="form-label" htmlFor="address">Transfer Address</label>
            <input type="text" className="form-control" name="address" id="address" onChange={handleChange} placeholder="Enter Transfer Address" required/>
          </div>
          <div className="form-group mb-3">
            <label className="form-label" htmlFor="coinChain">Coin Chain</label>
            <select id='coinChain' name='coinChain' onChange={handleChange} className="form-group mb-3" required>
                <option>Bitcoin</option>
                <option>Ethirium</option>
                <option>Armenian Dram</option>
                <option>Other</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary">Transfer</button>
        </form>
    </div>
    </div>
  )
}



export default TransferCoin