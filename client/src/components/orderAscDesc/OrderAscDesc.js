import React from 'react'
import style from './orderAscDesc.module.css'
import {useDispatch} from 'react-redux'
import {orderAscDesc} from '../../actions/index'

function OrderAscDesc ({ setCurrentPage, setOrder}) {

    const dispatch = useDispatch()

    function handleOrder (e){
        e.preventDefault()
        dispatch(orderAscDesc(e.target.value))
        setCurrentPage(1)
        setOrder(e.target.value)
    }

    return (
        <div className={style.container}>
            <label className={style.label}>filter by</label>
            <select className={style.containerSelect} onChange={handleOrder}>
                <option className={style.containerSelectOp1}>Alphabet</option>
                <option className={style.containerSelectOp} value="asc">A-Z</option>
                <option className={style.containerSelectOp} value="desc">Z-A</option>
            </select>
        </div>
    )
}

export default OrderAscDesc