import { useState } from 'react';
import Card from './Card';

function Cards() {
    const [items, setItems] = useState(() => {
        const initialItems = [
            { id: 1, img: 'https://res.cloudinary.com/dqgoqxupk/image/upload/v1729614497/ash_hrhqwi.png', stat: "" },
            { id: 1, img: 'https://res.cloudinary.com/dqgoqxupk/image/upload/v1729614497/ash_hrhqwi.png', stat: "" },
            { id: 2, img: 'https://res.cloudinary.com/dqgoqxupk/image/upload/v1729614497/squirtle_u4ricl.png', stat: "" },
            { id: 2, img: 'https://res.cloudinary.com/dqgoqxupk/image/upload/v1729614497/squirtle_u4ricl.png', stat: "" },
            { id: 3, img: 'https://res.cloudinary.com/dqgoqxupk/image/upload/v1729614496/charizard_e7guib.png', stat: "" },
            { id: 3, img: 'https://res.cloudinary.com/dqgoqxupk/image/upload/v1729614496/charizard_e7guib.png', stat: "" },
            { id: 4, img: 'https://res.cloudinary.com/dqgoqxupk/image/upload/v1729614496/pikachu_ey4ieu.png', stat: "" },
            { id: 4, img: 'https://res.cloudinary.com/dqgoqxupk/image/upload/v1729614496/pikachu_ey4ieu.png', stat: "" },
            { id: 5, img: 'https://res.cloudinary.com/dqgoqxupk/image/upload/v1729614496/blastoise_koq79r.png', stat: "" },
            { id: 5, img: 'https://res.cloudinary.com/dqgoqxupk/image/upload/v1729614496/blastoise_koq79r.png', stat: "" },
            { id: 6, img: 'https://res.cloudinary.com/dqgoqxupk/image/upload/v1729614496/charmander_qnxvhc.png', stat: "" },
            { id: 6, img: 'https://res.cloudinary.com/dqgoqxupk/image/upload/v1729614496/charmander_qnxvhc.png', stat: "" },
            { id: 7, img: 'https://res.cloudinary.com/dqgoqxupk/image/upload/v1729614496/arceus_ucfgxl.png', stat: "" },
            { id: 7, img: 'https://res.cloudinary.com/dqgoqxupk/image/upload/v1729614496/arceus_ucfgxl.png', stat: "" },
            { id: 8, img: 'https://res.cloudinary.com/dqgoqxupk/image/upload/v1729614496/lapras_gh3i0p.png', stat: "" },
            { id: 8, img: 'https://res.cloudinary.com/dqgoqxupk/image/upload/v1729614496/lapras_gh3i0p.png', stat: "" }
        ];
        return initialItems.sort(() => Math.random() - 0.5);
    });

    const [prev, setPrev] = useState(-1);

    function check(current) {
        const updatedItems = [...items];
        if (updatedItems[current].id === updatedItems[prev].id) {
            updatedItems[current].stat = "correct";
            updatedItems[prev].stat = "correct";
            setItems(updatedItems);
            setPrev(-1);
        } else {
            updatedItems[current].stat = "wrong";
            updatedItems[prev].stat = "wrong";
            setItems(updatedItems);
            setTimeout(() => {
                updatedItems[current].stat = "";
                updatedItems[prev].stat = "";
                setItems(updatedItems);
                setPrev(-1);
            }, 500);
        }
    };

    function handleClick(id) {
        if (items[id].stat === "") { // Avoid clicking on already matched cards
            if (prev === -1) {
                const updatedItems = [...items];
                updatedItems[id].stat = "active";
                setItems(updatedItems);
                setPrev(id);
            } else {
                check(id);
            }
        }
    };

    return (
        <div className='container'>
            {items.map((item, index) => (
                <Card key={item.id + index} item={item} id={index} handleClick={handleClick} />
            ))}
        </div>
    );
}

export default Cards;
