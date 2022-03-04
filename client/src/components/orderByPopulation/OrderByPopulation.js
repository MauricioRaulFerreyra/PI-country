import React from 'react'
import style from './orderByPopulation.module.css'
import {orderByPopulation} from '../../actions/index'
import {useDispatch} from 'react-redux'

function OrderByPopulation({ setCurrentPage,setOrder}){

    const dispatch = useDispatch()

    const handleChange = (e) => {
        dispatch(orderByPopulation(e.target.value));
        setCurrentPage(1);
        setOrder(e.target.value);
    }

    return (
        <div className={style.container}>
        <label className={style.label}>filter by</label>
        <select className={style.containerSelect} onChange={handleChange}>
                <option className={style.containerSelectOp1} >Population</option>
                <option className={style.containerSelectOp} value="mayor">higher population</option>
                <option className={style.containerSelectOp} value="menor">less population</option>
            </select>
        </div>
    )
}

export default OrderByPopulation