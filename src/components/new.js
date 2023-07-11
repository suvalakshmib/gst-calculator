import React, { useState, useEffect } from "react";
import '../components/newsli.css';
import { Slider } from 'antd'
import { color } from "@mui/system";




function Add() {

    const marks = {
        3: "0.25%",
        18: "3%",
        36: "5%",
        54: "12%",
        72: "18%",
        90: "28%"
    };

    const [orignalAmount, setorignalAmount] = useState(0);
    const [gstTotal, setGstTotal] = useState(0);
    const [gstTax, setGstTax] = useState(0);
    const [gstRate, setGstRate] = useState(0);
    const [gstType, setGstType] = useState(true);
    const [flg, setFlg] = useState(false);



    function calculationAmt() {
        if (gstRate !== 0 && orignalAmount !== 0) {

            setGstTotal(parseFloat(orignalAmount) + parseFloat(orignalAmount) * parseFloat(gstRate) / 100)
            setGstTax(parseFloat(orignalAmount) * parseFloat(gstRate) / 100)

        }
    }

    useEffect(() => {
        if (gstRate !== NaN, orignalAmount !== NaN) {
            calculationAmt()
        }
    }, [gstRate, orignalAmount])

    console.log(gstRate, orignalAmount, gstTotal)
    return (
        <div className="parent">
            <div className="inner-div flex">
                <div className="calculator-inputs">
                    <p>Initial amount</p>
                    <i class="fa-solid fa-indian-rupee-sign"></i>
                    <input className="num" value={orignalAmount} name="gst" id="gstval" placeholder="Enter Amount Here"
                        onChange={(e) => {
                            setorignalAmount(parseFloat(e.target.value));
                        }}
                        type="number"
                    />
                    <div>
                        <div className="sli">
                            <p>GST Percentage</p>
                            <Slider marks={marks} step={null} tooltipPosition={'top'} tipFormatter={null} dots={true} aria-value-now={null}  onChange={(key) => { setGstRate(Number(marks[key]?.replace("%", ""))) }} />
            
                        </div>

                        <div className="radio">
                            <div className="radio_in">
                                <input type="radio" id='exclusive' checked={true} value={color} name="gst_type" value="exclusive"
                                />
                                <label className="lab" ><p>Exclusive of GST</p></label>
                            </div>

                            <div className="radio_in">
                                <input type="radio" id='inclusive'  name="gst_type" value="inclusive"
                                   />
                                <label className="lab" > <p>Inclusive of GST</p></label>
                            </div>
                        </div>
                    </div>
                </div>



                <div className='side'>
                    <h4>Your GST Value</h4>
                    <div><h3 className="yellow"><i class="fa-solid fa-indian-rupee-sign rt"> </i></h3></div>
                    
                    <h3 className="yl">{(isNaN(gstTax) ? 0 : gstTax).toFixed(0)}</h3>
                    <div className=" side-inn ">

                        <div className="two-cnct lft">
                            <p>Total Amount</p>
                            <h3 className="am"><i class="fa-solid fa-indian-rupee-sign"></i>{(isNaN(gstTotal) ? 0 : gstTotal).toFixed(2)}</h3>
                        </div>

                        <div className="two-cnct rgt">
                            <p>CGST/SGST</p>
                            <h3 className="am"><i class="fa-solid fa-indian-rupee-sign"></i>{(isNaN(gstTax) ? 0 : gstTax / 2).toFixed(2)}</h3>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Add 