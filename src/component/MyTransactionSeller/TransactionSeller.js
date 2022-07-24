import { StyledMytransactionPage } from "./styles/TransactionSeller.styled";
import {FaChevronRight, FaChevronLeft} from "react-icons/fa"
import { Container } from 'react-bootstrap';


const TransactionSeller = ()=>{
   return(
           <StyledMytransactionPage>
                    <Container>
                        <header>
                            <h1>My Transactions</h1>
                            <p className="flex">
                                <span className="circle"><FaChevronLeft /></span>
                                <span className="circle activeCircle"><FaChevronRight /></span>
                            </p>
                        </header>
                        <div className="super">
                            <section className="top">
                            <div className="grid">
                                <div className="left">
                                        <h5>TRANSACTION TITLE:</h5>
                                        <h5>TRANSACTION ID:</h5>
                                        <h5>ROLE IN TRANSACTION:</h5>
                                        <h5>STATUS</h5>
                                </div>
                                <div className="flex1 right">
                                    <span className="mt"> The transaction title is shown here</span>
                                    <span className="mt">TRN-0001</span>
                                    <span className="mt">Seller</span>
                                    <span className="mt ongoing">Ongoing</span>
                                </div>
                            </div>
                            </section>

                            <section className="bottom">
                                <h2>Transaction progress</h2>
                                 <div className="grid">
                                    <div className="left">
                                            <h5>Agreement of terms and conditions</h5>
                                            <h5>Payment to Exqure by buyer</h5>
                                            <h5>Shipment of item</h5>
                                            <h5>Inspection of item</h5>
                                            <h5>Disbursting of cash</h5>
                                        </div>
                                        <div className="flex1 right">
                                            <span className="mt processing">Processing</span>
                                            <span className="mt">---</span>
                                            <span className="mt">---</span>
                                            <span className="mt">---</span>
                                            <span className="mt">---</span>
                                        </div>
                                 </div>
                            </section>

                            <section className="bottom">
                                <h2>Pending Actions</h2>
                                <p>Name</p>
                            </section>
                        </div>
                    </Container>
           </StyledMytransactionPage>
   )
}

export default TransactionSeller;