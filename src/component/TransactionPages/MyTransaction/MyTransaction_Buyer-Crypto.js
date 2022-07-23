import {useState, useEffect} from 'react'
import React from 'react';
import './MyTransactionStyles.css';
import template from './transactionTemplate.json'
import {statusChecker, initializer} from './MyTransaction_Buyer'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'

library.add(faChevronRight, faChevronLeft)


export default function TransBuyerCrypto() {
    /*const [data, setData] = useState([]);

    const fetchData = async () => {
        const response = await fetch(template, {
            headers: {
               'Content-Type': 'application/json',
               'Accept': 'application/json' 
            }
        });
        const tempData = await response.json();
        console.log(tempData);
        setData(tempData);
    };*/
    const navigateRight = () => {
        const elem = document.querySelectorAll(".key-div")
        if (count < elem.length-1) {
            setCount(count+1)
            let i = count
            elem[i].classList.remove("show")
            elem[i].classList.add("hide")
            elem[i+1].classList.add("show")
        }
    }

    const navigateLeft = () => {
        const elem = document.querySelectorAll(".key-div")
        if (count > 0){
            setCount(count-1)
            let i = count
            elem[i].classList.remove("show")
            elem[i].classList.add("hide")
            elem[i-1].classList.add("show")
        }
    }

    useEffect(() => {
        //fetchData();
        initializer();
        statusChecker();
    }, []);

    const [count, setCount] = useState(0)
    return (
        <div className="trans-main">
            <h2>My Transactions</h2>
            <button id="navbutton" onClick={navigateLeft} className="chevron"><FontAwesomeIcon icon="fa-solid fa-chevron-left" /></button>
            <button onClick={navigateRight} className="chevron"><FontAwesomeIcon icon="fa-solid fa-chevron-right" /></button>
            <div className="slider">
                {template.map((item, i) => {
                    return (
                        <div className="key-div" key={i}>
                            <p className="marker">TRANSACTION TITLE: <span>{item.title}</span> </p>
                            <p>TRANSACTION ID: <span>{item.id}</span> </p>
                            <p>ROLE IN TRANSACTION: <span>{item.role}</span></p>
                            <p>STATUS: <span className="status">{item.status}</span> </p>

                            <h3>Transaction Progress</h3>
                            <p>Agreement of terms & conditions:<span className="status">{item.progress.agreement}</span></p>
                            <p>Payment of coin to Exqure's crypto wallet:<span className="status">{item.progress.payToExqure}</span></p>
                            <p>Shipment of item:<span className="status">{item.progress.shipment}</span></p>
                            <p>Inspection of item:<span className="status">{item.progress.inspection}</span></p>
                            <p>Disbursing of cash:<span>{item.progress.disbursement}</span></p>
                            <p>Delivery of coin to buyer:<span>{item.progress.delivery}</span></p>

                        </div>
                    )
                })}
            </div>
            
            <h3>Pending Actions</h3>
            <p>Accept Item</p>
            <div className="pending-buttons">
                <button className="paynow">Pay Now</button>
            </div>
        </div>
    )
}