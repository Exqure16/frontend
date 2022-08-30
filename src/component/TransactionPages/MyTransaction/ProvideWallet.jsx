import React from 'react'
import styles from '../MyTransaction/ProvideWallet.module.css';

function ProvideWallet() {
  return (
    <div className={`${styles.container}`}>
        <h1 className={`${styles.head}`}><b>Provide wallet address</b></h1>
        <p className={`${styles.text}`}>Your payment is successful, provide your wallet address to be credited by Exqure.</p>
        <form className={`${styles.form}`}>
            <label>
                Wallet address <br/>
                <input className={`${styles.input}`} type="text" name="wallet" placeholder="Enter wallet address"/> 
            </label> <br/>
            <input className={`${styles.submit}`} type="submit" value="Continue" />
        </form>
    </div>
  )
}

export default ProvideWallet