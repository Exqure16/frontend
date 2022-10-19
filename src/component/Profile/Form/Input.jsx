import React from 'react'
const Input =(props)=>{
    const{ 
        img1W,
        img1P,
        img1ML,
        img1MT,
        img1,
        img2W,
        img2P,
        img2ML,
        img2MT,
        img2,
        onClick2,
        onChange,
        onFocus, 
        inputW, 
        inputPL,
        inputValue,
        type,
        name, 
        sV,
        bL,
        sP,
        sML,
        sMT,
        inputMT,
        inputMode,
        inputDivW,
        checkDisable,
        placeholder, fD } = props;
    return(
        <div style={{ display:'flex', flexDirection: fD?fD:'row', marginTop: inputMT?inputMT:'', width:inputDivW?inputDivW:''}}>
            <img style={{
                width:img1W ? img1W :'',
                position:img1P ? img1P:'absolute',
                marginLeft:img1ML ? img1ML:'',
                marginTop: img1MT ? img1MT :''
                }}
                src={img1?img1:''}
            />
            <span style={{
                position:sP ? sP:'absolute',
                marginLeft:sML ? sML:'',
                marginTop: sMT ? sMT :''
                }}>
                {sV?sV:''}
            </span>
            <img style={{
                width:img2W ? img2W: '',
                position:img2P ? img2P:'absolute',
                marginLeft:img2ML? img2ML :'',
                marginTop: img2MT ?img2MT: ''
                }}
                src ={img2?img2:''}
                onClick ={onClick2? onClick2:null}
            />
            <input style={{
                width:inputW? inputW: '80%',
                paddingLeft:inputPL? inputPL :'',
                borderColor: bL?bL:'#8bb7cc',
                
                }}
                onFocus={onFocus? onFocus : null}
                onChange= {onChange? onChange : null}
                type = {type? type: ''}
                name = {name? name : ''}
                inputMode ={inputMode?inputMode:''}
                defaultValue = {inputValue ? inputValue :''}
                placeholder={placeholder? placeholder :''} 
                disabled = {checkDisable?checkDisable:''}
            ></input>
        </div>
        
    )
}
export default Input;