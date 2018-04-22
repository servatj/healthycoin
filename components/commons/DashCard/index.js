import React from 'react'

import './style.scss';

const DashCard = ({icon, label, subLabel}) =>
  <div className="dashcard appear"> 
  <img  src={`/static/${icon}`} alt="" />
    <span className={"dashcard-label"}>{label}</span>
    <span className={"dashcard-subLabel"}>{subLabel}</span>
</div>

export default DashCard;
