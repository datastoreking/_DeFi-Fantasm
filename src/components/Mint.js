import React from 'react'
import {useState} from 'react'
import Switch from './Swtich'
import MintFTM from './MintFTM'
import MintFSM from './MintFSM'


export default function Mint() {
	const [value, setValue] = useState(false);
   
    return(
        <>
			<section id="mint">
				<div className="mint-header">
					<div className="mint-title">MINT</div>
					<div className='switch'>
					<Switch
						isOn={value}
						handleToggle={() => setValue(!value)}
					/>
						<span> With FTM only</span>
					</div>
				</div>
				<div>
					{value ? <MintFSM/> : <MintFTM />}
				</div>
			</section>	
        </>
    )
}