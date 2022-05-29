import React from 'react';

import mechanic1 from '../../../images/mechanic/m-1.jpg'
import mechanic2 from '../../../images/mechanic/m-2.jpg'
import mechanic3 from '../../../images/mechanic/m-3.jpg'
import mechanic4 from '../../../images/mechanic/m-4.jpg'
import Expert from '../Expert/Expert';


const experts = [
    {
        img: mechanic1,
        name: 'Abdul Alim',
        expertize: '-Engine Expert-'
    },
    {
        img: mechanic2,
        name: 'Abdul Halim',
        expertize: '-Polish Expert-'
    },
    {
        img: mechanic3,
        name: 'Abdul Gafur',
        expertize: '-Coloring Expert-'
    },
    {
        img: mechanic4,
        name: 'Abdul Karim',
        expertize: '-Allrounder Expert-'
    }
]

const Experts = () => {
    return (
        <div className="container">
            <h2 className="text-primary mt-3">Our Experts</h2>
            <div className="row">
                {
                    experts.map(expert => <Expert
                    key={expert.name}
                    expert={expert}
                    ></Expert>)
                }
            </div>
        </div>
    );
};

export default Experts;